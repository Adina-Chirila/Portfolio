import styled from "styled-components";
import { Container } from "../../shared/GlobalStyles";
import { colors } from "../../shared/colors";
import { dimensions } from "../NavBar/dimensions";

export const HeroSection = styled.div`
    height: calc(100vh - ${dimensions.navBarHeight});
    background-color: ${colors.deepDarkBlue};
    margin-top: ${dimensions.navBarHeight};
`;

export const FlexContainer = styled(Container)`
    height: calc(100vh - ${dimensions.navBarHeight});
    display: flex;
    justify-content: center;
    align-items: center;

    .hero-column {
        flex: 1;
        line-height: 0.9;

        .hero-headline {
            font-size: 45px;
            letter-spacing: 1.5px;

            span {
                color: ${colors.primaryPink};
            }
        }

        .secondary-hero-headline {
            font-size: 35px;
            font-weight: 400;
            color: ${colors.whiteAlpha};
        }
    }

    .hero-headline:nth-child(3) {
        margin-bottom: 1em;
    }
`;
