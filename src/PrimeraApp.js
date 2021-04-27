import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Funsional components
const PrimeraApp = ( { saludo, subtitulo } ) => {
    
    return (
        <>
            <h1>PropTypes</h1>
            <h3>{ saludo }</h3>
            <p>{ subtitulo }</p>
        </>
    );
}

// Código para obligar el envio de parametros "required"
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

// Definición de contedido de los props por defecto
PrimeraApp.defaultProps = {
    subtitulo: 'Un subtitulo por defecto'
}

export default PrimeraApp;