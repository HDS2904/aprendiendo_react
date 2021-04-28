import React, { useEffect, useState } from 'react'

export const GifGrid = ({category}) => {

    const [count, setCount] = useState(0);

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
                tittle: item.title,
                url: item.images?.downsized_medium.url,
            }
        })
        console.log(gifs);
    }

    return (
        <li>
            <h2>{category}</h2>
            <h3>{count}</h3>
            <button onClick={ () => setCount( count + 1)}>Press</button>
        </li>
    )
}
