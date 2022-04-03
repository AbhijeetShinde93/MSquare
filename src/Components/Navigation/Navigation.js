import React, { useState } from "react";
import "./Navigation.css";
import { Navbar, Nav, NavDropdown, NavItem } from "react-bootstrap";
import brandlogo from "../../assets/icons/CMYK_brandlogo.jpg";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Navbar expand="lg" fixed="top" className="navigation">
        <Navbar.Brand href="/" id="brand-logo">
          <img src={brandlogo} alt="company_logo" className="comp_logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/" className="links">
              Home
            </Link>

            <Link to="/aboutus" className="links">
              About Us
            </Link>
            <Link to="/whatwedo" className="links">
              What we do
            </Link>
            <NavDropdown
              title="Services"
              id="Services-nav-dropdown"
              className="links"
              // show={menu}
              // onMouseEnter={showDropdown}
              // onMouseLeave={hideDropdown}
            >
              <ul className="sub-menu">
                <li className="menu-item">
                  <Link
                    className="hfe-sub-menu-item"
                    to="/blockchain-consulting">
                    <div className="submenu-liks-sec">
                      <h6 className="link-text">Blockchain consulting</h6>
                      <p className="link-text-line">
                        We will help you understand the implications of DLT and
                        ideate it’s application in your business.
                      </p>
                    </div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    className="hfe-sub-menu-item"
                    to="/complete-project-developmant">
                    <div className="submenu-liks-sec">
                      <h6 className="link-text">
                        Complete project Development
                      </h6>
                      <p className="link-text-line">
                        We will be your end-to-end technical partner.
                      </p>
                    </div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link className="hfe-sub-menu-item" to="/poc-mvc-development">
                    <div className="submenu-liks-sec">
                      <h6 className="link-text">Poc & MVP Development</h6>
                      <p className="link-text-line">
                        We will prove together that DLT can bring tangible
                        results to your company.
                      </p>
                    </div>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    className="hfe-sub-menu-item"
                    to="/blockchain-team-extension">
                    <div className="submenu-liks-sec">
                      <h6 className="link-text">Extended Team</h6>
                      <p className="link-text-line">
                        Our highly skilled developers will join your team!
                      </p>
                    </div>
                  </Link>
                </li>
              </ul>
            </NavDropdown>

            <Link to="/usecases" className="links">
              Use Cases
            </Link>
            <Link to="/blogs" className="links">
              Blog
            </Link>
          </Nav>
          <Link type="button" to="/contactus" className="btn btn-Enquiry">
            Ready to talk?
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
