import React from "react";
import "./Artical.css";

const Aritical = ({
  articalHeader,
  articalSubheader,
  callbutton,
  btnText,
  bgImage = "",
}) => {
  return (
    <div className="container-fluid">
      <div
        className="artical-view"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "100% 0%",
        }}>
        <h2 className="art-title">{articalHeader}</h2>
        <p className="art-text">{articalSubheader}</p>
        <div>
          <button className="btn btn-artical" onClick={callbutton}>
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aritical;
