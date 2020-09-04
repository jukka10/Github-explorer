import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  *{
    margin: 0;
    padding:0;
    outline:0;
    box-sizing: border-box
  }
  body{
    background: #f0f0f5 70% top url('https://xesque.rocketseat.dev/platform/1587379725719-attachment.svg') no-repeat;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 16px Roboto, sans-serif
  }
  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px
  }

  button{
    cursor: pointer;
  }
`;
