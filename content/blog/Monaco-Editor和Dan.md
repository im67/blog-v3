---
title: Monaco-Editor和Dan
summary: 有一天有个人找到小刘，郑重其事的说要给他一个任务。原来是他有一个可视化的低代码平台，用来管理一套业务流程。这套业务大致是这样的：会有一个入口获得源数据，接下来要对这个数据进行一系列操作，最终得到结果数据。现在的操作时，在页面上拖动设置节点，让数据依次流过节点A，节点B，节点C......最终得...
date: 2023-08-07
---
有一天有个人找到小刘，郑重其事的说要给他一个任务。原来是他有一个可视化的低代码平台，用来管理一套业务流程。这套业务大致是这样的：会有一个入口获得源数据，接下来要对这个数据进行一系列操作，最终得到结果数据。现在的操作时，在页面上拖动设置节点，让数据依次流过节点A，节点B，节点C......最终得到数据，生成Excel。这些节点都是用户可配的，顺序可调整的。但是现在遇到的问题是，大多数情况下默认的节点都够用，但是有的时候会有更加定制化的特殊需求节点，需要对表里的数据进行一些运算处理，这些运算一般都不太复杂，加减乘除基本能搞定，但是用表单去搞定配起来又很复杂迷糊，能不能有个解决办法？



小刘：写代码。



对方：不行啊，使用者学习写代码成本太高了，而且学会了你们不就没饭吃了？



小刘：说的有点子道理。



对方：能不能给我简单的一套语言方案，也能让他们像你们写代码那样去自定义处理数据，岂不美哉？最好可以全汉语搞定。



小刘：......



对方：不勉强你，你试试吧。



## 解决方案
思考过后小刘发现，这实际上就是一个编辑器，需要对新手友好，这个编辑器可以支持一套语言，语言用来进行逻辑描述，然后可以翻译执行。他开始头疼了，因为本质上他是一个写前端的，而涉及到语言就需要语言定义，词法分析，语法分析，编译执行等等等等，这个工作量可就比他想象的大的多了。既然是解决方案，那么能不能先拿出一个现成可行的方案去进行技术推演，然后再逐步完善？



### 编辑器入手
首先第一步是需要一个web可用的编辑器，可以直接在线撸代码。小刘知道那还是得用在线版的vsCode——Monaco-editor。这个项目是vsCode的一个分支演化，可以试做是网页版本的不那么轻量的vsCode，更关键的是背后是微软，倒也不怕某天突然消失。



npm安装好monaco插件后，建立所需要的文件monaco.ts，对monaco进行配置以及初始化操作。

```tsx
//monaco.ts

import * as monaco from "monaco-editor";

self.MonacoEnvironment = {
	getWorker: function (_, label = '') {
		const getWorkerModule = (moduleUrl: string, label: string) => {
			return new Worker(self.MonacoEnvironment!.getWorkerUrl!(moduleUrl, label), {
				name: label,
				type: 'module'
			});
		};

		switch (label) {
			case 'json':
				return getWorkerModule('/monaco-editor/esm/vs/language/json/json.worker?worker', label);
			case 'css':
			case 'scss':
			case 'less':
				return getWorkerModule('/monaco-editor/esm/vs/language/css/css.worker?worker', label);
			case 'html':
			case 'handlebars':
			case 'razor':
				return getWorkerModule('/monaco-editor/esm/vs/language/html/html.worker?worker', label);
			case 'typescript':
			case 'javascript':
				return getWorkerModule('/monaco-editor/esm/vs/language/typescript/ts.worker?worker', label);
			default:
				return getWorkerModule('/monaco-editor/esm/vs/editor/editor.worker?worker', label);
		}
	}
};

export default monaco;
```

小刘知道自己的项目是vite搭建的，所以配置如上，如果是webpack等其他工具，就需要根据官网内容进行对应的配置调整了。



接下来就可以在项目中引入并且初始化编辑器了。

```typescript
import monaco from './utils/monaco';

const monacoEditor = monaco.editor.create(document.querySelector('#monaco-editor')!, {
  value: "",
  language: 'your language'
});
```

至此，编辑器基本就被引入了。



