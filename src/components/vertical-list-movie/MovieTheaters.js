import React from 'react'
import { fetchConToken } from '../../helpers/fetch';
// import CarteleraImg from '../../assets/cartelera1.jpg'
import { Link } from 'react-router-dom';

export const MovieTheaters = ({movie}) => {

  const { poster_path, id } = movie;


  return (
    <li>
      <Link to={`/movie/${id}`}>
        <img src={`http://image.tmdb.org/t/p/w500/${poster_path}`} alt="cartelera" />
      </Link>
    </li>
  )
}
