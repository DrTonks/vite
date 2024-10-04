# ECMAScript语法规范·基础

#### 1.对象：

```
let boy = {
	name: 'Tonks'，
	age: 18,
	height: 180,
}
console.log(boy)

//对象的 修改 or 添加
boy.height = 175
boy.web = "https://drtonks.github.io/myblog.github.io/"
console.log(boy)

//delete关键字。用法与其他有区别。
delete boy.gender

//has。用法与其他有区别。
let has = "gender" in boy
console.log(has) //-->false

//获取属性key or value
Object.keys(boy)
Object.keys(boy).length
```

遍历循环：
for of用于遍历可迭代对象（数组、字符串、Set、Map...）

所以使用for in（用于遍历对象的可枚举属性）

```
for(let key in boy){
	console.log("forInKey",key,"value",boy)
}  //value直接对应对象的属性值
```

forEach。区别其他forEach。

```
Object.entries(boy) //这条语句是个二维数组
Object.entries(boy).forEach(([key,value])=>{
	console.log("key",key,"v",value)
})
```

清空用替代

```
boy = {}
```



#### 2.Map操作

```
let boy = new Map{[
	["name","Tonks"],
	["age","18"]
]}
```

​	本质上是实例化的对象，可通过`console.log(typeof boy)`检查。键值对应唯一。

```
boy.set("height",180)
console.log(boy) 
boy.delete("name")//删除“名字”和键对应项
console.log(boy) 

console.log(boy.has("name")) //false

//size
console.log(boy.size)  //-->2
```

转化arr方法同set。有区别。

解构：

```
for(let value of boy){
	console.log("v",value)
}
//解构
for(let [key,value] of boy){
	console.log("k",key,"v",value)
}//键值打印
boy.forEach(value,key)=>{
	console.log("k",key,"value",value)
}//顺序不能错，forEach先找value再找key
```

清空用clear()。

#### 3.Set操作（无序集合）

```
let age = new set{1,2,3,2,1}
```

```
console.log(age)
```

控制台打印{1，2，3}

```
add/delete:加上/删去指定元素
has：判断是否元素在其中，返回布尔值
```

扩展运算符：...用于展开可迭代参数

```
//Array.from()和...扩展运算符有时能有一样的效果
let me = "Dr.Tonks"
let meArr= [...me]
console.log(meArr) //-->["D","r",".","T"...]
//中文同理
//对set也可以使用for of和forEach，但是没有索引--索引是自己。
//集合无序
```

简单去重：

```
let numberArr = [1,2,3,3,2,1]
let numberSet = new Set(numberArr)// -->[1,2,3]
```

清空用clear()。

#### 4.Array数组操作

```
let arr=[10,11]
console.log("arr",arr)  //-->[10,11]

//push:在结尾添加并且返回数组
let arrLength = arr.push(12,13)
console.log("arr",arr)  //-->[10,11,12,13]
console.log("arrLength",arrLength)  //-->4
//unshift:在开头添加并返回

//shift:删除数组中的第一个元素，并返回被删除函数
let del = arr.shift()
console.log("del",del) //-->10
//pop:删除最后一个

//splice:删除元素，并返回被删除元素
arr.splice(要删除的元素索引位置（从0索引）,要删除的元素数量)

```

排序相关：

```
//sort
let arr=[1,99,6]
let arr2=["banana","apple","orange"]
arr2.sort //-->["apple","banana","orange"]默认按照首字母
arr.sort( (a,b) => a-b ) //-->[1,6,99],a>b时a排在b后

//filter
let arr3 = [10,11,12,13,14,15]
let newArr=arr3.filter((value,index)=>{
	return value>2
})
console.log("newArr",newArr) //-->[13,14,15]

//concat
let arr4=["a","b"]
let New=arr3.concat(arr4,19,20) //-->[10,11,12,13,14,15,"a","b",19,20]

```

```
//遍历

//for ...of
let arr5=["gg",100,9]
for(let item//参数 of arr5){
	console.log("for...of",item)
}

//forEach
arr5.forEach(value =>{
	console.log("forEach",value)
})

arr5.forEach((value,index) =>{
	console.log("value",value,"index",index)
})//index索引其数组位置
```



#### 5.函数操作

查询特定url函数：

```
function getweb(){
	const url = window.location.href;     // 完整的 URL
	
	/*const protocol = window.location.protocol; // 协议
	const hostname = window.location.hostname;//主机名
	const port = window.location.port;        // 端口
	const pathname = window.location.pathname; // 路径
	const search = window.location.search;  // 查询字符串
	const hash = window.location.hash; */       // 锚点

	/*console.log("完整 URL:", url);
	console.log("协议:", protocol);
	console.log("主机名:", hostname);
	console.log("端口:", port);
	console.log("路径:", pathname);
	console.log("查询字符串:", search);
	console.log("锚点:", hash);*/

	return url
}
console.log(getweb())
```

```
//有参数
function add(number  /*  =10  默认*/  ){
	return number+10
}
//匿名函数
let sub = function(x,y){
	return x-y
}
console.log(sub(20,6)) //-->14
```

重点：

```
//箭头函数
let plus = (a,b)=>{
	return a+b
}
console.log(plus(20,9)) //-->29

//隐式返回
let plus2 = (a,b)=> a+b

console.log(plus2(20,9)) //-->29
```



#### 6.类 class

用于创建具有相同属性的方法的对象（梦回css）

```
class Person{
	name
	age
	
	constructor(iname,iage){      //构造函数,iname为传递进来的参数
		this.name = iname
		this.age = iage
	}
	
	info(){						//方法
		console.log("name",this.name,"age",this.age)
	}
	
}
//调用：
let person = new Person("Tonks",18)
person.info()
```

​	console输出结果为：name Tonks age 18

#### 