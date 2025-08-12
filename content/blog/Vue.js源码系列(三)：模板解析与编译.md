---
title: Vue.js源码系列(三)：模板解析与编译
summary: 前言最近脑袋里东西太多，乱糟糟的，希望这种状态赶紧过去吧。经过前两节的介绍，我们大致了解了第一次渲染的一些基本原理。本章节将会对这个过程中的模板解析部分做一说明。当我们使用单文件写法进行vue开发时，会在template中编写我们的组件模板，那么vue时如何处理这些字符串模板的呢？
date: 2023-04-10
---
## 前言
最近脑袋里东西太多，乱糟糟的，希望这种状态赶紧过去吧。

经过前两节的介绍，我们大致了解了第一次渲染的一些基本原理。本章节将会对这个过程中的模板解析部分做一说明。当我们使用单文件写法进行vue开发时，会在template中编写我们的组件模板，那么vue时如何处理这些字符串模板的呢？包括`{{ xxx }}`这样的插值内容是如何解析的呢？这就是vue的compile完成的内容。

## 测试代码
和之前一样，我们使用一个测试模板来进行测试，在这里我们为了简要说明，不使用component，keep-alive等标签和引入自定义组件，而使用基本的vue语法内容进行处理，我们构建的测试template如下：

```typescript
// 模板部分
  <div id="root">
    {{ msg }}
    <button @click="clickMe" :class="['text-class']"> {{ btnName }} </button>
    <p>这是一个测试模板</p>
  </div>

//js代码部分
createApp({
  setup() {
    const msg = ref('Welcome to use examples');
    const btnName = ref("Click Button");
    const clickMe = () => {
      alert("template click")
    }
    return {
      msg,
      btnName,
      clickMe
    }
  }
}).mount('#root')
```

在上一节中我们提到了renderComponentRoot方法，传入组件实例时，组件实例上的render属性为空，方法执行完毕之后render方法将会被赋予一个函数。这个过程是在内部执行`setupStatefulComponent -> finishComponentSetup`方法时处理的，finishComponentSetup中执行了一段如下代码：

```typescript
Component.render = compile(template, finalCompilerOptions)
```

 调用了compile方法解析template。compile方法的入口位于/src/packages/vue-compat/src/index.ts，内部判断template的类型之后，调用compile函数，传入template和配置项进行解析。



## compile
compile方法返回baseCompile方法，相关处理都是在baseCompile方法中进行的。此时我们传入的template为如下字符串，即为root内的innerHtml。

```typescript
`{{ msg }}
	<button @click="clickMe" :class="['text-class']"> {{ btnName }} </button>
<p>这是一个测试模板</p>`
```

baseCompile方法中调用到baseParse，实际上解析就是将其转化为抽象语法树的过程。

```typescript
export function baseParse(
  content: string,
  options: ParserOptions = {}
): RootNode {
  const context = createParserContext(content, options)
  const start = getCursor(context)
  return createRoot(
    parseChildren(context, TextModes.DATA, []),
    getSelection(context, start)
  )
}
```

1. 首先调用createParserContext创建一个解析用的上下文，然后获得解析的其实位置。start可以理解为一个坐标，表示现在解析到了字符串的哪个位置，例如一开始时其中的属性为column: 1, line: 1, offset: 0。表示目前是第一行第一列，偏移量为0，接着调用parseChildren，进行解析。
2. parseChildren会挨个进行判断，因为我们的模板字符串开始包括了很多的空格字符，所以第一遍扫描时会直接进入parseText，最终输出一个对象如下：

```typescript
{
    "type": 2,
    "content": "\n    ",
    "loc": {
        "start": {
            "column": 1,
            "line": 1,
            "offset": 0
        },
        "end": {
            "column": 5,
            "line": 2,
            "offset": 5
        },
        "source": "\n    "
    }
}
```

我们可以看到被格式化的部分表示这个节点的type为2(2表示是一个TEXT节点)，内容是换行符加数个空格字符，从第一行第一列开始到第二行第五列结束，这已经具有了初步的字符串转化为结构化的样式。然后将这个节点推入nodes数组。

3. 接着进行转化，接下来判断到字符串以&#123;&#123;开头, 调用parseInterpolation(context, mode)进行转化:

