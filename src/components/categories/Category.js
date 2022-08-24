import React from 'react'

export const Category = ({category, selectCategory}) => {

  const {name, icon, selected} = category;



  return (
    <li className={selected? 'active': ''} onClick={() => selectCategory(category)}>
      <span>{icon} {name}</span>
    </li>
  )
}
