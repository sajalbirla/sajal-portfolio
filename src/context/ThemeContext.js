import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (themeMode) => {
    const root = document.documentElement;
    
    if (themeMode === "dark") {
      root.style.setProperty("--bg-color", "#0f0f0f");
      root.style.setProperty("--text-color", "#ffffff");
      root.style.setProperty("--text-secondary", "rgba(255, 255, 255, 0.7)");
      root.style.setProperty("--text-tertiary", "rgba(255, 255, 255, 0.8)");
      root.style.setProperty("--text-muted", "rgba(255, 255, 255, 0.6)");
      root.style.setProperty("--card-bg", "rgba(255, 255, 255, 0.05)");
      root.style.setProperty("--border-color", "rgba(255, 255, 255, 0.1)");
      root.style.setProperty("--header-bg", "#0f0f0f");
      root.style.setProperty("--headeravailable", "#666666");
      root.style.setProperty("--header-hover", "#ffffff");
      root.style.setProperty("--selected-header", "#ffffff");
      root.style.setProperty("--button-color", "rgb(75, 75, 75)");
      root.style.setProperty("--button-hover", "rgb(120, 120, 120)");
      root.style.setProperty("--button-text-color", "#ffffff");
    } else {
      root.style.setProperty("--bg-color", "#ffffff");
      root.style.setProperty("--text-color", "#000000");
      root.style.setProperty("--text-secondary", "rgba(0, 0, 0, 0.7)");
      root.style.setProperty("--text-tertiary", "rgba(0, 0, 0, 0.8)");
      root.style.setProperty("--text-muted", "rgba(0, 0, 0, 0.6)");
      root.style.setProperty("--card-bg", "rgba(0, 0, 0, 0.02)");
      root.style.setProperty("--border-color", "rgba(0, 0, 0, 0.1)");
      root.style.setProperty("--header-bg", "#ffffff");
      root.style.setProperty("--headeravailable", "#c6c6c8");
      root.style.setProperty("--header-hover", "#000000");
      root.style.setProperty("--selected-header", "#000000");
      root.style.setProperty("--button-color", "rgb(2, 22, 122)");
      root.style.setProperty("--button-hover", "rgb(75, 75, 75)");
      root.style.setProperty("--button-text-color", "#ffffff");
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
