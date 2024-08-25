// src/components/PromoText.js
import React from "react";
import "./PromoText.css";

const PromoText = () => {
  return (
    <div className="promo-container">
      <p>
        You can{" "}
        <span className="highlighty">
          Setup & Run Profitable Facebook & Instagram Ads
        </span>{" "}
        to sell Your{" "}
        <span className="highlighty">Products or Services online</span> without
        hiring Any Expensive Freelancer or Agency or Spending Lakhs of Rupees on
        trial and error.
      </p>
      <p>
        Using The <span className="bold">Step by Step Systems</span> that has
        helped my Business{" "}
        <span className="highlight-orange">
          Grow to 50 Crore in last 11 months
        </span>
        .
      </p>
      <p className="no-prior">
        No Prior Business or Technical Knowledge Required!
      </p>
      <p className="easy">
        <span className="highlight-orange">YES</span>, It will be that Easy!
      </p>
      <p>Here is what you are going to learn...</p>
    </div>
  );
};

export default PromoText;
