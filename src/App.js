import React, { Component, Fragment } from 'react'
import { CSSTransition } from 'react-transition-group';
import './App.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    }
    this.handleToggle = this.handleToggle.bind(this);
    this.b = this.b.bind(this);
  }
  render() {
    return (
      <Fragment>
        <CSSTransition
          in={this.state.show}
          classNames="hello"
          timeout={3000}
          //消失是空间消失
          unmountOnExit
          //触发函数的时间，实际上与css的过渡时间无关
          onEntering={(el)=>{el.style.color = 'blue'}}
          onEntered={()=>{this.a()}}
          onExited={this.b}
          appear={true}
        >
          <div>hello</div>
        </CSSTransition>
        <button onClick={this.handleToggle}>Toggle</button>
      </Fragment>
    )
  }
  handleToggle() {
    this.setState((preState)=>({
      show:preState.show ? false : true
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
