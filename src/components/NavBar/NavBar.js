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
                    <div className="mobile-menu"></div>
                    <NavLinksWrapper>
                        {navLinks.map((link, index) => {
                            return (
                                <Link
                                    key={index}
                                    to={link}
                                    smooth={true}
                                    duration={1000}
                                    offset={-83}
                                    className="navLink"
                                    activeClass="active"
                                    spy={true}
                                >
                                    {link}
                                </Link>
                            );
                        })}
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
