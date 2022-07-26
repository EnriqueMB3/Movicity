import styled from "styled-components";

export const ListTopRankedImages = styled.ul`
    display: flex;
    width: auto; 
    overflow: auto;
    gap: 1.5em;
    height: 42em;
    scrollbar-width: none;
    ::-webkit-scrollbar {
    display: none;
    }
    li:first-child {
        margin-left: 4em;
    }
`

export const TopRakedImage = styled.div`
    height: 40em;
    width: 25em;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${({image})=> image });
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`