import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';
import '../02-useEffect/effects.css';

export const CallBackHook = () => {
	const [counter, setCounter] = useState(10);

	// const increment = () => {
	// 	setCounter( counter + 1)
	// }

	// Evitar poner setCounter( counter + value) ya que existe dependencia
	const increment = useCallback(( value )=>{
		setCounter( x => x + value)	// Se elimina la dependencia al pasar "x => x + value"  donde "x" por defecto es el "state"
	},[setCounter])

	return (
		<div>
			<h1>useCallback Hook: {counter} </h1>
			<hr />
			<ShowIncrement increment={increment}/>
		</div>
	)
}

