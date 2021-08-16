import React from "react";
import { CtaBtn } from "../../shared/GlobalStyles";
import { ReactComponent as AboutImage } from "../../assets/aboutImg.svg";
import Button from "../../shared/Button/Button";
import { AboutContainer, AboutSection } from "./About.styled";

const About = () => {
    const tags = [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Material-UI",
        "styled-components",
    ];
    return (
        <AboutSection id="about">
            <AboutContainer>
                <AboutImage className="about-column" />
                <div className="about-column">
                    <h1 className="about-title">About me</h1>
                    <p className="about-text">
                        My interest in Front- end Development started back in
                        2019. After graduating my Master’s Degree and changing a
                        few jobs in fields not related with development, I found
                        myself not being satisfied with the activities I was
                        doing at work and I felt that my potential was not fully
                        used.
                    </p>
                    <p className="about-text">
                        Then I realized my professional career should change, so
                        I started looking for fields that I thought could be
                        built on a continuous learning path, and could offer me
                        the motivation I needed. That's how I found Front-end
                        development, a growing field that offers me the
                        challenges I need in order to develop myself and grow
                        professionally. So I started reading, learning, watching
                        tutorials and building projects, and now, I feel pretty
                        confident that I can be productive in a business and
                        turn my passion into a career.
                    </p>
                    <p className="about-text">
                        Here are the technologies I've been working with so far:
                    </p>
                    <div className="tags">
                        {tags.map((tag) => {
                            return <div className="tag">{tag}</div>;
                        })}
                    </div>
                </div>
            </AboutContainer>
        </AboutSection>
    );
};

export default About;
