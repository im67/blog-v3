---
title: 'Event and Event Loop'
summary: '最近有幸和公司面试官一起参加了几场公司的前端招聘面试，还是颇有些感触。一个公司的池塘里待得太久，难免忘了自己是多小一条鱼。有校招时候的大牛新人，也有社招的老练开发。当然庆幸的是我是坐在桌子这头的人。有些问题久了，也发现自己了解的似乎也有那么点缺陷，就比如事件循环，借此机会，也再来详详细细谈谈这个Event Loop。'
date: 2020-10-28
---
<h2>闲言碎语</h2><p>我写文章开头总是喜欢写点废话，那是因为开篇真的很难，就像介绍事件循环机制，到底要从哪里开始。我们不妨先提出这样一个问题：为什么要事件循环？它到底是要解决什么问题？</p><p>要弄明白这个问题，似乎要从javascript说起。javascript是单线程的，这条重要的定理是每个前端开发者再熟悉不过的。你多半会感谢JS的单线程——这意味着你不必过多去关注资源竞争和数据同步的问题。假设这样一种场景，如果两个线程同时对一个数据进行操作，例如一个线程表示添加一个DOM元素，一个线程要删除这个DOM元素，会发生什么？很幸运我们不用去面对这样的场景。但是单线程带来的局限性也很致命——一个线程执行代码，势必效率很低，这意味着阻塞很容易发生，就像只有一条马路，但是不同类型的车辆要通过，这些车辆包括用户交互，脚本，渲染，网络请求等。</p><p>但是很显然，javascript很少让你觉得发生了阻塞(当然，当你代码构建有问题的时候还是会发生)，那么javascript是如何使其成为非阻塞的？这就是本文要略微深入探讨的内容：Event Loop，事件循环。</p><blockquote>To coordinate events, user interaction, scripts, rendering, networking, and so forth, user agents must use&nbsp;<strong>event loops</strong>&nbsp;as described in this section. Each&nbsp;agent&nbsp;has an associated&nbsp;<strong>event loop</strong>, which is unique to that agent.（引用来自<a href="https://html.spec.whatwg.org/multipage/webappapis.html#event-loops" rel="noopener noreferrer" target="_blank">HTML标准文档</a>）</blockquote><h2>从执行栈开始</h2><p>在本节中，我们假设已经具有了基本的执行上下文的概念。通常JS会有三种类型的执行上下文：</p><ol><li>全局执行上下文。在浏览器环境中是window对象。</li><li>函数执行上下文。每当JS的函数被调用时，创建一个执行上下文。</li><li>不怎么常见的eval执行上下文。eval方法会创建特殊的执行上下文。eval平时用的也很少，这里不多关注。</li></ol><p>执行栈，执行两个字就代表上面的执行上下文，栈就是非常熟悉的一种数据结构了。当JS第一次遇到要执行的JS代码时，首先会创建一个全局执行上下文，之后每遇到一个函数调用，就压入一个函数执行上下文。JS引擎执行栈顶的函数，执行完毕，就将这个执行上下文弹出栈。有点抽象？不妨举个例子看看过程。</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testA</span>() </span>{
    testB();
}

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">TestB</span>()</span>{
    testC();
}

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testC</span>() </span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"I am testC"</span>);
}﻿﻿

