import React from "react";
import { FooterSection } from "./Footer.styled";

const Footer = () => {
    return (
        <FooterSection>
            <span>&copy;</span> 2021 Designed &amp; Built by
            <a
                href="https://github.com/Adina-Chirila"
                target="_blank"
                rel="noreferrer"
            >
                Adina Chirila
            </a>
        </FooterSection>
    );
};

export default Footer;
