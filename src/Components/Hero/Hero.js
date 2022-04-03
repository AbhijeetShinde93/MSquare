import React from "react";
import "./Hero.css";

const Hero = ({ header, subheader, buttonText, callback }) => {
  return (
    <div className="hero-wrap">
      <div className="col-12">
        <h1 className="hero-text">{header}</h1>
      </div>
      <div className="col-12">
        <h2 className="hero-subtext">{subheader}</h2>
      </div>
      <div className="col-12">
        <button className="btn btn-hero-button" onClick={callback}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Hero;
