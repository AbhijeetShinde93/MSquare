import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../Hero/Hero";
import "./About.css";
import impactImage from "../../assets/images/about-img-2.jpg";
import impactright from "../../assets/images/about-img1.jpg";
import businessman from "../../assets/images/businessman.jpg";
import { areaExpertise } from "../../data";
import { image_1, image_2, profile_image1 } from "../../assets/images";
import uuid from "react-uuid";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import Aritical from "../Artical/Aritical";

import BdesktopImage from "../../assets/images/backgroundImg/ab-img-2.jpg";
import BmobileImage from "../../assets/images/backgroundImg/ab-img-2.jpg";

import articlebgImg from "../../assets/images/backgroundImg/new-img-art-1.jpg";

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

const About = () => {
  const bannerbgimageUrl =
    useWindowWidth() >= 650 ? BdesktopImage : BmobileImage;

  const navigate = useNavigate();

  const aboutHeader = (
    <>
      We live and breathe
      <br /> Blockchain & DLT
    </>
  );
  const aboutSubheader =
    "Here at Msquare, we constantly keep an eye on the cutting edge of innovation, while developing real-world decentralized applications. And that’s exactly what makes us successful.";

  const handleClick = () => {
    navigate("/contactus");
  };

  const abt_artical_header = "Working with us?";
  const abt_artical_subheader =
    "At Msquare we are always looking to add talent to our family. We would love to have you onboard!";

  const articalHandleClick = () => {
    navigate("/contactus");
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="hero-section">
      <div
        className="container-fluid element-section"
        style={{
          backgroundImage: `url(${bannerbgimageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "100% 0%",
        }}>
        <Hero
          header={aboutHeader}
          subheader={aboutSubheader}
          buttonText={"Ready To Talk?"}
          callback={handleClick}
        />
      </div>
      <section className="container-fluid">
        <div className="container impact-info">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <img src={impactImage} alt="Impact" className="abt-images" />
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="impact-info-spaceout">
                <div className="d-flex">
                  <span className="seperator-line"></span>
                </div>
                <div className="d-flex flex-column">
                  <h5 className="impact-header">We are impactful</h5>
                  <p className="impact-para">
                    We focus on results.
                    <br />
                    We take actionable decisions and decisive actions.
                    <br />
                    We strive to do work that makes a change.
                    <br />
                    We deliver the consistently strong performance our
                    colleagues and partners can rely on.
                  </p>
                  <div>
                    <img
                      src={impactright}
                      alt="Impact"
                      className="abt-images"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center mt-5">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="impact-info-spaceout">
                <div className="d-flex">
                  <span className="seperator-line"></span>
                </div>
                <div className="d-flex flex-column">
                  <h5 className="impact-header">We are team players</h5>
                  <p className="impact-para">
                    We leave no person behind.
                    <br />
                    We help our teammates any way we can.
                    <br />
                    We realize team success is predicated on individual members’
                    success.
                    <br />
                    We carefully plan the journey to our common goal, together.
                    <br />
                    We work towards reaching that goal together.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <img src={businessman} alt="Impact" className="abt-images " />
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid">
        <div className="container counter_section">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 col-md-4 col-12 mb-4">
              <div className="d-flex justify-content-center  brd-rad">
                <span className="m-count">100</span>
                <span className="counter-suffix">+</span>
              </div>
              <p className="name_s">Project</p>
            </div>
            <div className="col-lg-4 col-md-4 col-12 mb-4">
              <div className="d-flex justify-content-center  brd-rad">
                <span className="m-count">120</span>
                <span className="counter-suffix">+</span>
              </div>
              <p className="name_s">Smart contracts in production</p>
            </div>
            <div className="col-lg-4 col-md-4 col-12 mb-4">
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
      </section>
      <section className="container-fluid">
        <div className="area-experties">
          <div className="row flex-column">
            <div className="col-md d-flex justify-content-center align-items-center">
              <h2 className="section_title">Expertise</h2>
            </div>
            <div className="col-md d-flex justify-content-center align-items-center">
              <h3 className="section_subtitle">Areas of Expertise</h3>
            </div>
          </div>
          <div>
            <div className="row area-post-wrapper">
              {areaExpertise.map(({ titleText, listitems }) => {
                return (
                  <div className="col-4 wrapper" key={uuid()}>
                    <h6 className="wrap-title">{titleText}</h6>
                    <ul>
                      {listitems.map((item) => {
                        return <li key={uuid()}>{item}</li>;
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {/* <section className="container-fluid">
        <div className="gallery">
          <div className="row flex-column">
            <div className="col-md d-flex justify-content-center align-items-center">
              <h2 className="section_title">GALLERY</h2>
            </div>
            <div className="col-md d-flex justify-content-center align-items-center">
              <h3 className="section_subtitle">Our moments</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-4 mb-4">
              <img src={image_1} alt="gimage" className="gallary_image" />
            </div>
            <div className="col-4 mb-4">
              <img src={image_2} alt="gimage" className="gallary_image" />
            </div>
            <div className="col-4 mb-4">
              <img src={image_1} alt="gimage" className="gallary_image" />
            </div>
            <div className="col-4 mb-4">
              <img src={image_2} alt="gimage" className="gallary_image" />
            </div>
            <div className="col-4 mb-4">
              <img src={image_1} alt="gimage" className="gallary_image" />
            </div>
            <div className="col-4 mb-4">
              <img src={image_2} alt="gimage" className="gallary_image" />
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid">
        <div className="our-team">
          <div className="row flex-column">
            <div className="col-md d-flex justify-content-center align-items-center">
              <h2 className="section_title">LEADERSHIP</h2>
            </div>
            <div className="col-md d-flex justify-content-center align-items-center">
              <h3 className="section_subtitle mb-3">
                The managing part of our team
              </h3>
            </div>
            <div className="col-md d-flex justify-content-center align-items-center">
              <p className="section_subpara">
                The managing part of our team - just a small part of the faces
                behind Msquare.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-3 d-flex flex-column justify-content-center align-items-center">
              <img
                src={profile_image1}
                alt="gimage"
                className="gallary_image"
              />
              <div className="d-flex flex-column justify-content-center my-2">
                <h4 className="profile_name">My Name</h4>
                <p className="profile_post">CEO</p>
              </div>
              <div className="d-flex justify-content-center">
                <BsLinkedin className="social-icons" />
                <BsTwitter className="social-icons" />
              </div>
            </div>
            <div className="col-3 d-flex flex-column justify-content-center align-items-center">
              <img
                src={profile_image1}
                alt="gimage"
                className="gallary_image"
              />
              <div className="d-flex flex-column justify-content-center my-2">
                <h4 className="profile_name">My Name</h4>
                <p className="profile_post">CEO</p>
              </div>
              <div className="d-flex justify-content-center">
                <BsLinkedin className="social-icons" />
                <BsTwitter className="social-icons" />
              </div>
            </div>
            <div className="col-3 d-flex flex-column justify-content-center align-items-center">
              <img
                src={profile_image1}
                alt="gimage"
                className="gallary_image"
              />
              <div className="d-flex flex-column justify-content-center my-2">
                <h4 className="profile_name">My Name</h4>
                <p className="profile_post">CEO</p>
              </div>
              <div className="d-flex justify-content-center">
                <BsLinkedin className="social-icons" />
                <BsTwitter className="social-icons" />
              </div>
            </div>
            <div className="col-3 d-flex flex-column justify-content-center align-items-center">
              <img
                src={profile_image1}
                alt="gimage"
                className="gallary_image"
              />
              <div className="d-flex flex-column justify-content-center my-2">
                <h4 className="profile_name">My Name</h4>
                <p className="profile_post">CEO</p>
              </div>
              <div className="d-flex justify-content-center">
                <BsLinkedin className="social-icons" />
                <BsTwitter className="social-icons" />
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Aritical
        articalHeader={abt_artical_header}
        articalSubheader={abt_artical_subheader}
        callbutton={articalHandleClick}
        btnText="Ready to talk"
        bgImage={articlebgImg}
      />
    </div>
  );
};

export default About;
