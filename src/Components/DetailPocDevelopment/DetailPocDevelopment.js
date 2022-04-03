import React from "react";
import "../DecentralizedApplication/DecentralizedApplication";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import { POCData, POCStages } from "./DetailData";
import Hero from "../Hero/Hero";
import POCImg from "../../assets/images/PoC-Development.jpg";
import Aritical from "../Artical/Aritical";

const DetailPocDevelopment = () => {
  const team_header = "Blockchain PoC Development";
  const team_subheader =
    "Blockchain PoC is particularly useful in two cases. It is a great way for enterprises and public bodies to experiment with the technology and determine its practicality before implementing it into real-world conditions. It is also useful for companies, such as startups, that want to showcase their blockchain project to investors and potential users.";

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contactus");
  };

  const artical_header =
    "Do you want to develop a blockchain PoC to prove an idea?";
  const artical_subheader =
    "Get in touch with us to tell us more about it and to learn how we can help you with your project!";

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
      <div className="container element-section">
        <Hero
          header={team_header}
          subheader={team_subheader}
          buttonText="Get a quote"
          callback={handleClick}
        />
      </div>
      <div className="container-fluid ">
        <div className="Decapp-section">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-lg-6 col-12 my-auto">
              <div>
                <img
                  src={POCImg}
                  alt="blockchain"
                  className="Decent-content_img"
                />
              </div>
            </div>
            <div className="col-lg-6 col-lg-6 col-12 ">
              <div className="Decent-content ">
                <div className="d-flex">
                  <span className="seperator-line"></span>
                </div>
                <div className="d-flex flex-column">
                  <h5 className="Dapp-header">What is PoC Development?</h5>
                  <p className="Dapp-para">
                    What is PoC Development? Blockchain Proof of Concept (PoC)
                    development is the process of determining whether a
                    blockchain project has potential and practical application.
                    A PoC is typically a simple prototype, that is intended to
                    assess the feasibility of a proposed solution. If the PoC is
                    validated, the project may advance to the stage of minimum
                    viable product (MVP) development.
                  </p>
                  <p className="Dapp-para">
                    Areas in which blockchain PoC development is commonly used
                    include:
                  </p>
                  <p className="Dapp-para">
                    With the rise of blockchain, digital currency transactions
                    have become increasingly useful and accessible. Due to the
                    large number of cryptocurrencies that have been created in
                    recent years, there has been a growing need for robust
                    solutions for token management.Custom cryptocurrency wallet
                    development allows you to offer a tailored solution that
                    enables users to carry out transactions – whether on their
                    mobile device or web.
                  </p>
                  <p className="Dapp-para">
                    Are you working on your own blockchain project and need a
                    cryptocurrency wallet development? Here’s how your business
                    can benefit from it!
                  </p>
                  <ul>
                    <li>Finance</li>
                    <li>Insurance</li>
                    <li>Supply chain</li>
                    <li>Identity management</li>
                    <li>Government</li>
                    <li>Asset management</li>
                    <li>Medical records management</li>
                    <li>Payment solutions, and more</li>
                  </ul>
                  <p className="Dapp-para">
                    Developing a proof of concept typically involves several
                    stages during which the project is fleshed out and possible
                    weaknesses are identified. This lays the groundwork for a
                    successful blockchain project later on.
                  </p>
                  <p className="Dapp-para">
                    Are you considering the development of a blockchain PoC?
                    Here’s how your company could benefit from it!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="adpp d-flex flex-column">
          <h3 className="adpp-header">
            Benefits of Blockchain PoC Development for Your Business
          </h3>
          <p className="adpp-content">
            Creating a PoC is the best way to practically demonstrate a certain
            blockchain project idea internally or to investors. Some of the
            benefits of developing a PoC include:
          </p>
        </div>
      </div>

      <div className="container-fluid four_points">
        <div className="container ">
          <div className="row justify-content-center spaceout">
            {POCData.map(({ points_title, points_subcontent }) => {
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
        <div className="team_ext_process d-flex flex-column">
          <h3 className="adpp-header">
            The Blockchain PoC Development Process
          </h3>
          <p className="adpp-content">
            Developing a PoC goes through several stages to ensure that the
            business requirements have been understood and met. To develop a
            PoC, LimeChain uses the following protocols, frameworks, and
            programming languages.
          </p>
          <p className="adpp-content">
            The blockchain PoC development process usually goes through the
            following stages:
          </p>
        </div>
        <div className="row">
          <div className="team-element-populated">
            <div className="team-widget-wrap">
              <div className="team-selection">
                {POCStages.map(({ title, subdata }, index) => {
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
      </div>
      <div className="container">
        <div className="limechain-bc d-flex flex-column">
          <h3 className="lime-title">Blockchain PoC Development by Msquare</h3>
          <p className="limechain-para">
            Msquare has been developing blockchain applications since 2017. We
            have built 100+ projects, the majority of which started out as PoCs.
            Based on our experience, we can easily and quickly develop the right
            solutions and determine which tools to use for each project, and
            develop a PoC end-to-end. In addition, our business knowledge allows
            us to easily understand and successfully showcase the efficiency
            that our clients seek to achieve.
          </p>
          <p className="limechain-para">
            Thanks to our agile work processes, we can quickly iterate and
            implement changes to a PoC in order to reflect the business value
            and requirements more fully.
          </p>
        </div>
      </div>
      <Aritical
        articalHeader={artical_header}
        articalSubheader={artical_subheader}
        btnText="Contact us"
        callbutton={articalHandleClick}
      />
    </div>
  );
};

export default DetailPocDevelopment;
