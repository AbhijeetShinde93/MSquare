import React from "react";
import "./Footer.css";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="footer-section">
        <div className="logo-section">
          <h1 className="footer-logo">BlockChain</h1>
        </div>
        <div className="footer-element-section">
          <div className="container">
            <div className="row d-flex">
              <div className="col-lg-4 col-md-4 col-12">
                <div className="footer-menu">
                  <h5 className="list-title">Company</h5>
                  <ul>
                    <li>
                      <a href="/aboutus">About us</a>
                    </li>
                    <li>
                      <a href="/whatwedo">What we do</a>
                    </li>
                    <li>
                      <a href="/contactus">Contact</a>
                    </li>
                    <li>
                      <a href="/blogs">Blogs</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <div className="footer-menu">
                  <h5 className="list-title">Use Cases</h5>
                  <ul>
                    <li>
                      <a href="/Comingsoon">Automotive</a>
                    </li>
                    <li>
                      <a href="/Comingsoon">Banking</a>
                    </li>
                    <li>
                      <a href="/Comingsoon">Energy</a>
                    </li>
                    <li>
                      <a href="/Comingsoon">Healthcare</a>
                    </li>
                    <li>
                      <a href="/Comingsoon">Pharma</a>
                    </li>
                    <li>
                      <a href="/Comingsoon">Real estate</a>
                    </li>
                    <li>
                      <a href="/Comingsoon">Supply chain</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <div className="footer-menu">
                  <h5 className="list-title">Services</h5>
                  <ul>
                    <li>
                      <a href="/decentralized-finance-development">
                        DeFi Product Development
                      </a>
                    </li>
                    <li>
                      <a href="/token-offering">Token Offering</a>
                    </li>
                    <li>
                      <a href="/decentralized-application-dapp-development">
                        Decentralized Application Development
                      </a>
                    </li>
                    <li>
                      <a href="/cryptocurrency-wallet-development">
                        Crypto Wallets Development
                      </a>
                    </li>
                    <li>
                      <a href="/blockchain-consulting">Blockchain Consulting</a>
                    </li>
                    <li>
                      <a href="/poc-mvc-development">MVP & PoC Development</a>
                    </li>
                    <li>
                      <a href="/smart-contract-development">
                        Smart Contract Development
                      </a>
                    </li>
                    <li>
                      <a href="/tools-development">Tools Development</a>
                    </li>
                    <li>
                      <a href="/decentralized-organizations">
                        Decentralized Organizations
                      </a>
                    </li>
                    {/* <li>
                      <a href="/">Public Blockchain Development</a>
                    </li>
                    <li>
                      <a href="/">Private BlockChain Development</a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid logo-section">
          <div className="row">
            {/* <div className="col-lg-4 col-12">
              <div className="d-flex justify-content-between align-items-center">
                <img
                  src={process.env.PUBLIC_URL + "/images/The-Graph-Logo3.svg"}
                  alt="client_hero"
                  className="listlogo-img"
                />
                <img
                  src={process.env.PUBLIC_URL + "/images/The-Graph-Logo3.svg"}
                  alt="client_hero"
                  className="listlogo-img"
                />
                <img
                  src={process.env.PUBLIC_URL + "/images/The-Graph-Logo3.svg"}
                  alt="client_hero"
                  className="listlogo-img"
                />
              </div>
            </div> */}
            <div className="col-lg-6 col-md-6 col-12 m-auto justify-content-center">
              <div className="d-flex social-sec ">
                <p className="p-text">Follow Msquare for updates</p>
                <div className="d-flex">
                  <a href="https://www.linkedin.com/in/msquare-technologies-194089233/">
                    <BsLinkedin className="social-icons" />
                  </a>
                  <a href="https://www.facebook.com/Msquare-Technologies-101051569200916">
                    <GrFacebook className="social-icons" />
                  </a>
                  <a href="https://twitter.com/MsquareTechnol1">
                    <BsTwitter className="social-icons" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 m-auto">
              <div className="row social-sec text-lg-end text-md-end text-center my-2">
                <p className="p-text">Sitemap © 2021 Msquare Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
