import React from "react";
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <div>
        <div className="bg-white">
          <div className="container py-5">
            <div className="row h-100 align-items-center py-5">
              <div className="col-lg-6">
                <h1 className="about display-4">About us</h1>
                <p className="lead text-muted mb-0">
                  What is a DigiFaucet website? Crypto faucets are apps
                  or websites that give out small crypto rewards.Faucets were
                  never intended to make people crypto millionaires.
                </p>
                <p className="lead text-muted mb-5"><br/>
                  Our Primary goal is to raise awareness of cryptocurrencies. By
                  providing users with small amounts of cryptocurrency through
                  Faucet, the aim is to encourage more users to join the
                  cryptocurrency platforms.
                </p>
              </div>
              <div className="col-lg-6 d-none d-lg-block">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-light py-5">
          <div className="container py-5">
            <div className="row mb-4">
              <div className="col-lg-7">
                <h2 className="aboutteam display-4 font-weight-light">Our Team</h2>
                <p className="font-italic text-muted">
                  This Project is created by Vishal Gajjar under the guidance of
                  his Mentor Pratik Limbachiya.
                </p>
              </div>
            </div>

            <div className="row text-center">
              <div className="col-xl-3 col-sm-6 mb-5">
                <div className="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png"
                    alt=""
                    width="100"
                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 className="mb-0">Pratik Limbachiya</h5>
                  <span className="small text-uppercase text-muted">
                      Senior Blockchain Developer
                  </span>
                  <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item">
                      <Link
                        to="https://www.linkedin.com/in/pratik-limbachiya-984573128/"
                        className="social-link"
                      >
                        <i className="fa fa-linkedin"></i>
                      </Link>
                    </li>
                  </ul>Contact my Mentor
                </div>
              </div>

              <div className="col-xl-3 col-sm-6 mb-5">
                <div className="bg-white rounded shadow-sm py-5 px-4">
                  <img
                    src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png"
                    alt=""
                    width="100"
                    className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                  />
                  <h5 className="mb-0">Vishal Gajjar</h5>
                  <span className="small text-uppercase text-muted">
                    Web3 Developer (Intern)
                  </span>
                  <ul className="social mb-0 list-inline mt-3">
                    <li className="list-inline-item">
                      <Link to="https://www.linkedin.com/in/vishalgajjar21/" className="social-link">
                        <i className="fa fa-linkedin"></i>
                      </Link>
                    </li>
                  </ul>Contact me
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="bg-light pb-5">
          <div className="container text-center">
            <p className="font-italic text-muted mb-0">
              &copy; Copyrights DigiFaucet.com All rights reserved to Vishal.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default About;
