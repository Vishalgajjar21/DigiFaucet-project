import React from "react";
import img1 from "../images/comingsoon.png";

const Etherscan = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container has-text-centered main-content">
          <h1 className="infotitle title is-1">This Page Is For EtherScan</h1>
          <div className="container">
            <section className="hero is-fullheight">
              <img
                src={img1}
                alt=""
                style={{ display: "block", margin: "0 auto", maxWidth: "50%" }}
              />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Etherscan;
