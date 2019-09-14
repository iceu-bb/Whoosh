import { createGlobalStyle } from 'styled-components';
import { fontExo } from './utilities';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Exo:300,400,500&display=swap&subset=latin-ext');

    html {
        font-size: 62.5%;
    }

    *, *::before, *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-image:
            linear-gradient(
      to right,
      #FC7751,
      #F1BC2E
    );
    background-repeat: no-repeat;
    background-size: cover;
    overflow-x: hidden;

        ${fontExo};
    }

    main {
        
    }
`;

export default GlobalStyle;
