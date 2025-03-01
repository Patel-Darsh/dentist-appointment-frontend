// src/services/authService.js

import axios from "axios"; // Axios for HTTP requests

const API_URL = "http://127.0.0.1:8000/"; // Base URL for the backend

// Function to register a new user
export const registerUser = async (data) => {
  const response = await axios.post(`${API_URL}auth/register/`, data); 
  // Sends POST request to /register/ with form data
  return response.data; // Returns response data
};
