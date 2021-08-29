import React from "react";
import { CtaBtn } from "../../shared/GlobalStyles";
import { FlexContainer, HeroSection } from "./Home.styled";
import { ReactComponent as HeroImage } from "../../assets/heroImg.svg";
import Button from "../../shared/Button/Button";
import { Link } from "react-scroll";

const Home = () => {
    return (
        <HeroSection id="home">
            <FlexContainer>
                <div className="hero-column hero-text">
                    <h1 className="hero-headline">
                        Hi, I'm <span>Adina</span>
                    </h1>
                    <h2 className="secondary-hero-headline">a self-taught</h2>
                    <h1 className="hero-headline">front-end developer</h1>
                    {/* <CtaBtn>VIEW PROJECTS</CtaBtn> */}
                    {/* <Link
                        to="projects"
                        smooth={true}
                        duration={1000}
                        offset={-83}
                        className="center"
                    >
                        <Button />
                    </Link> */}
                    <Button />
                </div>
                <HeroImage className="hero-column hero-img" />
            </FlexContainer>
        </HeroSection>
    );
};

export default Home;
