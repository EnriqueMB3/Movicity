import React from 'react'
import { PrimaryButtoon } from '../../styles/Buttons'
import { HeaderTitleSection } from './styles'

export const HeaderTitle = ({original_title, logo, overview}) => {


  return (
    <HeaderTitleSection>
        {
          (logo === 'undefined')? <h1>{original_title}</h1>: <img src={ `http://image.tmdb.org/t/p/original/${logo}` }></img> 
        }
        <p>{overview}</p>
        <PrimaryButtoon className="primary-button">Details</PrimaryButtoon>
    </HeaderTitleSection>
  )
}
