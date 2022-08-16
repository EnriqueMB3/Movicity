import React, { useEffect, useRef, useState } from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa'
import { useComponentVisible } from '../../hooks/useComponentVisible';
import { SearchBar } from './styles'



export const Search = ({number}) => {


  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

  const onClick = () => {
    setIsComponentVisible(!isComponentVisible)
  }

  return (
    <SearchBar ref={ref} id='searchbox' >
           <div className='search_bar'>
      <input id={`searchOne${number}`} type='checkbox'  checked={isComponentVisible} onClick={onClick} onChange={e => {}}/>
      <label htmlFor={`searchOne${number}`}>
            <FaSearch/>
            <FaTimes className='last'/>
      </label>
      <input placeholder='Search...' type='text'/>
            </div>
    </SearchBar>
  )
}
