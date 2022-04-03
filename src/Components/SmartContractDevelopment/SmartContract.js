import React from "react";
import "./SmartContractData";
import "../DecentralizedApplication/DecentralizedApplication.css";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import Hero from "../Hero/Hero";
import smartContractImg from "../../assets/images/Smart-Contracts-Dev.jpg";
import { smartContractData, ScStages } from "./SmartContractData";
import Aritical from "../Artical/Aritical";

const SmartContract = () => {
  const team_header = "Smart Contract Development";
  const team_subheader =
    "Full-stack blockchain development services including smart contract development and consulting for both public and private blockchain.";

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contactus");
  };

  const artical_header = "Need smart contracts development?";
  const artical_subheader =
    " Get in touch with us to learn more about our smart contract development expertise and to discuss your needs and requirements!";

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
                  src={smartContractImg}
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
                  <h5 className="Dapp-header">
                    What is Smart Contract Development?
                  </h5>
                  <p className="Dapp-para">
                    A smart contract is an agreement between two or more parties
                    that is stored on a blockchain, such as Ethereum or EOS.
                    Every such contract has a predefined set of rules and
                    conditions and is automatically executed when those
                    conditions are met. These contracts are guaranteed by the
                    consensus of the whole blockchain network. They cannot be
                    altered by anyone unless the whole network approves of the
                    change. This makes smart contracts one of the safest and
                    most powerful tools for creating agreements between
                    different parties. Here’s how your business can benefit from
                    smart contract development.
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
            Benefits of Smart Contracts Development for Your Business
          </h3>
          <p className="adpp-content">
            Like any traditional contract, smart contracts are agreements on
            rules that determine the relationship between different parties.
            However smart contracts also offer a number of additional benefits:
          </p>
        </div>
      </div>
      <div className="container-fluid four_points">
        <div className="container ">
          <div className="row justify-content-center spaceout">
            {smartContractData.map(({ points_title, points_subcontent }) => {
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
            The Smart Contract Development Process
          </h3>
          <p className="adpp-content">
            The development of a smart contract, also known as its life cycle,
            goes through several phases. These ensure that the business
            requirements are correctly defined and secured by the technology.
            Here is how a smart contract is developed:
          </p>
        </div>
        <div className="row">
          <div className="team-element-populated">
            <div className="team-widget-wrap">
              <div className="team-selection">
                {ScStages.map(({ title, subdata }, index) => {
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
        <div className="limechain-bc d-flex flex-column">
          <h3 className="lime-title">Smart Contract Development by Msquare</h3>
          <p className="limechain-para">
            Develop smart contracts for your business needs with us and our
            custom smart contract development and deployment tools – Etherlime
            and EOSlime.
          </p>
          <p className="limechain-para">
            We also offer blockchain-agnostic smart contract development. This
            allows you to build a decentralized applications (dApp) that can
            interact with any blockchain.
          </p>
          <p className="limechain-para">
            We have significant experience in developing smart contracts for our
            clients. Our portfolio includes over 100 projects, and we have
            developed hundreds of smart contracts, holding crypto assets worth
            millions of dollars.
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

export default SmartContract;
