## Take Care

### React的三个方面
1. React JS：用React的语法来编写网页的交互效果
2. React Native：用React的语法来编写原生的app应用
3. React VR：开发全景应用

### 初始化项目
1. ```npm install create-react-app -g```全局安装react脚手架工具
2. ```create-react-app todolist```创建react安装目录，```cd todolist```进入项目目录文件夹，```npm run start```启动项目，浏览器访问```localhost:3000```即可进行访问

### JSX与JS
> JSX即JavaScript XML，一种在react组件内部构造标签的类XML语法
1. JSX
```js
class TodoList extends React.Component {
  render() {
    return (
      <h1 className="title">Hello World</h1>
    );
  }
```
2. JS
```js
class TodoList extends React.Component {
  render() {
    return (
      React.createElement(
        'h1',
        {className: 'title'},
        'Hello World'
      )
    );
  }
```
JSX实际上是一种React.createElement的简单实现

### Fragment
Fragment替换无意义的外部标签，渲染的时候会消失
```js
import React,{Fragment} from 'react';
return (
  <Fragment>
  {/* 最后根节点会消失 */}
  </Fragment>
)
```

### keep studying...
