import React from "react";
import { Link } from "react-scroll";
import { Container } from "../../shared/GlobalStyles";
import {
    Header,
    Navigation,
    NavLinksWrapper,
    SocialLinksWrapper,
} from "./NavBar.styled";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import logo from "../../assets/logo.svg";
import { dimensions } from "../NavBar/dimensions";

const NavBar = () => {
    return (
        <Header>
            <Container>
                <Navigation>
                    <img src={logo} alt="logo" />
                    <NavLinksWrapper>
                        <Link
                            to="home"
                            smooth={true}
                            duration={1000}
                            offset={-83}
                            className="navLink"
                        >
                            Home
                        </Link>
                        <Link
                            to="about"
                            smooth={true}
                            duration={1000}
                            offset={-83}
                            className="navLink"
                        >
                            About
                        </Link>
                        <Link
                            to="projects"
                            smooth={true}
                            duration={1000}
                            offset={-83}
                            className="navLink"
                        >
                            Projects
                        </Link>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={1000}
                            offset={-83}
                            className="navLink"
                        >
                            Contact
                        </Link>
                    </NavLinksWrapper>

                    <SocialLinksWrapper>
                        <AiFillGithub className="socialLink" size={20} />
                        <AiFillLinkedin className="socialLink" size={20} />
                    </SocialLinksWrapper>
                </Navigation>
            </Container>
        </Header>
    );
};

export default NavBar;
