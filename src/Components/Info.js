import React from 'react'

const Info = () => {
  return (
    <>
    <div className="container-fluid">
    <div className="container">
      
    <div className="container has-text-centered main-content">
            <h1 className="infotitle title is-1">How to use DigiFaucet?</h1>
    </div>
    <div className='hero is-fullheight'>
    <div className="accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
       <strong>Step 1. Connect Your Wallet</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
      <div className="accordion-body">
      First User have to Connect the Metamask wallet by Connect wallet button. MetaMask is a software cryptocurrency wallet used to interact with the Ethereum blockchain. It allows users to access their Ethereum wallet through a browser extension or mobile app, which can then be used to interact with decentralized applications.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
      <strong> Step 2. Choose The Token</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
      <div className="accordion-body">
        After connecting MetaMask wallet User have to decide which token they want to claim by going in FaucetList. In FaucetList User can check details of each tokens. Ex: TokenName,TokenSymbol,LockTimer,TokenDecimals,TokenBalance,TokenIcon. 
        Choose the token by choose token dropdown menu. Do a MetaMask transection and after a successfull transection User will get 50 tokens at first visit and LockTime for that particular user will be set for 2 minutes. After 2 minutes user can claim again and in second visit user will get 75 tokens and LockTime will be 5 minutes.After 5minutes User will get a chance to claim 50 tokens in 3rd visit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
      <strong> Step 3. Check Transection Details</strong>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
      <div className="accordion-body">
        User can also tract transection details in EtherScan with the generated hash in transection data.
      </div>
    </div>
  </div>
</div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Info