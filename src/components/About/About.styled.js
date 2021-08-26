import styled from "styled-components";
import { Container } from "../../shared/GlobalStyles";
import { colors } from "../../shared/colors";
import { dimensions } from "../NavBar/dimensions";

export const AboutSection = styled.div`
    min-height: calc(100vh - ${dimensions.navBarHeight});
    background-color: ${colors.darkBlue};
`;

export const AboutContainer = styled(Container)`
    min-height: calc(100vh - ${dimensions.navBarHeight});
    display: flex;
    justify-content: center;
    align-items: center;

    .about-column {
        flex: 1;
    }

    .about-title {
        font-size: 35px;
        margin: 0 0 0.5em 0;
    }

    p,
    .tag {
        font-size: 13px;
    }

    p {
        color: ${colors.whiteAlpha};
        line-height: 1.8;
    }

    p:nth-of-type(2) {
        margin: 2em 0 4em 0;
    }

    p:nth-of-type(3) {
        color: ${colors.white};
    }

    .tags {
        display: flex;
        justify-content: space-between;
    }

    .tag {
        font-weight: 500;
        padding-bottom: 0.5em;
        position: relative;

        &::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 0.2em;
            left: 0;
            bottom: 0;
            background-color: ${colors.primaryPink};
            border-radius: 2em;
        }
    }
`;
