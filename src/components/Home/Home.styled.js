import styled from "styled-components";
import { Container } from "../../shared/GlobalStyles";
import { colors } from "../../shared/colors";
import { dimensions } from "../NavBar/dimensions";

export const HeroSection = styled.div`
    min-height: calc(100vh - ${dimensions.navBarHeight});
    background-color: ${colors.deepDarkBlue};
    margin-top: ${dimensions.navBarHeight};
`;

export const FlexContainer = styled(Container)`
    min-height: calc(100vh - ${dimensions.navBarHeight});
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 905px) {
        flex-direction: column-reverse;

        .hero-img {
            width: 250px;
        }
    }

    .hero-column {
        flex: 1;
        line-height: 0.9;

        .hero-headline {
            font-size: 45px;
            letter-spacing: 1.5px;

            &:nth-child(3) {
                margin-bottom: 1em;
            }

            span {
                color: ${colors.primaryPink};
            }

            @media (max-width: 1125px) {
                font-size: 35px;
            }

            @media (max-width: 565px) {
                font-size: 25px;
            }
        }

        .secondary-hero-headline {
            font-size: 35px;
            font-weight: 400;
            color: ${colors.whiteAlpha};

            @media (max-width: 1125px) {
                font-size: 25px;
            }

            @media (max-width: 565px) {
                font-size: 20px;
                margin: 1.5em 0;
            }
        }
    }

    .hero-text {
        @media (max-width: 905px) {
            line-height: 0.6;

            .hero-headline,
            .secondary-hero-headline {
                text-align: center;
            }
        }
    }
`;
