import React, { useState } from "react";
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
import { navLinks } from "../../data";

const NavBar = () => {
    

    return (
        <Header>
            <Container>
                <Navigation>
                    <Link to="home" smooth={true} duration={1000} offset={-83}>
                        <img src={logo} alt="logo" className="logo" />
                    </Link>
                    <NavLinksWrapper>
                    {navLinks.map((link,index)=>{
                        return(
                            <Link key={index}
                            to={link}
                            smooth={true}
                            duration={1000}
                            offset={-83}
                            className="navLink"
                        >
                            {link}
                        </Link>
)
                    })}
                   
                        {/* <Link
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
                        </Link> */}
                    </NavLinksWrapper>

                    <SocialLinksWrapper>
                        <a
                            href="https://github.com/Adina-Chirila"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <AiFillGithub className="socialLink" size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/adina-elena-chirila/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <AiFillLinkedin className="socialLink" size={20} />
                        </a>
                    </SocialLinksWrapper>
                </Navigation>
            </Container>
        </Header>
    );
};

export default NavBar;
