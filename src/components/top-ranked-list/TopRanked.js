import React from 'react'
import { Link } from 'react-router-dom'
import { Chart } from '../shared/Chart'
import { TopRakedImage } from './styles'

export const TopRanked = ({ topRanked, type }) => {

  const { poster_path, vote_average, id } = topRanked

  return (
    <li>
      <Link to={`/title/${type}/${id}`}>  
        <TopRakedImage image={`http://image.tmdb.org/t/p/w500/${poster_path}`}>
          <Chart vote_average={vote_average} />
        </TopRakedImage>
      </Link>
    </li>
  )
}
