import styled, {css} from "styled-components";
import { fontTemplate } from "@/styles/utils/fonts";
import Link from "next/link";

export const FooterContent = styled.footer`
    ${({}) => css`
        padding-top: 55px;
        
        .container{
            flex-direction: column;
            max-width: 1165px;
        }
    `}
`
// Logo
export const LogoContent = styled(Link)`
    ${({theme})=> css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    width: 100%;

    img{
        width: 260px;
        height: auto;
    }

    .text{
        ${fontTemplate(
            '1.5rem',
            '1.25',
            `${theme.fonts.Medium}`,
            `${theme.colors.blue300}`,
            'center'
        )}
    }
    `}
`

// Links
export const LinkContent = styled.div`
    margin-top: 48px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 35px;
`

export const LinkGroup = styled.div`
    ${({theme})=> css`
        .title{
            ${fontTemplate(
                '1.7rem',
                '1.25',
                `${theme.fonts.SemiBold}`,
                `${theme.colors.blue900}`
            )}
        }

        .list-nav{
            margin-top: 49px;
            display: flex;
            flex-direction: column;
            gap: 25px;
             &--link{
                display: flex;
                ${fontTemplate(
                    '1.7rem',
                    '1',
                    `${theme.fonts.Regular}`,
                    `${theme.colors.blue300}`,
                )}

                transition: 0.4s;
                
                &:hover{
                    color: ${theme.colors.blue500};
                    transform: translateX(5px);
                }
             }
        }
        
    `}
`

export const ContactGroup = styled.div`
    ${({theme}) => css`
        .title{
            ${fontTemplate(
                '1.7rem',
                '1.25',
                `${theme.fonts.SemiBold}`,
                `${theme.colors.blue900}`
            )}
        }

        .social-midias{
            display: flex;
            align-items: center;
            gap: 15px;
            margin-top: 25px;
            

            &--link{
                width: 45px;
                aspect-ratio: 1;
                border-radius: 50%;
                background:${theme.colors.blue200};
                transition: 0.4s;
                
                display: flex;
                align-items: center;
                justify-content: center;

                svg{
                    fill:${theme.colors.blue300};

                    width: 20px;
                    height: auto;
                }
            }
        }

        .links{
            margin-top: 29px;
            &:last-child{
                margin-top: 15px;
            }

            ${fontTemplate(
                '1.5rem',
                '1.25',
                `${theme.fonts.Regular}`,
                `${theme.colors.blue900}`
            )}

            a{
                ${fontTemplate(
                    '1.5rem',
                    '1.25',
                    `${theme.fonts.Regular}`,
                    `${theme.colors.blue300}`
                )}

                transition: 0.4s;
                
                &:hover{
                    color: ${theme.colors.blue500};
                }
            }

            
        }
    `}
`

// Bottom
export const FooterBootom = styled.div`
    ${({theme}) => css`
        display: flex;
        border-top: 1px solid ${theme.colors.blue300};
        width: 100%;
        margin-top: 87px;
        padding: 40px 0px;

        .container{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }

        .copyright, .locale{
            ${fontTemplate(
                '1.4rem',
                '1',
                `${theme.fonts.Medium}`,
                `${theme.colors.blue300}`
            )}

            span{
                color: ${theme.colors.blue500}
            }
        }
    `}
`