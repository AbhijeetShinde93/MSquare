import React from "react";
import "./TokenOffering.css";
import { tokenData, tokenstages } from "./TokenOfferData";
import Hero from "../Hero/Hero";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import TokenOfferingImg from "../../assets/images/Token-Offering.jpg";
import Aritical from "../Artical/Aritical";

const TokenOffering = () => {
  const token_header = "Token Offering";
  const token_subheader =
    "Msquare’s Security Token Offering services include token creation and integration, as well as the creation of an investment platform development for token offerings.";

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contactus");
  };

  const artical_header = "Working on launching a token offering?";
  const artical_subheader =
    "Get in touch with us to learn more about our security token offering services and how we can help you with your project!";

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
          header={token_header}
          subheader={token_subheader}
          buttonText="Get a quote"
          callback={handleClick}
        />
      </div>
      <div className="container-fluid ">
        <div className="consulting-section">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-lg-6 col-12 my-auto">
              <div>
                <img
                  src={TokenOfferingImg}
                  alt="blockchain"
                  className="token_img"
                />
              </div>
            </div>
            <div className="col-lg-6 col-lg-6 col-12 ">
              <div className="token-content ">
                <div className="d-flex">
                  <span className="seperator-line"></span>
                </div>
                <div className="d-flex flex-column">
                  <h5 className="token-header">What is Token Offering?</h5>
                  <p className="token-para">
                    A token is a representation of а digital asset or access
                    rights which can be traded. Tokens are usually managed by
                    one or several smart contracts and are based on a blockchain
                    platform (distributed ledger).
                  </p>
                  <p className="token-para">
                    The tokenization of digital assets has enabled various new
                    fundraising and trading opportunities in industries like
                    real estate, equities and investment funding, intellectual
                    property but also luxury goods, art, and even sports. Our
                    security token offering services include token creation and
                    integration, as well as the creation of an investment
                    platform development for token offerings. If you are
                    considering launching a Security Token Offering (STO),
                    Msquare can build your platform for tokenized asset
                    offerings, based on your fundraising or investment
                    requirements. We can also help you launch your Initial
                    Exchange Offering (IEO) and provide consulting services
                    regarding its management.
                  </p>
                  <p className="token-para">
                    Thanks to our strong partnership network, we can also assist
                    you in the legal and marketing-related aspects of your
                    project. This includes KYC verification, AML procedures,
                    accreditation, whitepaper and pitch deck creation,
                    advertisement, marketing, and end-to-end development and
                    support – starting with company incorporation to platform in
                    production and product scale and support.
                  </p>
                  <p className="token-para">
                    Are you considering launching a token offering for your
                    business? Here’s how you can benefit from it!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="board d-flex flex-column">
          <h3 className="board-header">
            Benefits of Token Offering for Your Business
          </h3>
          <p className="board-content">
            Developing tokens for your business can offer a number of benefits
            that are not available through standard means of financing. These
            include:
          </p>
        </div>
      </div>
      <div className="container-fluid four_points">
        <div className="container ">
          <div className="row justify-content-center spaceout">
            {tokenData.map(({ points_title, points_subcontent }) => {
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
          <h3 className="board-header">
            The Token Offering Development Process
          </h3>
          <p className="board-content">
            Msquare’s token development process goes through the following
            phases to guarantee that a project’s requirements are fully met.
          </p>
        </div>
        <div className="row">
          <div className="team-element-populated">
            <div className="team-widget-wrap">
              <div className="team-selection">
                {tokenstages.map(({ title, subdata }, index) => {
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
            <h3 className="lime-title">Token Offering by Msquare</h3>
            <p className="limechain-para">
              Msquare has been providing security token offering services and
              been developing utility, payment, and security tokens since 2017.
              We also have experience with the tokenization of traditional
              assets such as real estate, financial assets, premium bonds, and
              others.
            </p>
            <p className="limechain-para">
              Our expertise in the fields further includes:
            </p>
            <p className="limechain-para">
              Creating fully customized token sale platforms with options for
              additional features such as secondary market, voting, and more
            </p>
            <p className="limechain-para">
              Building solutions that are in compliance with KYC/AML standards,
              and other legal requirements. Check LimeLegal for legal support.
            </p>
            <p className="limechain-para">
              Developing easy-to-use smart wallets that effectively remove the
              complexity of blockchain and are accessible to investors.
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

export default TokenOffering;
