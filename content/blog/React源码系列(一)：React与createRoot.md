---
title: React源码系列(一)：React与createRoot
summary: 前言在之前的一段时间中，完成了关于Vuejs源码阅读系列的内容。与Vue对应的一个开发者体系更加庞大的框架——React也是前端学习中不可绕过的话题。在笔者当前的开发工作下，这二者的项目均有涉及开发和维护，所以也决定花一段时间去了解React的源码原理。从这篇文章开始，笔者将会花费6~7篇梳理...
date: 2023-08-24
---
## 前言
在之前的一段时间中，完成了关于Vuejs源码阅读系列的内容。与Vue对应的一个开发者体系更加庞大的框架——React也是前端学习中不可绕过的话题。在笔者当前的开发工作下，这二者的项目均有涉及开发和维护，所以也决定花一段时间去了解React的源码原理。从这篇文章开始，笔者将会花费6~7篇梳理React的相关源码流程，类似之前的系列，部分细节内容不做过多讨论，后续再进行补充。



## 开始
首先需要搭建一个可以调用到React源码内容的服务，以便我们设计各种各样的测试代码进行运行，通过debug的方式梳理逻辑。参考网络上的一些资料之后，选用以下方式。



首先选定工具，笔者决定采用Vite + React来进行搭建，因为本身React模块在packages的文件下，使用非打包的模块可以更清晰的了解代码结构。

然后我们引入react。因为可能需要在代码中进行调试，因此在src目录下建立react目录，引入react的源码文件，然后进行一些改造，这其中包括react引入目录的映射，部分import模块的修改等等，具体内容可以参考[这里](https://github.com/astak16/react-source/issues/6)。



完成上述步骤之后，如果可以正常启动项目，则说明一切准备就绪。



## createRoot
一个项目的开始通常是从createRoot开始的。接受我们传入的dom节点后，通过一些参数的初始化，方法进入到createContainer中来，执行了createFiberRoot，基于以下FiberRootNode创建rootNode。

```typescript
function FiberRootNode(
                   
  containerInfo,
  // $FlowFixMe[missing-local-annot]
  tag,
  hydrate,
  identifierPrefix,
  onRecoverableError,
) {
  // 节点类型, 不同的类型具有不同的渲染行为
  this.tag = tag;
  // 节点的容器信息
  this.containerInfo = containerInfo;
  // pending, current, pingCache等在React内部追踪状态
  this.pendingChildren = null;
  this.current = null;
  this.pingCache = null;
  this.finishedWork = null;
  this.timeoutHandle = noTimeout;
  this.cancelPendingCommit = null;
  this.context = null;
  this.pendingContext = null;
  this.next = null;
  this.callbackNode = null;
  this.callbackPriority = NoLane;
  // expirationTimes, pendingLanes等用于控制渲染、调度的优先级
  this.expirationTimes = createLaneMap(NoTimestamp);

  this.pendingLanes = NoLanes;
  this.suspendedLanes = NoLanes;
  this.pingedLanes = NoLanes;
  this.expiredLanes = NoLanes;
  this.finishedLanes = NoLanes;
  this.errorRecoveryDisabledLanes = NoLanes;
  this.shellSuspendCounter = 0;

  this.entangledLanes = NoLanes;
  this.entanglements = createLaneMap(NoLanes);
	// hiddenUpdates用以追踪隐藏的更新
  this.hiddenUpdates = createLaneMap(null);

  this.identifierPrefix = identifierPrefix;
  // onRecoverableError用以处理可恢复的错误
  this.onRecoverableError = onRecoverableError;

  if (enableCache) {
    this.pooledCache = null;
    this.pooledCacheLanes = NoLanes;
  }

  if (enableSuspenseCallback) {
    this.hydrationCallbacks = null;
  }

  this.incompleteTransitions = new Map();
  if (enableTransitionTracing) {
    this.transitionCallbacks = null;
    const transitionLanesMap = (this.transitionLanes = []);
    for (let i = 0; i < TotalLanes; i++) {
      transitionLanesMap.push(null);
    }
  }

  if (enableProfilerTimer && enableProfilerCommitHooks) {
    this.effectDuration = 0;
    this.passiveEffectDuration = 0;
  }

  if (enableUpdaterTracking) {
    this.memoizedUpdaters = new Set();
    const pendingUpdatersLaneMap = (this.pendingUpdatersLaneMap = []);
    for (let i = 0; i < TotalLanes; i++) {
      pendingUpdatersLaneMap.push(new Set());
    }
  }

  if (__DEV__) {
    switch (tag) {
      case ConcurrentRoot:
        this._debugRootType = hydrate ? 'hydrateRoot()' : 'createRoot()';
        break;
      case LegacyRoot:
        this._debugRootType = hydrate ? 'hydrate()' : 'render()';
        break;
    }
  }
}
```

创建结束后，将实例和实际的dom节点进行绑定，实际的DOM元素节点上会绑定一个__reactContainer${randomString}的属性，其值就是该FiberRootNode。接下来绑定Dispatcher为客户端更新的patcher(ReactDOMClientDispatcher)，并且监听所有支持的事件。



完成上述操作之后，就得到了基本的FiberRootNode。Fiber是贯穿整个React的概念，这在接下来的render部分会做更详细的介绍。至此，我们所熟悉的ReactRoot就已经准备完成。



