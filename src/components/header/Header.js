import React from 'react'
import { Navbar } from '../nav/Navbar'
import { Degrade } from './Degrade'
import { HeaderTitle } from './HeaderTitle'
import Background3 from '../../assets/background3.jpg'
import { Header } from './styles'
export const HeaderHome = () => {

  return (
    <Header image={Background3} >
        
      <Degrade header/>
      <Navbar/>
      <HeaderTitle/>
      <Degrade header={false} />

    </Header>
  )
}
