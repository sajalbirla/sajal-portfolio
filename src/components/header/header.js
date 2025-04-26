import React, { useState } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import logo from "../assets/logo.png";

const Header = () => {
  const headeroptions = [
    {
      id: 1,
      Name: "About",
    },
    {
      id: 2,
      Name: "Experience",
    },
    {
      id: 3,
      Name: "Contact",
    },
  ];
  const [activeTab, setActiveTab] = useState("About");
  const activeTabHandler = (val) => {
    window.location.href = `#${val}`;
    setActiveTab(val);
  };

  return (
    <>
      <div className="header">
        <div className="header-logo">
          <span class="header-logo-text">&lt;</span>
          <img src={logo} />
          <span class="header-logo-text">/&gt;</span>
        </div>
        <div className="header-bar">
          {headeroptions.map((option, id) => (
            <div
              key={id}
              onClick={() => {
                activeTabHandler(option.Name);
              }}
              className={`header-bar-options  ${activeTab === option.Name && "header-bar-options-active"
                }`}
            >
              {option.Name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Header;
