import { createGlobalStyle } from "styled-components";

export const GlobalSyles = createGlobalStyle`
     :root{
    --white: #FFFFFF;
    --black: #000;
    --main-yellow: #FBD92E;
    --dark-background: #1A1A1A;
    --gray-controls: #535353;
    --gray-background: #262424;
    --gray-contrast: #4F4F4F;
    --purple-medium: #7E0EB8;
    --green-bad: #2FBF18;
    --orange-medium: #E9840F;
    --sm: 14px;
    --md: 16px;
    --lg: 18px;
}
ul, li{
    list-style:none;
    color: white;
    margin: 0;
    padding: 0;
}

*{
    box-sizing: border-box;
} 
.logo{
    height: 45px;
}
body{
    background-color: var(--dark-background);
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    font-family: 'Roboto', sans-serif;
}
p, nav, ul, h1, h2, h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
p{
    color:white
}
a{
  text-decoration: none;
  color:white;
}
`