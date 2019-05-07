## React 学习回顾

#### 第一节  React环境搭建

React 核心  JSX 语法  

```react
ReactDOM.render(
        React.createElement(	//创建元素的方法
        	'p',				//创建的p标签
        	{className:'red'},	//写入一个class的属性 ==>class被重命名
        	'这是一个小可爱'		//标签里面的内容
        ),
		document.getElementById('app'))
```

如果是在标签里面在嵌入标签

```react
ReactDOM.render(
    React.createElement(
        'div',
		{className:'red'},
        [
        	'我是DIV 里面的一段话',
            React.createElement(
                'p',
                {tage:'custom '},
                '我是一个嵌套的标签'
            )
        ]
    ),
	document.getElementById('app'))
```

**注**：我们可以直接使用JSX 来编写代码，但是相对来说比较复杂，同时还要掌握更多JSX语法，此时我们使用Babel帮我们处理JSX语法让我们编写更加方便！

###### 使用babel 方法：

- 创建一个React的文件

- npm init 初始化一个项目文件

- 根目录分别创建public文件及src文件 （public 用于存储我们的静态文件，src转义前的js文件）

- 下载安装babel 工具，[babel中文官网](https://www.babeljs.cn/docs/)。

- ```
  - npm install @babel/core @babel/cli @babel/preset-env @babel/preset-react --save-dev
  - npm install @babel/polyfill --save 
  ```

- 在根目录下配置  .balbelrc

- ```json
  {
      "presets":["@babel/preset-env","@balbel/preset-react"]
  }
  ```

- package.json 文件中配置一下"scripts"启用 （watch 实时监控）

- ```json
  "babel": "./node_modules/.bin/babel src --out-dir pulic -watch"
  ```

  **注**：package.json中的配置文件不懂的移步到[npm中文网](https://www.npmjs.com.cn/) ，一下说几个关键的

  - "scripts" :  指令选项，
    - 此例中指令时  ./node_modules/.bin/babel src --out-dir pulic -watch，为了简化给他"babel"指令
  - "devDependencies"：开发时依赖，生产时不需要。
    - 使用npm 安装的时候 --save-dev 可简写 -D
  - "dependencies"：生产时依赖，就是表示发布到线上的时候也需要的依赖
    - 使用npm 安装时 --save 可简写-S

___

#### 第二节  编写React代码

我们尝试一个简单的模板，在src中创建一个app.js

````react
let template = (
	<div>
    	Hello React！！
    </div>
)
ReactDOM.render(template,document.getElementById('app'));
````

此时public文件中创建一个index.html文件

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>React 基础</title>
    <link rel="stylesheet" href="./app.css">
    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script> 
</head>
<body>
    <div id="app">
		//react 模板
    </div>
    <script src="./app.js"></script>
</body>
</html>
```

此时使用 npm run babel 进行编译后public 文件中生成了app.js文件 同时打开index.html 完成。

我们打开转义后的代码转成了JSX语法 代码如下：

```javascript
var template = React.createElement("div", null, "Hello React !!");
ReactDOM.render(template, document.getElementById('app'));
```

___

#### 第三节  创建React组件

组件化开发是让让我们组件复用和便于维护。（代码是手打的代码单词可能写错，建议根据模板自己敲打）

```react
//创建一个MyApp 组件
class MyApp extends React.Compoent{
    render(){
        return (
            <div>
                <h1>This is My first React compoent!!</h1>
                <h2>Hello React!!</h2>
            </div>
        )
    }
}
ReactDOM.render(<MyApp />,document.getElementById('app'));
```

上面代码我们就创建了一个简单得组件 这个组件也同时达到了服用得效果

```react
let template = (	//组件必须有一个根组件
    <div>
        <MyApp />
        <MyApp />
        <MyApp />
    </div>
)
ReactDOM.render(template,document.getElementById('app'));
```

分析上面得代码

1. 创建一个MyApp的组件，并继承了React.Compoent 这个组件。
2. 里面有一个render方法，返回一个html 模板。
3. 将我们的模板直接放入到ReactDOM.render 中完成渲染。

___

#### 第四节 React HTML模板

```react
class MyApp extends React.Component{
    render(){
        let name = 'lx';
        let age = 12;
        return (
            <div>
                <h1 class="solt">my name is { name }</h1>
                <h2 data-age={ age }>it's { age } years old!!</h2>
            </div>
        )
    }
}

ReactDOM.render(<MyApp />,document.getElementById('app'));
```

我们在这里面使用了 {  } 语法，可以直接存放变量在其中。

但是我们在h1 标签中放入了一个class = "solt" 报错了

```javascript
//错误信息  -> 让我们使用className
Warning: Invalid DOM property `class`. Did you mean `className`?
    in h1 (created by MyApp)
    in div (created by MyApp)
    in MyApp
```

在React 中有很多一部分属性被重新定义了，我们可以直接在文档中找到。

自定义属性和内容都被渲染出来，我们只需要把class 改下就完成了我们想要的东西。

___

#### 第五节 React 组件之间

我们现在将MyApp 作为一个主组件

​	我们还需要做一个列表组件，将列表组件放入主组件之中。

```react
class MyApp extends React.Component{
    render(){
        return (
            <div>
                <List />
            </div>
        )
    }
}
class List extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li>张三</li>
                    <li>李四</li>
                    <li>王五</li>
                </ul>
            </div>
        )
    }
}
ReactDOM.render(<MyApp />,document.getElementById('app'));
```

**注：**

<u>在实际开发中我们不可获取一个人物信息列表肯定不是一个个的写入！ 我们首先解决写入问题。将一个输入放入标签中尝试 { array } 渲染结果发现直接把所有的一个一个挨个渲染出来，那么我们可以把数组改装成我们要渲染的内容及元素标签就完成了我们想要的效果。</u>

将List 组件改成如下

```react
class List extends React.Component{
    render(){
        let userList = ['张三','李四','王五']
        return(
            <div>
                <ul>
                    {
                        userList.map( (item,index)=>{
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

//注: key值一定要写入，让React识别他们是不一样的组件，有利于diff计算（VDOM）
```

数据是从MyApp 中获取的数据我们该怎么办呢 ？？

这时我们需要把数据从MyApp 传入到 List 组件中去。  提供方法props

```react
class MyApp extends React.Component{
    render(){
        let userList = ['张三','李四','王五']
        return (
            <div>
                <List userList={ userList }/>
            </div>
        )
    }
}
class List extends React.Component{
    render(){
        console.log(this);
        return(
            <div>
                <ul>
                    {
                        this.props.userList.map( (item,index)=>{
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
ReactDOM.render(<MyApp />,document.getElementById('app'));

//注意：请观察打印的数据，我们通过MyApp传参 this.props对象中可以找到传入的值
```

**第五节： 怎么渲染一个列表，怎么在父组件中的数据放入子组件中渲染。**

___

#### 第六节  React 中的 state

前端时间看到掘金里面诟病state 的设计，作为一个初学者似懂非懂。在后面的写法中我严格遵守一些规则来使用state，避免state的一些缺陷。

React 中提供了state 属性让我们获取里面的数据，同时改变里面的数据用setState（）这个方法对数据进行修改

```react
class MyApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userList: ['张三','李四','王五']
        }
    }
    render(){
        return (
            <div>
                <List userList={ this.state.userList }/>
            </div>
        )
    }
}
class List extends React.Component{
    render(){
        console.log(this);
        return(
            <div>
                <ul>
                    {
                        this.props.userList.map( (item,index)=>{
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
ReactDOM.render(<MyApp />,document.getElementById('app'));
```

我通过了state存放数据并给了子组件。

我现在来做一个添加修改state 里面的数据。创建一个按钮绑定一个事件。

```react
class MyApp extends React.Component{
    constructor(props){
        super(props);
        this.addRandom = this.addRandom.bind(this);	//注意
        this.state = {
            userList: ['张三','李四','王五']
        }
    }
    addRandom(){
        let name = '哈皮' + Math.floor(Math.random()*100);
        this.setState( (pre) => {	//注意
            return{
                userList: pre.userList.concat([name])
            }
        })
    }
    render(){
        return (
            <div>
                <List userList={ this.state.userList }/>
                <button onClick={ this.addRandom }>addRandom</button>
            </div>
        )
    }
}
class List extends React.Component{
    render(){
        console.log(this);
        return(
            <div>
                <ul>
                    {
                        this.props.userList.map( (item,index)=>{
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
ReactDOM.render(<MyApp />,document.getElementById('app'));
```

上面的代码有两个分别表示了两个注意 ==>  



第一个注意是将组件的this 绑定进去

如果不绑定进去，我们在点击的时候，是被window 调用，那么this 指向的是window，我们使用的babel转的是严格模式，那么this 指向的是一个空对象。



第二个注意是我们说了sate 被诟病的问题，state 是异步的一个操作。可以分别写入两个console进行测试，官方文档中要求禁止直接改变state原来的值，所以我们选择了数组合拼的方法进行处理。

___

#### 第七节 表单 及 删除

瞌睡来麻了，等我想起后在更了吧！

现在我要做一个输入框来添加一个人的列表信息，同时对列表可以进行删除操作！ 一次性代码撸完

```react
//添加一个新的组件 AddUser 组件  此时我们有3个组件 MyApp List AddUser
class MyApp extends React.Component{
    constructor(props){
        super(props);
        this.addUserList = this.addUserList.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.state = {
            userList: ['张三','李四','王五']
        }
    }
    addUserList(uName){
        //做一个验证
        if(uName === ''){
            return '输入的内容不能为空！'
        }else if(this.state.userList.includes(uName)){
            return '输入的内容重复，请重新输入！'
        }
        else{
            this.setState( (pre) => {
                return{
                    userList: pre.userList.concat([uName])
                }
            })
        }
    }
    deleteUser(i){
        this.setState( (pre)=>{
            return {
                userList: pre.userList.filter( (item,index)=>{
                    return i!==index;
                })
            }
        })
    }
    render(){
        return (
            <div>
                <List userList={ this.state.userList } deleteUser={ this.deleteUser } />
                <AddUser addUserList={ this.addUserList }/>
            </div>
        )
    }
}
const List = (props) => {
    return(
        <div>
            <ul>
                {   //其中注意的是 onClick 中返回的是个函数如果直接写就执行返回的是执行的结果 
                    props.userList.map( (item,index)=>{
                        return  <li key={index}>
                                    <span>{item}</span>
                                    <button onClick={ ()=>{ props.deleteUser(index) } }> x </button>
                                </li>
                    })
                }
            </ul>
        </div>
    )
}
class AddUser extends React.Component{
    constructor(props){
        super(props);
        this.FormAddUser = this.FormAddUser.bind(this);     //注意
        this.state = {
            error: undefined
        }
    }
    FormAddUser(e){
        e.preventDefault();     //注意
        let uName = e.target.elements.userName.value;   //注意
        let error = this.props.addUserList(uName);  //注意
        this.setState( ()=>{
            return {
                error           //验证  注意
            }   
        })
        e.target.elements.userName.value = '';
    }
    render(){
        return (
            <div>
                { this.state.error && <p>{this.state.error}</p> }
                <form onSubmit={this.FormAddUser}>
                    <input type="text" name="userName" autoComplete="off"/>
                    <button>addUser</button>
                </form>
            </div>
        )
    }
}
ReactDOM.render(<MyApp />,document.getElementById('app'));
```

注意：

1. 在表单中我们首先要阻止默认事件，然后获取表单内容 e.target.elements.name获取表单元素
2. 在删除每一项的时候，如果我们直接传入的函数带有参数会立即只想，我们可以写个回调函数 return该函数
3. 其中表单验证中，我们在MyApp中判断是否符合条件，如果不符合return相关信息，然后对页面进行提示
4. 在我们操作state数据的时候，千万不能直接改变原数据，通过赋值完成。