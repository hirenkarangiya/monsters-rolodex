import React from 'react'
import './SearchBox.style.scss';

export default function SearchBox({ placeholder, handleChange}) {
    return (
        <>
          <input className="search-input" type="search" placeholder={placeholder} onChange={ handleChange } />  
        </>
    )
}
