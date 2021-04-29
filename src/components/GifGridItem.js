import React from 'react'


export const GifGridItem = ({title,url}) => {
    return (
        <div className="card">
            <img className="card__img" src={url} alt={title}/>
            <p className="card__title">{title}</p>
        </div>
    )
}
