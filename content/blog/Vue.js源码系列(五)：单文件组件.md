---
title: Vue.js源码系列(五)：单文件组件
summary: 前言过去一两周处于一种低动力状态，感觉也有些许疲惫，短暂的放纵自己飘荡了一下。也是从这个时候开始，感觉职业焦虑感似乎变得更明显了一些，归根结底可能还是因为想做的太多，能做的却又太少。希望能尽快平复这种状态吧。单文件组件在日常的vue项目开发时，我们通常使用打包工具配合使用单文件组件的形式进行开...
date: 2023-04-24
---
## 前言
过去一两周处于一种低动力状态，感觉也有些许疲惫，短暂的放纵自己飘荡了一下。



也是从这个时候开始，感觉职业焦虑感似乎变得更明显了一些，归根结底可能还是因为想做的太多，能做的却又太少。希望能尽快平复这种状态吧。



## 单文件组件
在日常的vue项目开发时，我们通常使用打包工具配合使用单文件组件的形式进行开发，代码通常被分为template，script和style三个部分进行构建。从单文件组件到最终打包得到浏览器中能够直接运行的文件，需要对应的插件进行处理，在vue + vite的项目中，官方使用的是@vitejs/plugin-vue插件。本文将会对插件的处理流程做一说明。



### transform
vite的插件有多个钩子函数，其中transform是在代码转化的过程中调用的钩子。

```typescript
transform(code, id, opt) {
  const ssr = opt?.ssr === true;
  const { filename, query } = parseVueRequest(id);
  if (query.raw || query.url) {
    return;
  }
  if (!filter(filename) && !query.vue) {
    if (!query.vue && refTransformFilter(filename) && options.compiler.shouldTransformRef(code)) {
      return options.compiler.transformRef(code, {
        filename,
        sourceMap: true
      });
    }
    return;
  }
  if (!query.vue) {
    return transformMain(
      code,
      filename,
      options,
      this,
      ssr,
      customElementFilter(filename)
    );
  } else {
    const descriptor = query.src ? getSrcDescriptor(filename, query) : getDescriptor(filename, options);
    if (query.type === "template") {
      return transformTemplateAsModule(code, descriptor, options, this, ssr);
    } else if (query.type === "style") {
      return transformStyle(
        code,
        descriptor,
        Number(query.index),
        options,
        this,
        filename
      );
    }
  }
}
```

方法接收3个参数，code为读取的对应文件中的代码内容的字符串文本，id通常为文件的路径地址名称。

1. 调用parseVueRequest获取文件请求的参数。例如我们可以用xxx/src/main.ts?vue=true&ssr=true类似的形式传递参数，其中?后面的部分将会作为query传递进入。通常这里为空。
2. 接着判断是否需要过滤，即根据include和exclude判断是否命中，从而决定后续逻辑的执行与否。
3. 第一个被transform处理的文件通常是App.vue，进入调用transformMain函数，传入文件名，code文本和当前插件的this等。
4. 在transform函数中，调用createDescriptor(filename, code, options)生成描述符，createDescriptor中调用compile的parse方法处理SFC。
5. parse方法首先生成sourceKey，然后在缓存中进行查找，如果命中缓存，直接返回缓存结果，如果没有命中缓存，则会对应生成描述对象。

```typescript
const descriptor = {
  filename,
  source,
  template: null,
  script: null,
  scriptSetup: null,
  styles: [],
  customBlocks: [],
  cssVars: [],
  slotted: false,
  shouldForceReload: prevImports => hmrShouldReload(prevImports, descriptor)
};
```

接着调用compile方法生成抽象语法树AST。

```typescript
const ast = compiler.parse(source, {
  // there are no components at SFC parsing level
  isNativeTag: () => true,
  // preserve all whitespaces
  isPreTag: () => true,
  getTextMode: ({ tag, props }, parent) => {
    // all top level elements except <template> are parsed as raw text
    // containers
    if ((!parent && tag !== 'template') ||
        // <template lang="xxx"> should also be treated as raw text
        (tag === 'template' &&
         props.some(p => p.type === 6 /* NodeTypes.ATTRIBUTE */ &&
           p.name === 'lang' &&
           p.value &&
           p.value.content &&
           p.value.content !== 'html'))) {
      return 2 /* TextModes.RAWTEXT */;
    }
    else {
      return 0 /* TextModes.DATA */;
    }
  },
  onError: e => {
    errors.push(e);
  }
});
```

compiler最终指向vue/compile-core内的baseParse方法，回归到了前几篇源码解析中的内容。不同的是，此时我们返回的ast的children对象一般包含三个元素，tag分别是script，style，template(按照字母序排列)。接下来会对三个子元素分别进行处理。

