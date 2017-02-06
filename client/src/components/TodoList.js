import React, { Component } from 'react'
import Todo from './Todo'

class TodoList extends Component {
	constructor(props) {
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.toggleClick = this.toggleClick.bind(this)
	}

	handleSubmit(e) {
		const input = e.target
		const text = input.value
		const isEnterKey = (e.which == 13)
		const isLongEnough = text.length > 0

		if(isEnterKey && isLongEnough) {
			input.value = ''
			this.props.addTodo(text)
		}
	}

	toggleClick(id, event) {
		this.props.toggleTodo(id)
	}

	render() {
		const { todos } = this.props

		return <div>
			<input type='text' onKeyDown={this.handleSubmit} placeholder='Add Todo'/>
			<ul className=''>
				{
					todos.map((t)=> {
						return <li key={t.get('id')} onClick={this.toggleClick(t.get('id'))} className=''>
							<Todo todo={t.toJS()}/>
						</li>
					})
				}
			</ul>
		</div>
	}
}

export default TodoList