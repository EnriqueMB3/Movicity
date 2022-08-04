import styled from "styled-components";

export const PrimaryButtoon = styled.button`
  background-color: var(--main-yellow);
    border-radius: 4px;
    border: none;
    color: var(--black);
    cursor: pointer;
    height: 40px;
    min-width: 170px;
    font-weight: bold;
    z-index: 1;
    margin: ${({center})=> center? '1.2em calc(50% - 85px)': ''  };
    :disabled{
      opacity: .5;
      cursor: not-allowed;
    }
`