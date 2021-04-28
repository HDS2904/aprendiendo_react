import React, { useState } from 'react'
import { CategoryAdd } from './components/CategoryAdd';

const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['Dragon Ball', 'Shaman King', 'One piece']);

    // const handleAdd = () => {
    //     setCategories( item => [...categories, 'Lost canvas' ] )
    // }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <CategoryAdd/>

            <hr/>

            <ul>
                {
                    categories.map( (item) => <li key={item}>{item}</li> )
                }
            </ul>
        </div>
    )
}

export default GifExpertApp;