import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section" id="footer">
      <div className="newsletter-arrows-left"></div>
      <div className="newsletter-arrows-right"></div>
      <div className="footer-container">
        <div className="newsletter-box">
          <div className="newsletter-purple-shape"></div>

          <h2 className="newsletter-title">Subscribe to our newsletter</h2>
          <p className="newsletter-subtitle">
            To make your stay special and even more memorable
          </p>
          <button className="subscribe-btn">Subscribe Now</button>
        </div>

        <hr className="footer-divider" />

        <div className="footer-links-grid">
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#studio">Studio</a>
              </li>
              <li>
                <a href="#service">Service</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Terms & Policies</h3>
            <ul>
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms">Terms & Conditions</a>
              </li>
              <li>
                <a href="#explore">Explore</a>
              </li>
              <li>
                <a href="#accessibility">Accessibility</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Follow Us</h3>
            <ul>
              <li>
                <a href="#instagram">Instagram</a>
              </li>
              <li>
                <a href="#linkedin">LinkedIn</a>
              </li>
              <li>
                <a href="#youtube">Youtube</a>
              </li>
              <li>
                <a href="#twitter">Twitter</a>
              </li>
            </ul>
          </div>

          <div className="footer-column contact-column">
            <h3>Terms & Policies</h3>
            <p>1498w Fluton ste, STE 2D Chicgo, IL 63867.</p>
            <p>(123) 456789000</p>
            <p>
              <a href="mailto:info@elementum.com">info@elementum.com</a>
            </p>
          </div>
        </div>

        <div className="footer-copyright">
          ©2023 Elementum. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
