import React, { Component } from 'react'

class Todo extends Component {
	render() {
		const { todo } = this.props
		
		if(todo.isDone) {
			return <strike>{ todo.text }</strike>
		}else {
			console.log(todo.isDone)
			return <span>{ todo.text }</span>
		}
	}
}

export default Todo