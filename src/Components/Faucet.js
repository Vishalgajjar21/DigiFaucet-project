import React from "react";
import PropTypes from "prop-types";
import Sidebar from "./Sidebar";

const Faucet = (props) => {
  return (
    <div className="container-fluid">
      <Sidebar mt={props.balanceis} st={props.balancest} tt={props.balancett} />
      <section className="hero is-fullheight">
        <div className="faucet-hero-body">
          <div className="container has-text-centered main-content">
            <h1 className="title is-1">DigiFaucet</h1>
            <p>Fast and Reliable</p>
            <p>CHOOSE YOUR TOKEN NOW ! </p>
            <div className="mt-5">
              {props.withdrawError && (
                <div className="alert alert-danger" role="alert">
                  {props.withdrawError}
                </div>
              )}
              {props.withdrawSuccess && (
                <div className="alert alert-success" role="alert">
                  {props.withdrawSuccess}
                </div>
              )}
            </div>

            <div className="box address-box">
              <div className="columns">
                <div className="column is-four-fifths">
                  <input
                    className="input is-medium"
                    type="text"
                    placeholder="Enter Your Wallet Address (0x...)"
                    defaultValue={props.walletAddress}
                  />
                  &nbsp;
                  <br />
                </div>

                <div className="column">
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={props.getMTHandler}
                  >
                    Get MT
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={props.getSTHandler}
                  >
                    Get ST
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={props.getTTHandler}
                  >
                    Get TT
                  </button>
                </div>
              </div>
              <article className="panel is-grey-darker">
                <p className="panel-heading">Transaction Data</p>
                <div className="panel-block">
                  <strong>
                    {/* <p>
                      {props.trasactionData ? (
                        <>
                          Transaction hash: {props.trasactionData}
                          <br />
                          Copy this Hash and search on EtherScan for more
                          details.
                        </>
                      ) : (
                        "--"
                      )}
                    </p> */}
                    <p>
                      {props.trasactionData ? (
                        <>
                          Transaction hash: {props.trasactionData}
                          <br />
                          Click on this link{" "}
                          <a
                            href={`https://sepolia.etherscan.io/tx/${props.trasactionData}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Sepolia EtherScan
                          </a>{" "}
                          to track transection details.
                        </>
                      ) : (
                        "--"
                      )}
                    </p>
                  </strong>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Faucet.protoTypes = {
  title: PropTypes.string,
};
export default Faucet;
