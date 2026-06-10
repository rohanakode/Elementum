import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <section className="hero">
     
      <div className="graphic purple-shape"></div>
      <div className="graphic red-wave"></div>
      <div className="graphic black-wave"></div>
      <div className="graphic yellow-line-1"></div>
      <div className="graphic yellow-line-2"></div>

      <div className="hero-text-container">
        <h1 className="hero-title">
          The <span className="underline-group">thinkers</span> and <br />
          doers were ch<span className="highlight-pink">anging</span> <br />
          the <span className="highlight-green">status</span> Quo with
        </h1>
        <p className="hero-subtitle">
          We are a team of strategists, designers communicators, researchers.
          Togeather,
          <br />
          we belive that progress only hghappens when you refuse to play things
          safe.
        </p>
        <div className="hero-images">
          <div className="circle-img img1"></div>
          <div className="circle-img img2"></div>
          <div className="circle-img img3"></div>
          <div className="circle-img img4"></div>
          <div className="circle-img img5"></div>
          <div className="circle-img img6"></div>
          <div className="circle-img img7"></div>
          <div className="circle-img img8"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
