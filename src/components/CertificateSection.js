import React from "react";
import "./CertificateSection.css"; // Import your CSS file here

const CertificateSection = () => {
  return (
    <div className="certificate-section">
      <div className="certificate-content">
        <h1 className="title">
          <span> Get </span>
          <span className="highlight">Certified</span>
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
        <button className="cta-button">
          GET INSTANT ACCESS <span className="old-price">₹6999</span> ₹1499
        </button>
      </div>
      <div className="certificate-image">
        <img
          src="https://courses.ijaipuria.com/wp-content/uploads/2024/04/fbinsta_certificate-2.webp"
          alt="Certificate of Completion"
        />
      </div>
    </div>
  );
};

export default CertificateSection;
