// src/routes/AppRoutes.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Router components
import Register from "../pages/Register"; // Import Register page

const AppRoutes = () => (
  <Router>
    <Routes>
      {/* Route for Register page */}
      <Route path="/register" element={<Register />} />
      {/* Future routes like Login or Dashboard will go here */}
    </Routes>
  </Router>
);

export default AppRoutes; // Exports routing setup
