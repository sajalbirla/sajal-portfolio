import React from "react";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import AboutMe from "../../content/about-me/about-me";
import Details from "../../content/details/details";
import MainLayout from "../MainLayout/MainLayout";
import MySkills from "../../content/skills/skills";
import Experience from "../../content/experience/experience";
import { enableDarkMode } from "../../common/helperFunction";

const LandingPage = () => {
  const darkMode = window.matchMedia('(prefers-color-scheme: dark)');
  return (
    <MainLayout>
      <Header />
      <AboutMe />
      <Details />
      <MySkills />
      <Experience />
      <Footer />
    </MainLayout>
  );
};
export default LandingPage;
