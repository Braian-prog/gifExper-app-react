import React, {Fragment, useEffect, useState} from 'react'
import GifGridItem from '../Components/GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

//useEffect permite ejecutar cierto codigo pero de manera CONDICIONAL

function GifGrid({categoria}) {
   
    const {data:images, loading} = useFetchGifs(categoria);

    // useEffect ( () => {
    //     getGifs(categoria)
    //         .then(img => setImages(img)) // .then(setImages), es lo mismo
    // }, [categoria])

    

    return (
        <Fragment>
            <h3>{categoria}</h3> 
            
            {loading && <p>Loading</p> }
            
            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key= {img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </Fragment>
    )
}

export default GifGrid
