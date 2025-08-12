---
title: Vue.js源码系列(二)：mount与第一次渲染
summary: 前言最近因为一些事情，心情不怎么美丽，又开始思考一个问题：婚姻究竟为我们带来了什么？比起这些偏社会学的哲学思考，代码确实友好的多，因为它是有答案的。也希望有一天我也能得到上面问题的我自己的答案吧。工作上使用公司的脚手架，感觉不太好用，半成品，找个机会重新做一下吧。本文章节将从mount开始，理...
date: 2023-04-10
---
## 前言
最近因为一些事情，心情不怎么美丽，又开始思考一个问题：婚姻究竟为我们带来了什么？比起这些偏社会学的哲学思考，代码确实友好的多，因为它是有答案的。也希望有一天我也能得到上面问题的我自己的答案吧。



工作上使用公司的脚手架，感觉不太好用，半成品，找个机会重新做一下吧。



本文章节将从mount开始，理解在createApp得到app实例之后，如何进行挂载。



## mount开始的流程
```typescript
      mount(
        rootContainer: HostElement,
        isHydrate?: boolean,
        isSVG?: boolean
      ): any {
        if (!isMounted) {
          // #5571
          if (__DEV__ && (rootContainer as any).__vue_app__) {
            warn(
              `There is already an app instance mounted on the host container.\n` +
                ` If you want to mount another app on the same host container,` +
                ` you need to unmount the previous app by calling \`app.unmount()\` first.`
            )
          }
          
          const vnode = createVNode(
            rootComponent as ConcreteComponent,
            rootProps
          )
          console.log("1. 执行挂载时, 根据传入的根组件对象调用createVNode生成虚拟dom的虚拟node, createVNode")
          // store app context on the root VNode.
          // this will be set on the root instance on initial mount.
          vnode.appContext = context

          // HMR root reload
          if (__DEV__) {
            context.reload = () => {
              render(cloneVNode(vnode), rootContainer, isSVG)
            }
          }

          if (isHydrate && hydrate) {
            hydrate(vnode as VNode<Node, Element>, rootContainer as any)
          } else {
            render(vnode, rootContainer, isSVG)
          }
          isMounted = true
          app._container = rootContainer
          // for devtools and telemetry
          ;(rootContainer as any).__vue_app__ = app

          if (__DEV__ || __FEATURE_PROD_DEVTOOLS__) {
            app._instance = vnode.component
            devtoolsInitApp(app, version)
          }

          return getExposeProxy(vnode.component!) || vnode.component!.proxy
        } else if (__DEV__) {
          warn(
            `App has already been mounted.\n` +
              `If you want to remount the same app, move your app creation logic ` +
              `into a factory function and create fresh app instances for each ` +
              `mount - e.g. \`const createMyApp = () => createApp(App)\``
          )
        }
      },
```

此处就是mount的方法定义，首先调用createVNode获取vnode，rootContainer就是createApp时的参数，rootProps是根节点的props，一般使用的过程中，这个值为null。然后将context绑定在根节点上，然后就要开始调用渲染函数，完毕之后将isMounted变量置为true，保存rootContainer到实例的_container属性上，返回vnode.component的代理，结束。



从上面的代码中可以看出，mount内部最核心的方法就是render函数，也就是渲染函数。



## 核心：render
```typescript
  const render: RootRenderFunction = (vnode, container, isSVG) => {
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true)
      }
    } else {
      patch(container._vnode || null, vnode, container, null, null, null, isSVG)
    }
    flushPreFlushCbs()
    flushPostFlushCbs()
    container._vnode = vnode
  }
```

其实这里的这个render函数非常简单，可以将其理解为一个分发器，根据条件不同来决定进行unmount操作或者patch操作。



在执行完毕之后，调用flush操作，执行回调。如果是初次渲染，则肯定会进入到patch方法中，因此我们只需要关注patch部分的代码。

### 更进一步的核心：patch
```typescript
// @src/packages/runtime-core/src/renderer.ts
  
