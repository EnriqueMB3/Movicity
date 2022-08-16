import React, { useEffect, useState } from 'react'
import LogoYellow from '../../assets/logo_yellow.png'
import { Nav } from './styles'
import { FaBars } from "react-icons/fa";
import {  NavLink } from 'react-router-dom';
import { Search } from '../shared/Search';

export const Navbar = ({isShowing, toggle}) => {

    const [headerColor, setHeaderColor] = useState("transparent")
    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
        window.addEventListener('load', listenScrollEvent);

      
        return () => {
            window.removeEventListener('scroll', listenScrollEvent);
            window.removeEventListener('load', listenScrollEvent);

        }
          

      }, []);
  
      const listenScrollEvent = (event) => {
        if (window.scrollY < 70) {
            return setHeaderColor("transparent")
        } else if (window.scrollY > 280) {
            return setHeaderColor("#1a1a1a")
        } 
      }


    const toggleShow = () =>{
      toggle();
    }
  
  return (
    <Nav Show={!isShowing} backColor={headerColor}>
        <ul >
            <li>
                <NavLink to='/' > 
                    <img src={LogoYellow} alt="" className="logo"/>
                </NavLink>
            </li>
            <li>
                <NavLink   to='/Movies'>Movie</NavLink>
            </li>
            <li>
                <NavLink   to='/Tv'>Tv</NavLink>
            </li>
            <li>
                <Search/>
            </li>
            <li>
                <FaBars  onClick={toggleShow}/>
            </li>
        </ul>
    </Nav>
  )
}
