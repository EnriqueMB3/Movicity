import React from 'react'
import { PrimaryButtoon } from '../../styles/Buttons'
import { HeaderTitleSection } from './styles'

export const HeaderTitle = () => {
  return (
    <HeaderTitleSection>
        <p>Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.</p>
        <PrimaryButtoon className="primary-button">Details</PrimaryButtoon>
    </HeaderTitleSection>
  )
}
