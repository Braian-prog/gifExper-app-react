import React from 'react'

function GifGridItem( {id, title, url} ) {
    return (
        <div className="card animate__flip">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}

export default GifGridItem

// className en lugar de class
//esto es porque al ser un archivo de js toma el class como si estuviera haciendo referencia a una clase y no al class del css