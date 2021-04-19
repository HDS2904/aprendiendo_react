import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( { value } ) => {

    // Uso de Hooks
    const [ counter, setCounter ] = useState( value );

    //Llamado de la funcion obtenida al desestructurar useState
    const handleAdd = (  ) => setCounter(counter + 1)

    const handlePop = (  ) => setCounter(counter - 1)

    const handleReset = (  ) => setCounter( value )

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleReset }> reset </button>
            <button onClick={ handlePop }> -1 </button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;