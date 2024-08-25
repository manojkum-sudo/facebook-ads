import React from "react";
import "./HeaderPage.css";

const HeaderPage = () => {
  return (
    <div className="main-body">
      <div className="container">
        <header className="header">
          <h1 className="brand">iJaipuria</h1>
          <button className="cta-button">Get Instant Access</button>
        </header>

        <div className="content">
          <div className="text-content">
            <h2 className="highlight">Increase Leads & Sales by 10X</h2>
            <h1 className="main-heading">
              Master Advanced Facebook & Instagram Ads Strategies
            </h1>
            <p className="description">
              Transform Your Career, Unlock High-Paying Jobs, Business Growth,
              or Freelance Success — No Prior Experience Needed!
            </p>
            <p className="special-offer">
              Special Offer: Get Flat 80% Discount
            </p>
            <button className="price-button">
              Get Instant Access <span className="strikethrough">₹6999</span>{" "}
              ₹1499
            </button>
          </div>

          <div className="video-content">
            <video controls className="video" poster="poster-image.jpg">
              <source
                src="https://youtu.be/bukN2P7WpwE?si=KzH25-Nf98C-aniD"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <div className="mentor">
              <img
                src="data:image/jpeg;base64,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"
                alt="Mentor"
                className="mentor-img"
              />
              <div className="mentor-info">
                <h3>Mentor: Rupshanker Mishra</h3>
                <p>Co-founder of Mediafix</p>
                <ul>
                  <li> ✅ Managed over 100 Cr in Ad Spend</li>
                  <li> ✅ Award-winning Performance Marketer</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
