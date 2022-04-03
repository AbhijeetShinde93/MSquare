import "./App.css";
import "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/bootstrap/js/dist/popover.js";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import React, { useEffect } from "react";
// import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";

import Whatwedo from "./Components/Whatwedo/Whatwedo";
import UseCases from "./Components/UseCases/UseCases";
import Blockchain from "./Components/Blockchain/Blockchain";
import Blogs from "./Components/Blogs/Blogs";
import ReadyForm from "./Components/ReadyForm/ReadyForm";
import CpDevelopment from "./Components/CpDevelopment/CpDevelopment";
import MvpDevelopment from "./Components/MvpDevevlopment/MvpDevelopment";
import TeamExtention from "./Components/TeamExtention/TeamExtention";
import DefiProductDevelopmant from "./Components/DefiProductDevelopment/DefiProductDevelopmant";
import TokenOffering from "./Components/TokenOffering/TokenOffering";
import DecentralizedApplication from "./Components/DecentralizedApplication/DecentralizedApplication";
import SmartContract from "./Components/SmartContractDevelopment/SmartContract";
import CryptoWallete from "./Components/CryptoWallete/CryptoWallete";
import ToolDevelopment from "./Components/ToolDevelopment/ToolDevelopment";
import DecentOrganization from "./Components/DecentOrganization/DecentOrganization";
import ScrollToTop from "./Components/ScrollToTop";
import DetailPocDevelopment from "./Components/DetailPocDevelopment/DetailPocDevelopment";
import DetailMvpDevelopment from "./Components/DetailMvpDevelopment/DetailMvpDevelopment";
import ComingSoon from "./Components/ComingSoon/ComingSoon";
import RNavbar from "./Components/RNavbar/RNavbar";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navigation /> */}
        <RNavbar />
        <div className="container-fluid px-0" id="page-container">
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<About />} />
              <Route path="/whatwedo" element={<Whatwedo />} />
              <Route path="/usecases" element={<UseCases />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/contactus" element={<ReadyForm />} />

              <Route path="/blockchain-consulting" element={<Blockchain />} />
              <Route
                path="/complete-project-developmant"
                element={<CpDevelopment />}
              />
              <Route path="/poc-mvc-development" element={<MvpDevelopment />} />
              <Route
                path="/blockchain-team-extension"
                element={<TeamExtention />}
              />
              <Route
                path="/decentralized-finance-development"
                element={<DefiProductDevelopmant />}
              />
              <Route path="/token-offering" element={<TokenOffering />} />
              <Route
                path="/decentralized-application-dapp-development"
                element={<DecentralizedApplication />}
              />
              <Route
                path="/smart-contract-development"
                element={<SmartContract />}
              />
              <Route
                path="/cryptocurrency-wallet-development"
                element={<CryptoWallete />}
              />
              <Route path="/tools-development" element={<ToolDevelopment />} />
              <Route
                path="/decentralized-organizations"
                element={<DecentOrganization />}
              />
              <Route
                path="/blockchain-poc-development"
                element={<DetailPocDevelopment />}
              />
              <Route
                path="/blockchain-mvp-development"
                element={<DetailMvpDevelopment />}
              />
              <Route path="/Comingsoon" element={<ComingSoon />} />
            </Routes>
          </ScrollToTop>
        </div>
        {window.location.pathname === "/Comingsoon" ? null : <Footer />}
      </Router>
    </div>
  );
}

export default App;
