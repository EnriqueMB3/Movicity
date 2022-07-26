import styled from "styled-components";

export const ListHorizontal = styled.ul`
    margin: .5em 0 0 0em;
    display: flex;
    flex-direction: row;
    gap: 1em;
    width: auto; 
    overflow: auto;
    height: 17em;
    scrollbar-width: none;
    overflow-y: scroll;
    ::-webkit-scrollbar {
    display: none;
    }
    li:first-child {
        margin-left: 4em;
    }
    li img{
        height: 16em;
        border-radius: 4px;
        cursor: pointer;
    }
`