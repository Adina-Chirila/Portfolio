import styled from "styled-components";
import { colors } from "../../shared/colors";

export const Header = styled.header`
    padding: 1.2em 0;
    border-bottom: 1px solid white;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: ${colors.deepDarkBlue};
    color: ${colors.white};
`;

export const Navigation = styled.div`
    display: flex;
`;

export const NavLinksWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;

    .navLink {
        font-size: 14px;
        cursor: pointer;
        margin-right: 2.5em;
        padding: 1em 0;
        position: relative;

        &::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 0.2em;
            left: 0;
            bottom: 0;
            background-color: ${colors.primaryPink};
            transform: scale(0, 1);
            transform-origin: 0% 100%;
            border-radius: 1em;
            transition: transform 0.4s ease-in-out;
        }

        &:hover::after {
            transform: scale(1, 1);
        }
    }
`;

export const SocialLinksWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .socialLink {
        margin-left: 1.5em;
        cursor: pointer;
        transition: color 0.4s ease-in-out;
    }

    .socialLink:hover {
        color: ${colors.primaryPink};
    }
`;
