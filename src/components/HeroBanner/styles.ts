import { fontTemplate } from "@/styles/utils/fonts";
import styled, {css} from "styled-components";

/*

    Summary


*/

export const BannerContent = styled.section`
    ${({theme})=> css`
        padding: 161px 0px 175px;
        display: flex;
        height: fit-content;
        background-color: ${theme.colors.blue200};
        .container{
            flex-direction: column;
            height: fit-content;
            align-items: center;
        }

    `}
`

export const Text = styled.p`
    ${({theme})=> css`
        ${fontTemplate(
            '1.4rem',
            '1',
            `${theme.fonts.Bold}`,
            `${theme.colors.blue500}`,
            'center'
        )}
        width: fit-content;
        height: fit-content;
        border: 2px solid ${theme.colors.blue500};
        border-radius: 20px 20px 20px 0px;
        padding: 8px 21px;
        text-transform: uppercase;
    `}
`

export const Title = styled.h1`
    ${({theme})=> css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    ${fontTemplate(
            '5rem',
            '1',
            `${theme.fonts.Regular}`,
            `${theme.colors.blue900}`,
            'center'
    )}
    letter-spacing: -1.2px;
    margin-top: 19px;


    span{
        position: relative;
        ${fontTemplate(
        '9rem',
        '1',
        `${theme.fonts.Bold}`,
        `${theme.colors.blue500}`,
        'center'
        )}
        letter-spacing: -1.6px;

        img{
            position: absolute;
            right: -20px;
            top: 5px;
        }
        }
`}
`

export const Separator = styled.hr`
    ${({theme})=> css`
        width: 100%;
        max-width: 733px;
        height: 1px;
        background:${theme.colors.blue300};
        margin-top: 29px;
    `}
`

export const Description = styled.p`
    ${({theme})=> css`
        ${fontTemplate(
            '1.8rem',
            '1',
            `${theme.fonts.Medium}`,
            `${theme.colors.blue900}`,
            'center'
        )}
        margin-top: 18px;
        letter-spacing: -0.1px;

    `}
`