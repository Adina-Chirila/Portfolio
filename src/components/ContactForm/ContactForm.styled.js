import styled from "styled-components";
import { Container } from "../../shared/GlobalStyles";
import { colors } from "../../shared/colors";
import { dimensions } from "../NavBar/dimensions";

export const ContactSection = styled.div`
    min-height: calc(100vh - ${dimensions.navBarHeight});
    background-color: ${colors.darkBlue};
`;

export const ContactContainer = styled(Container)`
    min-height: calc(100vh - ${dimensions.navBarHeight});
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
        font-size: 35px;
        @media (max-width: 950px) {
            text-align: center;
        }
    }

    .row {
        max-width: 720px;
        display: flex;
        flex-direction: column;
        margin-bottom: 1.5em;

        label {
            margin-bottom: 0.5em;
            font-size: 14px;
        }

        textarea {
            height: 8em;
            resize: none;

            @media (max-width: 950px) {
                height: 15em;
            }
        }

        input,
        textarea {
            background-color: ${colors.deepDarkBlue};
            border: none;
            border-left: 3px solid ${colors.primaryPink};
            color: ${colors.white};
            padding: 1em 0.5em;
            border-radius: 5px;

            &:focus {
                outline: none;
            }
        }
    }

    .center {
        @media (max-width: 950px) {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 1.5em 0;
        }
    }
`;