### 提示
小刘想用这个编辑器写一段代码试试，但是发现他想要用上一节点获取到的数据进行计算时，还需要去查上一轮的表有哪些字段，才能做对应的运算，没有任何提示，这个过程看起来不太聪明。小刘思考了一下整个流程，实际上要处理的数据入口是上一个节点处理好的表数据，然后出口是经过本轮处理的表数据，这说明数据都是有某些"固定结构"的，这样就可以做代码提示了嘛，于是代码提示是必要的，所以需要增加这个功能。



此时小刘模拟了上一轮数据的结果，假设他为table1。经过上一轮的处理，table1具有的列字段也都知道了，首先第一步就是要获取到这些列字段。

```typescript
//获取到的列字段(方法有很多)
const t1Cols = ["name", "age", "score"];
```

然后开始添加所需要的代码提示。



这个时候我们不妨为我们之后需要进行处理数据的语言取一个名字，因为monaco的语言相关功能几乎总是围绕着某个命名语言完成的，既然是数据分析，就叫它Dan（Data Analysis）吧。

```tsx
// 注册代码补全功能
monaco.languages.registerCompletionItemProvider('dana', {
  // 在键入.时触发代码补全
  triggerCharacters: ['.'],
  // 定义代码补全功能的触发原则
  provideCompletionItems: (model, position) => {
    // 获取到当前行代码
    const codePre = model.getValueInRange({
      startLineNumber: position.lineNumber,
      startColumn: 1,
      endLineNumber: position.lineNumber,
      endColumn: position.column,
    });
    // 获取到当前行到光标输入为止的内容
    const word = model.getWordUntilPosition(position);
    // 匹配.号输入的规则
    const tag = codePre.match(/.*(\.*)$/)?.[1];
    /**
    * 这里省略了对于前导对象的判断
    * 如果是table1.xxx的形式，则return suggestions
    * 否则直接return即可
    */
    return {
      suggestions: t1Cols.map(r => (
        {
          label: `${r}`,
          kind: monaco.languages.CompletionItemKind.EnumMember,
          insertText: `${r}`,
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range: {
            startLineNumber: position.lineNumber,
            endLineNumber: position.lineNumber,
            startColumn: word.startColumn,
            endColumn: word.endColumn,
          }
        })
      )
    }
  }
});
```

完成配置后，我们尝试一下就可以看到效果了。

![](/yuque/0/2023/png/23007887/1691474064090-8e85a7ef-dfdd-49b1-8494-471944c74721.png)



### 异常
小刘意识到了另一个问题：如果输入了没有的属性，该怎么办，毕竟输入是死的，例如table1.noName，实际上并不存在noName这个数据列。对，得需要错误提示，就像是写代码的时候，那些令人讨厌的红色波浪线一样。

```typescript
let timer: number | null = null;
// 在编辑器中内容发生改变时触发
monacoEditor.onDidChangeModelContent((ev) => {
  // 为了提升性能, 这里使用防抖操作
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    const model = monacoEditor.getModel()!;
    // 定义我们要进行属性检测的正则表达式
    const varReg =/\b(.+)\.(.+?)\s+/g;
    // 定义扫描位置, 从代码的开头开始到结尾
    const startPosition = { lineNumber: 1, column: 1 };
    // 调用findMatches查找代码中所有符合属性检测的正则匹配
    const matches = model.findMatches(varReg, startPosition, true, false, null, true);
    // 可能包含多个, 用变量存储
    const textErrors = [];
    for (let match of matches) {
      const [_, key = '', value = ''] = match.matches ?? [];
      /**
      * 匹配到属性值如果是不存在的, 则生成错误提示结构对象
      * 注意, 这里和上文一样, 没有关于对象判断的部分
      */
      if (!t1Cols.includes(value)) {
        const start = match.range.getStartPosition();
        const end = match.range.getEndPosition();
        textErrors.push({
          startLineNumber: start.lineNumber,
          startColumn: start.column,
          endLineNumber: end.lineNumber,
          endColumn: end.column,
          message: `对象上不存在'${value}'属性`,
          severity: monaco.MarkerSeverity.Error
        })
      }
    }
    // 调用setModelMarkers设置错误提示标记
    monaco.editor.setModelMarkers(model, 'owner', textErrors);
  }, 500);
})
```

