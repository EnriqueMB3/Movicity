import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Category } from './Category';
import {  ControlBadges, ControlCategories } from './styles'

export const ListCategory = () => {
  const category =  Array.from(Array(9).keys());;

  return (

      <ControlCategories>
        <FaChevronLeft></FaChevronLeft>
          <ControlBadges>
            {
              category.map((_, idx)=> <Category key={idx}/>)
            }
          </ControlBadges>
        <FaChevronRight></FaChevronRight>
      </ControlCategories>

  )
}
