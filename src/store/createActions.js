import {CHANGE_INPUT_VALUE,ADD_LIST,DELETE_LIST} from './actionTypes'

export const getChangeInputAction = (value) =>({
  type:CHANGE_INPUT_VALUE,
  value
})

export const getAddListAction = () =>({
  type:ADD_LIST
})

export const getDeleteListAction = (index) => ({
  type:DELETE_LIST,
  index
})