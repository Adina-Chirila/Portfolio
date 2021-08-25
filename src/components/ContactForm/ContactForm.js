import React from "react";
import { ContactContainer, ContactSection } from "./ContactForm.styled";
import emailjs from "emailjs-com";
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from "../../config/config";
import { BasicCtaBtn } from "../../shared/Button/Button.styled";

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm({ SERVICE_ID }, { TEMPLATE_ID }, e.target, { USER_ID })
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };
    return (
        <ContactSection id="contact">
            <ContactContainer>
                <h1>Contact</h1>
                <form onSubmit={sendEmail}>
                    <div className="row">
                        <label htmlFor="name">Name*</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Please enter your name..."
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="email">Email*</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Please enter your email..."
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="message">Message*</label>
                        <textarea
                            name="message"
                            id="message"
                            rows="8"
                            placeholder="Please enter your message..."
                        />
                    </div>
                    <BasicCtaBtn type="submit">GET IN TOUCH</BasicCtaBtn>
                </form>
            </ContactContainer>
        </ContactSection>
    );
};

export default Contact;
