import React, { useEffect, useState } from "react";
import Hero from "../Hero/Hero";
import "./UseCases.css";
import uuid from "react-uuid";
import { BsArrowRight } from "react-icons/bs";
import { usecase } from "../../data";
import Aritical from "../Artical/Aritical";
import { useNavigate } from "react-router-dom";

import BdesktopImage from "../../assets/images/backgroundImg/use-img1.jpg";
import BmobileImage from "../../assets/images/backgroundImg/use-img1.jpg";

import useCasesBgImg from "../../assets/images/backgroundImg/new-img-art-1.jpg";

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

const UseCases = () => {
  const bannerbgimageUrl =
    useWindowWidth() >= 650 ? BdesktopImage : BmobileImage;

  const useCaseheader = "Blockchain use cases";
  const useCaseubheader =
    "Blockchain and its application has the potential to impact most problematic industry challenges like supply chain management, asset tracking, claims management, proof of origin, KYC and KYS, eliminating middlemen, reducing costs, eliminating frauds and others.";

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/aboutus");
  };

  const usecase_artical_header = "Working with us?";
  const usecase_artical_subHeader =
    "At Msquare we are always looking to add talent to our family. We would love to have you onboard!";

  const useCasehandleClick = () => {
    navigate("/blogs");
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
          header={useCaseheader}
          subheader={useCaseubheader}
          buttonText={"About us"}
          callback={handleClick}
        />
      </div>
      <div className="container-fluid usecase-element">
        <div className="row justify-content-center">
          {usecase.map(({ usecaseImage, usecasePara, usecaseTitle, url }) => {
            return (
              <div className="col-lg-4 col-md-6 col-12 mb-4" key={uuid()}>
                <a className="card whatwedo_card" href={url}>
                  <div className="d-flex flex-column">
                    <div>
                      <img
                        src={usecaseImage}
                        alt="gimage"
                        className="whatwedo_image"
                      />
                    </div>
                    <div>
                      <h4 className="whatwedo_title">{usecaseTitle}</h4>
                    </div>
                    <div>
                      <p className="whatwedo_paragraf">{usecasePara}</p>
                    </div>
                    {/* <div className="d-flex justify-content-end align-items-end mt-3 explore-div">
                      <p className="explore-link-text">Explore</p>
                      <BsArrowRight className="explore-icon" />
                    </div> */}
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <Aritical
        articalHeader={usecase_artical_header}
        articalSubheader={usecase_artical_subHeader}
        callbutton={useCasehandleClick}
        btnText="Our Blogs"
        bgImage={useCasesBgImg}
      />
    </div>
  );
};

export default UseCases;
