import React, { Fragment, useState } from 'react'
import AddCategory from './Components/AddCategory'
import GifGrid from './Components/GifGrid'
export default function GifExpertApp() {

    const [categorias, setCategorias] = useState( ['One Punch']) 

    return (
       <Fragment>
           <h2>GifExpertApp</h2>
           <AddCategory setCategorias={setCategorias} />
           <hr />
           <ol>
               {
                   categorias.map(categoria => 
                        <GifGrid 
                            key = {categoria}
                            categoria = {categoria}
                         />
                    )
               }
           </ol>
       </Fragment>
    )
}
