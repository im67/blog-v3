---
title: Vue.js源码系列(四)：响应式与Dom Diff
summary: 前言最近看了一些Flutter的介绍，产生了一些兴趣，抽空玩一下试试。我们知道，在vue中，当我们对响应式的变量值进行处理的时候，变化结果会反应在视图上。这其中就涉及到vue核心部分中的响应式实现和视图更新时的整个dom diff过程，本章节会梳理这个过程。测试代码照例，我们构建我们的测试代码...
date: 2023-04-12
---
## 前言
最近看了一些Flutter的介绍，产生了一些兴趣，抽空玩一下试试。



我们知道，在vue中，当我们对响应式的变量值进行处理的时候，变化结果会反应在视图上。这其中就涉及到vue核心部分中的响应式实现和视图更新时的整个dom diff过程，本章节会梳理这个过程。



## 测试代码
照例，我们构建我们的测试代码，我们构建一个按钮，在按钮点击时修改一个数组中的值，然后删去一个值，查看这个过程中的代码执行情况，测试代码如下

```typescript
//template
  <div id="root">
    <div v-for="item in list" :key="item">
      {{ item }}
    </div>
    <div>状态: {{ txt }}</div>
    <div>现在共有 {{count}} 项</div>
    <button @click="clickMe">click me to change</button>
  </div>

//js
createApp({
  setup() {
    const txt = ref('还没有click');
    const list = reactive([1, 2, 3, 4, 5, 6, 7]);
    const count = computed(() => list.length);
    const clickMe = () => {
      txt.value = "click过了"
      list[2] = 20;
      list.splice(4, 1);
    }

    return {
      txt,
      list,
      count,
      clickMe
    }
  }
}).mount('#root')
```



## 回到setupRenderEffect
在mount章节提到过，关于响应式部分的绑定是在setupRenderEffect方法中完成的，所以我们将目光锁定到这里。

```typescript
    // create reactive effect for rendering
    const effect = (instance.effect = new ReactiveEffect(
      componentUpdateFn,
      () => queueJob(update),
      instance.scope // track it in component's effect scope
    ))
```

在上述代码中，ReactiveEffect就是vue3中的响应式类，这里将响应式实例绑定在组件实例的effect上，传入的参数componentUpdateFn就是在mount章节中介绍的更新函数。ReactiveEffect的代码如下：

```typescript
export class ReactiveEffect<T = any> {
  active = true
  deps: Dep[] = []
  parent: ReactiveEffect | undefined = undefined

  /**
   * Can be attached after creation
   * @internal
   */
  computed?: ComputedRefImpl<T>
  /**
   * @internal
   */
  allowRecurse?: boolean
  /**
   * @internal
   */
  private deferStop?: boolean

  onStop?: () => void
  // dev only
  onTrack?: (event: DebuggerEvent) => void
  // dev only
  onTrigger?: (event: DebuggerEvent) => void

  constructor(
    public fn: () => T,
    public scheduler: EffectScheduler | null = null,
    scope?: EffectScope
  ) {
    recordEffectScope(this, scope)
  }

  run() {
    if (!this.active) {
      return this.fn()
    }
    let parent: ReactiveEffect | undefined = activeEffect
    let lastShouldTrack = shouldTrack
    while (parent) {
      if (parent === this) {
        return
      }
      parent = parent.parent
    }
    try {
      this.parent = activeEffect
      activeEffect = this
      shouldTrack = true

      trackOpBit = 1 << ++effectTrackDepth

      if (effectTrackDepth <= maxMarkerBits) {
        initDepMarkers(this)
      } else {
        cleanupEffect(this)
      }
      return this.fn()
    } finally {
      if (effectTrackDepth <= maxMarkerBits) {
        finalizeDepMarkers(this)
      }

      trackOpBit = 1 << --effectTrackDepth

      activeEffect = this.parent
      shouldTrack = lastShouldTrack
      this.parent = undefined

      if (this.deferStop) {
        this.stop()
      }
    }
  }

  stop() {
    // stopped while running itself - defer the cleanup
    if (activeEffect === this) {
      this.deferStop = true
    } else if (this.active) {
      cleanupEffect(this)
      if (this.onStop) {
        this.onStop()
      }
      this.active = false
    }
  }
}
```

