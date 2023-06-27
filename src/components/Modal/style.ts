import styled, { css } from "styled-components";
import modal from "../../assets/images/modal.png";
import { fontTemplate } from "@/styles/utils/fonts";
// Interfaces
interface LinksDownloadProps {
  type: string;
}

export const ModalLayer = styled.div`
  ${({ theme }) => css`
    background-color: #0000006b;
  `}

  position: fixed;
  inset: 0;
  width: 100%;
  height: -webkit-fill-available;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.4s;
  transform: scale(0);
  z-index: -1;
  opacity: 0;

  &.opening {
    transform: scale(1);
    z-index: 1000;
    opacity: 1;
  }
`;

export const ModalContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: auto;
    max-height: calc(80vh);
    width: 90%;
    max-width: 600px;
    background-color: white;
    align-items: center;

    padding: 41px 0px 30px;

    border-radius: 15px;
    position: relative;

    &::before {
      content: "";
      background-color: ${theme.colors.blue500};
      height: 5px;
      width: 100%;
      position: absolute;
      inset: 0;
    }
  `}
`;

// Close Modal
export const ButtonClose = styled.button`
  ${({ theme }) => css`
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    border: 0;
    width: fit-content;
    height: fit-content;
    padding: 5px;

    svg {
      width: 25px;
      height: auto;
      object-fit: contain;
      path {
        stroke: ${theme.colors.blue300};
      }
    }
  `}
`;

// Contents Modal
export const Title = styled.h2`
  ${({ theme }) => css`
    ${fontTemplate(
      "2.5rem",
      "1.1",
      `${theme.fonts.SemiBold}`,
      `${theme.colors.blue900}`,
      "center"
    )}
    max-width: 75%;
  `}
`;

export const Iframe = styled.iframe`
  ${({ theme }) => css`
    ${fontTemplate(
      "2.5rem",
      "1.1",
      `${theme.fonts.SemiBold}`,
      `${theme.colors.blue900}`,
      "center"
    )}
    max-width: 75%;

    min-width: 100%;
    height: 390px;
    margin-top: 34px;
    border: 0;
  `}
`;

export const ContentText = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 29px 24px 0px;
    .title {
      ${fontTemplate(
        "1.6rem",
        "1",
        `${theme.fonts.Bold}`,
        `${theme.colors.blue900}`
      )}
      margin-bottom: 10px;
    }

    hr {
      background-color: ${theme.colors.blue200};
      height: 0.5px;
      border: 0;
    }

    .description {
      ${fontTemplate(
        "1.6rem",
        "1.4",
        `${theme.fonts.Medium}`,
        `${theme.colors.blue900}`
      )}
      margin-top: 7px;
    }
  `}
`;

// Donwloads
export const ContentDownloads = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 22px 24px 0px 24px;
    .title {
      ${fontTemplate(
        "1.6rem",
        "1",
        `${theme.fonts.Bold}`,
        `${theme.colors.blue900}`
      )}
      margin-bottom: 10px;
    }

    hr {
      background-color: ${theme.colors.blue200};
      height: 0.5px;
      border: 0;
    }

    .buttons {
      display: flex;
      align-items: center;
      gap: 5px;
      margin-top: 13px;
    }
  `}
`;

export const LinksDownload = styled.a<LinksDownloadProps>`
  ${({ theme, type }) => css`
    height: 30px;
    width: fit-content;
    border-radius: 5px;
    overflow: hidden;

    display: flex;
    align-items: center;

    .icon {
      width: 30px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        width: 60%;
        height: 60%;
        object-fit: contain;
      }
    }

    .text {
      ${fontTemplate("1.3rem", "1", `${theme.fonts.Bold}`, ``)}
      padding-inline: 10px;
    }

    ${type == "powerpoint"
      ? css`
          background-color: #fff8d0;
          .icon {
            background-color: #fff1a0;

            svg {
              fill: #a68e1c;
            }
          }

          .text {
            color: #a68e1c;
          }
        `
      : type == "excel"
      ? css`
          background-color: #c2f4ea;
          .icon {
            background-color: #9fefdf;

            svg {
              fill: #00ae7f;
            }
          }

          .text {
            color: #00ae7f;
          }
        `
      : type == "docs"
      ? css`
          background-color: #c2f4ea;
          .icon {
            background-color: #9fefdf;

            svg {
              fill: #00a8f6;
            }
          }

          .text {
            color: #00a8f6;
          }
        `
      : ""}
  `}
`;

// Loader
export const Loader = styled.div`

 ${({theme}) => css`
           margin: 100px 0px;
  width: 50px;
  height: 50px;
  display: grid;
  border-radius: 50%;
  -webkit-mask: radial-gradient(farthest-side, #0000 40%, #000 41%);
  background: linear-gradient(0deg, #766df480 50%, #766df4ff 0) center/4px 100%,
    linear-gradient(90deg, #766df440 50%, #766df4bf 0) center/100% 4px;
  background-repeat: no-repeat;
  animation: s3 1s infinite steps(12);

  &::before,
  &::after {
    content: "";
    grid-area: 1/1;
    border-radius: 50%;
    background: inherit;
    opacity: 0.915;
    transform: rotate(30deg);
  }
  &::after {
    opacity: 0.83;
    transform: rotate(60deg);
  }

  @keyframes s3 {
    100% {
      transform: rotate(1turn);
    }
  }
`}
`;
