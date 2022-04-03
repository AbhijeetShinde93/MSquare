import React, { useEffect, useState, useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import { specialize, products, testimonials } from "../../data";
import uuid from "react-uuid";

import "./Home.css";
import "./HomeMedia.css";
import Hero from "../Hero/Hero";
import { useNavigate } from "react-router-dom";

import BdesktopImage from "../../assets/images/backgroundImg/sample-1.png";
import BmobileImage from "../../assets/images/backgroundImg/sample-1.png";

import WdeskImage from "../../assets/images/backgroundImg/sample-3.png";
import WmobiImage from "../../assets/images/backgroundImg/sample-3.png";

import SdeskImage from "../../assets/images/backgroundImg/sample-2.png";
import SmobiImage from "../../assets/images/backgroundImg/sample-2.png";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return windowWidth;
};

const Home = () => {
  const bannerbgimageUrl =
    useWindowWidth() >= 650 ? BdesktopImage : BmobileImage;
  const servicebgimageUrl = useWindowWidth() >= 650 ? SdeskImage : SmobiImage;
  const whtwedobgimageUrl = useWindowWidth() >= 650 ? WdeskImage : WmobiImage;

  const header = (
    <>
      Blockchain <br />& DLT consulting and development
    </>
  );
  const subheader =
    "Professional Blockchain & DLT services for enterprises and entrepreneurs";

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/whatwedo");
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    // window.location.href = "/ourservices";
  };

  const readyToTalkHandler = () => {
    navigate("/contactus");
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="hero-section">
      <section
        className="container-fluid element-section"
        style={{
          backgroundImage: `url(${bannerbgimageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "100% 0%",
        }}>
        <div className="container">
          <Hero
            header={header}
            subheader={subheader}
            buttonText={"Our Services"}
            callback={handleClick}
          />
          <div className="hero-client">
            <ul>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/The-Graph-Logo3.svg"}
                  alt="client_hero"
                  className="client-img"
                />
              </li>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/The-Graph-Logo3.svg"}
                  alt="client_hero"
                  className="client-img"
                />
              </li>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/The-Graph-Logo3.svg"}
                  alt="client_hero"
                  className="client-img"
                />
              </li>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/The-Graph-Logo3.svg"}
                  alt="client_hero"
                  className="client-img"
                />
              </li>
              <li>
                <img
                  src={process.env.PUBLIC_URL + "/images/The-Graph-Logo3.svg"}
                  alt="client_hero"
                  className="client-img"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container-fluid">
        <div className="expertise-section">
          <div className="row flex-column">
            <div className="col-md d-flex justify-content-center align-items-center">
              <h2 className="section_title">Expertise</h2>
            </div>
            <div className="col-md d-flex justify-content-center align-items-center">
              <h3 className="section_subtitle">What we specialize in</h3>
            </div>
          </div>
          <div className="row justify-content-center">
            {specialize.map(({ image, title, content }) => {
              return (
                <div className="col-lg-4 col-md-4 col-12 mb-4" key={uuid()}>
                  <a className="card expert-card" href="/">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <img src={image} alt="expertise" className="exp-icons" />
                      <h4 className="expertise_heading">{title}</h4>
                      <p className="expertise_subheading">{content}</p>
                    </div>
                    <div className="d-flex justify-content-end align-items-end mt-3">
                      {/* <h5 className="explore-link-text">Explore</h5>
                      <BsArrowRight className="explore-icon" /> */}
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="container-fluid"
        style={{
          backgroundImage: `url(${whtwedobgimageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center right",
        }}>
        <div className="services-section">
          <div className="row flex-column">
            <div className="col-md d-flex justify-content-center align-items-center">
              <h2 className="section_title">Services</h2>
            </div>
            <div className="col-md d-flex justify-content-center align-items-center">
              <h3 className="section_subtitle">What we do</h3>
            </div>
          </div>
          <div className="row justify-content-center">
            {products.map(({ url, name }) => {
              return (
                <div className="col-lg-4 col-md-4 col-12" key={uuid()}>
                  <a className="cards_points" href={url}>
                    <h4 className="points_text">{name}</h4>
                    <BsArrowRight className="explore-icon" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="container-fluid"
        style={{
          backgroundImage: `url(${servicebgimageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",

          backgroundPosition: "center left",
        }}>
        <div className="container counter_section">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 col-md-4 col-12  py-4">
              <div className="countered-ele">
                <div className="d-flex justify-content-center brd-rad">
                  <span className="m-count">100</span>
                  <span className="counter-suffix">+</span>
                </div>
                <p className="name_s">Project</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12  py-4">
              <div className="countered-ele">
                <div className="d-flex justify-content-center  brd-rad">
                  <span className="m-count">120</span>
                  <span className="counter-suffix">+</span>
                </div>
                <p className="name_s">Smart contracts in production</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12  py-4">
              <div className="countered-ele">
                <div className="d-flex justify-content-center ">
                  <span className="m-count">700</span>
                  <span className="counter-suffix">+</span>
                </div>
                <p className="name_s">
                  Hours of Blockchain & DLT consulting delivered
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="container-fluid">
        <div className="testimonial-section">
          <div className="row flex-column">
            <div className="d-flex justify-content-center align-items-center">
              <h2 className="section_title">FEEDBACK</h2>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <h3 className="section_subtitle">What people say</h3>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <h5 className="section_subpara">
                We help startups and corporate clients build secure, trusted,
                and decentralized solutions using Blockchain and DLT
              </h5>
            </div>
          </div>

          <div className="row justify-content-center feedbacksec">
            {testimonials.map(
              ({ quote, feedback, author_img, author_name }) => {
                return (
                  <div className="col-lg-4 col-md-4 col-12" key={uuid()}>
                    <div className="card testimonial-card feedback">
                      <div className="d-flex flex-column justify-content-center align-items-center">
                        <h3 className="exp-quote">{quote}</h3>
                        <p className="exp-feedback">{feedback}</p>
                        <img
                          src={author_img}
                          alt="experties"
                          className="experties"
                        />
                        <h2 className="exp-name">{author_name}</h2>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section> */}

      <div className="container-fluid">
        <section className="container artical-down">
          <div className="artical-section">
            <div className="row ">
              <div className="col-lg-7 col-md-6 col-12 left-div">
                <div className="d-flex flex-column justify-content-between">
                  <h4 className="artical-title">
                    LimeChain has helped 100+ startups and corporate clients
                    build Secure, Trusted and Decentralized solutions using
                    Blockchain & DLT
                  </h4>
                  <p className="artical-text">Be one of them</p>
                  <div className="d-flex align-items-center mt-3">
                    <button
                      className="btn btn-ready-button"
                      onClick={readyToTalkHandler}>
                      Ready to talk?
                    </button>
                    <button
                      className="btn btn-check-client"
                      onClick={handleClick}>
                      What we do
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 col-12">
                <img
                  src={process.env.PUBLIC_URL + "/images/artical-img.jpg"}
                  alt="artical-img"
                  className="artical-img"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
