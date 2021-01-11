import React from 'react'
import { useFetchGifd } from '../hooks/useFecthGifs';
// 
import GifGridItem from './GifGridItem'

const GifGrid = ({category}) => {
    
    const {data:images, loading} = useFetchGifd(category);

    return (
        <div className="card-grid animate__animated animate__fadeInDown">
            <h3>{category}</h3>
            {
               loading && <p>Loading</p>
            }
            {
                images.map(img=> (
                    <GifGridItem 
                    key={img.id}
                    {...img}/>
                ))
            }
        </div>
    )
}

export default GifGrid;