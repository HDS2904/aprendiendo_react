import React, { useState } from 'react'

const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['Dragon Ball', 'Shaman King', 'One piece']);

    const handleAdd = () => {
        setCategories( item => [...categories, 'Lost canvas' ] )
    }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <hr/>

            <button onClick={ handleAdd }>Agregar</button>

            <ul>
                {
                    categories.map( (item) => <li key={item}>{item}</li> )
                }
            </ul>
        </div>
    )
}

export default GifExpertApp;