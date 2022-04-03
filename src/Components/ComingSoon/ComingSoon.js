import React from "react";
import { useNavigate } from "react-router-dom";
import "./ComingSoon.css";
import commingsoonImage from "../../assets/images/backgroundImg/comingsoon.jpg";

const ComingSoon = () => {
  const navigate = useNavigate();

  const backHome = () => {
    navigate("/");
  };

  return (
    <section id="home-commig">
      <div
        className="container-fluid commingsoon"
        style={{
          backgroundImage: `url(${commingsoonImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          position: "relative",
        }}>
        <div className="container cent">
          <div className="elemet-comming">
            <div className="d-flex flex-column justify-content-center">
              <h1 className="heading">Our page is under construction</h1>
              <p className="some-text">Stay tuned</p>
              <div className="text-center">
                <button className="btn btn-backhome" onClick={backHome}>
                  Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
