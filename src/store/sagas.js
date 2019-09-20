import { takeEvery, put } from 'redux-saga/effects'
import { DO_INIT_LIST } from './actionTypes'
import {getInitListAction} from './actionCreator'
import axios from 'axios'


function* getUserList() {
  try{
    const res = yield axios.get('http://localhost:8081');
    const action = getInitListAction(res.data);
    yield put(action);//put替代store.dispatch
  }catch(e){
    console.log('list.json 请求失败');
  }
}


//generator函数
function* mySaga() {
  // 捕捉每一个action为特定action的触发对应函数
  yield takeEvery(DO_INIT_LIST, getUserList);
}

export default mySaga;



// sagas.js也可以拿到action
