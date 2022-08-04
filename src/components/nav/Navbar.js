import React from 'react'
import LogoYellow from '../../assets/logo_yellow.png'
import { Nav } from './styles'
import { FaSearch } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <Nav>
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
                <i className="fa-solid fa-magnifying-glass"></i>
            </li>
            <li>
                <FaSearch/>
            </li>
        </ul>
    </Nav>
  )
}
