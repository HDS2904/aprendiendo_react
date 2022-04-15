import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ( { handleAdd } ) => {
	const [ { description }, handleInputChange, reset ] = useForm({ description: ''});

	const handleSubmit = (e) => {
		e.preventDefault();

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

		handleAdd(action)
		reset();
	}

	return (
		<>
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
		</>
	)
}
