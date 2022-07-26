import React from 'react'
import { Chart } from '../shared/Chart'
import { TopRakedImage } from './styles'
import Cartelera3 from '../../assets/cartelera3.jpg'

export const TopRanked = () => {
  return (
    <li>
        <TopRakedImage image={Cartelera3}>
                <Chart/>
        </TopRakedImage>
    </li>
  )
}
