import React, { useState } from 'react'
import LogoYellow from '../../assets/logo_yellow.png'
import { Nav } from './styles'
import { FaBars } from "react-icons/fa";
import {  NavLink } from 'react-router-dom';
import { Search } from '../shared/Search';

export const Navbar = ({isShowing, toggle}) => {

    // const [navbar, setNavbar] = useState(false);
    // const [black, setColor] = useState(false);

    // const changeBackground = () => {
    //     if(window.scrollY >= 80){
    //         setNavbar(true)
    //     }else{
    //         setNavbar(false)
    //     }
    // }

    // const changeColor = () => {
    //     if(window.scrollY >= 80){
    //         setColor(true)
    //     }else{
    //         setColor(false)
    //     }
    // }
    
    // window.addEventListener('scroll',changeBackground);
    // window.addEventListener('black',changeColor);

  


    const toggleShow = () =>{
      toggle();
    }
  
  return (
    <Nav Show={!isShowing} >
        <ul >
            <li>
                <NavLink to='/'> 
                    <img src={LogoYellow} alt="" className="logo"/>
                </NavLink>
            </li>
            <li>
                <NavLink to='/Movies'>Movie</NavLink>
            </li>
            <li>
                <NavLink to='/Tv'>Tv</NavLink>
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
