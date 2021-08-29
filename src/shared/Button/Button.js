import React from "react";
import { CtaBtn, CtaBtnWrapper } from "./Button.styled";
import { Link } from "react-scroll";

const Button = () => {
    return (
        <CtaBtnWrapper className="center">
            <CtaBtn>
                <Link to="projects" smooth={true} duration={1000} offset={-83}>
                    <svg width="180px" height="60px">
                        <polyline points="179,1 179,59 1,59 1,1 179,1" />
                        <polyline points="179,1 179,59 1,59 1,1 179,1" />
                    </svg>
                    <span>VIEW PROJECTS</span>
                </Link>
            </CtaBtn>
        </CtaBtnWrapper>
    );
};

export default Button;