testA();
</pre><p>我们以上述代码为例，给出下图执行栈示意图</p><p><img src="https://www.im6767.top/articlePlates/1603894867647.jpg"></p><p>关于执行栈有很多相关联的概念，例如作用域，执行上下文，变量等，他们不是本文关注的重点。为什么事件循环要从执行栈开始讲起？因为上述逻辑就是任务的执行过程。</p><h2>任务队列</h2><p>在JS的代码编程中，我们通常将任务分为同步任务和异步任务。我们再讲的通俗一些，同步任务就是需要立即执行的任务，异步任务就是"待会"执行的任务。思考一下，任何一个任务，都可以划归为同步任务或者异步任务，不存在既不属于同步又不属于异步的任务。同步任务通过执行栈就可以处理完毕，异步任务则就需要任务队列。当执行过程中遇到异步任务时，异步任务会被挂起，等到异步任务返回结果时，将结果加入异步队列。等到执行栈中的代码执行完毕后，再去将异步队列中的任务依次压入执行栈执行，执行完毕后再转向同步任务，然后再转向异步任务······。这个过程就被称作事件循环，整个过程大致如图：</p><p><img src="https://www.im6767.top/articlePlates/1603972592838.png"></p><p>尽管这张图几乎出现在每一篇关于事件循环的相关文章里，但是它确实简单明了的表达了JS代码执行的整个过程。关于图中列举的异步操作显得有点不全面，特别是Promise的出现，成为异步的学习不可绕过的一个部分。如果我们再去深入询问，那异步任务的执行顺序又是什么样的？上面的划分显然显然过于笼统了，我们需要再深入一点点。</p><h2>宏任务和微任务</h2><p>尽管我们说，异步任务是被加入队列执行的，但是异步任务之前也存在优先级关系。这里，我们将任务重新划分一下，分为宏任务（macro task）和微任务（micro task）。有些文章介绍会说“将异步任务划分为宏任务和微任务”，个人觉得这样的理解是不全面的，因为很显然script整个代码块也是一个宏任务，但是将其划分为异步任务多少有点勉强。</p><p>常见的宏任务包括：script（整个代码块），setTimeout，setInterval，setImmediate(nodejs定义的)，I/O，UI Render。</p><p>常见的微任务：process.nextTick(nodejs定义的)，Promise，Object.observe（proxy的前身，现在已经被废弃了），MutationObserver（DOM3标准）。</p><p>这个角度区分，我们可以将setTimout或者Promise之类的称之为"任务分发器"。上面提到的事件循环，每一次循环称之为一个tick。tick是什么时候开始的呢？在遇到一个script（代码块）就开始了。在第一次执行的时候，JS引擎将整个script作为一个宏任务开始执行，执行完毕后，检查是否存在微任务，如果存在，就从微任务队列中读取执行所有的微任务，再读取宏任务队列中的任务，然后再执行微任务队列中的任务，循环往复。简而言之，JS就是的执行顺序就是从宏任务到微任务的过程。我们用一个示意图大致表示上述过程。</p><p><img src="https://www.im6767.top/articlePlates/1603980894482.png"></p><p>整个流程是不是很简单呢？实际上事件循环的理解并不复杂，特别是当你已经对JS有了一定的理解，写过一定的JS代码后，这些概念性东西的理解不过是加强了对平日司空见惯的东西的系统理解。有些前端学习者，不大能够完全理解异步这个概念，导致代码构建中总是被代码执行顺序弄混，写出很多很容易规避的问题代码。接下来我们以几个实例具体看看和感受一下事件循环。</p><h2>面试问题</h2><p>你如果问我，事件循环最大的用处是什么，我第一个想到的或许就是可以用来答题。我向来比较反感手写代码和看代码说答案的问题，搭个环境跑一下的事儿何必非要纸笔伺候，特别是自己的字还不大好看。笔试面试，很多都会考代码执行的问题，看看你对异步的了解有多深入。例如写出下面这段代码执行后的打印结果。</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-built_in">console</span>.log(<span class="hljs-number">1</span>);

setTimeout(<span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span>{
&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-built_in">console</span>.log(<span class="hljs-number">2</span>)
},<span class="hljs-number">0</span>)

<span class="hljs-keyword">new</span>&nbsp;Promise(<span class="hljs-function"><span class="hljs-params">(resolve)</span>=&gt;</span>{
&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-built_in">console</span>.log(<span class="hljs-number">3</span>);
&nbsp;&nbsp;&nbsp;&nbsp;resolve();
}).<span class="hljs-keyword">then</span>(<span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span>{
&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-built_in">console</span>.log(<span class="hljs-number">4</span>)
});

setTimeout(<span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span>{
&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-built_in">console</span>.log(<span class="hljs-number">5</span>)
},<span class="hljs-number">10</span>);

