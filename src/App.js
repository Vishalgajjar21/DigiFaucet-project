import { useEffect, useState } from "react";
import { ethers } from "ethers";
import "./App.css";
import faucetContract from "./ethereum/faucet";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Faucet from "./Components/Faucet";
import Info from "./Components/Info";
import Etherscan from "./Components/Etherscan";
import About from "./Components/About";
import MinddeftToken from "./ethereum/firstbalance";
import SecondToken from "./ethereum/secondbalance";
import ThirdToken from "./ethereum/thirdbalance";

function App() {
  const [walletAddress, setWalletAddress] = useState("");
  const [signer, setSigner] = useState();
  const [fcContract, setFcContract] = useState();
  const [withdrawError, setWithdrawError] = useState("");
  const [withdrawSuccess, setWithdrawSuccess] = useState("");
  const [trasactionData, setTransactionData] = useState("");
  const [mtContract, setMtContract] = useState("");
  const [stContract, setStContract] = useState("");
  const [ttContract, setTtContract] = useState("");
  const [balance, setBalance] = useState(0);
  const [stbalance, setStBalance] = useState(0);
  const [ttbalance, setTtBalance] = useState(0);

  useEffect(() => {
    getCurrentWalletConnected();
    addWalletListener();
    // balanceOf();
  }, [walletAddress]);

  // Connect wallet function----
  const connectWallet = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* Get Provider */
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        /* Get accounts */ // requesting account
        const accounts = await provider.send("eth_requestAccounts", []);
        /* Get signer  */
        const sign = await provider.getSigner();
        // console.log(sign);
        setSigner(sign);
        /* local contract instance */
        const mt = await MinddeftToken(provider);
        const st = await SecondToken(provider);
        const tt = await ThirdToken(provider);
        setMtContract(mt);
        setStContract(st);
        setTtContract(tt);
        // console.log(tt);
        setFcContract(faucetContract(provider));
        /*set active wallet address */
        setWalletAddress(accounts[0]);
        const response_mt = await mt.balanceOf(walletAddress);
        const response_st = await st.balanceOf(walletAddress);
        const response_tt = await tt.balanceOf(walletAddress);
        console.log("hello" + response_tt);
        setBalance(response_mt);
        setStBalance(response_st);
        setTtBalance(response_tt);

        // await balanceOf();

        // console.log(accounts[0]);
      } catch (err) {
        console.error(err.message); 
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  // fetch connected accounts
  const getCurrentWalletConnected = async () => {
    await connectWallet();
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      try {
        /* Get Provider */
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        /* Get accounts */ // fetching already connected accounts
        const accounts = await provider.send("eth_accounts", []);
        if (accounts.length > 0) {
          /* Get signer  */
          setSigner(provider.getSigner());
          /* local contract instance */
          setFcContract(faucetContract(provider));
          /*set active wallet address */
          setWalletAddress(accounts[0]);
          // console.log(accounts[0]);
        } else {
          console.log("Connect to MetaMask using the Connect Wallet button");
        }
      } catch (err) {
        console.error(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  // to load changed accounts or reflect updated accounts
  const addWalletListener = async () => {
    if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
      window.ethereum.on("accountsChanged", (accounts) => {
        setWalletAddress(accounts[0]);
      });
    } else {
      /* MetaMask is not installed */
      setWalletAddress("");
      console.log("Please install MetaMask");
    }
  };

  // FirstToken
  const getMTHandler = async () => {
    setWithdrawError("");
    setWithdrawSuccess("");
    try {
      const fcContractWithSigner = fcContract.connect(signer);
      const response = await fcContractWithSigner.requestTokens(1);

      const log = await response.wait();
      console.log(log);
      setWithdrawSuccess("Opearation Succeeded - ENJOY YOUR TOKENS!");
      setTransactionData(response.hash);
    } catch (err) {
      // setWithdrawError(err.message);
      console.log(err.message);
      const errorMessage = 
        "Sorry! To be fair to all developers, we only send some decided amount of tokens to every repeated user.Come again after some time from your original request.";
      setWithdrawError(errorMessage);
    }
  };

  //Second Token
  const getSTHandler = async () => {
    setWithdrawError("");
    setWithdrawSuccess("");
    try {
      const fcContractWithSigner = fcContract.connect(signer);
      const response = await fcContractWithSigner.requestTokens(2);

      const log = await response.wait();
      console.log(log);
      setWithdrawSuccess("Opearation Succeeded - ENJOY YOUR TOKENS!");
      setTransactionData(response.hash);
    } catch (err) {
      //  console.error(err.message);
      // setWithdrawError(err.message);
      const errorMessage = 
      "Sorry! To be fair to all developers, we only send some decided amount of tokens to every repeated user.Come again after some time from your original request.";
    setWithdrawError(errorMessage);
    }
  };

  //Third token
  const getTTHandler = async () => {
    setWithdrawError("");
    setWithdrawSuccess("");
    try {
      const fcContractWithSigner = fcContract.connect(signer);
      const response = await fcContractWithSigner.requestTokens(3);

      const log = await response.wait();
      console.log(log);
      setWithdrawSuccess("Opearation Succeeded - ENJOY YOUR TOKENS!");
      setTransactionData(response.hash);
    } catch (err) {
      //  console.error(err.message);
      // setWithdrawError(err.message);
      const errorMessage = 
      "Sorry! To be fair to all developers, we only send some decided amount of tokens to every repeated user.Come again after some time from your original request.";
    setWithdrawError(errorMessage);
    }
  };
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar
            title="DigiFaucet"
            connectWallet={connectWallet}
            walletAddress={walletAddress}
          />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <Faucet
                  balanceis={balance}
                  balancest={stbalance}
                  balancett={ttbalance}
                  walletAddress={walletAddress}
                  withdrawError={withdrawError}
                  withdrawSuccess={withdrawSuccess}
                  trasactionData={trasactionData}
                  getMTHandler={getMTHandler}
                  getSTHandler={getSTHandler}
                  getTTHandler={getTTHandler}
                />
              }
            ></Route>

            <Route exact path="/Info" element={<Info />}></Route>
            <Route exact path="/About" element={<About />}></Route>
            <Route exact path="/Etherscan" element={<Etherscan />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