```typescript
function parseInterpolation(
  context: ParserContext,
  mode: TextModes
): InterpolationNode | undefined {
  const [open, close] = context.options.delimiters
  __TEST__ && assert(startsWith(context.source, open))

  const closeIndex = context.source.indexOf(close, open.length)
  if (closeIndex === -1) {
    emitError(context, ErrorCodes.X_MISSING_INTERPOLATION_END)
    return undefined
  }

  const start = getCursor(context)
  advanceBy(context, open.length)
  const innerStart = getCursor(context)
  const innerEnd = getCursor(context)
  const rawContentLength = closeIndex - open.length
  const rawContent = context.source.slice(0, rawContentLength)
  const preTrimContent = parseTextData(context, rawContentLength, mode)
  const content = preTrimContent.trim()
  const startOffset = preTrimContent.indexOf(content)
  if (startOffset > 0) {
    advancePositionWithMutation(innerStart, rawContent, startOffset)
  }
  const endOffset =
    rawContentLength - (preTrimContent.length - content.length - startOffset)
  advancePositionWithMutation(innerEnd, rawContent, endOffset)
  advanceBy(context, close.length)

  return {
    type: NodeTypes.INTERPOLATION,
    content: {
      type: NodeTypes.SIMPLE_EXPRESSION,
      isStatic: false,
      // Set `isConstant` to false by default and will decide in transformExpression
      constType: ConstantTypes.NOT_CONSTANT,
      content,
      loc: getSelection(context, innerStart, innerEnd)
    },
    loc: getSelection(context, start)
  }
}
```

因为`{{对应地闭合标志是}}`，直接找到`}}`所在位置，这里需要注意，在转化的过程中，上下文context的source就是源字符串，随着转化进行，每一个部分被处理完毕后，就从source中切除对应地部分。这里通过preTrimContent方法提取出双大括号之间的内容，然后进行trim，获取到其中的内容，之后移动坐标，从source中切除`{{ xxx }}`部分的内容，返回刚刚处理的节点

```typescript
{
    "type": 5,
    "content": {
        "type": 4,
        "isStatic": false,
        "constType": 0,
        "content": "msg",
        "loc": {
            "start": {
                "column": 8,
                "line": 2,
                "offset": 8
            },
            "end": {
                "column": 11,
                "line": 2,
                "offset": 11
            },
            "source": "msg"
        }
    },
    "loc": {
        "start": {
            "column": 5,
            "line": 2,
            "offset": 5
        },
        "end": {
            "column": 14,
            "line": 2,
            "offset": 14
        },
        "source": "{{ msg }}"
    }
}
```

type为5表示这是一个插值内容，source中是我们处理的内容部分，`{{ msg }}`。因为其中包含一个变量，isStatic为false，表示这不是一个静态节点。然后将该节点推入nodes中。

4. 处理完空白字符之后，循环扫描到`<`开头的字符，进入到标签处理部分的工作。`<`后可能有比较多的情况，最常见的就是跟字母，也是我们测试代码中的情况，所以进入到parseElement函数中处理，parseElement中调用parseTag进行标签处理，在parseTag中，会调用parseAttributes将标签上的属性转化为props，经过转化我们的测试内容将会得到如下的props

