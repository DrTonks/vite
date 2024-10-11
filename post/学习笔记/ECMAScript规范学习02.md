
# ECMAScript语法规范02·类/解构

## 类 class

### class 私有属性：

```js
class Person{
	name
	#web
	constructor(name,web){
		this.name= name
		this.#web=web
	}
	info(){
		return "姓名"+this.name+"个人网站"+this.web
	}
}
let person = new Person("Dr.Tonks","https://drtonks.github.io/myblog.github.io/")
console.log(person.web) //输出undefined
```

​	获取私有属性。

```js
class Person{
	name
	#web
	constructor(name,web){
		this.name= name
		this.#web=web
	}
	get web(){
		return this.#web
}
	info(){
		return "姓名"+this.name+"个人网站"+this.web
	}
}
let person = new Person("Dr.Tonks","https://drtonks.github.io/myblog.github.io/")
console.log(person.web) //获取网址
```

​	尽管是私有属性，但是可以被修改。

```js
class Person{
	name
	#web
	constructor(name,web){
		this.name= name
		this.#web=web
	}
	get web(){
		return this.#web
}
	info(){
		return "姓名"+this.name+"个人网站"+this.web
	}
}
let person = new Person("Dr.Tonks","https://drtonks.github.io/myblog.github.io/")
person.web = "www.7k7k.com"
console.log(person.web) //无法获取7k7k网址,仍返回个人博客。

//修改：
class Person{
	name
	#web
	constructor(name,web){
		this.name= name
		this.#web=web
	}
	get web(){
		return this.#web
}
	set web(value){
		this.#web = value
	}
	info(){
		return `姓名:${this.name} 个人网站:${this.web}`
		//模板字符串：即"姓名"+this.name+"个人网站"+this.web，反引号用法类转义
	}
}
let person = new Person("Dr.Tonks","https://drtonks.github.io/myblog.github.io/")
person.web = "www.7k7k.com"
console.log(person.web)  //获取7k7k网址

```

​	即  使用存取器getter和setter获取/设置私有属性

### 类的继承：

​	

```js
//子类：可以有自己的方法 用extends构造
class Tonks extends Person{
	gender
	constructor(name,web,gender){
		super(name,web) //调用父类的构造函数
		this.gender = gender
	}
	eat(){
		return `${this.name}在吃饭`
	}
}
let tonks = new Tonks("Tonks","https://drtonks.github.io/myblog.github.io/","boy")
console.log(Tonks.web)//可调用父类方法/属性
console.log(Tonks.eat())//调用子类方法
console.log(Tonks.gender)//子类属性
```

## 解构

### 数组解构·赋值

```js
let [x,y]=[1,2]
console.log(x,y)
//略过某些元素
let [,,,z,] = [1,3,2,56,7] //-->56

//扩展运算符
let [A,...B]=[1,2,3,4,5,6]
console.log("A",A,"B",B) //分别获取1和[2,3,4,5,6]

//默认
let [x,y]=[1] //y为undefined
let [x,y=200]=[1] //y为200

//两数交换
let x=10,y=20;
let [x,y]=[y,x]
console.log("x=",x,"y=",y)
```

### 对象解构：

```js
let person ={
	name:"Tonks",
	gender:"man!",
	saying:"What can I say"
}
let {name} = person
console.log(name)
//同一模块下，如果下方还使用name会报错。使用重命名：
let {name:username,gender,saying} = person
console.log("name:",name,"gender:",gender,"saying:",saying)
```