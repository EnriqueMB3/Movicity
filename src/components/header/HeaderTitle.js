import React from 'react'
import { Link } from 'react-router-dom'
import { PrimaryButtoon } from '../../styles/Buttons'
import { HeaderTitleSection } from './styles'

export const HeaderTitle = ({ original_title, logo, overview, id, type }) => {


  return (
    <HeaderTitleSection>
        {
        (logo === 'undefined') ? <h1>{original_title}</h1> : <img src={`http://image.tmdb.org/t/p/w500/${logo}`}></img> 
        }
      <p>{overview}</p>
      <Link to={`/title/${type}/${id}`}>
        <PrimaryButtoon className="primary-button">Details</PrimaryButtoon>
      </Link>
    </HeaderTitleSection>
  )
}
