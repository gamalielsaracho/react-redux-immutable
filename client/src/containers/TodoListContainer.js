import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { addTodo, toggleTodo, todos } from '../actions/todo'
import { toJS } from 'immutable'



function mapStateToProps(state) {
	// console.log(state.todos.toJS())
	return {
		todos: state.todos.toJS()
	}
}

function mapDispatchToProps(dispatch) {
	return {
		addTodo: text => dispatch(addTodo(text)),
		toggleTodo: id => dispatch(toggleTodo(id)),

		todosL: function() {
			dispatch(todos())
		}

	}
}

let TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodoListContainer