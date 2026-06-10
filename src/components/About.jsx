import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="graphic long-red-line"></div>
      <div className="graphic red-triangle-1"></div>
      <div className="graphic red-triangle-2"></div>
      <div className="graphic red-triangle-3"></div>
      <div className="graphic yellow-line-3"></div>
      <div className="graphic yellow-line-4"></div>

      <div className="about-block top-block">
        <div className="about-text">
          <h2 className="about-title">
            <span className="underline-group">Tomorrow</span> should be <br />
            better than <span className="highlight-green">today</span>
          </h2>
          <p className="about-description">
            We are a team of strategists, designers communicators, researchers.
            Togeather, we belive that progress only happens when you refuse to
            play things safe.
          </p>
          <a href="#" className="read-more">
            Read more <span className="long-arrow"></span>
          </a>
        </div>
        <div className="about-image-container">
          <div className="about-img about-img-1"></div>
        </div>
      </div>

      <div className="about-block bottom-block">
        <div className="about-text">
          <h2 className="about-title">
            <span className="highlight-green">See</span> how we can <br />
            help you <span className="underline-group">progress</span>
          </h2>
          <p className="about-description">
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design
            digital, comms and social research.
          </p>
          <a href="#" className="read-more">
            Read more <span className="long-arrow"></span>
          </a>
        </div>
        <div className="about-image-container">
          <div className="about-img about-img-2"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