constructor中记录了传入的更新方法fn和调度器，调用执行了recordEffectScope方法，该方法的本质是将这个 响应式对象推入到scope的effects之中。响应式对象包含一个run方法和一个stop方法。



得到响应式对象之后，setupRenderEffect函数中在组件的实例对象上绑定update方法

```typescript
const update: SchedulerJob = (instance.update = () => effect.run());
//do something...
update()
```

接下来立即执行了update，update实际上就是执行上面获得的响应式对象的run方法，而run方法的核心就是执行this.fn，也就是传入的componentUpdateFn方法，来进行组件的更新。在组件完成初始化之后会立即执行一次update，来调用各种钩子。此时页面已经按照预想部分完成了渲染。



## reactive，ref和computed
我们在测试代码中使用了composition API，其中包含三个常用的响应式创建方法，分别是reactive，ref和computed。



### ref
ref方法接受一个参数value，然后调用createRef，传入value参数。createRef首先判断是不是一个ref格式对象，不是则返回new RefImpl(rawValue, shallow)。

```typescript
class RefImpl<T> {
  private _value: T
  private _rawValue: T

  public dep?: Dep = undefined
  public readonly __v_isRef = true

  constructor(value: T, public readonly __v_isShallow: boolean) {
    this._rawValue = __v_isShallow ? value : toRaw(value)
    this._value = __v_isShallow ? value : toReactive(value)
  }

  get value() {
    trackRefValue(this)
    return this._value
  }

  set value(newVal) {
    const useDirectValue =
      this.__v_isShallow || isShallow(newVal) || isReadonly(newVal)
    newVal = useDirectValue ? newVal : toRaw(newVal)
    if (hasChanged(newVal, this._rawValue)) {
      this._rawValue = newVal
      this._value = useDirectValue ? newVal : toReactive(newVal)
      triggerRefValue(this, newVal)
    }
  }
}
```

1. 构造函数中需要保存几个值，第一个是rawValue，也就是原始值，经过toRaw方法获取，因为测试代码中是字符串，所以会直接返回value。
2. 第二个是value，调用toReactive(value)进行转化。toReactive内部判断value是不是一个对象，如果不是就直接返回value，如果是的话就调用reactive方法处理value，所以可以这么说，ref的最终产物实际上就是reactive。



### reactive
reactive内部调用createReactiveObject来处理传入的数据。

```typescript
function createReactiveObject(
  target: Target,
  isReadonly: boolean,
  baseHandlers: ProxyHandler<any>,
  collectionHandlers: ProxyHandler<any>,
  proxyMap: WeakMap<Target, any>
) {
  if (!isObject(target)) {
    if (__DEV__) {
      console.warn(`value cannot be made reactive: ${String(target)}`)
    }
    return target
  }
  // target is already a Proxy, return it.
  // exception: calling readonly() on a reactive object
  if (
    target[ReactiveFlags.RAW] &&
    !(isReadonly && target[ReactiveFlags.IS_REACTIVE])
  ) {
    return target
  }
  // target already has corresponding Proxy
  const existingProxy = proxyMap.get(target)
  if (existingProxy) {
    return existingProxy
  }
  // only specific value types can be observed.
  const targetType = getTargetType(target)
  if (targetType === TargetType.INVALID) {
    return target
  }
  const proxy = new Proxy(
    target,
    targetType === TargetType.COLLECTION ? collectionHandlers : baseHandlers
  )
  proxyMap.set(target, proxy)
  return proxy
}
```

1. 传入数据首先判断是不是一个对象，或者说复杂类型数据。如果是简单类型，则警告不能作为reactive的有效参数对象。
2. 接着判断是不是已经是一个proxy对象，如果是的话，则直接返回这个proxy对象。
3. 判断target的数据类型，这里分为3类，TargetType.COMMON(值为1)表示是一个数组或者普通对象，TargetType.COLLECTION(值为2)则代表以下四种类型：Map，Set，WeakMap，WeakSet之一。最后一种是无效类型(值为0)。如果为无效类型，则直接返回target，否则利用浏览器Proxy API创建一个proxy对象。代理的相关方法在文件baseHandlers.ts中。
4. 返回proxy对象。

