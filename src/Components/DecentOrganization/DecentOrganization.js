import React from "react";
import "../DecentralizedApplication/DecentralizedApplication.css";
import Hero from "../Hero/Hero";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import DAODevelopmentImg from "../../assets/images/DAO-Development.jpg";
import {
  organizationData,
  benefitData,
  developedStage,
} from "./DecentOrganizationData";
import Aritical from "../Artical/Aritical";

const DecentOrganization = () => {
  const team_header =
    "Decentralized Autonomous Organization (DAOs) and Continuous Organizations (COs)";
  const team_subheader =
    "Decentralized Organizations and Continuous Organizations are two types of decentralized blockchain solutions for the governance of organizations. Some of the main use cases for DAOs and COs are investment funds (for profit or not for profit), digital cooperatives, and Web3 communities.";

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contactus");
  };

  const artical_header = "Do you want to build a DAO or CO?";
  const artical_subheader =
    "Contact us to tell us more about your project’s requirements and to learn more about how we can help you!";

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
                  src={DAODevelopmentImg}
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
                  <h5 className="Dapp-header">What are DAOs and COs?</h5>
                  <p className="Dapp-para">
                    To achieve their goals, both of these solutions are run by
                    smart contracts and complex crypto-economic principles.
                    DAOs’ main purpose is to automate and decentralize the
                    governance of organizations, such as corporations. The
                    structure of DAOs is flat and depends on the operation of
                    smart contracts to enforce rules and decisions within the
                    organization.
                  </p>
                  <p className="Dapp-para">
                    Tokens are used within the DAO to provide voting and
                    decision-making power to participants, with greater power
                    being given to those with more tokens.
                  </p>
                  <p className="Dapp-para">
                    COs, on the other hand, are aimed at creating a sustainable
                    financing model for traditional organizational structures.
                    Just like a legacy organization, a CO has a management
                    structure to ensure its functioning.
                  </p>
                  <p className="Dapp-para">
                    Along with that, COs have a Decentralized Autonomous Trust
                    (DAT). The DAT is a type of immutable smart-contract based
                    on a bonding curve contract – a complex mathematical model.
                  </p>
                  <p className="Dapp-para">
                    Its purpose is to discourage speculation, and create
                    incentives for long-term stakeholder participation. It
                    functions by minting, distributing, and burning the COs
                    security tokens in accordance with the bonding curve model.
                  </p>
                  <p className="Dapp-para">
                    New to decentralized organizations and COs? Read our great
                    DAO (Decentralized Autonomous Organization) vs Continuous
                    Organizations 101 guide to get a full picture of the
                    differences between these two blockchain solutions.
                  </p>
                  <p className="Dapp-para">
                    Are you considering developing a DAO or CO solution? Here
                    are some of the benefits that you could reap!
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
            Benefits of Building Decentralized Organizations
          </h3>
          <p className="adpp-content">
            Compared to legacy organizations, decentralized organizations offer
            several distinct advantages. DAOs are:
          </p>
        </div>
      </div>
      <div className="container-fluid four_points">
        <div className="container ">
          <div className="row justify-content-center spaceout">
            {organizationData.map(({ points_title, points_subcontent }) => {
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
      <div className="container pt-4">
        <div className="adpp d-flex flex-column mt-4 pt-4">
          <h3 className="adpp-header">
            Benefits of building COsBenefits of building COs
          </h3>
          <p className="adpp-content">
            Continous organizations have a slightly different purpose than DAOs,
            even though they share many of their benefits. COs offer the
            following benefits to businesses:
          </p>
        </div>
      </div>
      <div className="container-fluid four_points">
        <div className="container ">
          <div className="row justify-content-center spaceout">
            {benefitData.map(({ points_title, points_subcontent }) => {
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
        <div className="limechain-bc d-flex flex-column text-center">
          <h3 className="lime-title">How are DAOs and COs Developed?</h3>
          <p className="limechain-para">
            The development of DAOs and COs goes through several stages to
            ensure it complies with the project’s requirements.
          </p>
          <p className="limechain-para mb-5">These stages include:</p>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row ">
          <div className="team-element-populated">
            <div className="team-widget-wrap">
              <div className="team-selection">
                {developedStage.map(({ title, subdata }, index) => {
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
            Decentralized Organizations and Continuous Organizations by Msquare
          </h3>
          <p className="limechain-para">
            Msquare has been developing dApps and smart contracts with
            significant funds in them since 2017. Over this period, we have
            developed over 100 blockchain projects and have acquired deep
            experience in DAOs and COs, both as a member and a builder.
          </p>
          <p className="limechain-para">
            We pride ourselves on being one of the first companies to bring a
            bonding curve-enabled continuous organization to market. We offer
            DAO and CO development, as well as DAO infrastructure development
            and tooling development.
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

export default DecentOrganization;
