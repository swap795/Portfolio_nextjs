import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

body{
   /* background:#34283c; */
   font-family: 'Inter', sans-serif;
}

button{
   font-weight: bold;
   font-size: 1.1 rem;
   cursor: pointer;
   padding: 1rem 2rem;
   border: 3px solid #23d997;
   background: transparent;
   color: white;
   transition: all 0.5s ease;
   font-family: 'Inter', sans-serif;
   &:hover{
      background-color: #428b70;
      color: white;
   }
}

h2{
   font-weight: lighter;
   font-size: 4rem;
}

h3{
   color: white;
}

h4{
   font-weight: bold;
   font-size: 2rem;
}

h5{
   font-size: 2rem;
   color: #1c818b;
}

span{
   font-weight: bold;
   color: #23d997;
}

a{
   font-size: 1.2rem;
}

p{
   padding: 3rem 0rem;
   color: #ccc;
   font-size: 1.4rem;
}
`;

export default GlobalStyle;