### computed
computed方法传入的是一个函数getter函数（当然在vue3中还可以是一个定义了getter和setter的对象），最终交由ComputedRefImpl类进行处理。

```typescript
export class ComputedRefImpl<T> {
  public dep?: Dep = undefined

  private _value!: T
  public readonly effect: ReactiveEffect<T>

  public readonly __v_isRef = true
  public readonly [ReactiveFlags.IS_READONLY]: boolean = false

  public _dirty = true
  public _cacheable: boolean

  constructor(
    getter: ComputedGetter<T>,
    private readonly _setter: ComputedSetter<T>,
    isReadonly: boolean,
    isSSR: boolean
  ) {
    this.effect = new ReactiveEffect(getter, () => {
      if (!this._dirty) {
        this._dirty = true
        triggerRefValue(this)
      }
    })
    this.effect.computed = this
    this.effect.active = this._cacheable = !isSSR
    this[ReactiveFlags.IS_READONLY] = isReadonly
  }

  get value() {
    // the computed ref may get wrapped by other proxies e.g. readonly() #3376
    const self = toRaw(this)
    trackRefValue(self)
    if (self._dirty || !self._cacheable) {
      self._dirty = false
      self._value = self.effect.run()!
    }
    return self._value
  }

  set value(newValue: T) {
    this._setter(newValue)
  }
}
```

1. 在ComputedRefImpl中，调用了ReactiveEffect方法，绑定了effect，在self._dirty为true的情况下，将会执行triggerRefValue(this)。

## 点击按钮，改变数据
接着我们通过点击按钮，使得上面的三个响应式变量发生变化，然后观察执行流程。

### ref
当我们点击按钮，为ref创建出的对象重新赋值时，会执行set value逻辑。

```typescript
set value(newVal) {
    const useDirectValue =
      this.__v_isShallow || isShallow(newVal) || isReadonly(newVal)
    newVal = useDirectValue ? newVal : toRaw(newVal)
    if (hasChanged(newVal, this._rawValue)) {
      this._rawValue = newVal
      this._value = useDirectValue ? newVal : toReactive(newVal)
      triggerRefValue(this, newVal)
    }
  }
```

1. set value内部会判断新赋的值和原值相比是否发生了改变，如果改变了，会将新的值赋值给_rawValue属性，然后更新_value的值，接着调用triggerRefValue。
2. triggerRefValue中执行triggerEffects，利用到ref对象上的依赖。那么ref对象上的依赖是从哪里建立起来的呢？就是在get value的时候

```typescript
  get value() {
    trackRefValue(this)
    return this._value
  }

//function trackRefValue
export function trackRefValue(ref: RefBase<any>) {
  if (shouldTrack && activeEffect) {
    ref = toRaw(ref)
    if (__DEV__) {
      trackEffects(ref.dep || (ref.dep = createDep()), {
        target: ref,
        type: TrackOpTypes.GET,
        key: 'value'
      })
    } else {
      trackEffects(ref.dep || (ref.dep = createDep()))
    }
  }
}
```

trackRefValue调用trackEffects方法将activeEffect加入到ref对象的dep Set中，activeEffect是什么呢？如果我们回到ReactiveEffect的构造中来看，每次run方法被执行时，activeEffect都会被赋值为this，然后被加入到set之中。

3. triggerEffects调用依赖数组中的effect上的方法，如果effect上存在scheduler方法，则调用。实际上，我们的scheduler方法指向了实例化ReactiveEffect时传入的 () => queueJob(update)，也就是队列执行update方法。这和之前mount章节内容衔接了。
4. 既然如此我们不妨再啰嗦一句这个queueJob方法

