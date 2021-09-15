import React, { useState } from "react";
import { ContactContainer, ContactSection } from "./ContactForm.styled";
import emailjs from "emailjs-com";
import { BasicCtaBtn } from "../../shared/Button/Button.styled";
import { FaExclamationCircle } from "react-icons/fa";
import Loading from "../Loading/Loading";

const Contact = () => {
    const initialValues = {
        name: "",
        email: "",
        message: "",
    };
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

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
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <ContactSection id="contact">
            <ContactContainer>
                <h1>Contact</h1>
                {/* <Loading /> */}
                <form onSubmit={handleSubmit}>
                    <div className={errors.name ? "row error" : "row"}>
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
                    </div>
                    <div className={errors.name ? "row error" : "row"}>
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
                    </div>
                    <div className={errors.name ? "row error" : "row"}>
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
                    </div>
                    <div className="center">
                        <BasicCtaBtn type="submit">
                            {isLoading ? "loading" : "GET IN TOUCH"}
                        </BasicCtaBtn>
                    </div>
                </form>
            </ContactContainer>
        </ContactSection>
    );
};

export default Contact;
