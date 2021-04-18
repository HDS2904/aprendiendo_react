import React, { Fragment } from 'react';


// Funsional components
const PrimeraApp = () => {
    
    // PRIMERA FORMA
    // return (
    //     <div>
    //         <h1>Hola mundo react, dominare todo</h1>
    //         <p>Mas contenidooooo</p>
    //     </div>
    // );

    // SEGUNDA FORMA
    // return (
    //     <Fragment>
    //         <h1>Hola mundo react, dominare todo</h1>
    //         <p>Mas contenidooooo</p>
    //     </Fragment>
    // );

    // CUARTA FORMA (Recomendada)
    return (
        <>
            <h1>Hola mundo react, dominare todo</h1>
            <p>Mas contenidooooo</p>
        </>
    );
}

export default PrimeraApp;