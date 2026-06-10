import React from "react";
import "./Offers.css";

const Offers = () => {
  return (
    <section className="offers-section" id="offers">
      <div className="offers-container">
        <div className="offers-header">
          <h2 className="offers-title">
            What we <span className="highlight-pill">can</span>
            <br />
            <span className="underline-text">offer</span> you!
          </h2>
          <div className="offers-wave"></div>
          <div className="offers-yellow-line"></div>
        </div>

        <div className="offers-list">
          <div className="offers-item">
            <div className="offers-meta">
              Office of multiple
              <br />
              interest content
            </div>
            <div className="offers-main-title">Colaborative & partnership</div>
            <div className="offers-arrow"></div>
          </div>

          <div className="offers-item">
            <div className="offers-meta">
              The hanger US Air force
              <br />
              digital experimental
            </div>
            <div className="offers-main-title">We talk about our weight</div>
            <div className="offers-arrow"></div>
          </div>

          <div className="offers-item">
            <div className="offers-meta">
              Delta faucet content,
              <br />
              social, digital
            </div>
            <div className="offers-main-title">
              Piloting digital confidence
              <div className="offers-badge"></div>
            </div>
            <div className="offers-arrow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
