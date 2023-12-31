import styled, {css} from "styled-components";

/*

    Summary


*/

export const HeaderContent = styled.header`
    ${({theme})=> css`
        display: flex;
        width: 100%;
        padding: 40px 0;
        .container{
            justify-content: center;
            align-items: center;
            height: fit-content;
        }
    `}

    @media (max-width: 599px) {
        padding: 20px 0px;
    }
`

export const LinkLogo = styled.a`
    
        img{
            width: 204px;
            height: auto;
            object-fit: contain;
            @media (max-width: 599px) {
                width: 150px;
            }   
        }
        

`