---
title: '有点特殊的iframe标签'
summary: '尽管在三大框架统治下，iframe标签已经沦为了"不推荐使用"的标签，但是因为历史原因，依旧有庞大数量的项目使用了iframe进行构建，并且需要维护。我就遇到了这样一个项目，在处理iframe的时候，发现了一些iframe特别的地方。'
date: 2020-05-30
---
<h2>问题的起因</h2><p>在公司的构建项目中，因为采用的是比较老旧的结构，页面的构建很多采用iframe实现。iframe有一个很大的问题就是，其加载必须经历一个完整的页面加载周期：从资源加载，到页面渲染。所以当iframe用以实现菜单切换显示内容，而页面又比较复杂的时候，切换必定会带来一定时间的空白期，这非常影响用户体验。为了尽可能的消除iframe带来的体验影响，结合公司项目，我想，是不是能够在页面中构建一个iframe，然后事先将一些公用的CSS，JS先加载好，这样当需要加载某个页面的时候，直接通过某种方法将HTML写入到body部分，然后再插入页面独有的JS和CSS，这样就能节省出巨大的公用CSS和JS加载所需的时间？这就是问题的开始。</p><h2>没那么简单</h2><p>我的方案是：在iframe的window上挂载三个方法，分别是loadHTML，loadJS和loadCSS。iframe中是一个空body的，只有基本结构的HTML文档。这样我就可以在，需要加载文档的时候，通过这三个方法，读入所需的HTML，JS和CSS，然后将这个隐藏的iframe移动到指定的<strong>节点</strong>下，显示它。然后，我发现当iframe移动节点之后，我的iframe又变成了最初的样子！总体的思路如下</p><pre class="ql-syntax" spellcheck="false"><span class="hljs-tag">&lt;<span class="hljs-name">hmtl</span>&gt;&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span> = <span class="hljs-string">"div1"</span>&gt;&lt;<span class="hljs-name">iframe</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"target"</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"test.html"</span>&gt;&lt;/<span class="hljs-name">iframe</span>&gt;</span>
﻿   <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span> = <span class="hljs-string">"div2"</span>&gt;</span>
﻿   <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span> 
<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span>
﻿      <span class="hljs-comment">//div元素1var </span>
     $div1 = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"div1"</span>);    
      <span class="hljs-comment">//iframe元素var </span>
     ﻿$iframe = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"target"</span>);
      <span class="hljs-comment">//div元素2</span>
       ﻿<span class="hljs-keyword">var</span> $div2 = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">"div2"</span>);
      <span class="hljs-comment">//触发iframe的方法，生成文档(向iframe内部文档插入div标签)</span>
      $iframe.contentWindow.loadHTML(<span class="hljs-string">"&lt;div&gt;Hello World&lt;/div&gt;"</span>)﻿;
      <span class="hljs-comment">//把iframe从div1中移入到div2中</span>
      $div2﻿.appendChild($iframe);
  <span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>﻿
</pre><p>结果就是，执行最后一步appendChild之后，原本已经生成好文档的iframe又会被复原。尽管它正确的移动到了div2中。</p><h2>直奔结论</h2><p>iframe节点有别于其它常规的节点，当iframe被从文档中抽出（卸载）的时候，文档将会被销毁，再次插入到某个节点后，再执行文档的加载。对于HTML文档来讲，iframe标签是一个很重的标签，所以为了使浏览器具有更好的性能，就需要"牺牲"一部分标签的性能。</p>