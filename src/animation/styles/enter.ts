import { css }from "styled-components";
export const classAnimation = 'animated'

export const enterAnimation = css`
    [data-animate]{
        opacity: 0 !important;
        transition: 1s;

        &.${classAnimation} {
            opacity: 1 !important;
            transform: translate(0, 0) !important;
        }
    }
    [data-animate='up']{
        transform: translateY(50px);
    }
    [data-animate='down']{
        transform: translateY(-50px) ;
    }
    [data-animate='left']{
        transform: translateX(50px);
    }
    [data-animate='right']{
        transform: translateX(-50px);
    }

    [data-sequential] {
    [data-sequential-stagger] {
        opacity: 0;
    }
    [data-sequential-stagger="right"] {
        transform: translateX(-50px);
    }
    [data-sequential-stagger="left"] {
        transform: translateX(50px);
    }
    [data-sequential-stagger="up"] {
        transform: translateY(50px);
    }
    [data-sequential-stagger="down"] {
        transform: translateY(50px);
    }
}
    .char{
        opacity: 0;
        display: -webkit-inline-box;
    }

`  
