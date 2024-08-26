import React from "react";
import "./CertificateSection.css"; // Import your CSS file here

const CertificateSection = () => {
  return (
    <div className="certificate-section">
      <div className="certificate-content">
        <h1 className="title">
          <span className="highlight"> Get Certified</span>
        </h1>
        <p className="description">
          Complete all modules successfully and receive an Advanced certificate.
          This certificate is:
        </p>
        <ul className="benefits">
          <li>✅ Official & Verified by iJaipuria</li>
          <li>✅ Shareable on LinkedIn and with employers</li>
          <li>✅ Useful to enhance professional credibility</li>
        </ul>
        <button className="ctay-button">
          GET INSTANT ACCESS <span className="old-price">₹6999</span> ₹1499
        </button>
      </div>
      <div className="certificate-image">
        <img src="/images/certificate.png" alt="Certificate of Completion" />
      </div>
    </div>
  );
};

export default CertificateSection;
