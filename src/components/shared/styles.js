import styled from "styled-components";

export const SectionBody = styled.section`
    padding: .8em 0;
    scrollbar-width: thin;       
`
export const HeaderSection = styled.div`
   color: var(--main-yellow);
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1em 1em 1em 4em;
    h4{
        font-weight: 300;
        cursor: pointer;
    }
    h2{
        color: white;
    font-size: 2em;
    }
    svg{
        color: var(--main-yellow);
    margin-left: .5em;
    }
`

export const PieChart = styled.svg`
display: block;
  height: 5em;
  background-color: #262424;
  border-radius: 50%;
  position: relative;
  top: 3px;
  z-index:1000;
  .circle-bg{
    fill: none;
  stroke: #4F4F4F;
  stroke-width: 3.8;
  }
  .circle{
    fill: none;
  stroke-width: 2.8;
  stroke-linecap: round;
  /* animation: progress 1s ease-out forwards; */
  stroke: var(--main-yellow);
  }
  .percentage {
  fill: rgb(255, 255, 255);
  font-size: 0.5em;
  font-weight: bold;
  text-anchor: middle;
}
  /* @keyframes progress {
  0% {
    stroke-dasharray: 0 100;
  }
} */

`