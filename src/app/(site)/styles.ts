import styled, { css } from "styled-components";
import Image from "next/image";
import { fontTemplate } from "@/styles/utils/fonts";
/*

    Summary


*/

export const HomeContent = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
  `}
`;

// Banner
export const BannerContent = styled.section`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.blue200};
    position: relative;
    overflow: hidden;
    height: fit-content;
    .container {
      max-width: 1480px;
      display: grid;
      grid-template-columns: 50% 1fr;
      gap: 93px;
      padding-top: 47px;
      position: relative;
      z-index: 2;
    }

    /* &::before{
            content: '';
            position: absolute;
            bottom: -68%;
            left: -15%;
            width: 55%;
            height:auto;
            aspect-ratio: 1;
            
            background-color: red;
            border-radius: 100px;
            transform: rotate(45deg);
            z-index: 1;
            } 
        */
  `}
  @media (max-width: 1080px) {
    .container {
      gap: 20px;
    }
  }
  @media (max-width: 599px) {
    .container {
      gap: 20px;
      grid-template-columns: 1fr;
      padding: 40px 0px;
    }
  }
`;

export const BannerImage = styled(Image)`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: auto;
    margin: auto;
  `}
`;

export const BannerText = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: 176px 0px 100px;
    .title {
      ${fontTemplate(
        "4.2rem",
        "1.25",
        `${theme.fonts.Medium}`,
        `${theme.colors.blue900}`
      )}
      letter-spacing: -0.5px;
    }

    .description {
      ${fontTemplate(
        "2.5rem",
        "1",
        `${theme.fonts.Medium}`,
        `${theme.colors.blue900}`
      )}
      letter-spacing: -0.5px;
      margin-top: 13px;
      letter-spacing: -1.1px;
    }

    .separator {
      margin-top: 27px;
      background: ${theme.colors.blue300};
    }

    .call-to-action {
      display: flex;
      flex-direction: column;

      &--content {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-top: 22px;
      }

      &--button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 260px;
        height: auto;
        padding: 22px 5px;
        border-radius: 100px;
        background-color: ${theme.colors.blue500};
        ${fontTemplate(
          "1.8rem",
          "1.3",
          `${theme.fonts.SemiBold}`,
          `${theme.colors.white}`,
          "center"
        )}
        text-transform: uppercase;
        font-family: Arial, Helvetica, sans-serif;
      }

      &--description {
        margin-top: 12px;
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;
        ${fontTemplate(
          "1.5rem",
          "1.3",
          `${theme.fonts.SemiBold}`,
          `${theme.colors.blue900}`,
          "center"
        )}
      }
    }
  `}

  @media (max-width: 1080px) {
    .call-to-action {
      &--content {
        flex-direction: column-reverse;
        gap: 16px;
      }
      &--button {
        width: 100%;
      }
    }
  }

  @media (max-width: 599px) {
    padding: 0px;
    .title {
      text-align: center;
      font-size: 3rem;
    }
    .description {
      text-align: center;
      font-size: 1.8rem;
    }
    .call-to-action {
      &--content {
      }

      &--button {
        padding: 15px 5px;
        font-size: 1.4rem;
      }

      &--description {
        text-align: center;
        justify-content: center;
        font-size: 1.4rem;
      }
    }
  }
`;
