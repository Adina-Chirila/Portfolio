import React from "react";
import {
    ProjectCard,
    ProjectsContainer,
    ProjectsSection,
    ProjectsThumbnail,
    SeeMoreBtn,
    TitleWrapper,
} from "./Projects.styled";
import { projectCardsInfo } from "../../data";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { BasicCtaBtn } from "../../shared/Button/Button.styled";

const Projects = () => {
    return (
        <ProjectsSection id="projects">
            <ProjectsContainer>
                <h1>Projects</h1>
                <ProjectsThumbnail>
                    {projectCardsInfo.map((card) => {
                        return (
                            <ProjectCard>
                                <TitleWrapper>
                                    <a
                                        href={card.gitHubLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="external-link"
                                    >
                                        <AiFillGithub
                                            className="socialLink"
                                            size={20}
                                        />
                                    </a>

                                    <h5>{card.title}</h5>
                                    <a
                                        href={card.liveDemo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="external-link"
                                    >
                                        <FiExternalLink
                                            className="socialLink"
                                            size={20}
                                        />
                                    </a>
                                </TitleWrapper>
                                <p>{card.description}</p>
                                <div className="techs">
                                    {card.tech.map((tech) => {
                                        return <span>{tech}</span>;
                                    })}
                                </div>
                            </ProjectCard>
                        );
                    })}
                </ProjectsThumbnail>
                <div className="center">
                    <BasicCtaBtn>SEE MORE ON GITHUB</BasicCtaBtn>
                </div>
            </ProjectsContainer>
        </ProjectsSection>
    );
};

export default Projects;
