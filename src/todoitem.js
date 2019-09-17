import React, { Component } from 'react'
import PropTypes from 'prop-types'

//每一项 --> 组件
class TodoItem extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	render() {
		const { item ,test} = this.props;
		return <div onClick={this.handleClick}>{test} - {item}</div>
	}
	handleClick() {
		const { deleteItem, index } = this.props;
    deleteItem(index);
  }
}

//父组件传的值的数据类型限制
TodoItem.propTypes = {
	test:PropTypes.string.isRequired,//必须是string且一定谣传
	item: PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
	deleteItem: PropTypes.func,
	index: PropTypes.number
}

//默认值
TodoItem.defaultProps = {
	test:'Hello World'
}

export default TodoItem;