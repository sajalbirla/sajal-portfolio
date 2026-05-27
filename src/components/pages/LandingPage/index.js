import React from "react";
import AboutMe from "../../content/about-me/about-me";
import Details from "../../content/details/details";
import MainLayout from "../MainLayout/MainLayout";
import MySkills from "../../content/skills/skills";
import Experience from "../../content/experience/experience";

const LandingPage = () => {
  return (
    <MainLayout>
      <AboutMe />
      <Details />
      <MySkills />
      <Experience />
    </MainLayout>
  );
};
export default LandingPage;
