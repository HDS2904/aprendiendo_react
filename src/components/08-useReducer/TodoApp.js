import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer'
import './style.css'

const initialState = [{
	id: new Date().getTime(),
	desc: 'Aprendiendo React',
	done: false
}]

export const TodoApp = () => {
	const [ todos, dispatch ] = useReducer(todoReducer, initialState)
	console.log(todos);
	
	const handleSubmit = (e) => {
		e.preventDefault();

		const newTodo = {
			id: new Date().getTime(),
			desc: 'Nueva actividad',
			done: false
		}

		const action = {
			type: 'add',
			payload: newTodo
		}

		dispatch(action);
	}

	return (
		<div>
			<h1>TodoApp ({todos.length}) </h1>
			<hr />
			<div className="row">
				<div className="col-7">
					<ul className='list-group list-group-flush'> 
						{
							todos.map((todo, index) => (
								<li
									className='list-group-item'
									key={todo.id}
								>
									<p> { index + 1 }. { todo.desc } </p>
									<button
										className='btn btn-danger'
									>
										Borrar
									</button>
								</li>
							))
						}
					</ul>
				</div>
				<div className="col-5">
					<h4>Agregar TODO</h4>
					<hr />
						<form onSubmit={handleSubmit}>
							<input 
								className='form-control'
								type="text" 
								name="description"
								autoComplete='false'
								placeholder='Actividad...'
							/>
							<button
								className='btn btn-outline-primary mt-1 btn-block'
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