const patch: PatchFn = (
    n1,
    n2,
    container,
    anchor = null,
    parentComponent = null,
    parentSuspense = null,
    isSVG = false,
    slotScopeIds = null,
    optimized = __DEV__ && isHmrUpdating ? false : !!n2.dynamicChildren
  ) => {
    if (n1 === n2) {
      return
    }

    // patching & not same type, unmount old tree
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1)
      unmount(n1, parentComponent, parentSuspense, true)
      n1 = null
    }

    if (n2.patchFlag === PatchFlags.BAIL) {
      optimized = false
      n2.dynamicChildren = null
    }

    const { type, ref, shapeFlag } = n2
    switch (type) {
      case Text:
        processText(n1, n2, container, anchor)
        break
      case Comment:
        processCommentNode(n1, n2, container, anchor)
        break
      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, isSVG)
        } else if (__DEV__) {
          patchStaticNode(n1, n2, container, isSVG)
        }
        break
      case Fragment:
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
        break
      default:
        if (shapeFlag & ShapeFlags.ELEMENT) {
          processElement(
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
        } else if (shapeFlag & ShapeFlags.COMPONENT) {
          processComponent(
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
        } else if (shapeFlag & ShapeFlags.TELEPORT) {
          ;(type as typeof TeleportImpl).process(
            n1 as TeleportVNode,
            n2 as TeleportVNode,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized,
            internals
          )
        } else if (__FEATURE_SUSPENSE__ && shapeFlag & ShapeFlags.SUSPENSE) {
          ;(type as typeof SuspenseImpl).process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            isSVG,
            slotScopeIds,
            optimized,
            internals
          )
        } else if (__DEV__) {
          warn('Invalid VNode type:', type, `(${typeof type})`)
        }
    }

    // set ref
    if (ref != null && parentComponent) {
      setRef(ref, n1 && n1.ref, parentSuspense, n2 || n1, !n2)
    }
  }
```

从patch开始，我们就要和虚拟dom的diff内容挂钩了，不过在这之前，不妨先通过例子进入到patch内部了解一下。在之前_example.html中，添加新的测试用例文件，JS如下。

```javascript
//template
<div id="root">
  <div v-for="item in list">
    {{ item }}
  </div>
</div>

//list.js
createApp({
  setup() {
    const list = [1, 2, 3, 4, 5, 6, 7]
    return {
      list
    }
  }
}).mount('#root')
```

其在patch中的流程如下：

1. 首先n1和n2两个节点进行判断，因为我们是初次渲染，所以n1实际上为空，不会命中n1和n2同时存在的节点处理。
2. 如果n2.patchFlag等于PatchFlag.BAIL(值为-2)时，会推出压缩优化模式。
3. 判断n2的节点类型type字段，此时我们的根节点内容会命中到default中，然后节点的shapeFlags和ShapeFlags.COMPONENT相同，进入到processComponent方法中进行处理。
4. processComponent中进行节点判断，其中涉及到了`<keep-alive />`的处理，但是这不在我们的讨论范围之内。因为节点是第一次渲染，所以命中n1为null的情况，并且非KEPT_ALIVE，调用执行mountComponent方法。
5. mountComponent中首先要建立一个实例来管理组件，他最终由createComponentInstance方法创建，如下

```javascript
export function createComponentInstance(
  vnode: VNode,
  parent: ComponentInternalInstance | null,
  suspense: SuspenseBoundary | null
) {
  const type = vnode.type as ConcreteComponent
  // inherit parent app context - or - if root, adopt from root vnode
  const appContext =
    (parent ? parent.appContext : vnode.appContext) || emptyAppContext

  const instance: ComponentInternalInstance = {
    uid: uid++,
    vnode,
    type,
    parent,
    appContext,
    root: null!, // to be immediately set
    next: null,
    subTree: null!, // will be set synchronously right after creation
    effect: null!,
    update: null!, // will be set synchronously right after creation
    scope: new EffectScope(true /* detached */),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent ? parent.provides : Object.create(appContext.provides),
    accessCache: null!,
    renderCache: [],

    // local resolved assets
    components: null,
    directives: null,

    // resolved props and emits options
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),

    // emit
    emit: null!, // to be set immediately
    emitted: null,

    // props default value
    propsDefaults: EMPTY_OBJ,

    // inheritAttrs
    inheritAttrs: type.inheritAttrs,

    // state
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,

    // suspense related
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,

    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  }
  if (__DEV__) {
    instance.ctx = createDevRenderContext(instance)
  } else {
    instance.ctx = { _: instance }
  }
  instance.root = parent ? parent.root : instance
  instance.emit = emit.bind(null, instance)

  // apply custom element special handling
  if (vnode.ce) {
    vnode.ce(instance)
  }

  return instance
}
```

实例管理组件所需要的所有属性和方法，因为我们的根组件没有父组件，所以实例的root就是自己，然后将这个实例对象返回即可。接着经过一些dev环境下可能需要的性能测量API配置之外，就要进入到setupComponent方法中初始化props和slots，然后最终调用到setupRenderEffect方法。

6. 在上一个步骤中，提到的一个关键的初始化方法，即setupComponent，初始化props和slots，当我们以根节点传入时，这两个对象都是空，具体的组件setup部分在后续会再次进行介绍。
7. 另一个关键的方法就是setupRenderEffect方法，这是一个核心方法，是实现响应式的核心部分。方法内部定义了一个名为componentUpdateFn的函数，会作为参数传递给响应式的核心方法，代码如下：

```javascript
 // create reactive effect for rendering
    const effect = (instance.effect = new ReactiveEffect(
      componentUpdateFn,
      () => queueJob(update),
      instance.scope // track it in component's effect scope
    ))
