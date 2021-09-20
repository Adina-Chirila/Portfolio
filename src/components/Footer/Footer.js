import React from "react";
import { FooterSection } from "./Footer.styled";

const Footer = () => {
    return (
        <FooterSection>
            <span>&copy;</span> 2021 Designed &amp; Built by
            <a
                href="https://www.linkedin.com/in/adina-elena-chirila/"
                target="_blank"
                rel="noreferrer"
            >
                Adina Chirila
            </a>
        </FooterSection>
    );
};

export default Footer;
