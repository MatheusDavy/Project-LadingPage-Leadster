import { css } from "styled-components";

export const fontTemplate = (size: string, height: string, weight: number | string , color: string, align: 'start' | 'center' | 'end' = "start") => {
  return css`
    font-size: ${size};
    font-weight: ${weight};
    line-height: ${height};
    text-align: ${align};
    color: ${color};
  `;
};
