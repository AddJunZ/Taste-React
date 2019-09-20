import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class TodoList extends Component {
  render() {
    return (
      <Fragment>
        <input type="text" value={this.props.inputValue} onChange={this.props.handleInputChange}/>
        <button>提交</button>
        <ul>
          <li>hello</li>
        </ul>
      </Fragment>
    )
  }
}

//映射store到props
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue
  }
}
//store.dispatch 挂载到props上
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e){
      const action = {
        type:'change_input_value',
        value:e.target.value
      }
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);