```typescript
export function queueJob(job: SchedulerJob) {
  // the dedupe search uses the startIndex argument of Array.includes()
  // by default the search index includes the current job that is being run
  // so it cannot recursively trigger itself again.
  // if the job is a watch() callback, the search will start with a +1 index to
  // allow it recursively trigger itself - it is the user's responsibility to
  // ensure it doesn't end up in an infinite loop.
  if (
    !queue.length ||
    !queue.includes(
      job,
      isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex
    )
  ) {
    if (job.id == null) {
      queue.push(job)
    } else {
      queue.splice(findInsertionIndex(job.id), 0, job)
    }
    queueFlush()
  }
}
```

queueJob方法会将传入的执行逻辑放入一个队列，并且保证这个队列中的不同的job如果针对同一组件，也就是具有相同的id，就将该job位置后移，保证队列的顺序严格按照执行时的添加顺序。然后执行queueFlush，队列执行完毕之后所有的组件即会被update。

5. queueFlush是一个异步操作，利用的是一个Promise.resolve()执行的微任务，这一点和vue2不同，因为vue3的适用版本已经不再考虑一些低版本浏览器，所以不再为其提供降级策略，如果需要降级可以使用polyfill自行处理Promise。



### reactive
reactive的触发部分在创建proxy对象时传入的baseHandler中

```typescript
function createSetter(shallow = false) {
  return function set(
    target: object,
    key: string | symbol,
    value: unknown,
    receiver: object
  ): boolean {
    let oldValue = (target as any)[key]
    if (isReadonly(oldValue) && isRef(oldValue) && !isRef(value)) {
      return false
    }
    if (!shallow) {
      if (!isShallow(value) && !isReadonly(value)) {
        oldValue = toRaw(oldValue)
        value = toRaw(value)
      }
      if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value
        return true
      }
    } else {
      // in shallow mode, objects are set as-is regardless of reactive or not
    }

    const hadKey =
      isArray(target) && isIntegerKey(key)
        ? Number(key) < target.length
        : hasOwn(target, key)
    const result = Reflect.set(target, key, value, receiver)
    // don't trigger if target is something up in the prototype chain of original
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, TriggerOpTypes.ADD, key, value)
      } else if (hasChanged(value, oldValue)) {
        trigger(target, TriggerOpTypes.SET, key, value, oldValue)
      }
    }
    return result
  }
}
```

创建的set方法在发生类似赋值的操作时，会最终调用到trigger方法，trigger方法最终调用triggerEffects方法，和ref类似。



## 中途小结一下
经过上面的说明，已经大致了解了响应式的逻辑过程，简单解释了如何从数据改变到触发组件更新，我们可以大致总结成getter触发时收集依赖，setter触发时创建更新任务并推入更新队列，更新队列在下一个异步（微任务）中执行更新。



接下来，我们将会对执行更新这一步进行梳理，了解更新时如何在虚拟dom中体现的，又是如何反馈到最终的视图上来的。



## 又回到patch
当我们点击按钮时，会开始触发更新，操作会回到componentUpdateFn函数中来。

1. 因为此时组件已经挂载，所以进入updateComponent流程中来，更新流程从root节点开始。
2. 判断执行beforeUpdate钩子函数，然后根据现有的组件实例，调用renderComponentRoot方法，获得到更新后的tree，名为nextTree，从组件实例instance中提取现在的tree，名为prevTree，然后调用patch方法

```typescript
patch(
  prevTree,
  nextTree,
  // parent may have changed if it's in a teleport
  hostParentNode(prevTree.el!)!,
  // anchor may have changed if it's in a fragment
  getNextHostNode(prevTree),
  instance,
  parentSuspense,
  isSVG
)
```

3. 判断n2的节点类型，为Fragement，调用processFragement进行处理

```typescript
processFragment(
  n1,
  n2,
  container,
  anchor,
  parentComponent,
  parentSuspense,
  isSVG,
  slotScopeIds,
  optimized
)
```

4. 从n2中解析出patchFlag，dynamicChildren等属性，因为是update操作，所以n1不为空，判断n1, n2的dynamicChildren都不为空，执行patchBlockChildren进行处理

