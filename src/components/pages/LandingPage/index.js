import React from "react";
import AboutMe from "../../content/about-me/about-me";
import Details from "../../content/details/details";
import MainLayout from "../MainLayout/MainLayout";
import MySkills from "../../content/skills/skills";
import Experience from "../../content/experience/experience";

import ProfileQuestions from "../../content/profile-questions/ProfileQuestions";

const LandingPage = () => {
  return (
    <MainLayout>
      <AboutMe />
      <Details />
      <MySkills />
      <Experience />
      <ProfileQuestions />
    </MainLayout>
  );
};
export default LandingPage;
