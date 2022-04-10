import React from 'react'

export const Small = React.memo(({value}) => {
	console.log("Llamando el componente Small");
	return (
		<small>{value}</small>
	)
})
