import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../Hero/Hero";
import "./Whatwedo.css";
import { whatwedo, services } from "../../data";
import uuid from "react-uuid";
import { BsArrowRight } from "react-icons/bs";
import Aritical from "../Artical/Aritical";

import BdesktopImage from "../../assets/images/backgroundImg/abt-img-002.jpg";
import BmobileImage from "../../assets/images/backgroundImg/abt-img-002.jpg";

import whatWeDoBgImg from "../../assets/images/backgroundImg/new-img-art-2.jpg";

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

const Whatwedo = () => {
  const bannerbgimageUrl =
    useWindowWidth() >= 650 ? BdesktopImage : BmobileImage;

  const wedoHeader = "What we do";
  const wedoSubheader =
    "Our experts can help you enable blockchain & DLT and transform your business.";

  const navigate = useNavigate();
  const clickHandle = () => {
    navigate("/contactus");
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const new_artical_header = "Working with us?";
  const new_artical_subheader =
    "At Msquare we are always looking to add talent to our family. We would love to have you onboard!";

  const articalHandleClick = () => {
    navigate("/usecases");
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
          header={wedoHeader}
          subheader={wedoSubheader}
          buttonText={"Contact us"}
          callback={clickHandle}
        />
      </div>
      <div className="container-fluid card-elements">
        <div className="row justify-content-center">
          {whatwedo.map(({ cardImage, cardTitle, cardText, url }) => {
            return (
              <div className="col-lg-3 col-md-6 col-12 mb-4" key={uuid()}>
                <a className="card whatwedo_card" href={url}>
                  <div className="d-flex flex-column">
                    <div>
                      <img
                        src={cardImage}
                        alt="gimage"
                        className="whatwedo_image"
                      />
                    </div>
                    <div>
                      <h4 className="whatwedo_title">{cardTitle}</h4>
                    </div>
                    <div>
                      <p className="whatwedo_paragraf">{cardText}</p>
                    </div>
                    <div className="d-flex justify-content-end align-items-end mt-3 explore-div">
                      <p className="explore-link-text">Explore</p>
                      <BsArrowRight className="explore-icon" />
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div className="container-fluid">
        <div className="ourservices_sec">
          <div className="row flex-column">
            <div className="col-md d-flex justify-content-center align-items-center">
              <h2 className="section_title">Our Services</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            {services.map(({ title, subparagraph, url }) => {
              return (
                <div className="col-lg-6 col-md-6 col-12" key={uuid()}>
                  <a className="cards_ourservice" href={url}>
                    <div className="d-flex flex-column">
                      <h4 className="points_title">{title}</h4>
                      <p className="points_para">{subparagraph}</p>
                    </div>
                    <BsArrowRight className="explore-icon" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Aritical
        articalHeader={new_artical_header}
        articalSubheader={new_artical_subheader}
        btnText="Browse use cases"
        callbutton={articalHandleClick}
        bgImage={whatWeDoBgImg}
      />
    </div>
  );
};

export default Whatwedo;
