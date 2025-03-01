// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes/AppRoutes"; // Import routes
import "./styles/global.css"; // Import global styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRoutes /> {/* Renders routing */}
  </React.StrictMode>
);
