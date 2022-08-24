import styled from "styled-components";

export const ListPersonImages = styled.ul`
    margin: .5em 0 0 0em;
    display: flex;
    flex-direction: row;
    gap: 1em;
    width: auto; 
    overflow: auto;
    li .skeleton{
        height: 30em;
        width: 20em;
        border-radius: 4px;
        cursor: pointer;
        background-color:#383535e6;
        background-repeat: no-repeat;
        animation: shimmer 1s linear infinite;
        background-image: linear-gradient(to right, #1e1d1d00 0%, rgba(0,0,0,0.10) 20%, #524e4e73 40%, #302e2e 100%);
        background-attachment: fixed;
    }
    li:first-child {
        margin-left: 4em;
    }
    @media (max-width: 720px) {
        li:first-child {
            margin-left: 2em;
        }

    }
    ::-webkit-scrollbar {
    width: 0px;
    height:5px
    }

/* Track */
::-webkit-scrollbar-track {
  background: #1a1a1a; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #444;
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
`

export const PeopleProfile = styled.div`
    height: 30em;
    width: 20em;
    background-image:linear-gradient(to bottom, #ffff0000, transparent, #000000de), url(${({image}) => image });
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
    @media (max-width: 720px) {
        height: 20em;
        width: 12em;
        padding: 1em;
    }
    
`