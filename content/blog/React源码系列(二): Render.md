---
title: "React源码系列(二): Render"
summary: 前言在上一个文章章节中，我们完成了对于FiberRootNode的创建，通常的React项目中，创建完毕RootNode之后，就会开始执行对应的渲染操作，即调用render方法。本章节会进入到render方法中，追踪render的流程。Render我们给出基本的示例代码：import * as...
date: 2023-10-30
---
## 前言
在上一个文章章节中，我们完成了对于FiberRootNode的创建，通常的React项目中，创建完毕RootNode之后，就会开始执行对应的渲染操作，即调用render方法。本章节会进入到render方法中，追踪render的流程。



## Render
我们给出基本的示例代码：

```typescript
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM
.createRoot(document.getElementById('root'))
.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

render是FiberRootNode上的方法，接受子节点为传入参数。接着在render内部调用updateContainer方法。



updateContainer首先决定更新的时候使用哪一个lane，lane是React中一个更新时所使用的优先级概念。接着为子树创建context，根据lane生成update，然后执行enqueueUpdate方法。



enqueueUpdate方法会将更新加入到更新队列中，以便在合适的时机进行处理。之后会调用scheduleUpdateOnFiber，在Fiber上面安排更新，以便触发React的调度和渲染。scheduleUpdateOnFiber内部会先标记root的状态为pending update，即正在进行更新，然后执行ensureRootIsScheduled

