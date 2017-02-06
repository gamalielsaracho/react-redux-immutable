import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { addTodo, toggleTodo } from '../actions/todo'


function mapStateToProps(state) {
	return {
		todos: state.todos
	}
}

function mapDispatchToProps(dispatch) {
	return {
		addTodo: text => dispatch(addTodo(text)),
		toggleTodo: id => dispatch(toggleTodo(id))
	}
}

let TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)

export default TodoListContainer