import React, { Component } from 'react'
import Todo from './Todo'

class TodoList extends Component {
	constructor(props) {
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.toggleClick = this.toggleClick.bind(this)
	}

	componentWillMount() {
		this.props.todosL()
	}

	shouldComponentUpdate(nextProps) { 
		console.log('anterior')
		console.log(this.props.todos)
		console.log('suigiente')
		console.log(nextProps.todos)

		return nextProps.todos !== this.props.todos
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

	toggleClick(id) {
		this.props.toggleTodo(id)
	}

	render() {
		const { todos } = this.props.todos

		// console.log(todos)


		return <div>
			<input type='text' onKeyDown={this.handleSubmit} placeholder='Add Todo'/>
			<ul className=''>
				{
					todos.map((t)=> {
						return <li key={t.id} onClick={()=> {this.toggleClick(t.id)} } className=''>
							<Todo todo={t}/>
						</li>
					})
				}
			</ul>
		</div>
	}
}

export default TodoList