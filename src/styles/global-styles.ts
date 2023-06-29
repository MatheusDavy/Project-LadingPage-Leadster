import {createGlobalStyle, css} from 'styled-components'
import home from '../assets/images/home.png'
import { enterAnimation } from '@/animation/styles/enter'
import { lenisScroll } from '@/animation/styles/scroll'
// Style Lib

export const GlobalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: '__Plus_Jakarta_Sans_a6b38d';
    }

    html{
        font-size: 62.5%;
        @media (min-width:599px) and (max-width: 1080px) {
            font-size: 52%;
        }
    }

    body{
        background-size: 100%;
        background-repeat: no-repeat;
        min-height: auto;
        @media (min-width:599px) and (max-width: 1399px) {
            zoom: 0.85;
        }
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }

    ul,li{
        list-style: none;
    }

    .container{
        width: 90%;
        max-width: 1140px;
        display: flex;
        margin: 0 auto;
        overflow: hidden;
    }

    ${lenisScroll}
    ${enterAnimation};
    
`