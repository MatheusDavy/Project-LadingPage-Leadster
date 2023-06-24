import {createGlobalStyle, css} from 'styled-components'
import home from '../assets/images/home.png'

export const GlobalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: '__Plus_Jakarta_Sans_a6b38d';
    }

    html{
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    body{
        background-image: url(${home.src});
        background-size: 100%;
        background-repeat: no-repeat;
        min-height: auto;
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }

    .container{
        width: 90%;
        max-width: 1140px;
        display: flex;
        margin: 0 auto;
    }
    
`