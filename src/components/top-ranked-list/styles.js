import styled from "styled-components";

export const ListTopRankedImages = styled.ul`
    display: flex;
    width: auto; 
    overflow: auto;
    gap: 1em;
    height: 42em;
    scrollbar-width: none;
    li:first-child {
        margin-left: 4em;
    }
    li .skeleton{
        height: 35em;
        border-radius: 4px;
        cursor: pointer;
        width: 24em;
        background-color:#383535e6;
        background-repeat: no-repeat;
        animation: shimmer 1s linear infinite;
        background-image: linear-gradient(to right, #1e1d1d00 0%, rgba(0,0,0,0.10) 20%, #524e4e73 40%, #302e2e 100%);
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