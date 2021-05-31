import React, { useState } from 'react'
import { CategoryAdd } from './components/CategoryAdd';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ({ defaultCategories = [] }) => {

    const [ categories, setCategories ] = useState( defaultCategories );

    return (
        <>
            <h2>GifExpertApp</h2>
            <CategoryAdd setCategories={setCategories} />

            <hr/>

            <ul>
                {
                    categories.map( category => 
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    )
                }
            </ul>
        </>
    )
}

export default GifExpertApp;