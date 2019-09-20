import { CHANGE_INPUT_VALUE, ADD_TODO_LIST, DELETE_TODO_ITEM, INIT_LIST, DO_INIT_LIST } from './actionTypes'

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = () => ({
  type: ADD_TODO_LIST,
})

export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})

export const getInitListAction = (list) => ({
  type: INIT_LIST,
  list
})

export const doInitList = () => ({
  type: DO_INIT_LIST,
})
