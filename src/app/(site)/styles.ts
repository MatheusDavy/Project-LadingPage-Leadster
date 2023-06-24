import styled, {css} from "styled-components";
import Image from "next/image";
/*

    Summary


*/


export const HomeContent = styled.main`
    ${({theme})=> css`
        display: flex;
        flex-direction: column;
    `}

`


// Banner
export const BannerContent = styled.section`
    ${({theme}) => css`
        display: flex;
        background-color: ${theme.colors.blue200};
        opacity: 0.3;
        .container{
            max-width: 1480px;
            display: grid;
            grid-template-columns: 50% 1fr;
            gap: 40px;
            padding: 47px 0;
        }
    `}
`

export const BannerImage = styled(Image)`
    ${({theme})=> css`
        
        display: flex;
        width: 100%;
        height: auto;
        object-fit: contain;
        
    `}
`

export const BannerText = styled.div`
    ${({})=> css`
        
    `}
`