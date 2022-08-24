import styled from "styled-components";

export const  ControlBadges = styled.ul`
    display: grid;
    grid-template-columns: auto auto auto;  
    justify-content: center;
    gap: 3em;
    margin: 3em 2em 1em 2em;
    li{
        background-color: var(--gray-background);
        min-width: 170px;
        text-align: center;
        padding: .8em .5em;
        border-radius: 50px;
        cursor: pointer;
        color:  var(--white);
        font-weight: 300;
        border: 1px solid var(--main-yellow);
    }
    li span svg{
        color: var(--main-yellow);
        margin-right: 8px;
    }
    .active{
        background-color: var(--main-yellow);
        color: var(--gray-background);
        font-weight: bold;
        span svg{
            color: var(--gray-background);
        }

    }
    @media (max-width: 720px) {
        display: grid;
        grid-template-columns: auto auto;  
        align-items: center;
        gap: 1.5em;
        margin: 1em 2em .5em 2em;
        li{
            min-width: 125px;
            font-size: small;
        }
        li:last-child{
            grid-column: 1/span 2;
            margin: auto;
        }
    }
    
`
export const ControlCategories = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;  
    justify-content: center;
    margin: 1em 1em 1em 1em;
    >svg{
        color: var(--gray-controls);
        cursor: pointer;
        font-size: xx-large;
        align-self:center
    }
    @media (max-width: 720px) {
        > svg{
            font-size: x-large;
        }
    }
`

export const BadgesSection = styled.section`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 86px);
    justify-content: center;
    h4, h3{
        color: white;
        text-align: center;
    }
`

export const ControlPages = styled.div`
    display: flex;
    flex-direction: row;
    gap:15px;
    justify-content: center;
    margin: 1em  0 1em 0;
    cursor: pointer;
`

export const CircleControl = styled.div`
    height: 10px;
    width: 10px;
    background-color: white;
    border-radius: 50%;
    opacity: ${({active}) =>   active? '.8' : '.2'  }

`



