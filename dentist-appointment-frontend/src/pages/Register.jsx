import "./Register.css";
import { useState } from "react";
import { registerUser } from "../services/authService";

const Register = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    confirmEmail: "",
    country: "",
    country_code: "",
    contact: "",
    password: "",
    is_dentist: false,
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value, // Convert checkbox to boolean
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare payload without confirmEmail
    const payload = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      country: formData.country,
      country_code: formData.country_code,
      contact: formData.contact,
      password: formData.password,
      is_dentist: formData.is_dentist,
    };

    try {
      await registerUser(payload);
      alert("Registration successful!");
      
      // Reset form after successful registration
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        confirmEmail: "",
        country: "",
        country_code: "",
        contact: "",
        password: "",
        is_dentist: false,
      });
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <h1 className="register-heading">Your Dental Journey Starts Here</h1>
        <p className="register-subtext">
          Book appointments, manage your dental visits, and stay on top of your oral health with ease.
        </p>
      </div>
      <div className="register-right">
        <h2 className="register-title">Create Account</h2>
        <div className="register-tabs">
          <button className="tab inactive">Sign In</button>
          <button className="tab active">Sign Up</button>
        </div>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="confirmEmail"
              placeholder="Confirm Email Address"
              value={formData.confirmEmail}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              required
              className="country"
            />
            <div className="phone-group">
              <input
                type="text"
                name="country_code"
                placeholder="+91"
                value={formData.country_code}
                onChange={handleChange}
                required
                className="phone-code"
              />
              <input
                type="text"
                name="contact"
                placeholder="Contact Number"
                value={formData.contact}
                onChange={handleChange}
                required
                className="contact"
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group checkbox-group">
            <label>
              <input
                type="checkbox"
                name="is_dentist"
                checked={formData.is_dentist}
                onChange={handleChange}
              />
              Register as Dentist
            </label>
            <p className="signin-link">
              Already have an account? <span>Sign In</span>
            </p>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
          <div className="divider">Or</div>
          <button type="button" className="google-btn">Sign up with Google</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
