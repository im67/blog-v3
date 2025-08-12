---
title: Vue.js源码系列(一)：工程与createApp
summary: 前言关于Vue的源码阅读实际上在去年前年的时候就已经进行过一段时间了，但是没有彻底完成，而且很多笔记内容也已经七零八落。尽管我同意从源码的阅读中能够学习到很多东西，但是我对于将源码阅读视为必备能力这件事还是持原有看法：无必要。或者说我对于其的态度是，当你需要去理解源码时，自然会去理解源码。但出...
date: 2023-04-07
---
## 前言
关于Vue的源码阅读实际上在去年前年的时候就已经进行过一段时间了，但是没有彻底完成，而且很多笔记内容也已经七零八落。尽管我同意从源码的阅读中能够学习到很多东西，但是我对于将源码阅读视为必备能力这件事还是持原有看法：无必要。或者说我对于其的态度是，当你需要去理解源码时，自然会去理解源码。



但出于世俗的目的，亦或是将原先没有彻底完成的事情完成的想法，这里还是重新整理一下。这可能是需要多篇文章才能结束的内容。



## 准备工作
我们从github上获取到vue的项目目录，安装好依赖之后，不妨先理解一下目录结构。关于vue源码相关的文件都存放在packages目录下，不同的功能模块拆分成不同的目录存放。同级目录的scripts中存放开发，构建等各类脚本。package.json中scripts中定义了各种指令，首先能够关注到的就是dev命令，它运行了scripts目录下的dev.js文件。如果直接运行dev。回到dev脚本中可以看到，使用的是esbuild进行的构建，根据传入的命令参数进行不同的打包区分。到这里不妨尝试更改一下dev命令：

```javascript
@package.json
"scripts": {
  "dev": "node scripts/dev.js -f esm",
}
```

这样就可以构建出一个ESmodule规范的文件。默认情况下，会生成一个iife形式的文件，就像直接通过script标签引入的那样。



接下来在项目中创建_examples目录，在阅读源码中各种情况的调试都可以放在该目录中进行。我们建立第一个compiler.html和compiler.js，进行测试代码的编写：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>编译HTML</title>
</head>
<body>
  <div id="root">{{ msg }}</div>
  <script type="module" src="./compiler.js"></script>
</body>
</html>
```



```javascript
import { createApp, ref } from '../../packages/vue/dist/vue.esm.js'

createApp({
  setup() {
    const msg = ref('Welcome to use examples')
    return {
      msg
    }
  }
}).mount('#root')

```

如图，因为我们打包的是ESmodule形式的文件，所以script标签引入时需要使用type="module"，打包时开启了sourcemap，可以直接通过浏览器进行debug，从而深入源码内部。



同样地，我们在package.json中可以看到serve命令，它基于目录开启一个本地服务，所以我们可以直接运行npm run serve，然后在浏览器中打开对应服务，直接进行_examples/compiler.html进行查看。



## 从createApp开始
vue3使用的第一步就是createApp，她是在runtime-dom目录下的一个方法：

```typescript
@file src/packages/runtime-dom/src/index.ts

