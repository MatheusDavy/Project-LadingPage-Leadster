import { fontTemplate } from "@/styles/utils/fonts";
import styled, {css} from "styled-components";
import Select  from 'react-select'
import { Pagination } from "@mui/material";


// Groups / Containers
export const FilterContent = styled.section`
    ${({theme})=> css`
        display: flex;
        position: relative;
        z-index: 2;
        .container{
            padding-top: 93px;
            padding-bottom: 25px;
            border-bottom: 1px solid ${theme.colors.blue300};
            overflow: visible;

            display: grid;
            grid-template-columns: 1fr auto;
            gap: 30px;
            align-items: center;
            justify-content: space-between;
        }
    `}

    @media (max-width: 999px) {
        .container{
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 599px) {
        .container{
            padding-top: 40px;
        }
    }
`

export const FilterGroup = styled.div`
    ${({theme})=> css`
        display: flex;
        gap: 13px;
        align-items: center;
        max-width: 100%;
        overflow-y: auto;
    

        /* ===== Scrollbar CSS ===== */
            /* Firefox */
            & {
                scrollbar-height: 10px;
                scrollbar-color: ${theme.colors.blue500} #ffffff;
                @media (max-width: 599px) {
                    scrollbar-height: 0px;
                }
            }

            /* Chrome, Edge, and Safari */
            &::-webkit-scrollbar {
                height: 10px;

                @media (max-width: 599px) {
                    height: 0px;
                }
            }

            &::-webkit-scrollbar-track {
                background: #ffffff;
            }

            &::-webkit-scrollbar-thumb {
                background-color: ${theme.colors.blue500};
                border-radius: 10px;
                border: 3px solid #ffffff;
            }
    `}

`

export const SelectGroup = styled.div`
    ${({theme})=> css`
        display: flex;
        align-items: center;
        gap: 13px;

        label{
            ${fontTemplate(
                '1.6rem',
                '1',
                `${theme.fonts.Medium}`,
                `${theme.colors.blue900}`,
                'center'
            )}
        }
    `}
    @media (max-width: 599px) {
        justify-content: center;

        label{
            font-size: 1.3rem;
        }
    }
`
// Filter - Btn / Select
export const Button = styled.button`
    ${({theme})=> css`
        ${fontTemplate(
            '1.7rem',
            '1',
            `${theme.fonts.Medium}`,
            `${theme.colors.blue900}`,
            'center'
        )}
        min-width: max-content;
        padding: 10px 21px;
        border: 1px solid ${theme.colors.blue900};
        border-radius: 100px;
        background-color: transparent;
        transition: 0.4s;
        letter-spacing: -1px;

        &:hover{
            border: 1px solid ${theme.colors.blue500};
            color:  ${theme.colors.blue500};
        }

        &.selected{
            border: 1px solid ${theme.colors.blue500};
            background-color: ${theme.colors.blue500};
            color:  ${theme.colors.white};
        }
    `}

    @media (max-width: 599px) {
        font-size: 1.4rem;
    }
`

export const SelectInput = styled(Select)`
    ${({theme}) => css`
        width: 190px;
        *{
            cursor: pointer;
        }

        .css-13cymwt-control, .css-t3ipsp-control{
            background-color: transparent;
            border: 1px solid ${theme.colors.blue900};
            border-radius: 10px;
        }

        .css-1jqq78o-placeholder, .css-qbdosj-Input, .css-1dimb5e-singleValue{
            ${fontTemplate(
            '1.7rem',
            '1',
            `${theme.fonts.Medium}`,
            `${theme.colors.blue900}`,
        )}
        }

        .css-1u9des2-indicatorSeparator{
            display: none;
        }

        .css-qbdosj-Input

        svg{
            fill: ${theme.colors.blue900};
        }
    `}

    @media (max-width: 599px) {
        width: 140px;
        .css-1jqq78o-placeholder, .css-qbdosj-Input, .css-1dimb5e-singleValue{
            font-size: 1.4rem;
        }
    }

`

// Cards
export const CardGrid = styled.div`
    ${({theme})=>css`
    margin-top: 61px;
    position: relative;
        z-index: 1;
        .container{
            overflow: visible;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 31px;
            justify-content: space-between;

            padding-bottom: 72px;
            border-bottom: 1px solid ${theme.colors.blue300};
        }
    `}

    @media (max-width: 799px) {
        .container{
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (max-width: 599px) {
        .container{
            grid-template-columns: 1fr;
        }
    }
`

// Pagination
export const NavigateContent = styled.div`
    ${({theme}) => css`
        margin: 34px auto 90px;
        gap: 15px;
        display: flex;
        align-items: center;
        justify-content: center;

        .label{
            ${fontTemplate(
                    '2.3rem',
                    '1',
                    `${theme.fonts.Bold}`,
                    `${theme.colors.blue900}`,
                    
                )}
        }
    `}
    @media (max-width: 599px) {
        margin: 30px 0px 60px;
        .label{
            display: none;
        }
    }
`
export const Navigate = styled(Pagination)`
    ${({theme})=>css`
        .css-10w330c-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected{
            background-color: transparent;
            border: 2px solid ${theme.colors.blue500};
            ${fontTemplate(
                '2.6rem',
                '1',
                `${theme.fonts.Bold}`,
                `${theme.colors.blue500}`,
                
            )}


        }

        .css-10w330c-MuiButtonBase-root-MuiPaginationItem-root{
            min-height: 43px;
            min-width: 43px;
            max-height: 43px;
            max-width: 43px;
            border-radius: 7px;
            ${fontTemplate(
                '2.6rem',
                '1',
                `${theme.fonts.Medium}`,
                `${theme.colors.blue900}`,
                
            )}
            background-color: transparent;
            border: 0;
            cursor: pointer;
        }

        svg{
            width: 20px;
            height: auto;
            object-fit: contain;
            fill:  ${theme.colors.blue500};
        }
    `}

    
`