import styled from "styled-components";

export const ListVerticalMovie = styled.ul`
    margin: .5em 0 0 0em;
    display: flex;
    flex-direction: row;
    gap: 1em;
    width: auto; 
    overflow: auto;
    /* height: 37em; */
    scrollbar-width: none;
    overflow-y: scroll;
    li:first-child {
        margin-left: 4em;
    }
    li img{
    height: 35em;
    border-radius: 4px;
    cursor: pointer;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    @media (max-width: 720px) {
        li img{
            height: 24em;
        }
        li:first-child {
            margin-left: 2em;
        }
    }


`