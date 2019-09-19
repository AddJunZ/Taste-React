import React, { Component } from 'react'
import store from './store'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreator'
import TodoListUI from './TodoListUI'

class TodoList extends Component {
  constructor(props) {
    super(props);
    //数据来源于store
    this.state = store.getState();
    //按钮点击
    this.handleBtnClick = this.handleBtnClick.bind(this);
    //输入内容变化
    this.handleChange = this.handleChange.bind(this);

    //订阅store的变化，当store变化则触发对应函数
    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange);

    this.handleItemClick = this.handleItemClick.bind(this);
  }
  render() {
    return <TodoListUI 
      inputValue={this.state.inputValue}
      handleChange={this.handleChange}
      handleBtnClick={this.handleBtnClick}
      handleStoreChange={this.handleStoreChange}
      handleItemClick={this.handleItemClick}
      list={this.state.list}
    />
  }
  // 改变input
  handleChange(e) {
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }
  //添加进list中
  handleBtnClick() {
    const action = getAddItemAction();
    store.dispatch(action);
  }
  //store变化触发函数
  handleStoreChange() {
    //this.setState本来就是要接受一个参数，然后将对应需要更新的字段值进行替换
    this.setState(store.getState());
  }
  //每一条点击消失
  handleItemClick(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }
}
export default TodoList;