export const createApp = ((...args) => {
  console.log(
    `这里是createApp的第一步, 我们传入的参数是:`, 
    args,
    `接着进行渲染器的初始化, 然后利用渲染器的createApp方法将入参传入, 生成我们的app对象。` 
  )
  const rd = ensureRenderer();
  const app = rd.createApp(...args)

  if (__DEV__) {
    injectNativeTagCheck(app)
    injectCompilerOptionsCheck(app)
  }
  console.log("得到app之后, 我们从app中解析出mount方法, 然后将app的mount方法替换掉。实际上并不是替换, 而是在执行本身的mount之前, 进行一些处理, 因为根节点的mount需要找到挂载节点, 然后生成虚拟dom节点")
  const { mount } = app
  app.mount = (containerOrSelector: Element | ShadowRoot | string): any => {
    console.log("=============App挂载开始=============")
    const container = normalizeContainer(containerOrSelector)
    if (!container) return

    const component = app._component
    if (!isFunction(component) && !component.render && !component.template) {
      // __UNSAFE__
      // Reason: potential execution of JS expressions in in-DOM template.
      // The user must make sure the in-DOM template is trusted. If it's
      // rendered by the server, the template should not contain any user data.
      component.template = container.innerHTML
      // 2.x compat check
      if (__COMPAT__ && __DEV__) {
        for (let i = 0; i < container.attributes.length; i++) {
          const attr = container.attributes[i]
          if (attr.name !== 'v-cloak' && /^(v-|:|@)/.test(attr.name)) {
            compatUtils.warnDeprecation(
              DeprecationTypes.GLOBAL_MOUNT_CONTAINER,
              null
            )
            break
          }
        }
      }
    }

    // clear content before mounting
    container.innerHTML = ''
    console.log("调用生成app时解析出来的mount方法")
    const proxy = mount(container, false, container instanceof SVGElement)
    if (container instanceof Element) {
      container.removeAttribute('v-cloak')
      container.setAttribute('data-v-app', '')
    }
    return proxy
  }
  console.log(
    "至此, 我们得到了调用createApp后得到的app对象, 他现在是这个样子:", 
    { ...app },
    "在开发中, 通常在createApp后会调用use等方法进行实例配置, 我们暂时按下不谈, 结束后我们通常会调用mount方法, 即createApp().mount('#app'), 此时就会调用app中的mount方法, 开始示例挂载。"
  )

  console.log("=============App生成结束=============")
  return app
}) as CreateAppFunction<Element>
```

ensureRenderer返回一个renderer，如果renderer不存在则会调用createRenderer。获取到渲染器后，调用渲染器的createApp方法获得一个app实例。



获取到app实例之后，将其mount方法保存下来，然后重写mount方法。重写的mount方法保存获得根元素容器，获取到需要渲染的模板，置空元素的innerHTML，然后再调用mount方法。在vue的使用中，你可能看到过v-cloak属性，也是在这一步进行了删除，然后添加data-v-app属性，调用mount方法后，返回得到代理。最后返回app实例。



ensureRenderer最终指向的是位于packges/runtime-core/src/renderer.ts中的baseCreateRenderer方法，其中包含大量的函数声明，其中的render就是在其中声明的：

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

baseCreateRenderer函数返回的createApp方法是通过createAPI(render, hydrate)生成的：

```typescript
export function createAppAPI<HostElement>(
  render: RootRenderFunction<HostElement>,
  hydrate?: RootHydrateFunction
): CreateAppFunction<HostElement> {
  return function createApp(rootComponent, rootProps = null) {
    if (!isFunction(rootComponent)) {
      rootComponent = extend({}, rootComponent)
    }
 
    if (rootProps != null && !isObject(rootProps)) {
      __DEV__ && warn(`root props passed to app.mount() must be an object.`)
      rootProps = null
    }

    const context = createAppContext()
    const installedPlugins = new Set()
    let isMounted = false

    const app: App = (context.app = {
      _uid: uid++,
      _component: rootComponent as ConcreteComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,

      version,

      get config() {
        return context.config
      },

      set config(v) {
        if (__DEV__) {
          warn(
            `app.config cannot be replaced. Modify individual options instead.`
          )
        }
      },

      use(plugin: Plugin, ...options: any[]) {
      	//do something...
        return app
      },

      mixin(mixin: ComponentOptions) {
      	//do something...
        return app
      },

      component(name: string, component?: Component): any {
      	//do something...
        return app
      },

      directive(name: string, directive?: Directive) {
      	//do something...
        return app
      },

      mount(
        rootContainer: HostElement,
        isHydrate?: boolean,
        isSVG?: boolean
      ): any {
    	//do something...
      },

      unmount() {
      //do something...
      },

      provide(key, value) {
			//do something...
      },

      runWithContext(fn) {
			//do something...
      }
    })

    console.log(`3. 利用createAppAPI生成createApp方法, 然后通过该方法生成我们的app, 实际上
    就是主应用, 其内容如下:`,
    {...app},
    `我们可以看到, app对象上存在use, mixin, component等方法, 这里就是我们在使用Vue后得到的Vue实例。`)

    if (__COMPAT__) {
      installAppCompatProperties(app, context, render)
    }

    return app
  }
}
```

可以看到，首先掉红了createAppContext创建了appContext对象，赋值给了context，然后生成了app对象，其中包含各种属性和方法，然后将这个app返回，其中就包含了我们上文提到的mount方法。



## mount方法
mount方法实际上是最关键的方法，其中包含了虚拟vNode，render和patch的所有核心功能。mount的调用流程大致如下：

1. 调用createVNode创建虚拟节点。
2. 调用render进行判断，是进行卸载还是进行渲染。
3. 调用patch，进行dom的diff，渲染出页面。



## 结束
笔者的第一篇开头引导到此也结束了，接下来就是要进入到mount方法中窥探vue内部流程的全貌。在本章节中，笔者大致介绍了如何去开启一个源码阅读的过程，以及源码中具有的内容和创建vue时的前期流程。其表达大致如下：

![](/yuque/0/2023/png/23007887/1681098416354-99f677b5-54ba-456c-bf66-4fbac3888a16.png)

其他内容将在第二章节中详细说明。

