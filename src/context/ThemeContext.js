import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() =>
    document.documentElement.dataset.theme === "light" ? "light" : "dark"
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.removeProperty("color-scheme");
    document.documentElement.style.removeProperty("background-color");
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content", theme === "dark" ? "#080808" : "#ffffff"
    );
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // Keep the toggle usable when browser storage is unavailable.
    }
  }, [theme]);

  const toggleTheme = () => setTheme(current => current === "dark" ? "light" : "dark");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
