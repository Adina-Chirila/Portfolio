import React from "react";
import { CtaBtn, CtaBtnWrapper } from "./Button.styled";

const Button = () => {
    return (
        <CtaBtnWrapper>
            <CtaBtn>
                <svg
                    width="180px"
                    height="60px"
                    viewBox="0 0 180 60"
                    class="border"
                >
                    <polyline points="179,1 179,59 1,59 1,1 179,1" />
                    <polyline points="179,1 179,59 1,59 1,1 179,1" />
                </svg>
                <span>VIEW PROJECTS</span>
            </CtaBtn>
        </CtaBtnWrapper>
    );
};

export default Button;
