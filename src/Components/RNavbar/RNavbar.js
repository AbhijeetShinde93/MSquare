import React, { useState } from "react";
import { Link } from "react-router-dom";
import brandlogo from "../../assets/icons/CMYK_brandlogo.jpg";
import "./RNavbar.css";
import { FaOutdent, FaTimes } from "react-icons/fa";

const RNavbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar fixed-top">
      <Link to="/">
        <img src={brandlogo} alt="company_logo" className="comp_logo" />
      </Link>
      <ul className={isMobile ? "nav-mobile-links" : "nav-links"}>
        <Link to="/" onClick={() => setIsMobile(false)} className="links">
          <li>Home</li>
        </Link>
        <Link
          to="/aboutus"
          onClick={() => setIsMobile(false)}
          className="links">
          <li>About Us</li>
        </Link>
        <Link
          to="/whatwedo"
          onClick={() => setIsMobile(false)}
          className="links">
          <li>What we do</li>
        </Link>

        <li className="dropdown">
          <Link
            to=""
            className="dropdown-toggle page-l"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            id="navbarDropdownMenuLink">
            Services
          </Link>
          <ul
            className="sub-menu dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink">
            <li>
              <Link
                to="/blockchain-consulting"
                className="dropdown-item"
                onClick={() => setIsMobile(false)}>
                <div className="submenu-liks-sec">
                  <h6 className="link-text">Blockchain consulting</h6>
                  <p className="link-text-line">
                    We will help you understand the implications of DLT and
                    ideate it’s application in your business.
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/complete-project-developmant"
                className="dropdown-item"
                onClick={() => setIsMobile(false)}>
                <div className="submenu-liks-sec">
                  <h6 className="link-text">Complete project Development</h6>
                  <p className="link-text-line">
                    We will be your end-to-end technical partner.
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/poc-mvc-development"
                className="dropdown-item"
                onClick={() => setIsMobile(false)}>
                <div className="submenu-liks-sec">
                  <h6 className="link-text">Poc & MVP Development</h6>
                  <p className="link-text-line">
                    We will prove together that DLT can bring tangible results
                    to your company.
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/blockchain-team-extension"
                className="dropdown-item"
                onClick={() => setIsMobile(false)}>
                <div className="submenu-liks-sec">
                  <h6 className="link-text">Extended Team</h6>
                  <p className="link-text-line">
                    Our highly skilled developers will join your team!
                  </p>
                </div>
              </Link>
            </li>
          </ul>
        </li>

        <Link
          to="/usecases"
          onClick={() => setIsMobile(false)}
          className="links">
          <li>Use Cases</li>
        </Link>
        <Link to="/blogs" onClick={() => setIsMobile(false)} className="links">
          <li>Blogs</li>
        </Link>
        <Link to="/contactus" onClick={() => setIsMobile(false)}>
          <li>
            <button className="btn btn-Enq"> Ready to talk?</button>
          </li>
        </Link>
      </ul>

      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <FaOutdent />}
      </button>
    </nav>
  );
};

export default RNavbar;

// let { BrowserRouter, Switch, Route, NavLink } = ReactRouterDOM;

// function NavBar() {
//   const [click, setClick] = React.useState(false);

//   const handleClick = () => setClick(!click);
//   const Close = () => setClick(false);

//   return (
//     <div>
//       <div className={click ? "main-container" : ""} onClick={() => Close()} />
//       <nav className="navbar" onClick={(e) => e.stopPropagation()}>
//         <div className="nav-container">
//           <NavLink exact to="/" className="nav-logo">
//             CodeBucks
//             <i className="fa fa-code"></i>
//           </NavLink>
//           <ul className={click ? "nav-menu active" : "nav-menu"}>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={click ? handleClick : null}>
//                 Home
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/about"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={click ? handleClick : null}>
//                 About
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/blog"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={click ? handleClick : null}>
//                 Blog
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/contact"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={click ? handleClick : null}>
//                 Contact Us
//               </NavLink>
//             </li>
//           </ul>
//           <div className="nav-icon" onClick={handleClick}>
//             <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }
