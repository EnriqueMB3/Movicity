import styled from "styled-components";

export const Header = styled.header`
     width: auto;
    height: 83vh;
    background-image: url(${({image}) => image });
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: center;
    background-position-x: top;
    background-attachment:fixed;
    display: grid;
    gap: 0px;
`


export const DegradeColor = styled.div`
    ${({bottom}) => bottom? 
    ` height: 50vh;
    align-self: flex-end;
    background: rgb(26,26,26);
    background: linear-gradient(0deg, rgba(26,26,26,1) 0%, rgba(152, 21, 124, 0.171) 65%, rgba(0, 0, 0, 0) 100%);
    position: absolute;
    bottom: 0vh;
    top:  33vh;
    left: 0px;
    right: 0px;`
    :
`   height: 30vh;
    background: rgb(152,21,124);
    background: linear-gradient(0deg, rgba(152,21,124,0) 0%, rgba(22,21,22,0.4234068627450981) 55%, rgba(26,26,26,1) 100%);
    position: absolute  ;
    bottom: 0vh;
    top:  0vh;
    left: 0px;
    right: 0px;`
}
`

export const HeaderTitleSection = styled.section`
    z-index: 1;
    align-self: flex-end;
    margin-bottom: 2em ;
    margin-left: 4em;
    flex-direction: column;
    align-items: flex-start;
    p{
        max-width: calc(100% - 30%);
    font-weight: 300;
    word-wrap: break-word;
    font-size: 1.2em;
    margin: 1em 0 1em 0;
    text-shadow: 2px 2px 5px #16151588;  
    }
    @media (max-width: 720px) {
        margin-left: 2em;
        p{
            max-width: calc(100% - 10%);
            font-size: 1em;
            margin: 1em 0 1em 0;
        }
    }
`

// ${ ({color}) => color || 'white'};