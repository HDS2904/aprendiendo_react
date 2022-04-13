import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer'
import './style.css'

const initialState = [{
	id: new Date().getTime(),
	desc: 'Aprendiendo React',
	done: false
}]

export const TodoApp = () => {
	const [ todos ] = useReducer(todoReducer, initialState)
	console.log(todos);

	return (
		<div>
			<h1>TodoApp</h1>
			<hr />
			<ul> 
				<li>Hola 1</li>
				<li>Hola 2</li>
				<li>Hola 3</li>
			</ul>
		</div>
	)
}
