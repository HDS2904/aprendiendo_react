import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([])

    useEffect( () => {
        getGifs( category )
            .then( setImages )
    }, [ category ])

    return (
        < >
            <h3>{category}</h3>
            <div className="container">
                {
                    images.map( ( {id, ...image} ) => {
                        return <GifGridItem 
                            key={id}
                            {...image}
                        />
                    })
                }
            </div>
        </>
    )
}
