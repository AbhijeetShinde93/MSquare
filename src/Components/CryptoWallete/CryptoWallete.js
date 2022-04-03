import React from "react";
import "../DecentralizedApplication/DecentralizedApplication";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import Hero from "../Hero/Hero";
import cyptowalleteImg from "../../assets/images/Wallet-Development.jpg";
import { walletData, cryptStages } from "./CryptoWalleteData";
import Aritical from "../Artical/Aritical";

const CryptoWallete = () => {
  const team_header = "Crypto Wallet Development";
  const team_subheader =
    "We specialize in web and mobile cryptocurrency wallet development. This includes both custodial and non-custodial wallets. We also develop smart wallets and can offer wallet and crypto payments integration.";

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contactus");
  };

  const artical_header = "Looking for wallet development services?";
  const artical_subheader =
    "Get in touch with us to discuss your project needs and to plan the development of your wallet together!";

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
                  src={cyptowalleteImg}
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
                    What are blockchain or crypto wallets?
                  </h5>
                  <p className="Dapp-para">
                    A blockchain wallet or a cryptocurrency wallet is an
                    application that is used for the transfer of digital
                    transactions or cryptocurrencies between users of a
                    particular blockchain network and triggering blockchain
                    smart contracts. The wallet also provides access to its
                    holder’s digital transaction history, as well as their
                    balance. It serves as their blockchain identity and account.
                  </p>
                  <p className="Dapp-para">
                    Crypto wallets have a private and public key which are used
                    to process transaction information. These keys connect to
                    the blockchain and allow users to send transactions
                    (cryptocurrencies) and trigger smart contracts. A
                    transaction on the blockchain is impossible without the use
                    of a wallet.
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="adpp d-flex flex-column">
          <h3 className="adpp-header">
            Benefits of Integrating Cryptocurrency Wallet for Your Business
          </h3>
          <p className="adpp-content">
            If your business is launching its own blockchain project, you need
            to develop a wallet to enable users to execute blockchain
            transactions. The benefits of crypto wallet development include:
          </p>
        </div>
      </div>

      <div className="container-fluid four_points">
        <div className="container ">
          <div className="row justify-content-center spaceout">
            {walletData.map(({ points_title, points_subcontent }) => {
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
            The Cryptocurrency Wallet Development Process
          </h3>
          <p className="adpp-content">
            Msquare as a crypto wallet development company has developed a
            process that undergoes several stages to ensure full compliance with
            our clients’ requirements.
          </p>
          <p className="adpp-content">
            When developing cryptocurrency wallets, we can use the following
            languages, frameworks, and blockchain protocols:
          </p>
          <p className="adpp-content">
            Programming languages: JavaScript, TypeScript, Go, Solidity, Node.js
          </p>
          <p className="adpp-content">
            Frameworks: Angular, React, React-Native, Ionic
          </p>
          <p className="adpp-content">Tooling: Etherlime</p>
        </div>
        <div className="row">
          <div className="team-element-populated">
            <div className="team-widget-wrap">
              <div className="team-selection">
                {cryptStages.map(({ title, subdata }, index) => {
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

      <div className="container pt-4">
        <div className="adpp d-flex flex-column mt-4 pt-4">
          <h3 className="adpp-header">Types of Crypto Wallets</h3>
          <p className="adpp-content">
            A variety of blockchain wallets exist. In addition to the ones
            listed below, there are also desktop, hardware, and even paper
            wallets. The following types of blockchain wallets are the most
            popular ones:
          </p>
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
                <h4 className="points_header">Mobile wallets</h4>
                <p className="points_content">
                  This type of wallet can be installed on a mobile device.
                  Mobile wallets are very easy to use and well-suited to support
                  on-the-go transactions.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-12">
              <div className="points-sec">
                <div className="d-flex">
                  <span className="seperator-line mb-4"></span>
                </div>
                <h4 className="points_header">Web wallets</h4>
                <p className="points_content">
                  These wallets are accessible through web interfaces where
                  users need to log in to be able to make transactions.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="points-sec">
                <div className="d-flex">
                  <span className="seperator-line mb-4"></span>
                </div>
                <h4 className="points_header">Smart wallets</h4>
                <p className="points_content">
                  Smart contract wallets offer a number of additional features
                  and benefits over typical cryptocurrency wallets. By utilizing
                  smart contracts, these wallets can provide additional recovery
                  and security features to their users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="limechain-bc d-flex flex-column">
          <h3 className="lime-title">
            Cryptocurrency Wallet Development by Msquare
          </h3>
          <p className="limechain-para">
            Msquare has been developing cryptocurrency wallets since 2017. We
            specialize in web and mobile crypto wallet development which
            includes both custodial and non-custodial wallets. We also develop
            smart wallets and can offer wallet and crypto payments integration.
            Our portfolio includes the development of 10+ non-custodial wallets
            with access recovery for a variety of projects.
          </p>
          <p className="limechain-para">
            We also offer development of relayers to either sponsor transaction
            costs or have them paid in the native token. In addition, we can
            also provide you with Guardian implementation, as well as other
            forms of social recovery. These remove the UX hurdles and blockchain
            complexity and make wallets more accessible and user-friendly.
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

export default CryptoWallete;
