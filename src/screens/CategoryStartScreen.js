import React from 'react'
import { ListCategory } from '../components/categories/ListCategory'
import { BadgesSection, CircleControl, ControlPages } from '../components/categories/styles'
import { PrimaryButtoon } from '../styles/Buttons'

export const CategoryStartScreen = () => {
  return (
    <BadgesSection>
      <h3 className="instruction">Select three categories before start</h3>
      <ListCategory/>

      <ControlPages>
        <CircleControl/>
        <CircleControl/>
        <CircleControl/>
      </ControlPages>

      <div>
        <PrimaryButtoon center={true} >Start</PrimaryButtoon>
        <h4>1/3</h4>
      </div>
    </BadgesSection>
  )
}
