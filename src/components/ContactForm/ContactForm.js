import React, { useState } from "react";
import {
    ContactContainer,
    ContactSection,
    Row,
    SubmitBtn,
} from "./ContactForm.styled";
import emailjs from "emailjs-com";
import { FaExclamationCircle } from "react-icons/fa";

const Contact = () => {
    const initialValues = {
        name: "",
        email: "",
        message: "",
    };
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [submitResult, setSubmitResult] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let errors = {};

        if (!values.name.trim()) {
            errors.name = "Name is required";
        }

        if (!values.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = "Email address is invalid";
        }

        if (!values.message) {
            errors.message = "Message is required";
        }

        if (Object.keys(errors).length === 0) {
            setErrors({});
            sendEmail(e);
        } else {
            setErrors(errors);
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs
            .sendForm(
                `${process.env.REACT_APP_SERVICE_ID}`,
                `${process.env.REACT_APP_TEMPLATE_ID}`,
                e.target,
                `${process.env.REACT_APP_USER_ID}`
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setValues(initialValues);
                    setIsLoading(false);
                    setSubmitResult("Your message was successfully submitted!");
                },
                (error) => {
                    console.log(error.text);
                    setIsLoading(false);
                    setSubmitResult(
                        "Something went wrong. Please try again or contact me on LinkedIn."
                    );
                }
            );
    };

    return (
        <ContactSection id="contact">
            <ContactContainer>
                <h1>Contact</h1>
                <form onSubmit={handleSubmit}>
                    <Row>
                        <label
                            htmlFor="name"
                            className={errors.name && "error"}
                        >
                            Name*
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Please enter your name..."
                            value={values.name}
                            onChange={handleChange}
                            className={errors.name && "error"}
                        />
                        {errors.name && (
                            <>
                                <span className="error-text">
                                    {errors.name}
                                </span>
                                <FaExclamationCircle className="icon" />
                            </>
                        )}
                    </Row>
                    <Row>
                        <label htmlFor="email">Email*</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Please enter your email..."
                            value={values.email}
                            onChange={handleChange}
                            className={errors.email && "error"}
                        />
                        {errors.email && (
                            <>
                                <FaExclamationCircle className="icon" />
                                <span className="error-text">
                                    {errors.email}
                                </span>
                            </>
                        )}
                    </Row>
                    <Row>
                        <label htmlFor="message">Message*</label>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Please enter your message..."
                            value={values.message}
                            onChange={handleChange}
                            className={errors.message && "error"}
                        />
                        {errors.message && (
                            <>
                                <FaExclamationCircle className="icon" />
                                <span className="error-text">
                                    {errors.message}
                                </span>
                            </>
                        )}
                    </Row>
                    {submitResult && <p className="message">{submitResult}</p>}
                    <div className="center">
                        <SubmitBtn type="submit" disabled={isLoading}>
                            {isLoading ? "Loading..." : "GET IN TOUCH"}
                        </SubmitBtn>
                    </div>
                </form>
            </ContactContainer>
        </ContactSection>
    );
};

export default Contact;
