import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ( { value } ) => {

    // Uso de Hooks
    const [ counter, setCounter ] = useState( 0 );

    //Llamado de la funcion obtenida al desestructurar useState
    const handleAdd = ( e ) => {
        setCounter(counter + 1);
        // setCounter( ( c ) => c + 1 )
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={ handleAdd }> +1 </button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;