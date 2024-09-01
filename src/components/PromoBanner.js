import React from "react";
import "./PromoBanner.css";

const PromoBanner = () => {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const day = String(today.getDate()).padStart(2, "0");

  const formattedDate = `${day}-${month}-${year}`;
  console.log(formattedDate);
  return (
    <div className="promo-banner">
      <p className="promo-text">Believe Me When I Say This</p>
      <p className="main-text">
        “You <span className="highlightt">DO NOT</span> Need Any Marketing Or
        Ads Knowledge To Learn Facebook & Instagram Ads. Over 15,437
        Professionals Have Mastered This Skill By Attending This Masterclass”
      </p>
      <button className="ctaa-button">
        Grow Any Business using Facebook & Instagram Ads Now!
        <span className="price">
          {" "}
          (Only Rs 199 <s>Rs 2500</s>)
        </span>
      </button>
      <p className="register-text">
        Register before <span className="highlight-date">{formattedDate}</span>{" "}
        to unlock bonuses worth{" "}
        <span className="highlight-price">Rs 25,000</span>
      </p>
    </div>
  );
};

export default PromoBanner;
