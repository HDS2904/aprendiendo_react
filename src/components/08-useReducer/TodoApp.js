import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import './style.css'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'

const init = () => {
	return JSON.parse(localStorage.getItem('TODOS')) || []
}

export const TodoApp = () => {
	const [ todos, dispatch ] = useReducer(todoReducer, [], init);

	useEffect(() => {
		localStorage.setItem('TODOS',JSON.stringify(todos))
	}, [todos])

	const handleAdd = (newTodo) => {
		dispatch(newTodo);
	}

	const handleDelete = (id) => {
		const action = {
			type: 'delete',
			payload: id
		}
		dispatch(action)
	}

	const handleToggle = (id) => {
		dispatch({
			type: 'toggle',
			payload: id
		})
	}

	return (
		<div>
			<h1>TodoApp ({todos.length}) </h1>
			<hr />
			<div className="row">
				<div className="col-7">
					<TodoList
						todos={todos}
						handleDelete={handleDelete}
						handleToggle={handleToggle}
					/>
				</div>
				<div className="col-5">
					<TodoAdd
						handleAdd={handleAdd}
					/>
				</div>
			</div>
		</div>
	)
}
