import React, { useState } from "react";
import { Link } from "react-scroll";
import {
    Header,
    MobileMenu,
    NavContainer,
    Navigation,
    NavLinksWrapper,
    SocialLinksWrapper,
} from "./NavBar.styled";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import logo from "../../assets/logo.svg";
import { navLinks } from "../../data";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Header>
            <NavContainer>
                <Link to="home" smooth={true} duration={1000} offset={-83}>
                    <img src={logo} alt="logo" className="logo" />
                </Link>
                <MobileMenu
                    onClick={toggleMobileMenu}
                    className={isOpen && "open"}
                >
                    <div className="line"></div>
                </MobileMenu>
                <Navigation className={isOpen && "open"}>
                    <NavLinksWrapper>
                        {navLinks.map((link, index) => {
                            return (
                                <Link
                                    key={index}
                                    to={link}
                                    smooth={true}
                                    duration={800}
                                    offset={-83}
                                    className="navLink"
                                    activeClass="active"
                                    spy={true}
                                    onClick={toggleMobileMenu}
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
            </NavContainer>
        </Header>
    );
};

export default NavBar;
