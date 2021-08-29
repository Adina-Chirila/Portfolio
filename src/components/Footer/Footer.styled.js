import styled from "styled-components";
import { colors } from "../../shared/colors";

export const FooterSection = styled.footer`
    font-size: 12px;
    background-color: ${colors.deepDarkBlue};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em 0;

    a {
        margin-left: 0.4em;
        color: ${colors.white};
        transition: color 0.2s ease-in-out;

        &:hover {
            color: ${colors.primaryPink};
        }
    }

    span {
        margin-right: 0.5em;
        color: ${colors.primaryPink};
    }
`;