```typescript
patchBlockChildren(
  n1.dynamicChildren,
  dynamicChildren,
  container,
  parentComponent,
  parentSuspense,
  isSVG,
  slotScopeIds
)
```

5. patchBlockChildren对newChildren建立for循环，依次获取相同index位置上的oldVNode和newVNode，调用patch进行处理

```typescript
// The fast path for blocks.
const patchBlockChildren: PatchBlockChildrenFn = (
  oldChildren,
  newChildren,
  fallbackContainer,
  parentComponent,
  parentSuspense,
  isSVG,
  slotScopeIds
) => {
  for (let i = 0; i < newChildren.length; i++) {
    const oldVNode = oldChildren[i]
    const newVNode = newChildren[i]
    // Determine the container (parent element) for the patch.
    const container =
      // oldVNode may be an errored async setup() component inside Suspense
      // which will not have a mounted element
      oldVNode.el &&
      // - In the case of a Fragment, we need to provide the actual parent
      // of the Fragment itself so it can move its children.
      (oldVNode.type === Fragment ||
       // - In the case of different nodes, there is going to be a replacement
       // which also requires the correct parent container
       !isSameVNodeType(oldVNode, newVNode) ||
       // - In the case of a component, it could contain anything.
       oldVNode.shapeFlag & (ShapeFlags.COMPONENT | ShapeFlags.TELEPORT))
      ? hostParentNode(oldVNode.el)!
      : // In other cases, the parent container is not actually used so we
      // just pass the block element here to avoid a DOM parentNode call.
      fallbackContainer
    patch(
      oldVNode,
      newVNode,
      container,
      null,
      parentComponent,
      parentSuspense,
      isSVG,
      slotScopeIds,
      true
    )
  }
}
```

6. 开始对子节点进行patch，这里有一个需要注意的地方是

```typescript
if (n1 && !isSameVNodeType(n1, n2)) {
  anchor = getNextHostNode(n1)
  unmount(n1, parentComponent, parentSuspense, true)
  n1 = null
}
```

同级节点如果类型发生了变化，就不再向下比较，而是直接进入新建子树的操作。在这里因为而这时相同的，且第一个子节点是一个v-for属性的div节点，所以仍旧是一个Fragement，进入到processFragement流程中。

7. 根据条件判断，进入到patchChildren流程进行处理

```typescript
patchChildren(
  n1,
  n2,
  container,
  fragmentEndAnchor,
  parentComponent,
  parentSuspense,
  isSVG,
  slotScopeIds,
  optimized
)
```

8. 从传入的n1, n2中获取到各自的children为c1，c2，因为我们的v-for在元素上标注了key，因此进入patchKeyedChildren方法进行处理

```typescript
patchKeyedChildren(
  c1 as VNode[],
  c2 as VNodeArrayChildren,
  container,
  anchor,
  parentComponent,
  parentSuspense,
  isSVG,
  slotScopeIds,
  optimized
)
```

9. patchKeyedChildren中，实现了对有key值的子节点比较。首先用e1，e2变量获取到两个节点数组的最后一个元素的index，然后循环处理，首先处理的是类似于 (a, b) c和 (a, b) d e的情形。

```typescript
 while (i <= e1 && i <= e2) {
      const n1 = c1[i]
      const n2 = (c2[i] = optimized
        ? cloneIfMounted(c2[i] as VNode)
        : normalizeVNode(c2[i]))
      if (isSameVNodeType(n1, n2)) {
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        )
      } else {
        break
      }
      i++
    }
```

依次比较同index位置上的两个节点，如果是相同类型，则进入patch部分。patch中命中了ELEMENT的操作，进行processElement逻辑，进而进入到patchElement逻辑中，处理patchBlockChildren，因为此时没有Children节点，所以无操作进行，比较完毕。接着回到patchKeyed中，比较第二个节点，同样也是相同的，执行上述逻辑，然后比较第三个节点。

