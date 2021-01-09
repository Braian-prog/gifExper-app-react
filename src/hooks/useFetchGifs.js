import {useState, useEffect} from 'react'
import {getGifs} from '../helpers/GetGifs'

export const useFetchGifs = (categoria) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    })
   
    useEffect(() => {
        
        setTimeout(() => {
            getGifs(categoria).then(imgs => {
                setstate({
                    data: imgs,
                    loading: false
                });
            })
        }, 3000);
        
    }, [categoria])

    return state;
}