```typescript
[
    {
        "type": 7,
        "name": "on",
        "exp": {
            "type": 4,
            "content": "clickMe",
            "isStatic": false,
            "constType": 0,
            "loc": {
                "start": {
                    "column": 21,
                    "line": 3,
                    "offset": 35
                },
                "end": {
                    "column": 28,
                    "line": 3,
                    "offset": 42
                },
                "source": "clickMe"
            }
        },
        "arg": {
            "type": 4,
            "content": "click",
            "isStatic": true,
            "constType": 3,
            "loc": {
                "start": {
                    "column": 14,
                    "line": 3,
                    "offset": 28
                },
                "end": {
                    "column": 19,
                    "line": 3,
                    "offset": 33
                },
                "source": "click"
            }
        },
        "modifiers": [],
        "loc": {
            "start": {
                "column": 13,
                "line": 3,
                "offset": 27
            },
            "end": {
                "column": 29,
                "line": 3,
                "offset": 43
            },
            "source": "@click=\"clickMe\""
        }
    },
    {
        "type": 7,
        "name": "bind",
        "exp": {
            "type": 4,
            "content": "['text-class']",
            "isStatic": false,
            "constType": 0,
            "loc": {
                "start": {
                    "column": 38,
                    "line": 3,
                    "offset": 52
                },
                "end": {
                    "column": 52,
                    "line": 3,
                    "offset": 66
                },
                "source": "['text-class']"
            }
        },
        "arg": {
            "type": 4,
            "content": "class",
            "isStatic": true,
            "constType": 3,
            "loc": {
                "start": {
                    "column": 31,
                    "line": 3,
                    "offset": 45
                },
                "end": {
                    "column": 36,
                    "line": 3,
                    "offset": 50
                },
                "source": "class"
            }
        },
        "modifiers": [],
        "loc": {
            "start": {
                "column": 30,
                "line": 3,
                "offset": 44
            },
            "end": {
                "column": 53,
                "line": 3,
                "offset": 67
            },
            "source": ":class=\"['text-class']\""
        }
    }
]
```

一个是绑定的点击时间，另一个是class类名。之后我们得到了转化之后的元素节点，这里元素可能发生嵌套，所以parseElement中会执行parseChildren继续转化，不同的是ancestors祖先栈结构里面会存放当前元素，作为Children转化的子孙节点。我们可以预测，递归向内转化，得到的会是类似于上面的插值节点，因为button内部是一个插值语法。执行完毕之后，将获得的children赋值给我们的button结构，最终得到的button的node结构化数据如下

![](/yuque/0/2023/png/23007887/1681207901314-fedaa31c-a7f9-4f3f-b0f0-9d3b35534d9c.png)

可以看到其中有children属性。

5. 转化仍然继续，接下来是换行空格，同步骤1，然后监测到另一个`<`开头的内容，对应就是我们的p元素部分，然后执行与button处理类似的路径流程，最终得到node推入nodes，整个转化结束，得到了一个nodes数组。
6. 执行完上述处理之后，接下来统一处理空白字符问题。依次循环处理nodes中的每个node，如果节点满足空白条件，直接删除，从上述结果来看，我们一开始转化的`/n`节点和最后转化的`/n`节点就是这样的节点，在nodes中直接将这两个位置上的node置为null，经过循环处理之后，返回不为空的nodes。
7. 最后交给createRoot方法，生成根节点的结构化数据，就得到了我们的抽象语法树。



以上就是编译部分的内容，它负责将模板的字符串形式，转化为一个树形结构。抽象语法树在前端很多内容方面都有使用，利用语法树我们能够进行代码的转化和优化等操作。



## transform
在经过编译得到抽象语法树之后，我们还要进行一次转化，这也是紧随compile之后的步骤，调用了transform函数。transform接收两个参数，第一个是抽象语法树，第二个options中包含诸多的转化辅助函数。

```typescript
export function transform(root: RootNode, options: TransformOptions) {
  const context = createTransformContext(root, options)
  traverseNode(root, context)
  if (options.hoistStatic) {
    hoistStatic(root, context)
  }
  if (!options.ssr) {
    createRootCodegen(root, context)
  }
  // finalize meta information
  root.helpers = new Set([...context.helpers.keys()])
  root.components = [...context.components]
  root.directives = [...context.directives]
  root.imports = context.imports
  root.hoists = context.hoists
  root.temps = context.temps
  root.cached = context.cached

  if (__COMPAT__) {
    root.filters = [...context.filters!]
  }
}
```

1. 转化函数首先创建一个转化上下文，context上有很多方法，在转化的过程中调用。
2. 然后调用traverseNode函数，对node执行不同的transform plugins，主要是一些特别的处理，例<font style="color:rgb(33, 53, 71);">Suspense，元素的style属性处理等。</font>
3. <font style="color:rgb(33, 53, 71);">这里判断元素是ROOT，就会调用</font>traverseChildren，对children中的node应用traverseNode方法，最终对每个节点应用transform plugins。具体的plugins处理如果有需要，我们将会在后续举例说明。
4. 处理完所有节点之后，将会进入到vue3的一个新的特性步骤：静态提升。关于这部分内容，我们将在下面说明，这里进行统一的静态提升操作。
5. 接着创建root的codegen之后，完善抽象语法树，退出transform操作。



