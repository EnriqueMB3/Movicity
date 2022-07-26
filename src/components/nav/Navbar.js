import React from 'react'
import { Link } from 'react-router-dom'
import LogoYellow from '../../assets/logo_yellow.png'
import { Nav } from './styles'
import { FaSearch } from "react-icons/fa";

export const Navbar = () => {
  return (
    <Nav>
        <ul >
            <li>
            <img src={LogoYellow} alt="" className="logo"/>
            </li>
            <li>
            <a >Movie</a>
            </li>
            <li>
                <a>Tv</a>
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
