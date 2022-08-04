import styled from "styled-components";

export const Nav = styled.nav`
    color: white;
    z-index: 2;
    padding: 0;
    margin: 0;
        ul{
            list-style:none;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 20px;
            width: 100%;
            padding: 1em 2em 0 4em;
            font-weight: 300;
            cursor: pointer;
            li:nth-child(4){
                margin-left: auto;
            }
            li:hover{
                color: var(--main-yellow);
            }
        }
        svg{
            color: var(--main-yellow);
            cursor: pointer;
            font-size: large;
        }
        a{
            color:white;
        }
        a:hover{
            color: var(--main-yellow);
        }
    @media (max-width: 720px) {
        color: white;
        z-index: 2;
        padding: 0;
        margin: 0;
        i{
            color: var(--main-yellow);
            cursor: pointer;
            font-size: large;
        }
        ul{
            position: fixed;
            background-color: #262424;
            padding: .5em 2em .5em 2em;
            display: flex;
        }
        ul li:last-child{
            display: block;
            margin-left: auto;
        }
        ul li:not(:nth-child(1)){
            display: none;
        }
    }

`