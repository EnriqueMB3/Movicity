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
    
    >h4 {
        color: var(--main-yellow);
        font-size: 1.2em;
        font-weight: 500;
        text-shadow: 2px 2px 5px #000000ad;
    }
    
    >span {
        display: flex;
        font-size: larger;
        color: white;
        gap: .5em;
        margin: .5em 0;
    }
    div i {
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
    
`