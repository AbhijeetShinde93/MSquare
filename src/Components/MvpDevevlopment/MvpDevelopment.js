import React, { useEffect, useState } from "react";
import "./MvpDevelopment.css";
import { useNavigate } from "react-router-dom";
import Hero from "../Hero/Hero";
import pocImg from "../../assets/images/pvo-img.jpg";
import mvpImg from "../../assets/images/mvp.jpg";
import Aritical from "../Artical/Aritical";

import BdesktopImage from "../../assets/images/backgroundImg/abt-img-002.jpg";
import BmobileImage from "../../assets/images/backgroundImg/abt-img-002.jpg";

import blockImg from "../../assets/images/backgroundImg/service-1.jpg";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return windowWidth;
};

const MvpDevelopment = () => {
  const bannerbgimageUrl =
    useWindowWidth() >= 650 ? BdesktopImage : BmobileImage;

  const header = "Enterprise Blockchain Services";
  const subheader = (
    <>
      By analyzing your industry vertical and your specific business needs we
      can determine the best way to introduce blockchain and distributed ledger
      technology (DLT) into your operations or services. Based on this analysis,
      we also determine the correct technical approach to the development and
      future deployment of your product.
      <br />
      At Msquare, we understand that the work done during the prototyping phase
      can make or break a blockchain project. That’s why we offer a suite of
      enterprise blockchain services designed specifically to help projects
      navigate through the prototyping stage and later support then into moving
      the solution to production and support it.
    </>
  );

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contactus");
  };

  const clickToExplorePoc = () => {
    navigate("/blockchain-poc-development");
  };

  const clickToExploremvp = () => {
    navigate("/blockchain-mvp-development");
  };

  const artical_header = "Working on the next big thing?";
  const artical_subheader =
    "You have the great vision we got the skills to bring it to life. Let’s build something great!";

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
      <div
        className="container-fluid element-section"
        style={{
          backgroundImage: `url(${bannerbgimageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "100% 0%",
        }}>
        <Hero
          subheader={subheader}
          header={header}
          buttonText="Get a quote"
          callback={handleClick}
        />
      </div>

      <div className="container">
        <div className="mvp-container d-flex flex-column">
          <h3 className="mvp-header">Enterprise Blockchain Services:</h3>
          <p className="mvp-content">
            We offer a suite of enterprise blockchain services through the
            prototyping stage, including PoC and MVP development, to later
            moving the solution to production and supporting it.
          </p>
        </div>
      </div>
      <div className="container-fluid ">
        <div className="consulting-section">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-lg-6 col-12 my-auto">
              <div>
                <img src={pocImg} alt="blockchain" className="poc_img" />
              </div>
            </div>
            <div className="col-lg-6 col-lg-6 col-12">
              <div className="poc-mvc-content">
                <div className="d-flex">
                  <span className="seperator-line"></span>
                </div>
                <div className="d-flex flex-column">
                  <h5 className="POC-header">PoC Development</h5>
                  <p className="POC-para">
                    It all starts with developing a proof of concept (PoC). This
                    step should not be underestimated, as having a solid PoC can
                    lead to significant benefits. PoC development provides a
                    quick and cost-efficient way to assess an idea in a safe
                    environment and determine whether it can lead to a viable
                    solution. Because of this, PoCs provide ample opportunities
                    for experimentation and research, which is key for figuring
                    out the potential, as well as the limitations, of a novel
                    technology like blockchain.
                  </p>
                  <p className="POC-para">
                    Blockchain PoCs are widely used by public and private
                    organizations across multiple industries, including finance,
                    insurance, supply chain management, identity management and
                    more.
                  </p>
                  <p className="POC-para">
                    Over the past three years, Msquare has worked on more than
                    80 blockchain projects. Most of those projects started out
                    as PoCs, allowing us to gain significant experience in
                    enterprise blockchain services and PoC development. Having
                    helmed dozens of PoCs, we are confident in our ability to
                    guide a project through the various steps of the PoC
                    development process, which include business value
                    assessment, scope outline and selecting the right technology
                    for the job. Our team is quite proficient in working with
                    the following technologies:
                  </p>
                  <ul>
                    <li>
                      Blockchain protocols: Ethereum, Hedera Hashgraph, EOS,
                      Hyperledger Besu, Hyperledger Fabric
                    </li>
                    <li>
                      Client-side development: React.js, Angular, Vue.js, Ionic,
                      React Native
                    </li>
                    <li>Server-side development: Node.js, Golang</li>
                  </ul>
                  <p className="POC-para">
                    With PoC taken care of, let’s take a look at the other part
                    of the enterprise blockchain development services – the
                    prototyping stage.
                  </p>
                </div>
                <div className="row">
                  <div>
                    <button
                      onClick={clickToExplorePoc}
                      className="btn Explore_more_btn">
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center marg-up">
            <div className="col-lg-6 col-lg-6 col-12">
              <div className="poc-mvc-content">
                <div className="d-flex">
                  <span className="seperator-line"></span>
                </div>
                <div className="d-flex flex-column">
                  <h5 className="POC-header">MVP Development</h5>
                  <p className="POC-para">
                    Whereas a proof of concept allows you to assess the
                    viability of an idea, a minimum viable product presents a
                    way to test the practical application of that idea. The MVP
                    development process involves building a product with just
                    enough features to create a working prototype based on the
                    initial concept.
                  </p>
                  <p className="POC-para">
                    There are many reasons to consider enterprise blockchain
                    services like developing a blockchain MVP. For starters, an
                    idea may seem great on paper or in a controlled environment,
                    but it eventually needs to be tested against feedback from
                    actual users. Building an MVP is the perfect way to do so.
                    In the hands of a skilled and capable team, an MVP can be
                    developed quickly and efficiently.
                  </p>
                  <p className="POC-para">
                    An MVP can also be instrumental in identifying the right
                    market for a product or service and determining whether the
                    initial concept needs to be tweaked, modified or abandoned
                    entirely.
                  </p>
                  <p className="POC-para">
                    Another advantage of MVPs is that they enable fast market
                    entry. This can be crucial for gaining first mover
                    advantage, especially for startups, which often rely on the
                    strength of their innovative ideas to succeed against larger
                    competitors.
                  </p>
                  <p className="POC-para">
                    Finally, a well designed MVP can be easily scaled with the
                    addition of more creatures and functionalities. In this way,
                    an MVP can provide a solid foundation for developing a
                    full-fledged product.
                  </p>
                  <div className="row">
                    <div>
                      <button
                        onClick={clickToExploremvp}
                        className="btn Explore_more_btn">
                        Explore
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-lg-6 col-12 my-auto">
              <div>
                <img src={mvpImg} alt="blockchain" className="poc_img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="enterprice-bc d-flex flex-column">
            <h3 className="enterprice-title">
              Enterprise Blockchain Development Services by Msquare
            </h3>
            <p className="enterprice-para">
              Msquare’s team of developers has proven to be very adept at
              building PoCs and MVPs. Over the years, we’ve been able to help a
              number of projects to receive the full benefits that a well
              designed prototype can bring. We’ve demonstrated our ability to
              adapt based on user feedback and deliver a product in a timely
              manner. Combined with our stellar track record in most enterprise
              blockchain platforms, this gives us the confidence to tackle any
              challenges that may arise during the prototyping stage of
              blockchain product development.
            </p>
          </div>
        </div>
      </div>
      <Aritical
        articalHeader={artical_header}
        articalSubheader={artical_subheader}
        btnText="Contact us"
        callbutton={articalHandleClick}
        bgImage={blockImg}
      />
    </div>
  );
};

export default MvpDevelopment;
