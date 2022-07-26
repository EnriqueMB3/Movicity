import styled from "styled-components";

export const ListPersonImages = styled.ul`
    margin: .5em 0 0 0em;
    display: flex;
    flex-direction: row;
    gap: 1em;
    width: auto; 
    overflow: auto;
    li:first-child {
        margin-left: 4em;
    }
    ::-webkit-scrollbar{
        display: none;
    }
`

export const PeopleProfile = styled.div`
    height: 30em;
    width: 20em;
    background-image:linear-gradient(to bottom, #ffff0000, #c32dd169, #000000de), url(${({image}) => image });
    border-radius: 4px;
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1em;
    h4{
        color: #FBD92E;
        font-weight: 300;
        font-size: .8em;
    }
    h2{
        font-size: 1.2em;
    }
`