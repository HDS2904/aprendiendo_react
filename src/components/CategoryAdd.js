import React, { useState } from 'react'

export const CategoryAdd = () => {

    const [inputValue, setInputValue] = useState('Hola mundo')

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={ handleInputChange }
            />
        </form>
    )
}
