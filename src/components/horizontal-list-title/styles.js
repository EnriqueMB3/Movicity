import styled from "styled-components";

export const ListHorizontal = styled.ul`
    margin: .5em 0 0 0em;
    display: flex;
    flex-direction: row;
    gap: 1em;
    width: auto; 
    overflow: auto;
    /* height: 17em; */
    /* scrollbar-width: none; */
    overflow-y: scroll;
    /* ::-webkit-scrollbar {
        display: none;
    } */
    li:first-child {
        margin-left: 4em;
    }
    li img{
        height: 16em;
        border-radius: 4px;
        cursor: pointer;
    }
    li .skeleton{
        height: 16em;
        border-radius: 4px;
        cursor: pointer;
        width: 30em;
        background-color:#383535e6;
        background-repeat: no-repeat;
        animation: shimmer 1s linear infinite;
        background-image: linear-gradient(to right, #1e1d1d00 0%, rgba(0,0,0,0.10) 20%, #524e4e73 40%, #302e2e 100%);
    }
    @media (max-width: 720px) {
        li:first-child {
            margin-left: 2em;
        }
        li img{
            height: 12em;
        }
        li .skeleton{
            height: 12em;
            border-radius: 4px;
            cursor: pointer;
            width: 24em;
            background-color:#383535e6;
            background-repeat: no-repeat;
            animation: shimmer 1s linear infinite;
            background-image: linear-gradient(to right, #302e2e 0%, rgba(0,0,0,0.10) 20%, #524e4e73 40%, #302e2e 100%);
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
@keyframes shimmer {
  0%{
    background-position: -450px 0;
  }
  100%{
    background-position: 450px 0;
  }
}
`

