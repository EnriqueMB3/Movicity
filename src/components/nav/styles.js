import styled from "styled-components";

export const Nav = styled.nav`
    color: white;
    z-index: 1000;
    padding: 0;
    margin: 0;
        ul{
            background-color: ${({backColor}) => backColor };
            list-style:none;
            display: flex;
            flex-direction: row;
            align-items: center;
            position: fixed;
            gap: 20px;
            width: 100%;
            padding: .5em 2em .5em 4em;
            font-weight: 300;
            li:nth-child(4){
                margin-left: auto;
            }
            li:nth-child(5){
                display:none;
            }
            li a{
                color:white;
                text-decoration:none;
            }
            li a:hover{
                color: var(--main-yellow);
            }
            .active{
                color: var(--main-yellow) !important;
                font-weight:bold !important;
            }
        }

       
        svg{
            color: var(--main-yellow);
            cursor: pointer;
            font-size: large;
        }
    @media (max-width: 720px) {
        color: white;
        z-index: 200;
        padding: 0;
        margin: 0;
        svg{
            color: var(--main-yellow);
            cursor: pointer;
            font-size: large;
        }
        ul{
            background-color: ${({backColor}) => backColor };
            position: fixed;
            padding: .5em 1.5em .5em 1.5em;
            display: flex;
        }
        ul li:not(:nth-child(1)){
            display: none;
        }
        ul li:last-child{
            display: block;
            margin-left: auto;
        }
    }

`