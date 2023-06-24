import { fontTemplate } from "@/styles/utils/fonts";
import styled, {css} from "styled-components";
import Select  from 'react-select'


export const FilterContent = styled.section`
    ${({theme})=> css`
        display: flex;

        .container{
            padding-top: 93px;
            padding-bottom: 25px;
            border-bottom: 1px solid ${theme.colors.blue300};

            display: grid;
            grid-template-columns: 1fr auto;
            align-items: center;
            justify-content: space-between;
        }
    `}
`

export const FilterGroup = styled.div`
    ${({theme})=> css`
        display: flex;
        gap: 13px;
        align-items: center;
        max-width: 100%;
        overflow-y: auto;
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
`

export const Button = styled.button`
    ${({theme})=> css`
        ${fontTemplate(
            '1.7rem',
            '1',
            `${theme.fonts.Medium}`,
            `${theme.colors.blue900}`,
            'center'
        )}

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

`