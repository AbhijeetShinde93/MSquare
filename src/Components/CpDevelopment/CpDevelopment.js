import React, { useEffect, useState } from "react";
import Hero from "../Hero/Hero";
import "./CpDevelopment.css";
import { useNavigate } from "react-router-dom";
import CpCoverImg from "../../assets/images/cpm_dev.jpg";
import { cpdata, stage } from "./CpDevelopmentData";
import uuid from "react-uuid";
import Aritical from "../Artical/Aritical";

import BdesktopImage from "../../assets/images/backgroundImg/ab-img-3.png";
import BmobileImage from "../../assets/images/backgroundImg/ab-img-3.png";

import blockDevImg from "../../assets/images/backgroundImg/service-2.png";

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

const CpDevelopment = () => {
  const bannerbgimageUrl =
    useWindowWidth() >= 650 ? BdesktopImage : BmobileImage;

  const header = "Blockchain Product Development";
  const subheader =
    "By analyzing your industry vertical and your specific business needs we can determine the best way to introduce blockchain and distributed ledger technology (DLT) into your operations or services. Based on this analysis, we also determine the correct technical approach to the development and future deployment of your product.";

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contactus");
    // window.location.href = "/ourservices";
  };

  const artical_header =
    "Looking for a complete, end-to-end blockchain development?";
  const artical_subheader =
    "Get in touch with us to learn more about our expertise!";

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
      <section className="container-fluid">
        <div
          className="container-fluid element-section"
          style={{
            backgroundImage: `url(${bannerbgimageUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "100% 0%",
          }}>
          <Hero
            header={header}
            subheader={subheader}
            buttonText="Get a quote"
            callback={handleClick}
          />
        </div>
      </section>
      <div className="container-fluid ">
        <div className="cpdev-section">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-lg-6 col-12 my-auto">
              <div>
                <img src={CpCoverImg} alt="blockchain" className="cpdev_img" />
              </div>
            </div>
            <div className="col-lg-6 col-lg-6 col-12 ">
              <div className="cpd-content ">
                <div className="d-flex">
                  <span className="seperator-line"></span>
                </div>
                <div className="d-flex flex-column">
                  <h5 className="cpd-header">
                    What Do Blockchain Product Development Services Include?
                  </h5>
                  <p className="cpd-para">
                    Blockchain end-to-end product development is the process of
                    developing blockchain products from start to finish. This
                    process involves a blockchain consulting and ideation phase,
                    detailed plan and project development. Clients typically use
                    this approach to develop multifunctional and complex
                    solutions like decentralized applications (dApp), enterprise
                    solutions, investment and exchange platforms, a private
                    blockchain or a public blockchain, and others.
                  </p>
                  <p className="cpd-para">
                    Blockchain solutions are developed within a number of
                    industries, including finance, insurance, supply chain
                    management, government, payment solutions, asset management,
                    and more.
                  </p>
                  <p className="cpd-para">
                    Thanks to our agile approach at Msquare, the development of
                    your dApp or blockchain-powered platform can happen quickly
                    with iterations being implemented as the process unfolds.
                  </p>
                  <p className="cpd-para">
                    Are you looking for a technical partner to handle the
                    end-to-end development of your dApp or blockchain-powered
                    platform? Here are some of the benefits for your business!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="benefits d-flex flex-column">
          <h3 className="benefits-header">
            How you will benefit from the End-to-End Product Development service
            of Msquare
          </h3>
          <p className="benefits-content">
            End-to-end product development with Msquare, whether of a dApp or
            blockchain platforms, offers you several distinct benefits. These
            include:
          </p>
        </div>
      </div>
      <div className="container-fluid four_points">
        <div className="container ">
          <div className="row justify-content-center spaceout">
            {cpdata.map(({ points_title, points_subcontent }) => {
              return (
                <div className="col-lg-6 col-md-6 col-12" key={uuid()}>
                  <div className="points-sec">
                    <div className="d-flex">
                      <span className="seperator-line mb-4"></span>
                    </div>
                    <h4 className="points_header">{points_title}</h4>
                    <p className="points_content">{points_subcontent}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="cpd_process d-flex flex-column">
          <h3 className="benefits-header">
            What is the process when developing a product from end-to-end?
          </h3>
          <p className="benefits-content">
            The complete development of a blockchain or DLT product passes
            through several stages. Each stage is necessary to create a product
            that meets the client requirements. When developing a product
            end-to-end we usually pass through the following stages:
          </p>
        </div>
        <div className="row">
          <div className="elementor-element-populated">
            <div className="elementor-widget-wrap">
              <div className="element-selection">
                {stage.map(({ title, subdata }, index) => {
                  return (
                    <div className="row mb-4" key={uuid()}>
                      <div className=" col-lg-1 col-md-1 col-12">
                        <div className="numb-sec">
                          <h2 className="numb">{index + 1}</h2>
                        </div>
                      </div>
                      <div className="col-lg-10 col-md-10 col-12">
                        <div className="process-steps">
                          <h4 className="points_header">{title}</h4>
                          <p className="points_content">{subdata}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="limechain-bc d-flex flex-column">
            <h3 className="lime-title">
              End-to-End Product Development by Msquare
            </h3>
            <p className="limechain-para">
              Msquare has been developing end-to-end blockchain solutions since
              2017. We pride ourselves with being a one-stop-shop for everything
              blockchain and dApp project-related.
            </p>
            <p className="limechain-para">
              We have an excellent track record in bringing projects from idea
              to complete realization and have built top-level expertise in
              DLT-based applications over the years. And thanks to our agile
              approach, we can quickly introduce changes to your project and
              adjust its direction.
            </p>
            <p className="limechain-para">
              All of this makes us confident we can be of help to you in
              clarifying and developing your project idea, and provide you with
              technical and non-technical support throughout.
            </p>
          </div>
        </div>
      </div>
      <Aritical
        articalHeader={artical_header}
        articalSubheader={artical_subheader}
        btnText="Contact us"
        callbutton={articalHandleClick}
        bgImage={blockDevImg}
      />
    </div>
  );
};

export default CpDevelopment;
