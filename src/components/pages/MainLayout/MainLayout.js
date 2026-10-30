import React from "react";
import Header from "../../header/header";
import Footer from "../../footer/footer";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
};
export default MainLayout;
