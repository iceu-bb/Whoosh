import { createGlobalStyle } from 'styled-components';
import { fontLato, gradientMain } from './utilities';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap&subset=latin-ext');

    html {
        font-size: 62.5%;
    }

    *, *::before, *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        ${gradientMain};
        overflow-x: hidden;
        ${fontLato};
    }

    main {

    }
`;

export default GlobalStyle;
