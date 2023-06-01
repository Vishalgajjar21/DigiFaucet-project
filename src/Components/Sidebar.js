import React, { useState } from "react";
import { Link } from "react-router-dom";
import md from "../images/md.png";
import dbz from "../images/goku.png";
import naruto from "../images/naruto.png";

const Sidebar = (props) => {

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const Intvalue1 =  props.mt.toString() /(10**7) 
  const Intvalue2 =  props.st.toString() /(10**18) 
  const Intvalue3 =  props.tt.toString() /(10**18) 
  
  return (
    <>
      <div className="container has-text-centered main-content">
        <i
          onClick={toggleSidebar}
          className="fa-sharp fa-solid fa-rocket fa-xl"
        >
          {" faucet list "}
          <i  onClick={toggleSidebar} className="fa-solid fa-list"></i>
        </i>
        
        {isSidebarOpen && (
          <div className="sidebar">
            <button
              className="btn btn-primary"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              Token Info
            </button>

            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="list-group-item list-group-item-action active py-3 lh-sm">
                <button
                  type="button"
                  className="btn-close contained"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                  style={{ display: "flex", marginLeft: "auto", color: "red" }}
                ></button>
                <strong>
                  <p>DigiFaucet recommends the Assets below</p>
                </strong>

                <Link
                  to="/info"
                  className="list-group-item list-group-item-action py-1 lh-sm"
                  aria-current="true"
                >
                  <div className="d-flex w-100 align-items-center justify-content-between">
                    {/* TokenDetails*/}
                    <div
                      className="token1 col-10 mb-2 "
                      style={{ textAlign: "left", marginLeft: "20px" }}
                    >
                      <strong>TokenName : </strong>Minddeft
                      <br />
                      <strong>TokenSymbol : </strong>MT Token
                      <br />
                      <strong>LockTimer : </strong>2 min-75 Tokens, 3 min-50
                      Tokens
                      <br />
                      <strong>TokenDecimals :</strong> 7-Decimals
                      <br />
                      <strong>TokenBalance :</strong>
                      <div>{Intvalue1}</div>
                      <img
                        src={md}
                        alt=""
                        style={{
                          maxWidth: "50px",
                          position: "absolute",
                          top: "15px",
                          right: "10px",
                        }}
                      />
                    </div>
                   
                  </div>
                </Link>
              </div>

              {/* Second Token */}
              <Link
                to="/info"
                className="list-group-item list-group-item-action py-1 lh-sm"
                aria-current="true"
              >
                <div className="d-flex w-100 align-items-center justify-content-between">
                  {/* TokenDetails*/}
                  <div
                    className="token1 col-10 mb-2 "
                    style={{ textAlign: "left", marginLeft: "20px" }}
                  >
                    <strong>TokenName: </strong>Dragon Ball Z
                    <br />
                    <strong>TokenSymbol : </strong>ST Token
                    <br />
                    <strong>LockTimer : </strong>2 min-75 Tokens, 3 min-50
                    Tokens
                    <br />
                    <strong>TokenDecimals :</strong> 18-Decimals
                    <br />
                    <strong>TokenBalance :</strong>   <div>{Intvalue2}</div>
                    <img
                      src={dbz}
                      alt=""
                      style={{
                        maxWidth: "60px",
                        position: "absolute",
                        top: "15px",
                        right: "10px",
                      }}
                    />
                  </div>
                  {/* Token symbol */}
                </div>
              </Link>

              {/* Third Token */}
              <Link
                to="/info"
                className="list-group-item list-group-item-action py-1 lh-sm"
                aria-current="true"
              >
                <div className="d-flex w-100 align-items-center justify-content-between">
                  {/* TokenDetails*/}
                  <div
                    className="token1 col-10 mb-2 "
                    style={{ textAlign: "left", marginLeft: "20px" }}
                  >
                    <strong>TokenName: </strong>Naruto Uzumaki
                    <br />
                    <strong>TokenSymbol : </strong>TT Token
                    <br />
                    <strong>LockTimer : </strong>2 min-75 Tokens, 3 min-50
                    Tokens
                    <br />
                    <strong>TokenDecimals :</strong> 18-Decimals
                    <br />
                    <strong>TokenBalance :</strong>  <div>{Intvalue3}</div>
                    <img
                      src={naruto}
                      alt=""
                      style={{
                        maxWidth: "50px",
                        position: "absolute",
                        top: "15px",
                        right: "10px",
                      }}
                    />
                  </div>
                  {/* Token symbol */}
                </div>

                <div className="offcanvas-body">
                  <strong>
                    Each has been tested by myself and found to be reliable.
                  </strong>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
