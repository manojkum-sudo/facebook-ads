import React from "react";
import "./BonusOffer.css";

const BonusOffer = () => {
  return (
    <div className="bonuses-wrapper">
      <div className="bonuses-header">
        <h2>Register before midnight of 26 Aug 2024</h2>
        <h3>To Unlock All Bonuses worth Rs 19,000</h3>
      </div>
      <div className="bonuses-container">
        <div className="bonus-card">
          <div className="bonus-header">Bonus 1</div>
          <div className="bonus-body">
            <img
              src="/path/to/key-icon.png"
              alt="Key Icon"
              className="bonus-icon"
            />
            <p>Secret Tools for Successful Marketing Campaign</p>
            <p className="bonus-value">Worth Rs 5,000</p>
          </div>
        </div>
        <div className="bonus-card">
          <div className="bonus-header">Bonus 2</div>
          <div className="bonus-body">
            <img
              src="/path/to/ad-icon.png"
              alt="Ad Icon"
              className="bonus-icon"
            />
            <p>Done for you Ad Creative Template</p>
            <p className="bonus-value">Worth Rs 7,000</p>
          </div>
        </div>
        <div className="bonus-card">
          <div className="bonus-header">Bonus 3</div>
          <div className="bonus-body">
            <img
              src="/path/to/facebook-icon.png"
              alt="Facebook Icon"
              className="bonus-icon"
            />
            <p>Private Facebook Ads MasterMind Community</p>
            <p className="bonus-value">Worth Rs 4,000</p>
          </div>
        </div>
        <div className="bonus-card">
          <div className="bonus-header">Bonus 4</div>
          <div className="bonus-body">
            <img
              src="/path/to/checklist-icon.png"
              alt="Checklist Icon"
              className="bonus-icon"
            />
            <p>My 7 Step Successful Campaign Setup Checklist</p>
            <p className="bonus-value">Worth Rs 2,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BonusOffer;
