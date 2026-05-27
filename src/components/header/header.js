import React, { useState } from "react";
import logo from "../assets/logo.png";
import ThemeToggle from "../common/theme-toggle/ThemeToggle";

const Header = () => {
  const headeroptions = [
    {
      id: "about",
      Name: "About",
    },
    {
      id: "experience",
      Name: "Experience",
    },
    {
      id: "contact",
      Name: "Contact",
    },
  ];
  const [activeTab, setActiveTab] = useState(headeroptions[0].id);
  const activeTabHandler = (val) => {
    window.location.href = `#${val}`;
    setActiveTab(val);
  };

  return (
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
              activeTabHandler(option.id);
            }}
            className={`header-bar-options  ${activeTab === option.id && "header-bar-options-active"
              }`}
          >
            {option.Name}
          </div>
        ))}
      </div>
      <ThemeToggle />
    </div>
  );
};
export default Header;
