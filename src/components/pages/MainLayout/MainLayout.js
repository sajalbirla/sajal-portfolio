import React from "react";
import Header from "../../header/header";
import Footer from "../../footer/footer";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default MainLayout;
