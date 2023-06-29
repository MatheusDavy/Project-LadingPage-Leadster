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
            overflow: visible;
        }
    `}

    @media (max-width: 599px) {
        padding: 100px 0px;
    }
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

    @media (max-width: 599px) {
        font-size: 1rem;
    }
`

export const Title = styled.h1`
    ${({theme})=> css`
    gap: 8px;
    ${fontTemplate(
            '5rem',
            '1.2',
            `${theme.fonts.Regular}`,
            `${theme.colors.blue900}`,
            'center'
    )}
    letter-spacing: -1.2px;
    margin-top: 19px;

    p{
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

@media (max-width: 599px) {
        font-size: 3rem;
        letter-spacing: 0px;
        p{
            font-size: 4.5rem;
            letter-spacing: 0px;
            img{
                width: 30px;
                height: auto;
                object-fit: contain;

                top: 0;
                right: -12px;
            }
        }
    }
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
    @media (max-width: 599px) {
        font-size: 1.4rem;
    }
`