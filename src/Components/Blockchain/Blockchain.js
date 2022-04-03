import React, { useEffect, useState } from "react";
import Hero from "../Hero/Hero";
import "./Blockchain.css";
import { useNavigate } from "react-router-dom";
import blockchainImg from "../../assets/images/jeremy.jpg";
import { blockchainConsulting, stages } from "./BlockchainConsulting";
import Artical from "../Artical/Aritical";
import uuid from "react-uuid";

import BdesktopImage from "../../assets/images/backgroundImg/ser-1.png";
import BmobileImage from "../../assets/images/backgroundImg/ser-1.png";

import blockImg from "../../assets/images/backgroundImg/service-1.jpg";

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

const Blockchain = () => {
  const bannerbgimageUrl =
    useWindowWidth() >= 650 ? BdesktopImage : BmobileImage;

  const b_header = "Blockchain Consulting";
  const b_subheader =
    "Are you considering blockchain technology as a solution to a particular business case? Our blockchain consulting services can help you determine the opportunities and hidden risks when using distributed ledger technology (DLT) to develop a business solution.";

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contactus");
  };

  const artical_header = "Do you need help with your project idea?";
  const artical_subheader = (
    <>
      Contact us to learn more about our consulting services and schedule a
      meeting!
      <br /> Let’s build something great!
    </>
  );

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
          backgroundPosition: "0% 0%",
        }}>
        <Hero
          subheader={b_subheader}
          header={b_header}
          buttonText="Get a quote"
          callback={handleClick}
        />
      </div>
      <div className="container-fluid ">
        <div className="consulting-section">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-lg-6 col-12">
              <div>
                <img
                  src={blockchainImg}
                  alt="blockchain"
                  className="consulting_img"
                />
              </div>
            </div>
            <div className="col-lg-6 col-lg-6 col-12 my-auto">
              <div className="blockchain-content ">
                <div className="d-flex">
                  <span className="seperator-line"></span>
                </div>
                <div className="d-flex flex-column">
                  <h5 className="bc-header">
                    What Consulting Services Include?
                  </h5>
                  <p className="bc-para">
                    We can consult you about the purpose of blockchain
                    technology and its strategic application in your particular
                    case. Through a series of meetings and workshops, we help
                    you identify your needs, define the value of DLT in your
                    specific case, and devise a roadmap for further action.
                  </p>
                  <p className="bc-para">
                    Our blockchain consulting services include:
                  </p>
                  <ul>
                    <li>Technical training about the nature of blockchain</li>
                    <li>
                      Business workshops that help flesh out a blockchain
                      business case and its value
                    </li>
                    <li>
                      Project ideation and design sprints that help you arrive
                      at a technical use-case definition or develop an initial
                      blockchain solution idea or prototype
                    </li>
                    <li>
                      Project ideation and design sprints that help you arrive
                      at a technical use-case definition or develop an initial
                      blockchain solution idea or prototype
                    </li>
                    <li>Legal advisory</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="business d-flex flex-column">
          <h3 className="business-header">
            Benefits of Blockchain Consulting for Your Business
          </h3>
          <p className="business-content">
            Receiving feedback about your idea for a blockchain solution or
            developing it further in cooperation with consultants can help you
            to quickly determine its business potential. In turn, this can help
            you make decisions about whether to proceed with development and
            what the best course of action would be.
            <br />
            <br /> Here are some of the main benefits of blockchain consulting
          </p>
        </div>
      </div>

      <div className="container-fluid four_points">
        <div className="container ">
          <div className="row justify-content-center spaceout">
            {blockchainConsulting.map(({ points_title, points_subcontent }) => {
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
        <div className="bc_process d-flex flex-column">
          <h3 className="business-header">The Blockchain Consulting Process</h3>
          <p className="business-content">
            The consulting process typically involves several steps during which
            your business idea is clarified and possible solutions and
            approaches are explored. The main steps of the consulting process
            include:
          </p>
        </div>
        <div className="row">
          <div className="elementor-element-populated">
            <div className="elementor-widget-wrap">
              <div className="element-selection">
                {stages.map(({ title, subdata }, index) => {
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
            <h3 className="lime-title">Blockchain Consulting by Msquare</h3>
            <p className="limechain-para">
              Msquare has extensive experience with consulting blockchain
              projects. Over the years we have developed over 100 blockchain
              projects end-to-end.
            </p>
            <p className="limechain-para">
              Thanks to our large use-case knowledge base we can consult you
              regarding the best direction to develop your blockchain idea, and
              the right tools to use for the purpose. Our agile approach to
              ideation, design, and development allows us to make quick
              iterations and changes in strategy.
            </p>
          </div>
        </div>
      </div>
      <Artical
        articalHeader={artical_header}
        articalSubheader={artical_subheader}
        btnText="Contact us"
        callbutton={articalHandleClick}
        bgImage={blockImg}
      />
    </div>
  );
};

export default Blockchain;
