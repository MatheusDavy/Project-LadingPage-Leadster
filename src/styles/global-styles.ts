import {createGlobalStyle, css} from 'styled-components'
import home from '../assets/images/home.png'
import { lenisScroll } from './utils/lennis'

export const GlobalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: '__Plus_Jakarta_Sans_a6b38d';
    }

    html{
        font-size: 62.5%;
    }

    body{
        /* background-image: url(${home.src}); */
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

    ul,li{
        list-style: none;
    }

    .container{
        width: 90%;
        max-width: 1140px;
        display: flex;
        margin: 0 auto;
    }


    /* Lenis Scrool */
    html.lenis {
        height: auto;
    }

    .lenis.lenis-smooth {
        scroll-behavior: auto;
    }

    .lenis.lenis-smooth [data-lenis-prevent] {
        overscroll-behavior: contain;
    }

    .lenis.lenis-stopped {
        overflow: hidden;
    }

    .lenis.lenis-scrolling iframe {
        pointer-events: none;
    }
    
`