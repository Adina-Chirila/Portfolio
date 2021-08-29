import styled from "styled-components";
import { Container } from "../../shared/GlobalStyles";
import { colors } from "../../shared/colors";
import { dimensions } from "../NavBar/dimensions";
import { BasicCtaBtn } from "../../shared/Button/Button.styled";

export const ProjectsSection = styled.div`
    min-height: calc(100vh - ${dimensions.navBarHeight});
    background-color: ${colors.deepDarkBlue};
`;

export const ProjectsContainer = styled(Container)`
    min-height: calc(100vh - ${dimensions.navBarHeight});

    h1 {
        margin: 0;
        padding: 0.5em;
        font-size: 35px;

        @media (max-width: 950px) {
            text-align: center;
            padding: 1em 0;
        }
    }

    .center {
        display: flex;
        justify-content: center;
        align-items: center;

        a {
            margin-bottom: 1em;

            @media (max-width: 690px) {
                margin-bottom: 2em;
            }
        }
    }
`;

export const ProjectsThumbnail = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`;

export const ProjectCard = styled.div`
    width: 30%;
    min-height: 197px;
    padding: 1em 1.5em;
    background-color: ${colors.darkBlue};
    border-radius: 5px;
    margin-bottom: 1.5em;

    p {
        font-size: 12px;
        color: ${colors.whiteAlpha};
        line-height: 1.8;
        margin: 1.5em 0 2em;
    }

    .techs {
        display: flex;
        align-items: center;
        margin-top: auto;

        span {
            font-size: 12px;
            font-weight: 500;
        }

        span + span {
            margin-left: 1.5em;
        }
    }

    @media (max-width: 1120px) {
        width: 48%;
        min-height: 176px;
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 690px) {
        width: 100%;
    }
`;

export const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .external-link {
        color: ${colors.primaryPink};
        transition: all 0.25s ease-in-out;

        &:hover {
            transform: scale(1.2);
        }
    }

    h5 {
        font-size: 15px;
        color: ${colors.white};
        margin: 0;
    }
`;
