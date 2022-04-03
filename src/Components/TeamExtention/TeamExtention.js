import React, { useEffect, useState } from "react";
import "./TeamExtention.css";
import Hero from "../Hero/Hero";
import teamExtensionImg from "../../assets/images/team-ext.jpg";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import { teanExtension, teamstage } from "./TeamExtentionData";
import Aritical from "../Artical/Aritical";

import BdesktopImage from "../../assets/images/backgroundImg/ext-img.png";
import BmobileImage from "../../assets/images/backgroundImg/ext-img.png";
import blockDevImg from "../../assets/images/backgroundImg/service-2.png";

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

const TeamExtention = () => {
  const bannerbgimageUrl =
    useWindowWidth() >= 650 ? BdesktopImage : BmobileImage;

  const team_header = "Blockchain Team Extension";
  const team_subheader =
    "Extending your blockchain development team allows you to quickly draw on the capacity and expertise of professionals without needing to hire new employees. This also reduces the risks and time investment associated with new hires, as an extended team is vouched for by the supporting company.";

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contactus");
  };

  const artical_header = "Do you need more people in your blockchain dev team?";
  const artical_subheader =
    "Contact us to learn more about the capabilities and manpower that we can provide you with!";

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
          subheader={team_subheader}
          header={team_header}
          buttonText="Get a quote"
          callback={handleClick}
        />
      </div>
      <div className="container-fluid ">
        <div className="consulting-section">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-lg-6 col-12">
              <div>
                <img
                  src={teamExtensionImg}
                  alt="blockchain"
                  className="team_img"
                />
              </div>
            </div>
            <div className="col-lg-6 col-lg-6 col-12 my-auto">
              <div className="extention-content ">
                <div className="d-flex">
                  <span className="seperator-line"></span>
                </div>
                <div className="d-flex flex-column">
                  <h5 className="te-header">
                    Blockchain Development Team Extension
                  </h5>
                  <p className="te-para">
                    Team extension is the process of one or several software
                    development professionals becoming part of your company for
                    the duration of a specific project.
                  </p>
                  <p className="te-para">
                    Extended team members are usually part of another company’s
                    team or sourced from a pool of professionals, maintained by
                    the company that provides the support.
                  </p>
                  <p className="te-para">
                    The development of a blockchain app or blockchain platform,
                    with the help of an extended team, offers you flexibility
                    and knowledge while at the same time providing you with the
                    ability to scale quickly.
                  </p>
                  <p className="te-para">
                    Msquare can assist you in extending your blockchain
                    development team with smart contracts, mobile, frontend, and
                    backend developers, as well as UI/UX designers!
                  </p>
                  <p className="te-para">
                    Do you want to know how you can benefit from an extended
                    team for your blockchain application or platform
                    development? Here are some of the many benefits for your
                    business!
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
            How will your project benefit if you bring external professionals on
            board?
          </h3>
          <p className="board-content">
            Extending your blockchain development team can offer you a number of
            benefits that will ensure the success of your project. These
            include:
          </p>
        </div>
      </div>
      <div className="container-fluid four_points">
        <div className="container ">
          <div className="row justify-content-center spaceout">
            {teanExtension.map(({ points_title, points_subcontent }) => {
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
          <h3 className="board-header">What is our approach?</h3>
          <p className="board-content">
            Extending a team typically involves several stages designed to
            ensure that all project and business requirements are taken into
            account and the people that are most suited for the project have
            been selected. When creating an extended team for you, the process
            goes through the following steps:
          </p>
        </div>
        <div className="row">
          <div className="team-element-populated">
            <div className="team-widget-wrap">
              <div className="team-selection">
                {teamstage.map(({ title, subdata }, index) => {
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
            <h3 className="lime-title">Team Extension by Msquare</h3>
            <p className="limechain-para">
              Msquare has been developing blockchain solutions since 2017. We
              have over 100 completed blockchain projects to date
            </p>
            <p className="limechain-para">
              We pride ourselves on our team of highly experienced developers.
              With proficiency in a variety of skills within the field of
              blockchain and distributed ledger technology (DLT), our developers
              can be easily integrated into any project.
            </p>
            <p className="limechain-para">
              With them being very self-sufficient, yet good team players, you
              can rely on our developers to meet your project’s requirements and
              deadlines on time.
            </p>
          </div>
        </div>
      </div>
      <Aritical
        articalHeader={artical_header}
        articalSubheader={artical_subheader}
        btnText="Contact us"
        callbutton={articalHandleClick}
        bgImage={blockDevImg}
      />
    </div>
  );
};

export default TeamExtention;
