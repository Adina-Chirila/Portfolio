import React from "react";
import { CtaBtn } from "../../shared/GlobalStyles";
import { FlexContainer, HeroSection } from "./Home.styled";
import { ReactComponent as HeroImage } from "../../assets/heroImg.svg";
import Button from "../../shared/Button/Button";

const Home = () => {
    return (
        <HeroSection id="home">
            <FlexContainer>
                <div className="hero-column">
                    <h1 className="hero-headline">
                        Hi, I'm <span>Adina</span>
                    </h1>
                    <h2 className="secondary-hero-headline">a self-taught</h2>
                    <h1 className="hero-headline">front-end developer</h1>
                    {/* <CtaBtn>VIEW PROJECTS</CtaBtn> */}
                    <Button />
                </div>
                <HeroImage className="hero-column" />
            </FlexContainer>
        </HeroSection>
    );
};

export default Home;
