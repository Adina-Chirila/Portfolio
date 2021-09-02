import styled from "styled-components";
import { colors } from "../../shared/colors";
import { Container } from "../../shared/GlobalStyles";
import { dimensions } from "./dimensions";

export const Header = styled.header`
    height: ${dimensions.navBarHeight};
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: ${colors.deepDarkBlue};
    color: ${colors.white};
    z-index: 1;
`;

export const NavContainer = styled(Container)`
    display: flex;
    justify-content: space-between;

    .logo {
        cursor: pointer;
        flex: 1;
    }
`;

export const Navigation = styled.div`
    display: flex;
    width: 50%;

    @media (max-width: 1000px) {
        width: 70%;
    }

    @media (max-width: 750px) {
        position: absolute;
        top: ${dimensions.navBarHeight};
        width: 100%;
        background-color: ${colors.darkBlue};
        min-height: calc(100vh - ${dimensions.navBarHeight});
        padding: 3em 0;
        right: -100%;
        opacity: 1;
        transition: all 0.5s ease;
    }

    &.open {
        @media (max-width: 750px) {
            display: flex;
            right: 0;
            opacity: 1;
            transition: all 0.5s ease;
        }
    }
`;

export const MobileMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    display: none;

    .line {
        width: 35px;
        height: 3px;
        background-color: ${colors.white};
        border-radius: 5px;
        transition: all 0.4s ease-in-out;

        &::before,
        &::after {
            content: "";
            position: absolute;
            width: 35px;
            height: 3px;
            background-color: ${colors.white};
            border-radius: 5px;
            display: block;
            transition: all 0.4s ease-in-out;
        }

        &::before {
            transform: translateY(-12px);
        }
        &::after {
            transform: translateY(12px);
        }
    }

    &.open .line {
        transform: translateX(-50px);
        background: transparent;
    }

    &.open .line::before {
        transform: rotate(45deg) translate(35px, -35px);
    }

    &.open .line::after {
        transform: rotate(-45deg) translate(35px, 35px);
    }

    @media (max-width: 750px) {
        display: flex;
    }
`;

export const NavLinksWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;

    .navLink {
        font-size: 14px;
        cursor: pointer;
        padding: 1em 0;
        position: relative;
        text-transform: capitalize;
        transition: color 0.3s ease-in-out;

        &::after,
        &::before {
            content: "";
            position: absolute;
            width: 0%;
            display: block;
            height: 1px;
            margin-top: 2px;
            transition: all 0.4s ease-in-out;
        }

        &::after {
            bottom: 10%;
            left: 0;
        }

        &::before {
            top: 10%;
            right: 0;
        }

        &:hover::after {
            width: 100%;
            height: 1px;
            bottom: 10%;
            background-color: #fff;
        }
        &:hover::before {
            width: 100%;
            height: 1px;
            top: 10%;
            background-color: #fff;
        }

        @media (max-width: 750px) {
            font-size: 25px;
            text-transform: uppercase;
            font-weight: 600;
        }
    }

    .active {
        color: ${colors.primaryPink};
    }

    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

export const SocialLinksWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2em;

    @media (max-width: 750px) {
        margin-left: 0;
    }

    a {
        color: inherit;
    }

    .socialLink {
        margin-left: 1.5em;
        cursor: pointer;
        transition: color 0.2s ease-in-out;

        @media (max-width: 750px) {
            display: none;
        }
    }
    .socialLink:hover {
        color: ${colors.primaryPink};
    }
`;
