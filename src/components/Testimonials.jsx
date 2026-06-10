import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            <span className="highlight-pill">What</span> our customer <br />
            says <span className="underline-text">About Us</span>
          </h2>
          <div className="testimonials-yellow-line"></div>
        </div>

        <div className="testimonials-content">
          <div className="avatar avatar-left-1"></div>
          <div className="avatar avatar-left-2"></div>
          <div className="avatar avatar-left-3"></div>
          <div className="avatar avatar-left-4"></div>

          <div className="quote-card">
            <div className="quote-icon open-quote"></div>
            <p className="quote-text">
              Elementum delivered the site with inthe timeline as they
              requested. Inthe end, the client found a 50% increase in traffic
              with in days since its launch. They also had an impressive ability
              to use technologies that the company hasn't used, which have also
              proved to be easy to use and reliable
            </p>
            <div className="quote-icon close-quote"></div>
          </div>

          <div className="avatar avatar-right-1"></div>
          <div className="avatar avatar-right-2"></div>
          <div className="avatar avatar-right-3"></div>
          <div className="avatar avatar-right-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
