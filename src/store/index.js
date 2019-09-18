//管理员
import { createStore} from 'redux'
import reducer from './reducer'

//笔记本作为第一个参数
const store = createStore(reducer);
export default store;