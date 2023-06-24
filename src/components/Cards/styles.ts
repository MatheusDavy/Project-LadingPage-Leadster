import { fontTemplate } from "@/styles/utils/fonts";
import styled, {css} from "styled-components";
import {motion} from 'framer-motion'

interface TitleProps {
    as: any
}

export const CardContent = styled(motion.button)`
    ${({theme})=> css`
    display: flex;
    flex-direction: column;
        background-color: ${theme.colors.white};
        height: auto;
    `}
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0px 0px 20px gray;
    border: 0;
`

export const ImageContent = styled.div`
    width: 100%;
    height: 204px;
    display: flex;
    overflow: hidden;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const Title = styled.h1<TitleProps>`
    ${({theme})=> css`
    flex-grow: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 33px;
        ${fontTemplate(
            '1.8rem',
            '1.3',
            `${theme.fonts.SemiBold}`,
            `${theme.colors.blue900}`,
        )}
    `}
    letter-spacing: -0.4px
`