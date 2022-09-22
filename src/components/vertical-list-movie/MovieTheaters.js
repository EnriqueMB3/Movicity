import React from 'react'
// import CarteleraImg from '../../assets/cartelera1.jpg'


export const MovieTheaters = ({movie}) => {

  const {poster_path} = movie; 

  return (
    <li>
      <img src={`http://image.tmdb.org/t/p/w500/${poster_path}`} alt="cartelera" />
    </li>
  )
}
