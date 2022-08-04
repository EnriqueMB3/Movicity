import styled from "styled-components";

export const ListTopRankedImages = styled.ul`
    display: flex;
    width: auto; 
    overflow: auto;
    gap: 1em;
    height: 42em;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }
    li:first-child {
        margin-left: 4em;
    }
    @media (max-width: 720px) {
        height: 25em;
        li:first-child {
            margin-left: 2em;
        }
        li div{
            height: 24em;
            width: 14em;
        }
       
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
    @media (max-width: 720px) {
        height: 24em;
        width: 14em;

    }
`