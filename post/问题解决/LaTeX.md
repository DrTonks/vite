---
next:  
    text: '问题解决 | 网站部署问题'
    link: '/post/问题解决/网站部署问题'
prev:
  false
---
# Vitepress站点渲染Latex公式问题

> #### 补药用npm install katex（反正我没成功qwq）
>
> ​	大概是因为KaTeX主要是在浏览器中使用，但通常需要结合其他工具（如 Markdown 解析器）才能在文本中嵌入数学公式。
>
> ​	而markdown-it-katex则专门用于Markdown文档中渲染LaTeX公式，在vitepress中能够自动处理 Markdown 到 HTML 的转换，并同时渲染数学公式。

### 1.根目录下安装markdown-it-katex

```
npm install markdown-it-katex
```

这个插件会生成某些特殊/自定义标签，如果 VitePress 在编译阶段找不到这些标签的定义，就会出现编译错误。

因此我们需要在.vitepress/config.js中添加如下代码：（具体标签来源于CSDN的Zhillery大佬的博客）

```js
import { defineConfig } from 'vitepress'
import markdownItKatex from 'markdown-it-katex'

const customElements = [
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml'
]

export default defineConfig({
  markdown: {
    config: (md) => {
      md.use(markdownItKatex)
    }
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag)
      }
    }
  }
})

```

### PS：或者使用markdown-it-mathjax3插件，流程基本一致。Mathjax是一个功能更加强大的数学渲染引擎，支持更多复杂公式和符号，但是渲染速度可能略慢于KaTeX。