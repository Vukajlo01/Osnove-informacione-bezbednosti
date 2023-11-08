import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Working mode - demonstration purposes only (keep flag WM_SECURE)
// Available values WM_SECURE, WM_UNRESTRICTED
global.WM = "WM_SECURE";


// global.APIEndpoint = "https://oib.vercel.app/"

// Global variable to access base API endpoint
global.APIEndpoint = "http://localhost:5000";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);