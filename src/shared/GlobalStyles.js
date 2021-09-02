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

  body{
    color: ${colors.white};
  }
  `;

export const Container = styled.div`
    max-width: 1300px;
    width: 90%;
    margin: 0 auto;
`;