3. 当比较到第三个节点(index为2)时，isSameVNodeType方法比较原节点和现节点，因为二者key值不同，所以不是相同虚拟节点，执行break，跳出循环。
4. 接着进入下一个循环，下一个循环是从尾部开始同步的，以便处理a (b, c)和d, e, (b, c)这样的情况。

```typescript
    while (i <= e1 && i <= e2) {
      const n1 = c1[e1]
      const n2 = (c2[e2] = optimized
        ? cloneIfMounted(c2[e2] as VNode)
        : normalizeVNode(c2[e2]))
      if (isSameVNodeType(n1, n2)) {
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          isSVG,
          slotScopeIds,
          optimized
        )
      } else {
        break
      }
      e1--
      e2--
    }
```

我们看到经理过第一波循环之后，i的值变成了2，所以我们会从尾部向i逼近。这次各取尾部的子节点，二者是相同的，进入到patch流程，接下来的步骤类似于步骤9。判断完毕后两个子节点列表各向前再取一个节点比较，依旧相同，再次向前。接着比较到e1为4，e2为3的位置时，两个元素不同，跳出循环。此时我们可以看到指针停止的位置，从上面我们的测试例子中来看，如下，第一行是修改前的数据，第二行是我们点击按钮数据改变后产生的新的虚拟DOM的样子：

+ 1，2，(3)，4，[5]，6，7
+ 1，2，(20)，{4}，6，7

其中括号表示i指针指向的位置，[]表示e1指向的位置，{}表示e2指向的位置。

5. 接下来需要处理在中间部分的节点，此时会用i和e1，e2进行比较，在我们的测试用例中，i是比e1，e2小的，所以会进入到最后一个else逻辑中

```typescript
const s1 = i // prev starting index
const s2 = i // next starting index

// 5.1 build key:index map for newChildren
const keyToNewIndexMap: Map<string | number | symbol, number> = new Map()
for (i = s2; i <= e2; i++) {
  const nextChild = (c2[i] = optimized
                     ? cloneIfMounted(c2[i] as VNode)
                     : normalizeVNode(c2[i]))
  if (nextChild.key != null) {
    if (__DEV__ && keyToNewIndexMap.has(nextChild.key)) {
      warn(
        `Duplicate keys found during update:`,
        JSON.stringify(nextChild.key),
        `Make sure keys are unique.`
      )
    }
    keyToNewIndexMap.set(nextChild.key, i)
  }
}

// 5.2 loop through old children left to be patched and try to patch
// matching nodes & remove nodes that are no longer present
let j
let patched = 0
const toBePatched = e2 - s2 + 1
let moved = false
// used to track whether any node has moved
let maxNewIndexSoFar = 0
// works as Map<newIndex, oldIndex>
// Note that oldIndex is offset by +1
// and oldIndex = 0 is a special value indicating the new node has
// no corresponding old node.
// used for determining longest stable subsequence
const newIndexToOldIndexMap = new Array(toBePatched)
for (i = 0; i < toBePatched; i++) newIndexToOldIndexMap[i] = 0

for (i = s1; i <= e1; i++) {
  const prevChild = c1[i]
  if (patched >= toBePatched) {
    // all new children have been patched so this can only be a removal
    unmount(prevChild, parentComponent, parentSuspense, true)
    continue
  }
  let newIndex
  if (prevChild.key != null) {
    newIndex = keyToNewIndexMap.get(prevChild.key)
  } else {
    // key-less node, try to locate a key-less node of the same type
    for (j = s2; j <= e2; j++) {
      if (
        newIndexToOldIndexMap[j - s2] === 0 &&
        isSameVNodeType(prevChild, c2[j] as VNode)
      ) {
        newIndex = j
        break
      }
    }
  }
  if (newIndex === undefined) {
    unmount(prevChild, parentComponent, parentSuspense, true)
  } else {
    newIndexToOldIndexMap[newIndex - s2] = i + 1
    if (newIndex >= maxNewIndexSoFar) {
      maxNewIndexSoFar = newIndex
    } else {
      moved = true
    }
    patch(
      prevChild,
      c2[newIndex] as VNode,
      container,
      null,
      parentComponent,
      parentSuspense,
      isSVG,
      slotScopeIds,
      optimized
    )
    patched++
  }
}

// 5.3 move and mount
// generate longest stable subsequence only when nodes have moved
const increasingNewIndexSequence = moved
  ? getSequence(newIndexToOldIndexMap)
  : EMPTY_ARR
j = increasingNewIndexSequence.length - 1
// looping backwards so that we can use last patched node as anchor
for (i = toBePatched - 1; i >= 0; i--) {
  const nextIndex = s2 + i
  const nextChild = c2[nextIndex] as VNode
  const anchor =
    nextIndex + 1 < l2 ? (c2[nextIndex + 1] as VNode).el : parentAnchor
  if (newIndexToOldIndexMap[i] === 0) {
    // mount new
    patch(
      null,
      nextChild,
      container,
      anchor,
      parentComponent,
      parentSuspense,
      isSVG,
      slotScopeIds,
      optimized
    )
  } else if (moved) {
    // move if:
    // There is no stable subsequence (e.g. a reverse)
    // OR current node is not among the stable sequence
    if (j < 0 || i !== increasingNewIndexSequence[j]) {
      move(nextChild, container, anchor, MoveType.REORDER)
    } else {
      j--
    }
  }
}
```