<span class="hljs-built_in">console</span>.log(<span class="hljs-number">6</span>);
</pre><p>这样的代码说实话意义不大，除了真的测试一下你对于异步的理解，毫无用处。但是没有办法，这种情况下我们也只能冷静分析，沉着判断了。仔细想想上面讲过的事件循环，依次分析。刚开始时整个代码块是作为一个宏任务执行的，所以首先肯定打印1，然后遇到了一个setTimeout，放进宏任务队列里，接着又执行到了promise，注意，这里promise注册的任务才会被放入微任务队列中。所以构造函数传入的方法是立即执行的，而.then才会注册。所以打印3，接着又遇到一个setTimeout，则再次放入宏任务队列，最后遇到console语句，打印6。这个时候宏任务执行完了，按照“宏任务执行完检查微任务，如果有则执行微任务”的原则，我们开始检查微任务队列，promise注册过一个回调，则此时微任务队列中有.then注册的任务，所以执行，打印4，此时微任务队列执行完毕了，检查宏任务队列，两个setTimeout注册过宏任务，则按照队列先进先出的特点，依次执行，打印2，5。所以最终的打印顺序应该是1,3,6,4,2,5。如果你怀疑结果，可以将代码贴入控制台亲自试一试。</p><p>当然正如文章介绍中说的那样，最近的我是坐在面试桌这边的，我在想我能够从这个题目的回答中获得什么信息？我认为回答可能有三种结果：第一种回答正确的，他多少对于事件循环有一定的了解，那么我可能会进一步问一个问题：这段代码到整个结果输出完毕，是不是只执行了一次事件循环？来验证他是不是真的有对事件循环的基本理解。第二种，如果回答1,6,3,4,2,5的，那我多半猜它不大会用Promise，起码不够熟练，不大明白Promise从创建到回调执行，到各种状态的转化发生了什么，那么可能会为了确认我的看法，问一些Promise相关的问题。第三种回答其它答案的，我或许会问问为什么，来确认下他有没有意识到这个问题到底想要确认他哪一方面的能力。</p><p>当然作为笔试面试题目，总是有一些出人意料的东西，比如我们稍微将上面这个题做个变种：</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-built_in">console</span>.log(<span class="hljs-number">1</span>);

setTimeout(<span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span>{
&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-built_in">console</span>.log(<span class="hljs-number">2</span>)
},<span class="hljs-number">10</span>)

setTimeout(<span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span>{
&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-built_in">console</span>.log(<span class="hljs-number">5</span>)
},<span class="hljs-number">0</span>);

<span class="hljs-keyword">new</span>&nbsp;Promise(<span class="hljs-function"><span class="hljs-params">(resolve)</span>=&gt;</span>{
&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-built_in">console</span>.log(<span class="hljs-number">3</span>);
}).<span class="hljs-keyword">then</span>(<span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span>{
&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-built_in">console</span>.log(<span class="hljs-number">4</span>)
});

<span class="hljs-built_in">console</span>.log(<span class="hljs-number">6</span>);
</pre><p>怎么样，现在答案是多少？我们同样将这段代码贴到控制台跑一跑，得到的结果是：1,3,6,5,2。是不是和你想的一样呢？我们和上面的问题做一比较，二者之间的差异在哪里？除了代码顺序有调整以外，实际上就是我们删除去了promise中的resolve()。我讨厌笔面试做这种题的原因之一就是，考点仿佛从事件循环机制，变成了"眼神好使不好使"。每当见到越是简单地面试题，我总是本能怀疑自己，这个问题可能没这么简单。当然从另一个方面来讲，细心也是一项重要的工作能力，它意味着给自己和别人带来更少的麻烦。这个问题和上一个问题结合，多少能够看出一个人对事件循环和promise的了解程度，是一知半解还是有理有据。当然如果回答个八九不离十，那不妨也问问为什么，别因为一个没看清，给别人贴上“不懂”的标签。</p><h2>手写Promise</h2><p>现在前端行业对技术人员的素质要求也越来越高，对前端开发者的底层代码理解和实现能力也越来越关注，所以就要求在关注知识面的广度的时候，也要注重深度。对于事件循环的一个常考点来讲，就是和代码结合，看你能不能实现一些常见的异步场景，例如，如何自己动手实现一个Promise。手动封装实现Promise并不复杂，且有很多库可以参考，这里在本文不详细叙述，不过在封装的时候，不仅应该处理异步的逻辑实现，还应该考虑一下微任务和宏任务如何区分，实现出最接近Promise的Promise。</p><h2>告一段落</h2><p>上面就是关于事件循环的了解，准确的说是浏览器中的事件循环的了解。在提到宏、微任务过程中，我们还提到过process.nextTick等一些nodejs中的事件循环机制。既然成文讲述事件循环，那不妨顺带也来了解了解nodejs中的事件循环，避免以后还要单独写文章的麻烦。关于nodejs中的事件循环将是下面部分的主题内容，不过在此之前，为了确认浏览器中的事件循环你已经足够理解，不妨思考下下面这种情况下，通过事件循环分析，答案应该是多少？</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">const</span>&nbsp;now&nbsp;=&nbsp;(<span class="hljs-keyword">new</span>&nbsp;<span class="hljs-built_in">Date</span>()).valueOf();
&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-comment">//实现一个休眠x秒的方法</span>
<span class="hljs-function"><span class="hljs-keyword">function</span>&nbsp;<span class="hljs-title">sleep</span>(<span class="hljs-params">second</span>)&nbsp;</span>{
&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">while</span>&nbsp;((<span class="hljs-keyword">new</span>&nbsp;<span class="hljs-built_in">Date</span>()).valueOf()&nbsp;-&nbsp;now&nbsp;&lt;&nbsp;second&nbsp;*&nbsp;<span class="hljs-number">1000</span>)&nbsp;{
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">continue</span>;
&nbsp;&nbsp;&nbsp;&nbsp;};
&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-keyword">return</span>&nbsp;<span class="hljs-literal">true</span>;
}
<span class="hljs-built_in">console</span>.log(<span class="hljs-number">1</span>);

