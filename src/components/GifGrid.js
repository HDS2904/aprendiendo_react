import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const { data:images, loading } = useFetchGifs( category );

    return (
        < >
            <h3>{category}</h3>
            { loading && <p>LOADING...</p> }
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
