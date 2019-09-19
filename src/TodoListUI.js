import React, { Component } from 'react'
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';

class TodoListUI extends Component {
  render() {
    return (
      <div style={{ marginTop: '10px' }}>
        <Input onChange={this.props.handleChange} value={this.props.inputValue} placeholder="Basic usage" style={{ width: '300px', margin: '0 10px' }} />
        <Button onClick={this.props.handleBtnClick} type="primary">Primary</Button>
        <List
          style={{ width: '300px', marginLeft: '10px' }}
          bordered
          dataSource={this.props.list}
          renderItem={(item,index) => (
            <List.Item onClick={() => {this.props.handleItemClick(index)}}>
              <div>{item}</div>
            </List.Item>
          )}
        />
      </div>
    )
  }
}
export default TodoListUI;
