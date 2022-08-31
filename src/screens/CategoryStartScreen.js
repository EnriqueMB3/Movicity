import React from 'react'
import { ListCategory } from '../components/categories/ListCategory'
import { BadgesSection,  } from '../components/categories/styles'

export const CategoryStartScreen = () => {
  return (
    <BadgesSection>
      <h3 className="instruction">Select three categories before start</h3>
      <ListCategory/>
    </BadgesSection>
  )
}
