    import '../components/style/Contact.css';

    const Contact = () => {
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

            <form className="contact__form">
                <div className="contact__form-div">
                <label className="contact__form-tag">Name</label>
                <input type="text" className="contact__form-input" placeholder="Enter your name" />
                </div>

                <div className="contact__form-div">
                <label className="contact__form-tag">Email</label>
                <input type="email" className="contact__form-input" placeholder="Enter your email" />
                </div>

                <div className="contact__form-div">
                <label className="contact__form-tag">Message</label>
                <textarea
                    name="project"
                    cols="30"
                    rows="5"
                    className="contact__form-input"
                    placeholder="Write your project details"
                ></textarea>
                </div>

                <button className="button button--flex">
                Send Message
                <svg
                    className="button__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                    d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352Z"
                    fill="var(--container-color)"
                    ></path>
                </svg>
                </button>
            </form>
            </div>
        </div>
        </section>
    );
    };

    export default Contact;
