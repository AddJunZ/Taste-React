//管理员
import { createStore} from 'redux'
import reducer from './reducer'

//笔记本作为第一个参数，第二个参数是redux-devtools需要的
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;