```

关于响应式部分的内容，我们会有单独的章节进行处理，这里先暂时按下不表，先来看看componentUpdateFn这个方法。

8. componentUpdateFn中有两个分支，如果组件没有挂载，则走渲染逻辑，如果组件挂载了，则走更新逻辑。因为到目前为止我们是第一次渲染，所以逻辑部分是渲染。源码如下：

```typescript
const componentUpdateFn = () => {
  if (!instance.isMounted) {
    let vnodeHook: VNodeHook | null | undefined
    const { el, props } = initialVNode
    const { bm, m, parent } = instance
    const isAsyncWrapperVNode = isAsyncWrapper(initialVNode)

    toggleRecurse(instance, false)
    // beforeMount hook
    if (bm) {
      invokeArrayFns(bm)
    }
    // onVnodeBeforeMount
    if (
      !isAsyncWrapperVNode &&
      (vnodeHook = props && props.onVnodeBeforeMount)
    ) {
      invokeVNodeHook(vnodeHook, parent, initialVNode)
    }
    if (
      __COMPAT__ &&
      isCompatEnabled(DeprecationTypes.INSTANCE_EVENT_HOOKS, instance)
    ) {
      instance.emit('hook:beforeMount')
    }
    toggleRecurse(instance, true)

    if (el && hydrateNode) {
      // vnode has adopted host node - perform hydration instead of mount.
      const hydrateSubTree = () => {
        if (__DEV__) {
          startMeasure(instance, `render`)
        }
        instance.subTree = renderComponentRoot(instance)
        if (__DEV__) {
          endMeasure(instance, `render`)
        }
        if (__DEV__) {
          startMeasure(instance, `hydrate`)
        }
        hydrateNode!(
          el as Node,
          instance.subTree,
          instance,
          parentSuspense,
          null
        )
        if (__DEV__) {
          endMeasure(instance, `hydrate`)
        }
      }

      if (isAsyncWrapperVNode) {
        ;(initialVNode.type as ComponentOptions).__asyncLoader!().then(
          // note: we are moving the render call into an async callback,
          // which means it won't track dependencies - but it's ok because
          // a server-rendered async wrapper is already in resolved state
          // and it will never need to change.
          () => !instance.isUnmounted && hydrateSubTree()
        )
      } else {
        hydrateSubTree()
      }
    } else {
      if (__DEV__) {
        startMeasure(instance, `render`)
      }
      const subTree = (instance.subTree = renderComponentRoot(instance))
      if (__DEV__) {
        endMeasure(instance, `render`)
      }
      if (__DEV__) {
        startMeasure(instance, `patch`)
      }
      patch(
        null,
        subTree,
        container,
        anchor,
        instance,
        parentSuspense,
        isSVG
      )
      if (__DEV__) {
        endMeasure(instance, `patch`)
      }
      initialVNode.el = subTree.el
    }
    // mounted hook
    if (m) {
      queuePostRenderEffect(m, parentSuspense)
    }
    // onVnodeMounted
    if (
      !isAsyncWrapperVNode &&
      (vnodeHook = props && props.onVnodeMounted)
    ) {
      const scopedInitialVNode = initialVNode
    queuePostRenderEffect(
    () => invokeVNodeHook(vnodeHook!, parent, scopedInitialVNode),
    parentSuspense
    )
  }
    if (
    __COMPAT__ &&
    isCompatEnabled(DeprecationTypes.INSTANCE_EVENT_HOOKS, instance)
    ) {
    queuePostRenderEffect(
    () => instance.emit('hook:mounted'),
    parentSuspense
    )
  }

    // activated hook for keep-alive roots.
    // #1742 activated hook must be accessed after first render
    // since the hook may be injected by a child keep-alive
    if (
    initialVNode.shapeFlag & ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE ||
    (parent &&
    isAsyncWrapper(parent.vnode) &&
    parent.vnode.shapeFlag & ShapeFlags.COMPONENT_SHOULD_KEEP_ALIVE)
    ) {
    instance.a && queuePostRenderEffect(instance.a, parentSuspense)
    if (
    __COMPAT__ &&
    isCompatEnabled(DeprecationTypes.INSTANCE_EVENT_HOOKS, instance)
    ) {
    queuePostRenderEffect(
    () => instance.emit('hook:activated'),
    parentSuspense
    )
  }
  }
    instance.isMounted = true

    if (__DEV__ || __FEATURE_PROD_DEVTOOLS__) {
    devtoolsComponentAdded(instance)
  }

    // #2458: deference mount-only object parameters to prevent memleaks
    initialVNode = container = anchor = null as any
  } else {
    // updateComponent
    // This is triggered by mutation of component's own state (next: null)
    // OR parent calling processComponent (next: VNode)
    let { next, bu, u, parent, vnode } = instance
    let originNext = next
    let vnodeHook: VNodeHook | null | undefined
    if (__DEV__) {
    pushWarningContext(next || instance.vnode)
  }

    // Disallow component effect recursion during pre-lifecycle hooks.
    toggleRecurse(instance, false)
    if (next) {
    next.el = vnode.el
    updateComponentPreRender(instance, next, optimized)
  } else {
    next = vnode
  }

    // beforeUpdate hook
    if (bu) {
    invokeArrayFns(bu)
  }
    // onVnodeBeforeUpdate
    if ((vnodeHook = next.props && next.props.onVnodeBeforeUpdate)) {
    invokeVNodeHook(vnodeHook, parent, next, vnode)
  }
    if (
    __COMPAT__ &&
    isCompatEnabled(DeprecationTypes.INSTANCE_EVENT_HOOKS, instance)
    ) {
    instance.emit('hook:beforeUpdate')
  }
    toggleRecurse(instance, true)

    // render
    if (__DEV__) {
    startMeasure(instance, `render`)
  }
    const nextTree = renderComponentRoot(instance)
    if (__DEV__) {
    endMeasure(instance, `render`)
  }
    const prevTree = instance.subTree
    instance.subTree = nextTree

    if (__DEV__) {
    startMeasure(instance, `patch`)
  }
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
    if (__DEV__) {
    endMeasure(instance, `patch`)
  }
    next.el = nextTree.el
    if (originNext === null) {
    // self-triggered update. In case of HOC, update parent component
    // vnode el. HOC is indicated by parent instance's subTree pointing
    // to child component's vnode
    updateHOCHostEl(instance, nextTree.el)
  }
    // updated hook
    if (u) {
    queuePostRenderEffect(u, parentSuspense)
  }
    // onVnodeUpdated
    if ((vnodeHook = next.props && next.props.onVnodeUpdated)) {
    queuePostRenderEffect(
    () => invokeVNodeHook(vnodeHook!, parent, next!, vnode),
    parentSuspense
    )
  }
    if (
    __COMPAT__ &&
    isCompatEnabled(DeprecationTypes.INSTANCE_EVENT_HOOKS, instance)
    ) {
    queuePostRenderEffect(
    () => instance.emit('hook:updated'),
    parentSuspense
    )
  }

    if (__DEV__ || __FEATURE_PROD_DEVTOOLS__) {
    devtoolsComponentUpdated(instance)
  }

    if (__DEV__) {
    popWarningContext()
  }
  }
  }
