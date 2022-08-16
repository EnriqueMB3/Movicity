import React from 'react'
import { SidebarContainer, SidebarItem, SidebarLink, SidebarMenu, SidebarWrap } from './styles'

import { FaBars, FaTimes} from "react-icons/fa";
// import { Logo } from '../Logo/Logo';
import LogoYellow from '../../assets/logo_yellow.png'
import { Search } from '../shared/Search';


export const Sidebar = ({isShowing, toggle}) => {


    const toggleShow = () =>{
     
        toggle();
    }
   
  
  return (
    <SidebarContainer Show={isShowing} >
        <FaTimes onClick={toggleShow}></FaTimes>
        
        <SidebarWrap>
            <SidebarMenu>
                <SidebarItem>
                <SidebarLink to='/' onClick={toggleShow} >
                    <img src={LogoYellow} alt="" className="logo"/>
                </SidebarLink>
                </SidebarItem>
                <SidebarItem>
                <SidebarLink to='/Movies' onClick={toggleShow} >
                        Movie
                </SidebarLink>
                </SidebarItem>
                <SidebarItem>
                <SidebarLink to='/Tv' onClick={toggleShow} >
                        Tv
                </SidebarLink>
                </SidebarItem>
                <SidebarItem>
                    <Search number={'sidebar'}/>
                </SidebarItem>

            </SidebarMenu>
        </SidebarWrap>
    </SidebarContainer>
  )
}
