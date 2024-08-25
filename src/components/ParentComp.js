import React from "react";
import HeaderPage from "./HeaderPage";
import LearningTopics from "./LearningTopics";
import Module from "./Module";
import CertificateSection from "./CertificateSection";
import BonusOffer from "./BonusOffer";
import FAQSection from "./FAQSection";
import MentorProfile from "./MentorProfile";
import TestimonialTwo from "./TestimonialTwo";
import PromoText from "./PromoText";

const ParentComp = () => {
  return (
    <div>
      <HeaderPage />
      <LearningTopics />
      <PromoText />
      <Module />
      <CertificateSection />
      <TestimonialTwo />
      <MentorProfile />

      <BonusOffer />
      <FAQSection />
    </div>
  );
};

export default ParentComp;
