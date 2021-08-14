import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { colors } from "./colors";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
  `;

export const Container = styled.div`
    max-width: 1100px;
    width: 90%;
    margin: 0 auto;
`;

// export const CtaBtn = styled.button`
//     font-size: 17px;
//     color: ${colors.white};
//     border: 2px solid ${colors.primaryPink};
//     border-radius: 5px;
//     background-color: inherit;
//     font-family: inherit;
//     padding: 0.5em 1em;
//     font-weight: 500;
//     letter-spacing: 1px;
// `;
