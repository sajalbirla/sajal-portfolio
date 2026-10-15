import React, { useContext } from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ThemeContext } from "../../../context/ThemeContext";
import "./theme-toggle.scss";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
      {theme === "light" ? (
        <DarkModeIcon className="theme-icon" />
      ) : (
        <WbSunnyIcon className="theme-icon" />
      )}
    </button>
  );
};

export default ThemeToggle;
