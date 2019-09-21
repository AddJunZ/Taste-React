import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {getDeleteListAction,getAddListAction,getChangeInputAction} from './store/createActions'

const TodoList = (props) => {
  const { inputValue, handleBtnClick, handleInputChange, list,handleListClick } = props;

  return (
    <Fragment>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleBtnClick}>提交</button>
      <ul>
        {
          list.map((item, index) => {
            return (
              <li onClick={()=>{handleListClick(index)}} key={index}>{item}</li>
            )
          })
        }
      </ul>
    </Fragment>
  )
}

//映射store到props
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
//store.dispatch 挂载到props上
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const action = getChangeInputAction(e.target.value);
      dispatch(action);
    },
    handleBtnClick() {
      const action = getAddListAction();
      dispatch(action);
    },
    handleListClick(index){
      const action = getDeleteListAction(index);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);