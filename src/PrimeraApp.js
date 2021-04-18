import React, { Fragment } from 'react';


// Funsional components
const PrimeraApp = () => {
    
    const cadena = "Hola mundo";
    const boleano = true;
    const arreglo = [1,2,3,4,5,6];
    const objeto = {
        name: 'Carlos',
        age: 15,
    };

    return (
        <>
            <h1>Variables en React</h1>
            <h3> { cadena } </h3>
            <h3> { boleano } </h3>
            <h3> { arreglo } </h3>
            {/* <h3> { objeto } </h3> */}  
            <pre> { JSON.stringify( objeto, null, 3 ) } </pre> 
        </>
    );
}

export default PrimeraApp;