设置完成后，再次尝试一下。

![](/yuque/0/2023/png/23007887/1691478544046-915fa00e-06f5-43fa-a4ab-13731216c650.png)



### 语言Demo
调教好编辑器之后，接下来就要考虑怎么完成后续操作了。小刘觉得开始头疼，毕竟新设计一个语言可不是那么简单的事情，而且不一定值得。但是他想先试试方案可不可以行得通，于是乎他决定先设计一个中文的编程语言，然后把他"翻译"成现有的某种语言。换句话说，就是将现有的某种语言，给他汉化，来完成一段代码的编写。



小刘首先想到的是js，但是他又觉得不好，因为js有"额外的"符号, 例如{}，不够优雅，既然要避免这些符号，他立马想到了另一个语言：python，于是他决定从中文版"python"开始，来处理如下js代码的逻辑：

```typescript
if (table1.score < 5) {
  console.log('低分');
}
```

分析上面的代码，我们用到了如下几个内容：

1. 一个关键字if。
2. 一个运算符号 <。
3. 一个代码块逻辑，内部执行一个字符串打印功能。

如果用python代码，则如下：

```python
if table1.score < 5:
	print('low')
```

据此，我们建立起一个简单的映射关系：

1. 关键词if，在Dan语言中为中文 "如果"。
2. 运算符号 < 在Dan语言中为中文 "小于"。
3. 关键字print，在Dan语言中为"打印"。

此外，因为中文的分词概念并不像英语单词那么明显，所以我们需要明显的分词界限，规定，分词使用一个或多个空格隔开。



据上，我们得到我们的Dan语言的tokenizer（不完整版）：

```typescript
  monaco.languages.setMonarchTokensProvider('dana', {
    tokenizer: {
      root: [
        { include: 'common' }
      ],
      common: [
        // 定义关键词
        [/([\u4E00-\u9FA5]|[a-z_$])+/u, {
          cases: {
            '@typeKeywords': 'keyword',
            '@keywords': 'keyword',
            '@default': 'identifier'
          }
        }],
      ]
    },

    keywords: [
      '如果', '小于', '打印'
    ],
    typeKeywords: []
  });
```

以上内容只处理了关键词部分的内容，如果需要完整的语言功能，就需要完善各种情况，包括但不限于变量，关键词，各种括号等，而且如果需要，可以结合上面的代码提示功能，对关键字进行补全。



但是小刘发现了另一个问题：输入的代码干巴巴的，没有颜色区分，阅读性不强，那么就再添加一个样式：

```typescript
monaco.editor.defineTheme("DanTheme", {
  inherit: false,
  rules: [
    { token: 'key', foreground: '#0000FF', fontStyle: 'bold' },
    { token: 'sym', foreground: '#f5a623', },
    { token: 'value', foreground: '#4EC9B0' },
    { token: "notes", foreground: "#6A9955" },
    { token: "comment", foreground: "#6A9955" },
  ],
  base: 'vs',
  colors: {}
});
```

如此一来，效果就变成了这样：

![](/yuque/0/2023/png/23007887/1691487646531-95493d38-1606-405a-b886-124877938fbd.png)

看起来有那么回事儿了。

### 翻译执行
既然基于python代码，我们得到结果之后就需要进行反转，这很简单，其实就是根据关键字映射把上面的伪代码段翻译成我们之前提到的python代码。

```typescript
monacoEditor.getValue()
```

通过调用getValue方法能够获得输入的字符串内容，然后统一进行代码处理，得到python代码文本。小刘想，python代码也有类似js的eval的用法，可以解析运行，事半功倍。



## 结束
至此一个拿来主义的语言Dan和Monaco-Editor的结合就初步完成了。当利用Monaco完成耳熟能详的成熟的编程语言的编辑功能时，你总可以直接在网上找到完备的解析配置，直接拿来使用。但如果要像上文设计自己的语言并且实现类似的功能，就需要更加繁琐的配置。



Monaco是功能强大的编辑器，这意味着它使用起来也很复杂。它提供了一个思路，即在web端，实现代码编辑的能力，所以，不失为一个类似场景的健壮的解决方案。

