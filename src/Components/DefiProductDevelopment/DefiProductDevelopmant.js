import React from "react";
import "./DefiProductDevelopment.css";
import { useNavigate } from "react-router-dom";
import { DefiProduct, defiStages } from "./DefiData";
import Hero from "../Hero/Hero";
import DeFiDevelopmentImg from "../../assets/images/DeFi-Development.jpg";
import uuid from "react-uuid";
import Aritical from "../Artical/Aritical";

const DefiProductDevelopmant = () => {
  const defi_header = "DeFi Product Development";
  const defi_subheader =
    "Decentralized Finance (DeFi) is the use of decentralized networks or applications (dApps) built on blockchain to enable various financial services. By using dApps and distributed ledger technology (DLT), DeFi allows for permissionless financial operations to be conducted within a peer-to-peer network.";

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contactus");
  };

  const artical_header = "Are you working on a new DeFi project?";
  const artical_subheader =
    "Get in touch with us to tell us more and find out how we can help you in this journey!";

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
          header={defi_header}
          subheader={defi_subheader}
          buttonText="Get a quote"
          callback={handleClick}
        />
      </div>
      <div className="container-fluid ">
        <div className="product-section">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-lg-6 col-12 my-auto">
              <div>
                <img
                  src={DeFiDevelopmentImg}
                  alt="blockchain"
                  className="defi-Img"
                />
              </div>
            </div>
            <div className="col-lg-6 col-lg-6 col-12 ">
              <div className="defiproduct-content ">
                <div className="d-flex">
                  <span className="seperator-line"></span>
                </div>
                <div className="d-flex flex-column">
                  <h5 className="defiproduct-header">
                    What are DeFi Products?
                  </h5>
                  <p className="defiproduct-para">
                    The goal of DeFi product development is to redefine
                    traditional financial services such as lending, trading,
                    investment, payment, insurance, and others by disrupting the
                    role of intermediaries.
                  </p>
                  <p className="defiproduct-para">
                    Because of the way in which DeFi products are designed, they
                    are effectively modular – meaning that applications and
                    protocols can be added to and combined with each other. This
                    allows for much greater flexibility and variety in the
                    services that you can offer, in addition to the benefits
                    offered by blockchain technology.
                  </p>
                  <p className="defiproduct-para">
                    Msquare can develop some of the most popular types of DeFi
                    applications that include:
                  </p>
                  <ul>
                    <li>Staking platforms</li>
                    <li>Liquidity mining platforms</li>
                    <li>Decentralized Exchanges (DEX)</li>
                    <li>Decentralized Lending Protocols and Apps</li>
                    <li>Non-custodial wallets</li>
                  </ul>
                  <p className="defiproduct-para">
                    Are you considering DeFi product development for your
                    business? Here are some of its benefits!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="defi-benifit d-flex flex-column">
          <h3 className="benifit-header">
            Benefits of DeFi Product Development for Your Business
          </h3>
          <p className="benifit-content">
            DeFi’s core purpose is to reimagine traditional financial services
            and offer open access to them to more people. It does so by
            expanding the application of distributed ledger technology beyond
            simple value transfer to include more complex operations. Here are
            some of the benefits of DeFi product development:
          </p>
        </div>
      </div>
      <div className="container-fluid four_points">
        <div className="container">
          <div className="row justify-content-center spaceout">
            {DefiProduct.map(({ points_title, points_subcontent }) => {
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
        <div className="benifit_ext_process d-flex flex-column">
          <h3 className="benifit-header">
            The DeFi Product Development Process
          </h3>
          <p className="benifit-content">
            The DeFi product development process goes through several stages to
            ensure that client requirements and needs have been understood and
            met. These stages include:
          </p>
        </div>

        <div className="row">
          <div className="benifit-element-populated">
            <div className="benifit-widget-wrap">
              <div className="benifit-selection">
                {defiStages.map(({ title, subdata }, index) => {
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
            <h3 className="lime-title">DeFi Product Development by Msquare</h3>
            <p className="limechain-para">
              At Msquare we have been building dApps since 2017 and have
              completed over 100 blockchain projects to date. Over the course of
              this period, we have gained a rich and diverse experience in
              developing DeFi products. In working with notable customers such
              as AllianceBlock, Celo, BarnBridge, ETHRift.io, and others, we
              have polished our DeFi development skills and processes. Our
              expertise in the field includes end-to-end DeFi product
              development, the development of features such as staking,
              liquidity mining, non-custodial wallets, and more.
            </p>
          </div>
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

export default DefiProductDevelopmant;
