import React from "react";
import "./HeaderPage.css";

const HeaderPage = () => {
  return (
    <div className="course-ad-container">
      <header className="headerr">
        <p className="course-imagee">Increase Leads & Sales by 10X</p>
        <h1>
          Master <span className="highlightw">Advanced Facebook</span> &
          Instagram Ads <span style={{ color: "#fffa65" }}>Strategies</span>
        </h1>
      </header>
      <section className="video-section">
        <div className="video-container">
          {/* <img
          src="your-image-url.png"
          alt="Google Ads Using AI Tools"
          className="course-image"
        /> */}

          <video className="video-preview" controls>
            <source src="your-video-url.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="instructor-info">
          {/* <img
          src="your-instructor-image-url.png"
          alt="Instructor"
          className="instructor-image"
        />
        <p>Tanmoy Kumar Das</p> */}
        </div>
      </section>
      <section className="pricing-section">
        <h2>
          Transform Your Career, Unlock High-Paying Jobs, Business Growth, or
          Freelance Success
        </h2>
        <button className="pricing-button">Get Instant Access At ₹199!</button>
      </section>
      <section className="features-section">
        <ul>
          <li style={{ color: "#fffa65" }}>
            ✅ No Prior Marketing or Facebook & Instagram Ads Knowledge
            required.
          </li>
          <li>
            ✅ <span style={{ color: "#fff" }}>Increase your</span>
            E-Commerce store ROI by 7x with proven ad strategies
          </li>
          <li>
            ✅ Learn how to run Facebook and Instagram ads the Expert way,
            <span style={{ color: "#fff" }}>not just Boost Posts</span>
          </li>
          <li>
            ✅ Generate{" "}
            <span style={{ color: "#fff" }}>
              high-quality & convertible leads for B2B & B2C business at Scale
            </span>
          </li>
          <li>
            ✅ Take your business{" "}
            <span style={{ color: "#fff" }}>
              offline to online quickly & get customers from all around the
              world
            </span>
          </li>
          <li>
            ✅ Get mentored by a Facebook & Instagram Ads Expert who has{" "}
            <span style={{ color: "#fff" }}>
              managed more than INR 20 Cr in Ad spend
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default HeaderPage;
