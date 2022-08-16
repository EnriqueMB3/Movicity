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
    @media (max-width: 720px) {
      h2{
        color: white;
    font-size: 1.5em;
    }
     svg{
    margin-left: .25em;
    }
    
    margin: .5em .5em .5em 2em;

    }
`
export const SearchBar = styled.div`

.search{
    position:absolute;
    left:0;
    right:0;
    margin:auto;
    top:50%;
    transform:translateY(-50%);
    width:100%;
    text-align:center;
    overflow:hidden;
    &_bar{
      /* width:280px; */
      position:relative;
      margin: 0 auto;
      input[type="text"]{
        width:15px;
        background:transparent;
        transition:border .3s 0s, width .2s .3s cubic-bezier(0.225, 0.010, 0.475, 1.010), text-indent .2s .3s;
        padding: 15px;
        border-color:var(--main-yellow);
        text-indent:30px;
        outline:none;
        border:0px solid var(--main-yellow);
        font-size: 14px;
        color:  #A8A952;
        border-radius:5px;
        font-family: 'Nunito', sans-serif;
      }
      ::-webkit-input-placeholder { /* Safari, Chrome and Opera */
        color: var(--main-yellow);
        font-weight:400;
        font-family: 'Nunito', sans-serif;
      }
       ::-moz-input-placeholder { /* Safari, Chrome and Opera */
        color: var(--main-yellow);
        font-weight:400;
        font-family: 'Nunito', sans-serif;
      }
       ::-o-input-placeholder { /* Safari, Chrome and Opera */
        color: #448996;
        font-weight:400;
        font-family: 'Nunito', sans-serif;
      }
      input[type="checkbox"]{
        display:none;
      }
      input[type="checkbox"]:checked + label + input{
        width: 250px;
        border: 1px solid var(--main-yellow);
        text-indent:0px;
      }
      input[type="checkbox"]:checked + label svg{
        right:10px;
        transform: translateY(-50%) translateX(50%) rotate(360deg) scale(0);
        color: var(--main-yellow);
      }
      input[type="checkbox"]:checked + label .last{
        /* left:220px; */
        transform: translateY(-50%) rotate(360deg) scale(1);
      }
      .last{
        -webkit-transform: translateY(-50%) rotate(0deg) scale(0);
        transform: translateY(-50%) rotate(0deg) scale(0);
      }
      svg{
        position: absolute;
        /* font-size: 30px; */
        top: 50%;
        transform: translateY(-50%) translateX(50%) rotate(0deg) scale(1);
        cursor: pointer;
        margin: auto;
        border-radius: 4px;
        width: 20px;
        right: 50%;
        height: 35px;
        background: transparent;
        transition: right .3s .3s, transform .3s .3s, color .3s;
        line-height: 60px;
        color: var(--main-yellow);
        &:hover{
          color:var(--main-yellow);;
        }
      }
    }
  }

`

export const PieChart = styled.svg`
  display: block;
  height: 5em;
  background-color: #262424;
  border-radius: 50%;
  position: relative;
  top: 3px;
  z-index:99;
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
   @media (max-width: 720px) {
      height: 4em;
    }
  /* @keyframes progress {
  0% {
    stroke-dasharray: 0 100;
  }
} */

`