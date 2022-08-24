import React from "react";

import StatsSection from "../components/organisms/Stats/StatsSection";

import Hero from "../components/organisms/Hero";
import Title from "../components/atoms/Title";
import StepSection from "../components/organisms/StepSection";
import ServiceSection from "../components/organisms/ServiceSection";
import ProjectCardsSection from "../components/organisms/ProjectCardsSection";
import ButtonAddReview from "../components/atoms/Reviews/ButtonAddReview";





import FooterSection from "../components/organisms/FooterSection";

const HomePage = () => {
  return (
    <div>
      <Hero />

      <Title text="Services" />

      <ServiceSection />

      <Title text="Steps" />

      <StepSection />

      <Title text="Example Projects" />

      <ProjectCardsSection />

      <StatsSection />

      <FooterSection />
    </div>
  );
};

export default HomePage;
