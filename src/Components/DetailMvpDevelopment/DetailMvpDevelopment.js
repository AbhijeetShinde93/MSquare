import React from "react";
import "../DecentralizedApplication/DecentralizedApplication";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import { MVPData, MVPStages } from "./DetailDevelopData";
import Hero from "../Hero/Hero";
import MVPImg from "../../assets/images/MVP-Development.jpg";
import Aritical from "../Artical/Aritical";

const DetailMvpDevelopment = () => {
  const team_header = "Blockchain MVP Development";
  const team_subheader =
    "Blockchain Minimum Viable Product (MVP) development is the process of developing the leanest version of a blockchain application with minimum functionality. Typically an MVP blockchain development follows the process of proof of concept (PoC) development.";

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contactus");
  };

  const artical_header = "Are you considering building an MVP?";
  const artical_subheader =
    "Get in touch with us to discuss your idea and to see how we can help you!";

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
                  src={MVPImg}
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
                  <h5 className="Dapp-header">What is MVP Development?</h5>
                  <p className="Dapp-para">
                    Unlike a PoC which cannot be rolled out, an MVP is a working
                    prototype. Its purpose is to practically demonstrate how a
                    proposed solution addresses a particular problem and whether
                    it has any merit. If the MVP finds confirmation and
                    approval, it can easily be scaled.
                  </p>
                  <p className="Dapp-para">
                    The MVP is used to gauge users’ interest in the product and
                    to attract feedback. It seeks to find a problem/solution and
                    product/market fit prior to the development of a
                    full-fledged product. This can only occur by entering the
                    market and letting users test the product. The MVP has to be
                    stable and functional enough to convincingly and
                    realistically showcase its value to users.
                  </p>
                  <p className="Dapp-para">
                    Developing an MVP is particularly useful for startups that
                    seek to conduct early tests of their idea without investing
                    a lot of resources or time. MVPs are also used by big
                    business and public bodies when developing new services or
                    solutions.
                  </p>
                  <p className="Dapp-para">
                    Areas in which MVP development is commonly used:
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
                    Do you need to develop an MVP for your blockchain solution?
                    Here’s how your business can benefit from it!
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
            Benefits of Blockchain MVP Development for Your Business
          </h3>
          <p className="adpp-content">
            Developing an MVP is the best way to practically test your
            blockchain solution with users. It can help you to validate the
            value proposition of the solution and to determine its strengths and
            weaknesses. Some of the benefits of developing a blockchain MVP
            include:
          </p>
        </div>
      </div>

      <div className="container-fluid four_points">
        <div className="container ">
          <div className="row justify-content-center spaceout">
            {MVPData.map(({ points_title, points_subcontent }) => {
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
            The Blockchain MVP Development Process
          </h3>
          <p className="adpp-content">
            MVP blockchain development typically goes through several stages.
            These are necessary to ensure that the solution is adequately
            defined, developed, and deployed, and meets all client requirements.
            When developing an MVP blockchain, LimeChain uses the following
            protocols, frameworks, and programming languages.
          </p>
          <p className="adpp-content">
            The process of developing an MVP typically follows the steps listed
            below:
          </p>
        </div>
        <div className="row">
          <div className="team-element-populated">
            <div className="team-widget-wrap">
              <div className="team-selection">
                {MVPStages.map(({ title, subdata }, index) => {
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
          <h3 className="lime-title">Blockchain MVP Development by Msquare</h3>
          <p className="limechain-para">
            Msquare has developed over 100 blockchain projects, most of which
            began as MVPs
          </p>
          <p className="limechain-para">
            Over the years, we have gathered the experience and expertise to be
            able to develop end-to-end MVP blockchain solutions for our clients,
            with the right tools, in a very short amount of time.
          </p>
          <p>
            Our agile approach to MVP development allows us to iterate quickly,
            and adapt to new requirements and feedback.
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

export default DetailMvpDevelopment;
