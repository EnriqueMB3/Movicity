import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Categories } from './Categories';
import { Category } from './Category';
import {  ControlBadges, ControlCategories } from './styles'

export const ListCategory = () => {
  

  return (

      <ControlCategories>
        <FaChevronLeft></FaChevronLeft>
          <ControlBadges>
            {
              Categories[0].map((category, idx)=> <Category key={idx} category={category} />)
            }
          </ControlBadges>
        <FaChevronRight></FaChevronRight>
      </ControlCategories>

  )
}
