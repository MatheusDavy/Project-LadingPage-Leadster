import css from "styled-jsx/css";

export const lenisScroll = ()=> {
    return css`
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
}
