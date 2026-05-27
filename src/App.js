import React from "react";
import "./styles/main.scss";
import LandingPage from "./components/pages/LandingPage";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
