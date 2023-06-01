import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import imgrocket from '../images/rocket.png'; 
const Navbar = (props) => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg py-1">
          <div className="container-fluid">
            <Link className="navbar-brand" to=" ">
              <strong>DigiFaucet</strong>
            </Link>
              <img src ={imgrocket} alt = ""/>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/info">
                    Info
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Etherscan">
                    EtherScan
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/About">
                    About us
                  </Link>
                </li>
                <div id="navbarMenu" className="navbar-menu">
                  <div className="navbar-end is-align-items-center">
                    <button
                      className="button is-white connect-wallet"
                      onClick={props.connectWallet}
                    >
                      <span className="is-link has-text-weight-bold">
                        {props.walletAddress && props.walletAddress.length > 0
                          ? `Connected: ${props.walletAddress.substring(
                              0,
                              6
                            )}...${props.walletAddress.substring(38)}`
                          : "Connect Wallet"}
                      </span>
                    </button>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
Navbar.protoTypes = {
  title: PropTypes.string,
};
export default Navbar;
