import React, {useState} from 'react'
import PropTypes from 'prop-types'
const AddCategory = ( {setCategorias}) => {

    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();//evita que realice el refresh
        if (inputValue.trim().length > 2) {
            setCategorias(cats => [ inputValue, ...cats]);
            setInputValue('');           
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />    
        </form>
    )
}

export default AddCategory
AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}