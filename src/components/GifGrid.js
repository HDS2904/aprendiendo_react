import React from 'react'

export const GifGrid = ({category}) => {

    const getGifs = async () => {
        const URL = 'https://api.giphy.com/v1/gifs/search?q=one+piece&limit=10&api_key=uGVVa23uqkXVnyco6Ztdkc5Xut4ZpaCL';
        const resp = await fetch(URL);
        const data = await resp.json();
        const gifs = data.map( item => {
            return {
                id: item.id,
                tittle: item.title,
                url: item.images.downsized_medium.url
            }
        })
    }

    getGifs()

    return (
        <li>
            <h2>{}</h2>
        </li>
    )
}
