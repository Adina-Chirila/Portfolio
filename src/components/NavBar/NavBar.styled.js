import styled from "styled-components";
import { colors } from "../../shared/colors";
import { dimensions } from "./dimensions";

export const Header = styled.header`
    /* padding: 1em 0; */
    height: ${dimensions.navBarHeight};
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    /* box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2); */
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: ${colors.deepDarkBlue};
    color: ${colors.white};
    z-index: 1;
`;

export const Navigation = styled.nav`
    display: flex;

    .logo {
        cursor: pointer;
    }
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
        text-transform: capitalize;

        &.active {
            color: ${colors.primaryPink};
            transition: 0.3 ease-in-out;
        }

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
            transition: transform 0.2s ease-in-out;
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

    a {
        color: inherit;
    }

    .socialLink {
        margin-left: 1.5em;
        cursor: pointer;
        transition: color 0.2s ease-in-out;
    }

    .socialLink:hover {
        color: ${colors.primaryPink};
    }
`;
