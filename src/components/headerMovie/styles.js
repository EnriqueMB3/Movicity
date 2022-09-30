import styled from "styled-components";

export const MovieHeader = styled.section`
        z-index: 1;
        margin-left: 4em;
        align-self: end;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 2em;
    
        >* {
        margin: .1em 0;
    }
    h1 {
        color: white;
        z-index: 1;
    }
     p {
        max-width: calc(100% - 30%);
        font-weight: 400;
        word-wrap: break-word;
        font-size: 1.2em;
        margin: 1em 0 1em 0;
        text-shadow: 2px 2px 5px #00000088;
    }
    
    h1 {
        font-size: 4em;
        text-shadow: 2px 2px 5px #00000088;
    }

    
    >span {
        display: flex;
        font-size: larger;
        color: white;
        gap: .5em;
        margin: .5em 0;
    }
    div svg {
        color: var(--main-yellow);
        font-size: x-large;
    }
   div{
    display: flex;
        align-items: center;
        gap: .5em;
   }
      
   h4 {
      color: white;
      text-shadow: 2px 2px 5px #16151588;
  }
   >h4 {
        color: var(--main-yellow);
        font-size: 1.2em;
        font-weight: 500;
        text-shadow: 2px 2px 5px #000000ad;
        font-weight:bold
    }
    
    
    @media (max-width: 720px) {
        margin-left: 2em;
        align-self: center;
        margin-bottom: .5em;
        padding-bottom: .5em;
        h1 {
            font-size: 1.8em;
        }
        h4 {
            font-size: 1em;
        }
        >span {
            display: flex;
            font-size: large;
            color: white;
            gap: .5em;
            margin: .5em 0;
        }
        p {
            max-width: calc(100% - 10%);
            font-weight: 300;
            word-wrap: break-word;
            font-size: 1em;
            margin: 1em 0 1em 0;
            text-shadow: 3px 3px 4px #000000ef;
        }
    }
`

export const ListGenre = styled.ul`
        display: flex;
        gap: .5em;
        font-weight: 300;
        text-shadow: 2px 2px 5px #16151588;
        margin-top:10px;
        li{
        background-color: var(--gray-background);
        border-radius:5%;
        padding: 0.4em 2.0em;
        border-radius: 50px; 
        color:  var(--white);
        font-weight:bold;
        border: 1px solid var(--main-yellow);
    }
    .span {
        color: var(--main-yellow);
        font-weight: bolder;
    }
    @media (max-width: 720px) {
    flex-wrap:wrap;
    li{
        border-radius:5%;
        padding: 0.2em 1.8em;
        border-radius: 50px; 
        color:  var(--white);
        font-weight:bold;
        font-size:small;
    }
    }

`