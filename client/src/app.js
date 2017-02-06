// Entry point.
import React from 'react'
import { render } from 'react-dom'
import TodoPage from './pages/TodoPage'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)

render(<Provider store={store}>
	<TodoPage/>
</Provider>, document.getElementById('app'))