内部会从当前i节点开始循环，结束标志是e2，循环处理新的节点列表中的节点，如果keyToNewIndexMap这个map中没有当前节点的key值，就将当前节点index放入这个map，这其实是为了保证同级比较时不会出现相同key值的节点，同样也能够获取到新的虚拟dom中与现有数据中有相同key节点的对应关系。接下来经过一些初始数据的记录后，如果修改前的节点key值不为空，就从keyToNewIndexMap中获取这个key对应的新节点值，此时存在两种情况，如果新节点中没有对应key值的节点，说明这个节点不再有用，直接卸载节点，在我们的示例中key值为3的节点就是该逻辑。



接下来继续遍历，此时到了key为4的节点，此时新的vnode数组中有相同key值的数据节点，则对这两个节点执行patch逻辑。



再接下来继续遍历，此时到了key值为5的节点，此时新的vnode节点中没有相同key值的节点，执行卸载，逻辑同key为3的节点。执行完毕后，遍历到达临界值，退出遍历。



接下来patch要处理节点移动的情况，但是这在我们的测试代码中没有涉及。节点移动部分的内容涉及到最长递增子序列的获取算法，这在后面将会对这种情况单独进行一次说明。



6. 处理完中间节点之后，会对新的vnode节点的中间部分进行处理，从后往前。我们的测试代码中有一个部分将key值改为了20，此时这个节点就会在这里进行处理，视为一个新的节点，执行patch，实际为mount新节点。至此，patchChildren操作结束。



根据测试代码来看，接下来处理的内容为两个div中的文字改变，相对比较简单，这里不再进行详细解释。



## 最长递增子序列
我们在上面的流程追踪中，提到了一种情况是一些节点的移动，虽然在vnode数组中发生了改变，但是实际上仍然能够复用，如何处理这一部分数据？事实上，我们上面流程中，对于两个vnode数组的"掐头去尾"的过程是容易理解的，而执行完头尾部分之后，对于中间内容的操作实际上就是利用最长递增子序列方法。



实际上为什么要使用最长递增子序列是容易理解的，寻找最佳的移动策略的目的就是尽可能的减少移动的节点。在倒序遍历的过程中，遇到最长递增子序列的节点就不动，遇到非最长递增子序列的节点就移动，可以保证移动次数最少。在源码中，使用的方式是**贪心算法**+**二分查找**。



为了梳理这部分流程，这里构建新的测试代码：

```typescript
createApp({
  setup() {
    const txt = ref('还没有click');
    const list = reactive([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const count = computed(() => list.length);
    const clickMe = () => {
      txt.value = "click过了"
      const arr = list.splice(4, 1);
      list.push(...arr);
    }

    return {
      txt,
      list,
      count,
      clickMe
    }
  }
}).mount('#root')
```

