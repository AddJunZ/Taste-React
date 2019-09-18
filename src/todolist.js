import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];

class TodoList extends Component {
  render() {
    return (
      <div style={{ marginTop: '10px' }}>
        <Input placeholder="Basic usage" style={{ width: '300px', margin: '0 10px' }} />
        <Button type="primary">Primary</Button>
        <List
        style={{width:'300px',marginLeft:'10px'}}
          bordered
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <div>{item}</div>
            </List.Item>
          )}
        />
      </div>
    )
  }
}
export default TodoList;