import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeAnalytics } from "./lib/analytics";

initializeAnalytics();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);