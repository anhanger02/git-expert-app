import React from 'react'

 const GifGridItem = ({id, title, gif}) => {
    return (
        <div className="card ">
            <img src={gif} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
export default GifGridItem;