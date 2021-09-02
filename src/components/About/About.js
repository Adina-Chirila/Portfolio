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
                        2019. After graduated my Master’s Degree and changed a
                        few jobs in fields not related with development, I felt
                        my potential was not fully used on the fields I worked.
                    </p>
                    <p>
                        Then I realized my professional career should change, so
                        I started looking for fields that I thought could offer
                        me the motivation and satisfaction I needed and the
                        opportunities to grow professionally on the long term.
                        That's how I discovered Front-end development, a
                        continuous growing field that offers me the challenges I
                        need in order to develop myself and grow professionally.
                        So I started reading, learning and building projects,
                        and now, I feel pretty confident that I can be
                        productive in a business environment and turn my passion
                        into a career.
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
