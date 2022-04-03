import React from "react";
import "../DecentralizedApplication/DecentralizedApplication";
import { toolStage } from "./ToolDevelopmentData";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import Hero from "../Hero/Hero";
import toolDevelopmentImg from "../../assets/images/Tools-Development.jpg";
import Aritical from "../Artical/Aritical";

const ToolDevelopment = () => {
  const team_header = "Blockchain Tools Development";
  const team_subheader =
    "Msquare builds developer tooling and SDKs for blockchain networks and protocols aimed at empowering the developer community to build and ship applications faster and better. This furthers our goal to support the adoption of blockchain technology.";

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contactus");
  };

  const artical_header = "Need to develop a tool for your project?";
  const artical_subheader = "Contact us and let's get started!";

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
                  src={toolDevelopmentImg}
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
                  <h5 className="Dapp-header">What is Tool Development?</h5>
                  <p className="Dapp-para">
                    Developing a stable blockchain application will require you
                    to have access to the right tools. And the better your
                    tools, the easier the development process will be. At
                    Msquare we have experience in building blockchain
                    development tools such as frameworks, smart contract
                    development kits, and software development kits (SDK) that
                    enable developers globally to build faster, easier and more
                    securely.
                  </p>
                  <p className="Dapp-para">
                    Smart contract development kits enable developers to create
                    unique dApps on top of any platform. They allow them to spin
                    up a local development environment, compile and unit test
                    the smart contracts they write, as well as deploy them and
                    interact with them.
                  </p>
                  <p className="Dapp-para">
                    Software development kits are the interface used by
                    developers to interact with any platform. These kits include
                    everything necessary to create a custom application from
                    scratch, including libraries, code samples, documentation,
                    and more.
                  </p>
                  <p className="Dapp-para">
                    Over the years we’ve helped multiple blockchain protocols
                    and platforms to build the development tools needed by their
                    communities. Our experience in this includes building tools
                    such as Etherlime, AEproject, and EOSLime, Subsembly
                  </p>
                  <p className="Dapp-para">
                    Interested in building blockchain development tools for your
                    project? Find out more about the process and Msquare’s role
                    in it below!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="adpp d-flex flex-column">
          <h3 className="adpp-header">The Tools Development Process</h3>
          <p className="adpp-content">
            The development process itself goes through several stages to ensure
            that the tooling adds utmost value to the developer community of the
            protocol / network at hand.
          </p>
        </div>
        <div className="row">
          <div className="team-element-populated marg-tp">
            <div className="team-widget-wrap">
              <div className="team-selection">
                {toolStage.map(({ title, subdata }, index) => {
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
          <h3 className="lime-title">
            Building Blockchain Development Tools with Msquare
          </h3>
          <p className="limechain-para">
            Msquare has developed blockchain tools for some of the most popular
            blockchain protocols, such as Ethereum, Polkadot, EOS, and
            Aeternity. Our tools have been awarded grants from the ETH Community
            Fund, Web3 Foundation, The Graph, EOS VC, Aeternity, and MakerDAO.
          </p>
          <p className="limechain-para">
            Etherlime, our smart contract development framework, has been used
            by high-end projects such as Argent, Erasure, Molecule.to, and
            others. Other tools developed by Msquare include: EOSLime,
            AEproject, Matchstick and Subsembly.
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

export default ToolDevelopment;
