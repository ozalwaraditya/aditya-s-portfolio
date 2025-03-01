    import React, { useRef, useState } from "react";
    import * as emailjs from "emailjs-com";  // ✅ Fix import issue
    import "../components/style/Contact.css";

    const Contact = () => {
    const form = useRef();
    const [isSent, setIsSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm(
            "service_4syv26m", // ⬅ Replace with your EmailJS Service ID
            "template_il46tkp", // ⬅ Replace with your EmailJS Template ID
            form.current,
            "XgaxrelKCoNyPWKDV" // ⬅ Replace with your EmailJS Public Key
        )
        .then(
            (result) => {
            console.log("Email sent successfully:", result.text);
            setIsSent(true);
            form.current.reset();
            },
            (error) => {
            console.error("Error sending email:", error.text);
            }
        );
    };

    return (
        <section className="contact section" id="contact">
        <h2 className="section__title">Get in Touch</h2>
        <span className="section__subtitle">Contact Me</span>

        <div className="contact__container container grid">
            {/* Contact Info */}
            <div className="contact__content">
            <h3 className="contact__title">Talk to me</h3>

            <div className="contact__info">
                {/* Email */}
                <div className="contact__card">
                <i className="bx bx-envelope contact__card-icon"></i>
                <h3 className="contact__card-title">Email</h3>
                <span className="contact__card-data">adityaozalwar14@gmail.com</span>
                <a href="mailto:adityaozalwar14@gmail.com" className="contact__button">
                    Write Me <i className="bx bx-right-arrow-alt"></i>
                </a>
                </div>

                {/* WhatsApp */}
                <div className="contact__card">
                <i className="bx bxl-whatsapp contact__card-icon"></i>
                <h3 className="contact__card-title">WhatsApp</h3>
                <span className="contact__card-data">+91 90288 11084</span>
                <a href="https://wa.me/919028811084" target="_blank" className="contact__button">
                    Write Me <i className="bx bx-right-arrow-alt"></i>
                </a>
                </div>

                {/* Twitter */}
                <div className="contact__card">
                <i className="bx bxl-twitter contact__card-icon"></i>
                <h3 className="contact__card-title">Twitter</h3>
                <span className="contact__card-data">@yourusername</span>
                <a href="https://twitter.com/yourusername" target="_blank" className="contact__button">
                    Write Me <i className="bx bx-right-arrow-alt"></i>
                </a>
                </div>
            </div>
            </div>

            {/* Contact Form */}
            <div className="contact__content">
            <h3 className="contact__title">Write Me Your Project</h3>

            <form ref={form} onSubmit={sendEmail} className="contact__form">
                <div className="contact__form-div">
                <label className="contact__form-tag">Name</label>
                <input type="text" name="name" className="contact__form-input" placeholder="Enter your name" required />
                </div>

                <div className="contact__form-div">
                <label className="contact__form-tag">Email</label>
                <input type="email" name="email" className="contact__form-input" placeholder="Enter your email" required />
                </div>

                <div className="contact__form-div">
                <label className="contact__form-tag">Message</label>
                <textarea
                    name="message"
                    cols="30"
                    rows="5"
                    className="contact__form-input"
                    placeholder="Write your project details"
                    required
                ></textarea>
                </div>

                <button type="submit" className="button button--flex">
                Send Message
                </button>

                {isSent && <p className="success-message">Message sent successfully! ✅</p>}
            </form>
            </div>
        </div>
        </section>
    );
    };

    export default Contact;
