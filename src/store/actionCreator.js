import { CHANGE_INPUT_VALUE, ADD_TODO_LIST, DELETE_TODO_ITEM ,INIT_LIST} from './actionTypes'
import axios from 'axios';

export const getInputChangeAction = (value) => ({
  type:CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = () => ({
  type:ADD_TODO_LIST,
})

export const getDeleteItemAction = (index) => ({
  type:DELETE_TODO_ITEM,
  index
})

export const getInitListAction = (list) => ({
  type:INIT_LIST,
  list
})
//上面都是获取action的函数

// 使用redux-thunk后，action可以是一个函数了
export const getTodoList = () => {
  return (dispatch) => {
    axios.get('http://localhost:8081')
    .then((res) => {
      const action = getInitListAction(res.data);
      dispatch(action)
    })
    .catch(e => console.log(e))
  }
}
