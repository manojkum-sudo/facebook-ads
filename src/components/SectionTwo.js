import React from "react";
import "./SectionTwo.css";

const SectionTwo = () => {
  return (
    <>
      <div className="checkbox-form-container">
        <h2>Please Check Boxes Where Your Answer is YES!</h2>
        <div className="checkbox-grid">
          <div className="checkbox-item">
            <input type="checkbox" id="checkbox1" />
            <label htmlFor="checkbox1">
              I want to generate high-quality,{" "}
              <strong>convertible leads for my business using</strong>Facebook
              and Instagram.
            </label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" id="checkbox2" />
            <label htmlFor="checkbox2">
              I want to learn how to attract customers{" "}
              <strong>who are already interested ,</strong> in my product or
              service.
            </label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" id="checkbox3" />
            <label htmlFor="checkbox3">
              As an e-commerce store owner,{" "}
              <strong>I struggle to run profitable,</strong> Facebook and
              Instagram ads.
            </label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" id="checkbox4" />
            <label htmlFor="checkbox4">
              As a startup founder, I want to leverage{" "}
              <strong>Facebook and Instagram, </strong> the two largest social
              media platforms, to advertise my startup.
            </label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" id="checkbox5" />
            <label htmlFor="checkbox5">
              I work in B2B and believe that{" "}
              <strong>Facebook and Instagram </strong> are more effective for
              targeting younger audiences rather than decision-makers.
            </label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" id="checkbox6" />
            <label htmlFor="checkbox6">
              I am boosting posts on <strong>Facebook and Instagram </strong>but
              am unsure how to run campaigns focused on sales or lead
              generation.
            </label>
          </div>
        </div>
      </div>
      <div className="textBox">
        <h2>If you marked any of the boxes listed above, then the...</h2>

        <h1 style={{ color: "#ff0099 " }}>
          This FACEBOOK ADS COURSE is designed specifically for you!
        </h1>
      </div>
      <div style={{ textAlign: "center" }}>
        <button className="sectionBtn">ENROLL NOW : ₹499</button>
      </div>
    </>
  );
};

export default SectionTwo;
