import { createGlobalStyle } from 'styled-components';
import { fontLato, below } from './utilities';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap&subset=latin-ext');

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;

        ${below.smallMed`
            font-size: 60%;
        `}
        ${below.small`
            font-size: 56.25%;
        `}
    }

    *, *::before, *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #fff;
        overflow-x: hidden;
        ${fontLato};
    }

    ::selection {
        background: #F1BC2E;
    }
`;

export default GlobalStyle;
