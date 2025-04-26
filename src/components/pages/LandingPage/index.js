import React from "react";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import AboutMe from "../../content/about-me/about-me";
import Details from "../../content/details/details";
import MainLayout from "../MainLayout/MainLayout";
import MySkills from "../../content/skills/skills";
import Experience from "../../content/experience/experience";

const LandingPage = () => {
  return (
    <>
      <MainLayout>
        <Header />
        <AboutMe />
        <Details />
        <MySkills />
        <Experience />
        <Footer />
      </MainLayout>
    </>
  );
};
export default LandingPage;
