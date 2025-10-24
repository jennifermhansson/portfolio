import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx"; // Startsidan
import About from "./components/About.jsx"; // Om-sidan
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} /> {/* Startsida */}
        <Route path="/about" element={<About />} /> {/* Om-sida */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
