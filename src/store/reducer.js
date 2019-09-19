//引入actionTypes
import { CHANGE_INPUT_VALUE, ADD_TODO_LIST, DELETE_TODO_ITEM } from './actionTypes'

//初始化的state
const defaultState = {
  list: [],
  inputValue: ''
};

//reducer可以接受state，但不能修改state
//reducer必须是纯函数，给固定的输入，有一定的固定输出，因此内部不能有ajax操作，而且不能有副作用
const reducer = (state = defaultState, action) => {
  // 改变输入值
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  // 添加列表项
  if (action.type === ADD_TODO_LIST) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  //删除列表项
  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  return state;
}

export default reducer;