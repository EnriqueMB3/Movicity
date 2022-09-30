import React from 'react'
import { Link } from 'react-router-dom';
import BackGroundAir from '../../assets/background5Air.jpg'

export const Title = ({ title, type }) => {

  const { backdrop_path, id, backdropTitle } = title;
  return (
    <li>
      <Link to={`/title/${type}/${id}`}>
        <img src={`http://image.tmdb.org/t/p/w500${backdropTitle || backdrop_path}`} alt="cartelera" />
      </Link>
    </li>
  )
}
