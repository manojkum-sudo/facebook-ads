import React from "react";
import "./WebinarInfo.css";

const WebinarInfo = () => {
  const points = [
    "No Prior Marketing or Facebook & Instagram Ads Knowledge required",
    "Increase your E-Commerce store ROI by 7x with proven ad strategies",
    "Learn how to run Facebook and Instagram ads the Expert way, not just Boost Posts",
    "Generate high-quality & convertible leads for B2B & B2C business at Scale",
    "Take your business offline to online quickly & get customers from all around the world",
    "Get mentored by a Facebook & Instagram Ads Expert who has managed more than INR 20 Cr in Ad spend",
  ];

  return (
    <div className="main-card">
      <div className="webinar-container">
        <h2>Advantages of this Course?</h2>
        <div className="points-grid">
          {points.map((point, index) => (
            <div className="point-card" key={index}>
              <div className="icon">✔️</div>
              <p style={{ color: "#111", fontSize: 20 }}>{point}</p>
            </div>
          ))}
        </div>
        <button className="register-button">Enroll Now for ₹499</button>
        <p className="note">30 Days Money Back Guarantee !</p>
      </div>
    </div>
  );
};

export default WebinarInfo;
