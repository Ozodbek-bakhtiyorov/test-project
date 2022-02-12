import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
    text-decoration:none;
    list-style:none;
  }
  body{
    font-family:'Montserrat', sans-serif;
  }
  .container{
    width:90%;
    margin:0 auto;
  }
  .change-btn{
    padding:1rem 0;
  }

`