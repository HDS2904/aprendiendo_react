import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const CategoryAdd = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value )
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Elimina la acción por defecto del tag form (envio del evento por default)
        if ( inputValue.trim().length > 1){
            setCategories( cats => [ inputValue, ...cats ]) // Permite agregar nuevo valor sin necesidad de mandar categorias del otro componente
            setInputValue('')   // Limpia el input
        }
    }

    return (
        <form onSubmit={handleSubmit}>
          <p>{inputValue}</p>
            <input 
                type="text"
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>
    )
}

// Propiedades del componente
CategoryAdd.protoType = {
    setCategories:  PropTypes.func.isRequired
}