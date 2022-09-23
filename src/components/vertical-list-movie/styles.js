import styled from "styled-components";

export const ListVerticalMovie = styled.ul`
    margin: .5em 0 0 0em;
    display: flex;
    flex-direction: row;
    gap: 1em;
    width: auto; 
    overflow: auto;
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
    li .skeleton{
        height: 38em;
        border-radius: 4px;
        cursor: pointer;
        width: 24em;
        background-color:#383535e6;
        background-repeat: no-repeat;
        animation: shimmer 1s linear infinite;
        background-image: linear-gradient(to right, #1e1d1d00 0%, rgba(0,0,0,0.10) 20%, #524e4e73 40%, #302e2e 100%);
    }
    @media (max-width: 720px) {
        li img{
            height: 24em;
        }
        li:first-child {
            margin-left: 2em;
        }
        li .skeleton{
          height: 24em;
          border-radius: 4px;
          cursor: pointer;
          width: 15em;
          background-color:#383535e6;
          background-repeat: no-repeat;
          animation: shimmer 1s linear infinite;
          background-image: linear-gradient(to right, #1e1d1d00 0%, rgba(0,0,0,0.10) 20%, #524e4e73 40%, #302e2e 100%);
        }
    }
    ::-webkit-scrollbar {
    width: 0px;
    height:5px
    }

::-webkit-scrollbar-track {
  background: #1a1a1a; 
}
 
::-webkit-scrollbar-thumb {
  background: #444;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555; 
}


`