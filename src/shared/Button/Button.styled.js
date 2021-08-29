import styled from "styled-components";
import { colors } from "../colors";

export const CtaBtnWrapper = styled.div`
    width: 180px;
    height: 60px;
    position: absolute;

    @media (max-width: 905px) {
        left: 50%;
        transform: translateX(-50%);
    }
`;

export const CtaBtn = styled.button`
    width: 180px;
    height: 60px;
    cursor: pointer;
    background: transparent;
    color: ${colors.white};
    border: 2px solid ${colors.primaryPink};
    border-radius: 5px;
    font-family: inherit;
    letter-spacing: 1px;
    transition: 1s ease-in-out;

    svg {
        border-radius: 5px;
        position: absolute;
        left: 0;
        top: 0;
        fill: none;
        stroke: ${colors.white};
        stroke-dasharray: 150 480;
        stroke-dashoffset: 150;
        transition: 1s ease-in-out;
    }

    &:focus {
        outline: none;
    }

    &:hover {
        transition: 1s ease-in-out;
        background: ${colors.primaryPink};
    }

    &:hover svg {
        stroke-dashoffset: -480;
    }

    & span {
        color: white;
        font-weight: 500;
        font-size: 17px;
    }
`;

export const BasicCtaBtn = styled.button`
    font-size: 15px;
    color: ${colors.white};
    border: 2px solid ${colors.primaryPink};
    border-radius: 5px;
    background-color: inherit;
    font-family: inherit;
    padding: 0.5em 1em;
    font-weight: 500;
    letter-spacing: 1px;
    margin: 0 auto;
    cursor: pointer;
    transition: background-color 0.25s ease-in-out;

    &:focus {
        outline: none;
    }

    &:hover {
        background-color: ${colors.primaryPink};
    }
`;
