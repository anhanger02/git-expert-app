import { useState, useEffect } from "react"
import { getHttpGifs } from '../helpers/getGifs'
export const useFetchGifd= (category)=>{
    const [state, setstate] = useState({
        data:[],
        loading:true
    });
    useEffect(async ()=>{
        getHttpGifs(category)
            .then(img => 
                setstate({
                    data:img, 
                    loading:false
                    }
                )
            )
    }, [category])
    return state
}