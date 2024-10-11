---
next:  
    text: '前端每日一题 | 动态变化搜索栏'
    link: '/前端每日一题/动态变化搜索栏.md'
prev:
    text: ''
    link: ''
---
# 获取鼠标坐标来实现样式

### 	登录/注册前端样式：

> ### （后端样式见学习笔记：flask框架的应用 ）

#### 	效果？

​	受b站up主**cksndn**悬浮鼠标样式的启发，我希望能做到鼠标移动进某个地方后，颜色像是墨水滴入水池一样在背景晕开。这个动效其实可以做得很好看的（虽然我做不好看）。

​	其实思路不难：在鼠标移入div中时，记录下坐标，然后再这个坐标点加上一个往四周放大的圆即可。但是由于某些情况（比如快速滑动）导致动画失效、过度添加导致的性能问题等，其实有必要自己上手完成一个这样的任务，来提高自己对动画、事件获取的理解。

​	下面简单聊聊基本实现过程和bug修复：

​	#html：

```html
<body>
    <div class="login">
        <h1>登录</h1>
    <form action="/login" method="post">
        <input type="text" name="username" placeholder="用户名:">
        <input type="password" name="password" placeholder="密码:">
        <input type="submit" value="登录" class="button">
        <a href="register">还没有账号？点我注册</a>
    </form>
    </div>

</body>
```

​	#css

```css
*{
    margin: 0;
    padding: 0;
    color:#eee;
}
body{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: rgb(139, 162, 162);
}
.login{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 450px;
    background-color: rgb(41, 91, 148);
    border-radius: 10px;
    box-shadow: 10px 10px 20px rgba(97, 125, 158 ,0.5);
    position: relative;
}
h1{
    font-size: 45px;
    font-weight: 500;
}
form{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 230px;
    z-index:1;
    
}
input{
    width: 200px;
    height: 40px;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #eee;
    font-size: 16px;
    outline: none;
}
input::placeholder{
    font-size: 12px;
    color: #eee;
}
.button{
    width: 100px;
    height: 36px;
    border: 1px solid #eee;
    border-radius: 18px;
    cursor: pointer;
}
form a{
    bottom: 5px;
    position: absolute;
}
/*动画部分，随便采用一个元素，总之要实现放大的效果*/
span{
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    background-color: rgb(212, 75, 75);
    transform: translate(-50%,-50%);/*鼠标居中*/
    border-radius: 50%;
    opacity: 0.5;
}
@keyframes in {
    0%
    {
        width: 0;
        height: 0;
    }
    100%
    {
        width: 1000px;
        height: 1000px;
    }
}
@keyframes out {
    0%
    {
        width: 1000px;
        height: 1000px;
    }
    100%
    {
        width: 0;
        height: 0;
    }
}
```

​	添加一点交互，在js中搭建出基本的实现思路：

```javascript

let login =document.querySelector('.login')
//鼠标进出
login.addEventListener('mouseenter',()=>{
	let span = document.createElement('span')
	
	login.appendChild(span)
	//实现动画过程
	span.style.animation = 'in 0.5s ease-out forwards'
})
login.addEventListener('mouseleave',()=>{
            
})

```

​	接下来我们需要获取鼠标位置：

```js
let span;//在外部声明
let login =document.querySelector('.login')
login.addEventListener('mouseenter',function(e){//改用e传参
    span = document.createElement('span')	
	login.appendChild(span)
	span.style.animation = 'in 0.5s ease-out forwards'
    
    //计算top/left
    let top = e.clientY - e.target.offsetTop
    let left = e.clientX - e.target.offsetLeft
    span.style.top = top+'px'
    span.style.left = left+'px'
})
login.addEventListener('mouseleave',function(e){
	span.style.animation = 'out 0.5s ease-out forwards'   
	let top = e.clientY - e.target.offsetTop
	let left = e.clientX - e.target.offsetLeft
	span.style.top = top+'px'
	span.style.left = left+'px'        
})

```

​	效果已经出现了！接下来就是重新修改span标签的样式了，建议自己发挥想象力！记得给form等文字加点高度，否则会被覆盖。

#### 缺陷？

​	有一个问题是，如果鼠标反复进入，会造成span标签的反复添加，在我们打算添加一些动画、增加某些视觉显示时，这个问题是致命的。

​	**加上计时器来消灭已经生成的span：**

```js
login.addEventListener('mouseleave', function(e) {
   if (span) { 
        span.style.animation = 'out 0.5s ease-out forwards';
        let top = e.clientY - e.target.offsetTop;
        let left = e.clientX - e.target.offsetLeft;
        span.style.top = top + 'px';
        span.style.left = left + 'px'
// 使用 setTimeout 删除 span，以便动画完成后移除
        setTimeout(() => {
            if (span) {
                login.removeChild(span);
                span = null; 
            }
        }, 500); //动画时间
    }
});
```

​	还有一个问题鼠标快速划过（<0.5）时，由于后一个动画提前执行，所以span会被瞬间放大到1000px。

​	因此我们需要计算一下鼠标进入的时间、离开的时间：

```js
if(passTime < 500){
	setTimeout(mouseleave, 500 - passTime) 
}
else{
	mouseleave()
}
```

​	此时out动画将在剩余的时间里被调用。

#### 	完善一下！将有关动画结束删去span的部分进行一些调整：

```js
let login = document.querySelector('.login')
let span
let inTime, outTime
let isIn = true
let isOut

login.addEventListener('mouseenter', function(e){
	isOut = false //进入后初始要把out设置成关闭的
	if(isIn){
		inTime = new Date().getTime()

		span = document.createElement('span')
		login.appendChild(span)
		span.style.animation = 'in .5s ease-out forwards'
		let top = e.clientY - e.target.offsetTop
		let left = e.clientX - e.target.offsetLeft
		span.style.top = top + 'px'
		span.style.left = left + 'px'
        
		isIn = false 
		isOut = true 
	}
})
//鼠标离开事件
login.addEventListener('mouseleave', function(e){
	if(isOut){
		outTime = new Date().getTime()
        let passTime = outTime - inTime

        if(passTime < 500){
        	setTimeout(mouseleave, 500 - passTime)}
        else{
        	mouseleave()}
	}

    function mouseleave(){
    	span.style.animation = 'out .5s ease-out forwards'
		let top = e.clientY - e.target.offsetTop
		let left = e.clientX - e.target.offsetLeft

		span.style.top = top + 'px'
		span.style.left = left + 'px'

		setTimeout(function(){
        	login.removeChild(span)
			isIn = true }, 500)
    }
}) 

```



### 小知识点：为什么要进行传参e？

​	e通常指event，简单示例：

​	主要是为了获取关于当前事件的信息：

```js
document.addEventListener('click', function(e) {
    console.log('点击位置:', e.clientX, e.clientY);
    console.log('事件目标:', e.target);
});
```

​	
  