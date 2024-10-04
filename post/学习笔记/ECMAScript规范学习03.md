---
prev:  
    text: '学习笔记 | ECMAScript规范学习02'
    link: '/post/学习笔记/ECMAScript规范学习02'
next:
    text: '问题解决 | LaTeX的渲染'
    link: '/post/问题解决/LaTeX'
---
# ECMAScript规范学习03·Promise和Fetch

### Promise：

​	表示承诺在未来某个时刻可能会完成并返回结果。

​	对于某些需要时间来处理结果的操作（用户登陆、读取文件），可以用Promise对象执行异步操作（等待一段时间后返回结果）。

​	Promise对象三种状态：pending，fulfilled，rejected

​	分别对应创建时初始状态、异步执行成功（可通过then方法获取异步操作的结果）、异步执行失败（可通过catch方法来处理错误）

​	已老实：

```
let promise = new Promise((resolve,reject)=>{
	resolve("已老实")
	//reject("没老实")	
})
console.log(promise)//--> <fulfilled>:"已老实"
promise.then(result=>{
	console.log("result",result)
})
```

​	没老实则需要捕获error：

```
let promise = new Promise((resolve,reject)=>{
	//resolve("已老实")
	reject("没老实")	
})
console.log(promise)//--> <rejected>:"没老实"
promise.then(result=>{    //老实了就用这个
	console.log("result",result)
}).catch(error =>{       //没老实就用这个
	console.log("error:",result)
}).finally(()=>{         //不管老没老实都打印“结束”
	console.log("异步执行结束")
})
```

拓展：可以改造代码，用定时器模拟真实网络请求

### Fetch：

​	基于promise的网络请求库

```
fetch('url').then(response=>{
	//返回解析后的json数据会传递给下一个then()方法中的回调函数为参数，这个参数就是data
	return response.json()  //reponse.json()解析响应数据为json
	
}).then(data=>{
	console.log.("get.data:",data)
}).catch(error=>{
	console.log.("get.error:",error.message)
}).finally(()=>{
	console.log.("结束")
})
```

#### 请求POST：

```
fetch('url',{
	method:'POST',
	headers:{
		'Content-Type':'applicant/x-www-form-urlencoded'
	},
	body: new URLSearchParams({//URLSearchParams用于处理键值对类型的数据，将其编码为url查询字符串
		name:'Tonks'
		web:'https://drtonks.github.io/myblog.github.io/'
	})
}).then(response=>{
	return response.json()
}).then(data=>{
	console.log.("get.data:",data)
}).catch(error=>{
	console.log.("get.error:",error.message)
}).finally(()=>{
	console.log.("结束")
})
```

#### 请求postJson

```
fetch('url',{
	method:'POST',
	headers:{
		'Content-Type':'applicant/json',
	},
	body: JSON.stringify({//将对象转换为json字符串
		name:'Tonks'
		web:'https://drtonks.github.io/myblog.github.io/'
	})
}).then(response=>{
	return response.json()
}).then(data=>{
	console.log.("get.data:",data)
}).catch(error=>{
	console.log.("get.error:",error.message)
}).finally(()=>{
	console.log.("结束")
})
```

