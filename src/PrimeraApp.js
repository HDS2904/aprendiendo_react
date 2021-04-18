import React, { Fragment } from 'react';


// Funsional components
const PrimeraApp = ( { saludo = 'Sin contenido' } ) => {
    
    return (
        <>
            <h1>Extrayendo datos de props</h1>
            <h3> { saludo } </h3>
        </>
    );
}

export default PrimeraApp;