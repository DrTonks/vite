---
next:  
    text: '学习笔记 | ECMAScript规范学习01'
    link: '/学习笔记/ECMAScript规范学习01.md'
prev:
    text: ''
    link: ''
---
# DOM操作

> ### 老是忘记dom具体如何连接HTML和JS？来回顾一下！

#### 返回节点

```js
document.body//返回文档的body属性，下同
document.titlt
document.URL
document.domain//域名
document.head
document.links//返回文档中所有带有href属性的<a>元素集合
document.images//返回文档中所有带有<img>元素的集合
```

#### 事件操作：

```js
document.getElementById
document.getElementByClassName
document.getElementByTagName//根据标签获取文档中的元素集合
document.querySelector(Selector)//返回与指定选择器字符串匹配的第一个元素，加上All则返回类数组
document.createElement(tagname)//创造一个指定的HTML
document.createTextNode(text)//创造一个文本节点
document.write(content)
```

**注：对于返回的类数组，无法使用真正的数组方法，比如push、sort。**

#### 获取元素后使用该节点的属性和方法：

```js
parentNode//返回父节点
childNodes
first/lastChild
nextSibling //返回节点后紧跟的同级元素
previousSibling

appendChild(node)//在节点的子节点列表末尾添加一个新的子节点
prepend//作为第一个子元素添加到父元素，某些情况下可能不支持，改用insertBefore
removeChild
replaceChild(newnode,oldnode)

getAttribute(name)//返回节点指定属性的值
setAttribute(name,value)//设置节点指定属性的值'class','myclass'
hasAttribute(name)//检查
removeAttribute(name)

innerText//获取元素文本
nodeName
nodeType
nodeValue

.style.color/fontSize= '';//设置元素样式
```

**注：appendChild的用法比较特殊，如果被添加的节点已经存在于DOM中，那么它会从原来的位置移动到新的位置。具体案例详见前端每日一题——CSS动画名片轮播图**