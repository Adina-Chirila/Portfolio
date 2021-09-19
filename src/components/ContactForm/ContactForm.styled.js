import styled from "styled-components";
import { Container } from "../../shared/GlobalStyles";
import { colors } from "../../shared/colors";
import { dimensions } from "../NavBar/dimensions";
import { BasicCtaBtn } from "../../shared/Button/Button.styled";

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

    .center {
        @media (max-width: 950px) {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 1.5em 0;
        }
    }

    .message {
        font-size: 15px;
        line-height: 1.5;
        margin-bottom: 23px;
    }
`;

export const Row = styled.div`
    max-width: 720px;
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5em;
    position: relative;

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

    .error-text {
        margin: 0.5em 0 0;
        padding: 0;
        font-size: 10px;
    }

    .icon {
        position: absolute;
        top: 38px;
        right: 5px;
    }
`;

export const SubmitBtn = styled(BasicCtaBtn)`
    width: 160px;

    &:disabled {
        cursor: not-allowed;
        background-color: ${colors.primaryPinkAlpha};
    }
`;
