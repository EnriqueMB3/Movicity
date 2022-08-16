import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";



export const SidebarContainer  = styled.nav`
    display:none;
    height:100vh; 
    width:100vw;
    position:fixed;
    top: 0;
    left: 0;
    background-color: #0d0d0d;
    /* transition: 0.3s ease-in-out; */
    z-index:999;
    animation: apper;
    animation-duration: .3s;

    svg{
        color: var(--main-yellow);
        position: fixed;
        z-index: 999;
        width: 1.2rem;
        height: 1.2rem;
        align-items: center;
        top: 0;
        right:8px;
        transition: 0.3s ease-in-out;
        cursor:pointer;
        margin: 1.5rem;
    }
     @media screen and (max-width: 720px) {
       display:${({Show}) =>  Show? 'block' : 'none'  };
    }

    @keyframes apper {
        from {
            opacity:0;
        }

        to {
            opacity:.95;
        }
    }
`

export const SidebarLink = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: var(--main-yellow);
        transition: 0.2s ease-in-out;
    }

    
`

export const SidebarMenu = styled.ul`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 600px) {
        display:flex;
    }
`

export const SidebarWrap  = styled.div`
    display: flex;
    justify-content: center;
    align-items:stretch;
    height:100%;
`

export const SidebarItem = styled.li`
    margin-bottom: 1.5rem;
    .active{
        color: var(--main-yellow) !important;
        font-weight:bold !important;
    }

`