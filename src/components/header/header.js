import { trackEvent } from "../../lib/analytics";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import ThemeToggle from "../common/theme-toggle/ThemeToggle";

const headerOptions = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [activeTab, setActiveTab] = useState(headerOptions[0].id);

  return (
    <header className="header">
      <div className="header-logo">
        <span className="header-logo-text">&lt;</span>
        <img src={logo} alt="Logo" className="logo" />
        <span className="header-logo-text">/&gt;</span>
      </div>
      <nav className="header-bar" aria-label="Main navigation">
        {headerOptions.map((option) => (
          <a
            key={option.id}
            href={`#${option.id}`}
            onClick={() => {
              setActiveTab(option.id);
              trackEvent("navigation_click", { section: option.id });
            }}
            aria-current={activeTab === option.id ? "location" : undefined}
            className={`header-bar-options${activeTab === option.id ? " header-bar-options-active" : ""}`}
          >
            {option.label}
          </a>
        ))}
      </nav>
      <ThemeToggle />
    </header>
  );
};
export default Header;