事实上，transform操作就是对抽象语法树建立的node，应用不同的转化插件，进一步处理，包括指令，属性等，得到更近一步的节点结构。经历过转化之后，将会经历最后一步：generate。



## generate
在经历过上述步骤之后，我们得到了编译所需的完备的抽象语法树。generate就要开始从抽象语法树到可执行代码块的转化过程。

1. 经过抽象语法书的转化之后，我们的抽象语法树上有很多的帮助函数helpers，接下来就是基于这些helpers来生成代码块。在生成代码块之前，将会判断几个转化环境，例如需不需要scopeId，以及是不是script setup环境等。
2. 我们最终生成的是一个函数字符串，经过因为非SSR，所以首先生成一个`render : function (xxx) {`的函数头。接着使用with(_ctx)，这也标志着代码实际运行时，是利用with来处理ctx参数应用到函数内部的，接下来还会对不同的node类型，直接生成不同的函数调用字符串，进行组合，最后统一闭合。我们上面的代码测试代码最终生成的script block就变成了如下内容：

```typescript
`const _Vue = Vue
const { createElementVNode: _createElementVNode, createTextVNode: _createTextVNode } = _Vue

const _hoisted_1 = ["onClick"]
const _hoisted_2 = /*#__PURE__*/_createElementVNode("p", null, "这是一个测试模板", -1 /* HOISTED */)

return function render(_ctx, _cache) {
  with (_ctx) {
    const { toDisplayString: _toDisplayString, normalizeClass: _normalizeClass, createElementVNode: _createElementVNode, createTextVNode: _createTextVNode, Fragment: _Fragment, openBlock: _openBlock, createElementBlock: _createElementBlock } = _Vue

    return (_openBlock(), _createElementBlock(_Fragment, null, [
      _createTextVNode(_toDisplayString(msg) + " ", 1 /* TEXT */),
      _createElementVNode("button", {
        onClick: clickMe,
        class: _normalizeClass(['text-class'])
      }, _toDisplayString(btnName), 11 /* TEXT, CLASS, PROPS */, _hoisted_1),
      _hoisted_2
    ], 64 /* STABLE_FRAGMENT */))
  }
}`
```

我们可以看到，我们的抽象语法树最终变成了一个函数字符串。



## 再次回到compile
通过上面的处理，我们得到了函数字符串，经过上述步骤之后，我们最终回到compileToFunction函数中来，从compile的结果中取出code，接着生成我们的render函数：

```typescript
const render = (
    __GLOBAL__ ? new Function(code)() : new Function('Vue', code)(runtimeDom)
  ) as RenderFunction

  // mark the function as runtime compiled
  ;(render as InternalRenderFunction)._rc = true

```

我们的render就是利用new Function方法，传入code，生成最终render代码。至此，我们的内容就和mount解析中的renderComponentRoot方法形成了闭环，通过调用compile，生成了对应的render函数。



## 聊聊静态提升
静态提升是vue3基于性能做出的一个优化点。在diff算法中，要依次对节点进行比较，所以执行的速度取决于需要比较的节点数量。vue2中没有静态提升（大家都这么说，但是我没有看过vue2的源码），这意味着无论节点是何种状态，都需要进行一次比较，而通过上面的测试代码可以看出，我们的p标签内容不包含任何“变量”，这意味着p标签本身是静态的，在dom diff时完全可以跳过，因此提升性能。从上面的生成的编译模板中可以看出，静态节点会被编译为


```javascript
const _hoisted_2 = /*#__PURE__*/_createElementVNode("p", null, "这是一个测试模板", -1 /* HOISTED */)
```


然后直接在return结果中引用。



## 小结
在本章节中，说明了模板的解析与编译功能，看到了模板字符串时如何变成抽象语法树进而再变成渲染函数的。当然，其中还有一些内容没有详细说明，例如指令代码的处理等，如果后续有必要将会对这些细节再加以说明。另外，我们的测试代码部分都是在浏览器下直接运行，而非在打包工具下的代码编写，所以类似于scope部分也一带略过，在主流程全部介绍完毕之后，再用单独章节说明一下sfc部分内容，回头再对这部分内容进行补充。

