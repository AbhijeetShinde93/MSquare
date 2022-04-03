import React from "react";
import "./DecentralizedApplication.css";
import { dappData, dappStages } from "./DecentralizedAppData";
import Hero from "../Hero/Hero";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import dappDevplomentImg from "../../assets/images/dapp-devploment.jpg";
import Aritical from "../Artical/Aritical";

const DecentralizedApplication = () => {
  const team_header = "Decentralized Application (dApp) Development";
  const team_subheader =
    "From token integration to frictionless UX design, Msquare provides end-to-end dApp development services powered by a hard-working team of blockchain engineers, full-stack developers and UX designers.";

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contactus");
  };

  const artical_header = "Are you looking to develop a dApp?";
  const artical_subheader =
    " Contact us to learn more about our dApp development process and capabilities, and to tell us about your business needs and requirements!";

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
      <div className="container-fluid element-section">
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
                  src={dappDevplomentImg}
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
                    What are Decentralized Applications - dApps?
                  </h5>
                  <p className="Dapp-para">
                    DApps or decentralized applications, are open-source
                    applications that are used to interact with smart contracts
                    (ex. tokens) that run on a peer-to-peer network of servers.
                    These applications can be based on a variety of blockchain
                    platforms such as Ethereum, EOS, Hyperledger, Polkadot, and
                    others. Since dApps don’t rely on central servers, this
                    vastly reduces the risk of failure, making them more
                    reliable than traditional applications. By eliminating the
                    middleman between users and service providers, dApps allow
                    for greater freedom, openness and transparency but also
                    reduce the risks associated with handling user data. Due to
                    their nature, developing a dApp is a rigorous process that
                    requires a lot of attention and care. Once a dApp (and the
                    underlying smart contracts) is deployed, it is difficult to
                    introduce fixes and major updates. For this reason, it is
                    important that your dApp is developed professionally. Are
                    you new to dApps? See our What are dApps? Trends and
                    challenges in dApp development guide for a brief overview of
                    their function and purpose. Wondering if a dApp is right for
                    you? Here’s how your business could benefit from building
                    dApp!
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
            Benefits of dApp Development for Your Business
          </h3>
          <p className="adpp-content">
            Just like any traditional app, a dApp’s purpose is to offer a
            service to users and resolve a problem. But unlike traditional apps,
            dApps offer a variety of further benefits that set them apart:
          </p>
        </div>
      </div>
      <div className="container-fluid four_points">
        <div className="container ">
          <div className="row justify-content-center spaceout">
            {dappData.map(({ points_title, points_subcontent }) => {
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
        <div className="container">
          <div className="team_ext_process d-flex flex-column">
            <h3 className="adpp-header">The dApp Development Process</h3>
            <p className="adpp-content">
              Developing a dApp goes through several steps to ensure that the
              final product serves the targeted use case. When developing dApps,
              Msquare can use the following programming languages, frameworks,
              and blockchain protocols:
            </p>
            <p className="adpp-content">
              Programming languages: JavaScript, TypeScript, Go, Solidity,
              Node.js
            </p>
            <p className="adpp-content">
              Frameworks: Angular, React, React-Native, Ionic
            </p>
            <p className="adpp-content">
              Blockchain Protocols: Ethereum, EOS, Hyperledger, Celo, Polkadot
            </p>
            <p className="adpp-content">
              The dApps development process goes through the following phases:
            </p>
          </div>
        </div>

        <div className="row">
          <div className="team-element-populated">
            <div className="team-widget-wrap">
              <div className="team-selection">
                {dappStages.map(({ title, subdata }, index) => {
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

        <div className="container pt-4">
          <div className="adpp d-flex flex-column mt-4 pt-4">
            <h3 className="adpp-header">Types of dApps</h3>
            <p className="adpp-content">
              There are three distinct types of dApps, usually called Type I,
              II, and III.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid four_points">
        <div className="container">
          <div className="row justify-content-center spaceout">
            <div className="col-lg-4 col-md-4 col-12">
              <div className="points-sec">
                <div className="d-flex">
                  <span className="seperator-line mb-4"></span>
                </div>
                <h4 className="points_header">Type I dApps</h4>
                <p className="points_content">
                  These types of dApps have their blockchain. This includes
                  Bitcoin, Litecoin, and other types of altcoins.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-12">
              <div className="points-sec">
                <div className="d-flex">
                  <span className="seperator-line mb-4"></span>
                </div>
                <h4 className="points_header">Type II dApps</h4>
                <p className="points_content">
                  These dApps use the blockchain of type I. They are protocols
                  with tokens that keep them functioning. They may act as a
                  layer on top of the blockchain that offers certain
                  functionalities.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="points-sec">
                <div className="d-flex">
                  <span className="seperator-line mb-4"></span>
                </div>
                <h4 className="points_header">Type III dApps</h4>
                <p className="points_content">
                  These types of dApps have their Type III dApps use the
                  protocol of type II, and also have tokens that are necessary
                  for them to function.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="limechain-bc d-flex flex-column">
          <h3 className="lime-title">Building dApps with Msquare</h3>
          <p className="limechain-para">
            Since 2017, Msquare has been developing dApps and smart contracts.
            During this time we have deployed over 10 dApps on the Ethereum main
            net.
          </p>
          <p className="limechain-para">
            Msquare offers end-to-end dApp development, including smart
            contracts, frontend, backend, and design. Our dApp development
            process ensures that we are capable of abstracting the complexity of
            the blockchain and building a seamless user experience. We have good
            knowledge of CI/CD and Cloud deployments of dApps. This includes
            on-prem, decentralized infrastructures (IPFS), and AWS and GCP cloud
            platforms.
          </p>
          <p className="limechain-para">
            In developing dApps we use our own tools EOSlime and Etherlime, as
            well as the Gnosis multisig wallet, and OpenZeppelin’s top industry
            grade contracts.
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

export default DecentralizedApplication;