```

+  如果当前实例beforeMount方法存在，先执行beforeMount。
+ 调用父类的beforeMount函数。
+ 因为el为null，因此调用renderComponentRoot渲染组件根元素。
+ 然后调用patch方法，传入的是上一步生成的渲染函数的返回值。
+ 调用当前实例的mount钩子函数(通过queuePostRenderEffect)。
+ 调用父组件的mount钩子函数(通过queuePostRenderEffect)。
+ 如果是keep-alive的缓存组件，则调用activated函数钩子。
+ 将isMounted标志位置为true。
9. 经过上面renderComponentRoot方法得到的root，查看内部属性是这样的![](/yuque/0/2023/png/23007887/1681123683832-18cef397-19fa-4ddf-a3e6-eafdda62c718.png)能够看到形成了children等属性。我们的模板字符串`<div v-for="xxx"></div>`是如何变成这样的结构化数据的，这要牵扯到vue内部的compile方法，我们会有一个专门的章节来说明这个过程，现在我们只需要知道已经得到了类似的数据，然后递交给patch方法处理。
10. 在这次的patch执行中能够看到，这里的类型变成了Fragement，因此执行processFragement函数。在processFragement中，因为n1为空，获取到fragement的开始和结束锚点之后，首先将这两个锚点插入container元素之中，然后执行mountChildren进行子元素挂载。
11. mountChildren方法中会对每个子元素调用patch。在我们的示例中，子元素就是div元素，再次进入patch方法，此时因为div是一个原生的ELEMENT，会进入processElement方法进行处理，在processElement方法中，因为是第一次渲染，n1为空，所以直接执行mountElement方法挂载元素。
12. mountElement方法中，通过调用hostCreateElement方法，生成实际的DOM元素，在我们的示例中元素的子元素就是一个文本，所以直接执行hostSetElementText方法设置为文本即可，如果元素的子元素是一个数组，那么就递归执行，调用mountChildren方法设置子元素，依次类推...，在组件生成完毕后，调用指令的created钩子函数，调用指令的beforeMount钩子函数，判断是否需要过渡，在以上都执行完毕之后，调用hostInsert方法，将生成的元素插入到container（在这里为父元素）中，调用指令的mounted钩子函数。
13. 处理完全部的children之后，patch结束，回到我们的componentUpdateFn方法，接着执行mounted钩子函数，如果有activated钩子，则执行activated钩子函数。
14. 最后，函数执行将会回到mount方法部分，第一次渲染结束。



## 小结
在这个章节中，我们介绍了挂载和第一次渲染的逻辑，作为前一个createApp部分的补充。在本文中有一些细节内容没有解释，例如vue在处理模板时，读入的是字符串，是如何通过处理转变为一个结构化对象的，另外组件实例上出现了render方法，render方法是如何生成的。向更深的下一步走，我们将会接触到Diff算法的相关内容，不过在这之前，我们将会用一个章节来解答上面的，模板字符串转化为结构化对象内容的部分。



从现在的阅读部分来看，我们所面对的数据结构就是一棵树，所以代码中涉及到了很多的递归操作，这在之后的代码中也非常常见。

