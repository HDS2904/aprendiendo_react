import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import './style.css'
import { useForm } from '../../hooks/useForm'
import { TodoList } from './TodoList'

const initialState = [{
	id: new Date().getTime(),
	desc: 'Aprendiendo React',
	done: false
}]

const init = () => {
	return JSON.parse(localStorage.getItem('TODOS')) || []
}

export const TodoApp = () => {
	const [ todos, dispatch ] = useReducer(todoReducer, [], init);
	const [ { description }, handleInputChange, reset ] = useForm({ description: ''});

	console.log(description);

	useEffect(() => {
		localStorage.setItem('TODOS',JSON.stringify(todos))
	}, [todos])
	
	
	const handleSubmit = (e) => {

		e.preventDefault();
		console.log(e);
		if(e.description?.trim().length <= 0){
			return;
		}

		const newTodo = {
			id: new Date().getTime(),
			desc: description,
			done: false
		}

		const action = {
			type: 'add',
			payload: newTodo
		}

		dispatch(action);
		reset();
	}

	const handleDelete = (id) => {

		console.log("id: ", id)
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
					<h4>Agregar TODO</h4>
					<hr />
						<form onSubmit={handleSubmit}>
							<input 
								className='form-control'
								type="text" 
								name="description"
								autoComplete='off'
								placeholder='Actividad...'
								value={description}
								onChange={handleInputChange}
							/>
							<button
								className='btn btn-outline-primary mt-3 btn-block'
								type='submit'
							>
								Agregar
							</button>
						</form>
				</div>
			</div>
		</div>
	)
}
