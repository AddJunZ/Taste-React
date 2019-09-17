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
  }
  render() {
    return (
      <Fragment>
        <CSSTransition
          in={this.state.show}
          classNames="hello"
          timeout={2000}
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
}
export default App;
