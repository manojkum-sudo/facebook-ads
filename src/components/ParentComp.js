import React, { useState, useEffect } from "react";
import HeaderPage from "./HeaderPage";
import LearningTopics from "./LearningTopics";
import Module from "./Module";
import CertificateSection from "./CertificateSection";
import BonusOffer from "./BonusOffer";
import FAQSection from "./FAQSection";
import MentorProfile from "./MentorProfile";
import TestimonialTwo from "./TestimonialTwo";
import PromoText from "./PromoText";
import WebinarInfo from "./WebinarInfo";
import Footer from "./Footer";
import PromoBanner from "./PromoBanner";
import NotificationPopup from "./NotificationPopup";
import { peopleData } from "./constants";
import "./ParentComp.css";
import WebinarText from "./WebinarText";
import SectionTwo from "./SectionTwo";

const ParentComp = () => {
  const [showOfferSection, setShowOfferSection] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ minutes: 20, seconds: 0 });
  const [currentPersonIndex, setCurrentPersonIndex] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowOfferSection(true);
      } else {
        setShowOfferSection(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const timerInterval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds === 0) {
          if (prev.minutes === 0) {
            clearInterval(timerInterval);
            return { minutes: 0, seconds: 0 };
          }
          return { minutes: prev?.minutes - 1, seconds: 59 };
        }
        return { minutes: prev?.minutes, seconds: prev?.seconds - 1 };
      });
    }, 1000);

    // Show notification every 10 seconds
    const notificationInterval = setInterval(() => {
      setShowNotification(true);
      setCurrentPersonIndex(
        (prevIndex) => (prevIndex + 1) % peopleData?.length
      );

      // Hide the notification after 3 seconds
      setTimeout(() => setShowNotification(false), 4000);
    }, 14000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timerInterval);
      clearInterval(notificationInterval);
    };
  }, [peopleData?.length]);

  return (
    <div>
      <HeaderPage />

      <LearningTopics />
      <PromoText />
      <Module />
      <WebinarInfo />
      <WebinarText />
      <CertificateSection />
      <TestimonialTwo />
      <MentorProfile />
      <BonusOffer />
      <SectionTwo />
      <FAQSection />
      <PromoBanner />

      <Footer />

      {showOfferSection && (
        <div className="offer-section">
          <div className="offer-text">
            <h2 style={{ display: "flex", gap: "10px" }}>
              <span style={{ color: "#e74c3c" }}>Price ₹499</span>
              <span style={{ textDecoration: "line-through" }}>₹2500</span>
            </h2>
            <h3>
              Offer Expires in {" : "}
              <span style={{ color: "#ff007f" }}>
                {timeLeft.minutes}:
                {timeLeft.seconds.toString().padStart(2, "0")} mins
              </span>
            </h3>
            <p>30 Days Money Back Guarantee !</p>
          </div>
          <a href="#enroll" className="enroll-btn">
            Enroll Now
          </a>
        </div>
      )}

      {showNotification && (
        <NotificationPopup
          buyerName={peopleData[currentPersonIndex]?.buyerName}
          location={peopleData[currentPersonIndex]?.location}
          purchaseTime={peopleData[currentPersonIndex]?.purchaseTime}
        />
      )}
    </div>
  );
};

export default ParentComp;
