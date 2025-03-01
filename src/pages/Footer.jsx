import React from "react";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../components/style/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer__title">Aditya</h2>
      
      <div className="footer__socials">
        <a href="#" target="_blank" rel="noopener noreferrer" className="footer__icon">
          <FaInstagram />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="footer__icon">
          <FaLinkedin />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="footer__icon">
          <FaEnvelope />
        </a>
      </div>

      <p className="footer__copyright">© Aditya Corporation 2025. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