可以看到，我们将key为4的元素截取出来，然后放置在末尾，即将4移动到尾部。

1. 经过头尾处理之后，新node数组的头部指针在位置4，尾部指针在位置9，newIndexToOldIndexMap数量为6，moved标志位为true。
2. 接下来newIndexToOldIndexMap经过处理之后值变为[6, 7, 8, 9, 10, 5]，调用getSequence方法获取最长递增子序列。

```typescript
function getSequence(arr: number[]): number[] {
  const p = arr.slice()
 /*
  * result构建的最长递增子序列的数组，内部的元素是递增元素的对应的下标
  * 初始result中仅存放元素0
  */
  const result = [0]
  let i, j, u, v, c
  const len = arr.length
  //依次遍历数组
  for (i = 0; i < len; i++) {
    //arrI位当前遍历位置的元素
    const arrI = arr[i]
    //如果当前元素为0, 说明是一个需要新增的元素
    if (arrI !== 0) {
      //j为结果的末尾元素
      j = result[result.length - 1]
    	//将当前元素和子元素序列中的中最后一个元素对应的原数组中的值进行比较
      //如果当前元素更大, 就将当前元素的下标放入result
      //注意, 这里的p记录的是当前元素的前面元素的下标(先记录, 后push(i))；
      //通过这个执行可以保证result中保存的下标是递增的
      if (arr[j] < arrI) {
        p[i] = j
        result.push(i)
        continue
      }
      //如果当前元素不是更大的，就需要验证这个序列是不是正确的
      u = 0
      v = result.length - 1
      //不断执行二分查找, 最终找到某一项大于当前项
      while (u < v) {
        //c位[u, v]的中间位置
        c = (u + v) >> 1
        //如果中间元素小于arrI, 说明arrI更大
        //此时将区间换为[c + 1, v]
        if (arr[result[c]] < arrI) {
          u = c + 1
        //否则区间更换为[u, c];
        } else {
          v = c
        }
      }
      //二分查找结束,此时u === v
      //理论来讲要将result[u]替换为i
      //但是实际执行中可以看到，[6, 7, 8, 9, 10, 5]测试代码下
      //5最终小于6, 要用5替换6, 但是实际上5不能替换6
      //替换不满足原数组递增
      //所以需要回溯来进行纠错
      if (arrI < arr[result[u]]) {
        //元素不为第一个元素
        if (u > 0) {
          p[i] = result[u - 1]
        }
        result[u] = i
      }
    }
  }
  //回溯实际上就是用前驱索引纠正最长递增子序列中的偏差
  //利用到之前定义的p,p中的元素表示应该排在当前元素前面的元素的下标
  //然后通过逆序遍历数组p, 完成对result元素的纠正
  u = result.length
  v = result[u - 1]
  while (u-- > 0) {
    result[u] = v
    v = p[v]
  }
  return result
}
```

根据上面的算法获得最长递增子序列之后，接下来进入到move节点的处理。

3. 倒序遍历中间部分的vnode数组，首先获取到5，此时5不在最长递增子序列的数组值中，说明这个节点需要move，进入到move方法。
4. move方法判断需要移动的节点类型，因为我们需要移动的是div元素，所以执行hostInsert方法，即将这个元素插入到anchor元素之前(即执行insertBefore方法)，这样一个移动操作就完成了。



## 小结
至此为止，我们完成了对于vue中响应式以及dom diff的流程梳理。虚拟dom是很多现代前端开发框架的底层实现，它是构建从框架到最终视图更新的桥梁。这里我们的讨论限制在了简单元素的diff，例如组件的diff等并没有再进入更深层次的流程梳理，但实际上的本质是一样的，宏观来看，一个组件本质也是一个节点，只不过是比较复杂的node节点而已。



在经过响应式和dom diff的讨论之后，vue的核心基本被建立起来了，但是其中仍有很多细节。笔者这里不再过渡关注这些细节，在笔者看来，如非必要，勿增实体是生活哲学，当你需要关注细节的时候，自然会去关注细节。或许在将来某个时候，笔者需要深入细节时，还会补充改文章部分内容。  


