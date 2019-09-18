import React, { Component, Fragment } from 'react'
import { CSSTransition ,TransitionGroup} from 'react-transition-group';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    }
    this.addList = this.addList.bind(this);
  }
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          {
            this.state.list.map((item,index)=>{
              return (
                <CSSTransition
                  classNames="hello"
                  timeout={1000}
                  //消失是空间消失
                  unmountOnExit
                  //触发函数的时间，实际上与css的过渡时间无关
                  onEntering={(el)=>{el.style.color = 'blue'}}
                  appear={true}
                  key={index}
                >
                  <div>{item}</div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <button onClick={this.addList}>Toggle</button>
      </Fragment>
    )
  }
  addList() {
    this.setState((preState)=>({
      list:[...preState.list,'item']
    }))
  }
  a(){
    alert('show')
  }
  b(){
    alert('hide')
  }
}
export default App;
