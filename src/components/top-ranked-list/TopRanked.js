import React from 'react'
import { Chart } from '../shared/Chart'
import { TopRakedImage } from './styles'
import Cartelera3 from '../../assets/cartelera3.jpg'

export const TopRanked = ({topRanked}) => {

  const {poster_path, vote_average } = topRanked

  return (
    <li>
        <TopRakedImage image={`http://image.tmdb.org/t/p/original/${poster_path}`}>
                <Chart vote_average={vote_average}/>
        </TopRakedImage>
    </li>
  )
}
