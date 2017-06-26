import { List, Map, fromJS } from 'immutable'

let INITIAL_STATE = fromJS({
	todos:[]
})

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case 'ADD_TODO':
		// console.log(action.payload)
			state = state.update('todos', todos => todos.push(action.payload))
			// console.log(state.getIn(['todos'])._tail.array)
			return state

		case 'TOGGLE_TODO':
			console.log(state)
			return state.map((t) => {
				console.log(t._tail.array)
				if(t.get('id') === action.payload.id) {
					return t.update('isDone', isDone => !isDone)
				}else {
					return t
				}
			})

		case 'TODOS':
		// console.log(state.getIn(['todos']))
			return state

		default:
			return state
	}
}