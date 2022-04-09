import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';

export const MultipleCustomHooks = () => {
	const {state, increment} = useCounter(1);
	const {data, loading} = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);
	const {quote, author} = !!data && data[0];

	return (
		<div>
			<h1>BreakingBad Quotes</h1>
			<hr />
			{ 
				loading
					?<div className='alert alert-info text-center'>
						Loading...
					</div>
					:<blockquote className='blockquote text-end'>
						<p className='mb-0'>{quote}</p>
						<footer className='blockquote-footer'>{author}</footer>
					</blockquote>
			}
			<button 
				onClick={increment}
				className='btn btn-primary'
			>
				Siguiente
			</button>
			
		</div>
	)
}
