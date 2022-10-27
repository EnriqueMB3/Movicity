import React from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom';
import { useComponentVisible } from '../../hooks/useComponentVisible';
import { useForm } from '../../hooks/useForm';
import { SearchBar } from './styles'
import queryString from 'query-string'



export const Search = ({number}) => {


  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

  const onClick = () => {
    setIsComponentVisible(!isComponentVisible)
  }

  const navigate = useNavigate();

  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const { searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/results/?q=${searchText}`);
  }

  return (
    <SearchBar ref={ref} id='searchbox' >
      <form onSubmit={onSubmit}>

           <div className='search_bar'>
          <input id={`searchOne${number}`}
            type='checkbox'
            checked={isComponentVisible}
            onClick={onClick}
            onChange={e => { }}

          />
      <label htmlFor={`searchOne${number}`}>
            <FaSearch/>
            <FaTimes className='last'/>
      </label>
          <input placeholder='Search...' type='text'
            className="form-control"
            name="searchText"
            autoComplete="off"
            onChange={onInputChange}
            value={searchText} />
            </div>
      </form>
    </SearchBar>
  )
}
