import React from 'react'
import { Navbar } from '../nav/Navbar'
import { Degrade } from './Degrade'
import { HeaderTitle } from './HeaderTitle'
import Background3 from '../../assets/background3.jpg'
import Cartelera1 from '../../assets/cartelera1.jpg'
import { Header } from './styles'
import useSidebar from '../../hooks/useSidebar'
import { Sidebar } from '../sidebar/Sidebar'
export const HeaderHome = () => {

  const { isShowing, toggle } = useSidebar();
  return (
    <Header image={Background3} imageVertical= {Cartelera1}>
        
      <Degrade header/>
      <Sidebar isShowing={isShowing} toggle={toggle} />

      <Navbar  isShowing={isShowing}toggle={toggle}/>
      <HeaderTitle/>
      <Degrade header={false} />

    </Header>
  )
}
