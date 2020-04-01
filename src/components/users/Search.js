import React, { useState } from 'react'
import PropTypes from 'prop-types'


const Search = ({searchUsers, clearUsers, setAlert, showClear}) => {
    const [text, setText ] = useState('')

    

    

    const onSubmit = (e) => {
        e.preventDefault()
        if(text === '') {
            setAlert('Please enter something', 'light')
        } else {
            searchUsers(text)
            // reset input form to empty
            setText('')
        }  
    }

    const onChange = (e) => {
        setText(e.target.value)
        // using bracket notation (as a key) for a dynamic onchange function, e.target.name is referencing the name property and e.target.value for value property
    }

        return (
            <div>
                <form onSubmit={onSubmit} className='form'>
                    <input 
                        type='text' 
                        name='text' 
                        placeholder='Search Users...' 
                        value={text} 
                        onChange={onChange} />
                    <input 
                        type='submit' 
                        value='Search' 
                        className='btn btn-dark btn-block' />

                </form>
                {showClear && ( 
                    <button 
                        className='btn btn-light btn-block' 
                        onClick={clearUsers}>
                            Clear
                    </button>
                    )}
               
            </div>
        )
}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
}

export default Search
