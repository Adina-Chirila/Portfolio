import React from "react";
import { ReactComponent as AboutImage } from "../../assets/aboutImg.svg";
import { AboutContainer, AboutSection } from "./About.styled";
import { tags } from "../../data";

const About = () => {
    return (
        <AboutSection id="about">
            <AboutContainer>
                <AboutImage className="about-column about-img" />
                <div className="about-column">
                    <h1 className="about-title">About me</h1>
                    <p>
                        My interest in Front-end Development started back in
                        2019, when I started looking for fields that I thought
                        could offer me the possibility of continuous learning
                        and the opportunity to grow professionally.
                    </p>
                    <p>
                        That's how I discovered Front-end development, a
                        continuous growing field that offers me the challenges I
                        need in order to develop myself. So I started reading,
                        learning and building projects and in 2020 I succeeded
                        to obtain the Web Development certification from the
                        Informal School od IT. Currently, I feel pretty
                        confident that I can be productive in a business
                        environment and turn my passion into a career.
                    </p>
                    <p>
                        Here are the technologies I've been working with so far:
                    </p>
                    <div className="tags">
                        {tags.map((tag, index) => {
                            return (
                                <div className="tag" key={index}>
                                    {tag}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </AboutContainer>
        </AboutSection>
    );
};

export default About;
