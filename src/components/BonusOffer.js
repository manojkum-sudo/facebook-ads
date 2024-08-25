import React from "react";
import "./BonusOffer.css";

const BonusOffer = () => {
  return (
    <div className="bonuses-container">
      <h2>
        Time is running out. <span style={{ color: "#e91e63" }}></span> Enroll
        Now to Get <br /> Premium Bonuses worth
        <span style={{ color: "#e91e63" }}>₹25,000</span>
      </h2>
      <h4>
        We are giving these tools absolutely free to all our students who enroll
        in this course.
      </h4>
      <div className="bonuses-grid">
        <div className="bonus-card">
          <img
            src="https://courses.ijaipuria.com/wp-content/uploads/2024/04/online-class.png"
            alt="Gift Icon"
          />
          <h4>Access to 12 Live Sessions</h4>

          <p className="worth-text">
            Worth
            <span style={{ textDecoration: "line-through" }}>
              {" "}
              ₹12000/-
            </span>{" "}
            FREE{" "}
          </p>
        </div>
        <div className="bonus-card">
          <img
            src="https://courses.ijaipuria.com/wp-content/uploads/2024/04/online-class.png"
            alt="Gift Icon"
          />
          <h4>The Seven-Step Successful Campaign Creation Plan</h4>

          <p className="worth-text">
            Worth{" "}
            <span style={{ textDecoration: "line-through" }}> ₹5000/-</span>{" "}
            FREE{" "}
          </p>
        </div>
        <div className="bonus-card">
          <img
            src="https://courses.ijaipuria.com/wp-content/uploads/2024/04/accounting.png"
            alt="Gift Icon"
          />
          <h4>Secret Tools for Successful Marketing Campaign</h4>

          <p className="worth-text">
            Worth{" "}
            <span style={{ textDecoration: "line-through" }}>₹2000/-</span> FREE
          </p>
        </div>

        <div className="bonus-card">
          <img
            src="https://courses.ijaipuria.com/wp-content/uploads/2024/04/videoconference.png"
            alt="Gift Icon"
          />
          <h4>Access to 12 Workshops</h4>

          <p className="worth-text">
            Worth{" "}
            <span style={{ textDecoration: "line-through" }}>₹6000/-</span> FREE
          </p>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <button className="registerBtnToday">ENROLL NOW : ₹ 199</button>
      </div>
    </div>
  );
};

export default BonusOffer;
