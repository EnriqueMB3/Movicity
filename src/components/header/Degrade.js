import React from 'react'
import { DegradeColor } from './styles'

export const Degrade = ({header= true}) => {
  return (
    header ?  <DegradeColor/>: <DegradeColor bottom={true}/>  
  )
}