```typescript
ast.children.forEach(node => {
  if (node.type !== 1 /* NodeTypes.ELEMENT */) {
    return;
  }
  // we only want to keep the nodes that are not empty (when the tag is not a template)
  if (ignoreEmpty &&
      node.tag !== 'template' &&
      isEmpty(node) &&
      !hasSrc(node)) {
    return;
  }
  switch (node.tag) {
    case 'template':
      if (!descriptor.template) {
        const templateBlock = (descriptor.template = createBlock(node, source, false));
        templateBlock.ast = node;
        // warn against 2.x <template functional>
        if (templateBlock.attrs.functional) {
          const err = new SyntaxError(`<template functional> is no longer supported in Vue 3, since ` +
                                      `functional components no longer have significant performance ` +
                                      `difference from stateful ones. Just use a normal <template> ` +
                                      `instead.`);
          err.loc = node.props.find(p => p.name === 'functional').loc;
          errors.push(err);
        }
      }
      else {
        errors.push(createDuplicateBlockError(node));
      }
      break;
    case 'script':
      const scriptBlock = createBlock(node, source, pad);
      const isSetup = !!scriptBlock.attrs.setup;
      if (isSetup && !descriptor.scriptSetup) {
        descriptor.scriptSetup = scriptBlock;
        break;
      }
      if (!isSetup && !descriptor.script) {
        descriptor.script = scriptBlock;
        break;
      }
      errors.push(createDuplicateBlockError(node, isSetup));
      break;
    case 'style':
      const styleBlock = createBlock(node, source, pad);
      if (styleBlock.attrs.vars) {
        errors.push(new SyntaxError(`<style vars> has been replaced by a new proposal: ` +
                                    `https://github.com/vuejs/rfcs/pull/231`));
      }
      descriptor.styles.push(styleBlock);
      break;
    default:
      descriptor.customBlocks.push(createBlock(node, source, pad));
      break;
  }
});
```

6. 第一个处理的是script，调用createBlock传入虚拟节点vnode和script代码字符串，返回一个block对象，其中会包含lang，setup等标志属性。因为测试代码中使用了setup属性，所以执行了descriptor.scriptSetup = scriptBlock。
7. 接下来处理style和template，逻辑大致同6，最终放入到descriptor中的script，style，template属性中。
8. 根据sourceMap方法生成三部分代码的sourceMap。
9. 处理cssVars。在vue3中，我们可以在style中使用v-bind绑定script标签中的变量，就是在这一步进行的处理。
10. 处理::v-slotted，至此，descriptor处理完毕，放入sourceToSFC对象中（也就是SFC描述对象的缓存对象）。
11. 回到createDescriptor方法中，为descriptor生成id，值为路径与关联值的hash值，缓存当前descriptor。
12. 接下来回到transformMain内部，调用genScriptCode生成脚本代码，最终指向compileScript，compileScript内部判断语言语法，置入对应的插件（测试代码中使用ts），因为我们使用的是setup的形式，接下来调用所有的插件对代码进行转化，获得抽象语法树，然后针对抽象语法树中的不同语法类型进行转化。在setup形式中，转化的内容和细节还是比较多的，但是相对容易理解，可以在debug时依次进行理解，最终得到我们的script代码字符串，这个字符串最终就是transformMain中调用genScriptCode生成的script。
13. 接着调用genTemplateCode方法生成template最终的code字符串。调用genStyleCode方法生成style的字符串，也就是css文件的引入路径格式。如果是dev模式下并且开启了hmr，生成hmr相关的代码内容，最后将代码内容交由transformWithEsbuild，使用esbuild进行构建，最终将构建产物返回。
14. 我们的plugin-vue至此transform处理完毕，其转化结果会由其它插件再进行处理，直到所有的插件处理完毕。



### load
在整个流程中，实际上还会触发到load方法。我们生成的样式文件，最终会变成xxx.vue?vue&type=style&index=0&scoped=7a7a37ab&lang.css这样的id地址，其转化过程中会命中load钩子，load中解析？后面的字符串，形成参数对象，然后进行数据转化，返回所需要的内容。



## 小结
本章节主要解析了vueSFC插件的内部逻辑与流程，其中涉及到详细的代码转化部分仅做大致的说明，不过内部流程也不算复杂。在源码阅读的时候，有的时候也会考虑到一个问题：阅读理解应该到哪种程度为止？个人觉得不必太深入，如果有一天会因为某个问题需要更进一步的时候，再去考虑更进一步。

