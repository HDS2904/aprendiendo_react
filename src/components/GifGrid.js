import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async () => {
        const URL = 'https://api.giphy.com/v1/gifs/search?q=one+piece&limit=10&api_key=uGVVa23uqkXVnyco6Ztdkc5Xut4ZpaCL';
        const resp = await fetch(URL);
        const {data} = await resp.json();
        const gifs = data.map( item => {
            return {
                id: item.id,
                title: item.title,
                url: item.images?.downsized_medium.url,
            }
        })
        setImages(gifs);
    }


    return (
        <li>
            <h2>{category}</h2>
            <ol>
                {
                    images.map( ( {id, ...image} ) => {
                        return <GifGridItem 
                            key={id}
                            {...image}
                        />
                    })
                }
            </ol>
        </li>
    )
}
