import React from 'react'
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';

const TodoListUI = (props) => {
  // 无状态组件性能高
  return (
    <div style={{ marginTop: '10px' }}>
      <Input onChange={props.handleChange} value={props.inputValue} placeholder="Basic usage" style={{ width: '300px', margin: '0 10px' }} />
      <Button onClick={props.handleBtnClick} type="primary">Primary</Button>
      <List
        style={{ width: '300px', marginLeft: '10px' }}
        bordered
        dataSource={props.list}
        renderItem={(item,index) => (
          <List.Item onClick={() => {props.handleItemClick(index)}}>
            <div>{item}</div>
          </List.Item>
        )}
      />
    </div>
  )
}
export default TodoListUI;
