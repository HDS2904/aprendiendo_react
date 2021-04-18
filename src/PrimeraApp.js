import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Funsional components
const PrimeraApp = ( { saludo } ) => {
    
    return (
        <>
            <h1>PropTypes</h1>
            <h3> { saludo } </h3>
        </>
    );
}

// Código para obligar el envio de parametros "required"
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;