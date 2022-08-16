import React from 'react'

export const Category = ({category}) => {

  const {name, icon} = category;
  return (
    <li>
      <span>{icon} {name}</span>
    </li>
  )
}
