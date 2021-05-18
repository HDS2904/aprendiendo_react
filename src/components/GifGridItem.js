import React from 'react'
import PropTypes from 'prop-types'


export const GifGridItem = ({title,url}) => {
    return (
        <div className="card animate__animated animate__backInRight">
            <img className="card__img" src={url} alt={title}/>
            <p className="card__title">{title}</p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}