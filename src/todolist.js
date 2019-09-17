import React, { Fragment, Component } from 'react';
import TodoItem from './todoitem'
import './style.css'
// import axios from 'axios'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
    this.changeInput = this.changeInput.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.addList = this.addList.bind(this);
  }
  render() {
    console.log('render');
    return (
      <Fragment>
        <label htmlFor="insertArea"></label>
        <input id="insertArea" className="input" value={this.state.inputValue} onChange={this.changeInput} type="text" /><button onClick={this.addList}>提交</button>
        <ul>
          {
            this.getItem()
          }
        </ul>
      </Fragment>
    )
  }
  componentDidMount(){
    // axios.post('/api/todolist')
    // .then(()=>{console.log('success');
    // })
    // .catch((err)=>{console.log('err');
    // })
  }
  getItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={item}
          item={item}
          index={index}
          deleteItem={this.handleDelete}
        ></TodoItem>
      )
    })
  }
  changeInput(e) {
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }))
  }
  addList() {
    this.setState((preState) => {
      return {
        list: [...preState.list, preState.inputValue],
        inputValue: ''
      }
    })
  }
  handleDelete(index) {
    this.setState((preState) => {
      let nowList = preState.list;
      nowList.splice(index, 1);
      return {
        list: nowList
      }
    })
  }
}

export default TodoList;