setTimeout(<span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span>{
&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-built_in">console</span>.log(<span class="hljs-number">2</span>)
},<span class="hljs-number">0</span>);

<span class="hljs-keyword">new</span>&nbsp;<span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve</span>)=&gt;</span>{
&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-built_in">console</span>.log(<span class="hljs-number">3</span>);
&nbsp;&nbsp;&nbsp;&nbsp;resolve();
     }).then(<span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span>{
&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-built_in">console</span>.log(<span class="hljs-number">4</span>)
&nbsp;&nbsp; });

sleep(<span class="hljs-number">10</span>);
<span class="hljs-comment">//页面上有一个按钮，在sleep执行期间点击按钮</span>
<span class="hljs-comment">//﻿按钮的事件回调中执行console.log("btn click")</span>

setTimeout(<span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span>{
&nbsp;&nbsp;&nbsp;&nbsp;<span class="hljs-built_in">console</span>.log(<span class="hljs-number">5</span>)
},<span class="hljs-number">10</span>);

<span class="hljs-built_in">console</span>.log(<span class="hljs-number">6</span>);
</pre><p>试问最后的打印结果是多少？不妨自己写个代码测试一下，来看看自己是不是真正的了解了上述内容。</p><h2>nodejs中的事件循环</h2><p>在开始之前，也先聊两句废话。我不大喜欢nodejs，或者说把nodejs和前端牢牢捆绑在一起这种做法。开发自由应当是多元化的。其实模块化开发学习初期，我就一直有一个疑问：套娃式的node_modules依赖关系，难道没有人觉得有任何问题吗？有数据统计过，Javascript项目平均有377个依赖关系，Java项目则有43个，python项目有16个。依赖越多意味着你必须相信的人就越多，而他们也必须保证自己的项目足够的strong，能够支撑起其他项目。这就像是你在修建一幢大楼的377层，而你却不知道或者鲜有了解377层之下的细节，能做的就是祷告和信任他们，这座大楼不会因为自己而崩塌。技术基本都有可替代性，所以这里不大会去详细的探讨nodejs的事件循环原理，如果你正在使用nodejs（尽管现在绝大多数前端都离不开这个工具），处于一个认知学习的阶段，那下面内容会带你初步窥探一下node的事件循环。请理解：笔者对于node的理解本身也极其有限，所描述的内容和叙述的也处于自我认知范围内。</p><h2>libuv</h2><p>提到nodejs的事件循环，几乎都会提到libuv，并且大家会说明，nodejs的事件循环是通过libuv库实现的，那么如何理解libuv这个库呢？</p><p>我们知道，nodejs是可以在不同平台和系统使用的，如果要实现跨平台，那么要解决的一个重大问题就是，如何处理不同平台不同系统之间的差异？libuv就是用来干这个的。它提供了跨平台的文件I/O和线程功能，作为一个抽象层，他对上层，也就是nodejs实现统一接口暴露，对下层，也就是操作系统实现差异处理。因此libuv为nodejs提供了运行所需的一切接口，其中就包括事件队列机制。libuv的诞生，就是为nodejs而设计的。</p><h2>事件队列</h2><p>首先需要明确：nodejs中的事件循环机制的表现和浏览器中的大致相同，不过因为nodejs所做的事情要比单纯的浏览器中多一些，所以会有一些增强。</p><p>在nodejs中，有多个事件队列存在，他们分别处理不同类型的事件。通常将nodejs中的事件分为以下4种：</p><ul><li><strong>计时器队列。</strong>使用setTimeout和setInterval分发的任务将会存放在此队列。</li><li><strong>I/O事件队列。</strong>完成的I/O事件。</li><li><strong>立即队列。</strong>使用setImmediate分发的任务。</li><li><strong>关闭操作队列</strong>。使用任何一个close事件处理器。</li></ul><p>除此之外，还有一些中间队列，不过这里不再列举。</p><h2>事件循环阶段</h2><p>先给出libuv事件循环的一个阶段模型图：</p><p><img src="https://www.im6767.top/articlePlates/1604209838822.png"></p><p>从上文图中，我们可以看出时间循环的顺序：代码进入，进入轮训阶段（poll），然后进入检查阶段（check），再进入关闭事件回调阶段（close callbacks），计时器检测阶段（timers），再进入I/O事件回调阶段（I/O callbacks），然后进入闲置阶段（idle），再进入轮训阶段（poll）······</p><p>我们依次简单分析各个阶段：</p><h4>poll阶段</h4><p>V8引擎将代码传入libuv的时候，就进入poll阶段。poll阶段首先查看poll queue中有无事件，如果有则依次执行，如果queue为空，则检查有无setImmediate添加的回调，有就进入check阶段执行这些回调。<strong>特别注意，这里也会去检查有没有已经到期的timer，如果有会把这些回调放进计时器队列，然后循环进入timers阶段执行这些回调。</strong>这两个检查谁先执行呢？官方的说法是没有规定，所以不保证这两个的执行先后顺序，取决于代码运行时的环境。也就是说，不能保证setTimeout和setImmediate到底哪一个在前哪一个在后（有一种特殊情况下是保证的）。如果两个队列都是空的，那么事件循环就会停留在poll阶段，直到有I/O事件返回，再立即进入I/O callbacks阶段执行回调。看完这个阶段，有没有觉得有什么问题？如果我在poll里执行的任务很多很多，那事件循环不就会永远停留在这一个阶段？显然libuv的开发中也考虑到了这个问题，终止poll循环有两个条件，满足其一即可：1.所有的回调执行完毕。2.达到了设置的最大执行数。</p><h4>check阶段</h4><p>check阶段很容易记住，它的设计就是为了执行setImmediate方法添加的回调。当poll空闲，且立即队列不为空，就会进入该阶段。</p><h4>close阶段</h4><p>当某些连接被关闭时，close事件会被发送到关闭操作队列，从而执行。</p><h4>timers阶段</h4><p>这个阶段执行所有setTimeout或者setInterval设置，已经到期的回调。</p><h4>I/O callback阶段</h4><p>执行绝大部分I/O事件的回调，包括一些操作系统执行的回调。</p><p>通过以上处理，使得nodejs成为一个非阻塞平台。至此，简单的nodejs的事件循环的大致逻辑介绍就完毕了。更细节的，牵扯到setTimeout，setImmediate和process.nextTick差异不再进行叙述。</p><h2>对比一下</h2><p>以上，我们简单介绍了浏览器的事件循环机制，更简单地介绍了nodejs的事件循环机制，那么二者之间的差异是什么呢？</p><p>从浏览器的事件循环总结可以看出，浏览器中执行顺序是每当宏任务执行完毕后，检查执行微任务，就像图中表示：</p><p><img src="https://www.im6767.top/articlePlates/1604211688436.png"></p><p>而nodejs中则是这样：</p><p><img src="https://www.im6767.top/articlePlates/1604211930197.png"></p><p>还是比较容易理解的。</p><h2>尾声</h2><p>陆陆续续，本文也写到了最后，公司今年的校招也进入了尾声。怎么说呢，我觉得面试其实是一件蛮残忍的事情，自己也是从踏出校门，投递简历，笔试面试这个阶段走过来的，现在却某种程度上成了做决定的人。在对面试者给出评价的时候，我总是小心再小心，谨慎再谨慎，尽量给出一个中肯合理的评价。想想他们人生阶段目前的一个重大走向，很大一部分掌握在我的手中，难免有些害怕。但愿我没有做出我意料之外的错误决定吧。</p><p>面试虽说是在面试别人，但是我觉得也是在面试自己。看到自己和别人的差距，也是在鞭策自己，往更高的平台进发。</p><p><br></p>