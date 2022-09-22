import React from 'react'
import BackGroundAir from '../../assets/background5Air.jpg'

export const Title = ({title}) => {

  const {backdrop_path} = title; 
  return (
    <li>
      <img src={`http://image.tmdb.org/t/p/w500${backdrop_path}`} alt="cartelera" />
    </li>
  )
}
