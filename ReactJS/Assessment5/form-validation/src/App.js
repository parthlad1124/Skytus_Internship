import React, { useState, useEffect } from "react";
import "./App.css";

function App() {

  // Load form data from localStorage
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("formData");
    return savedData
      ? JSON.parse(savedData)
      : { name: "", email: "", password: "" };
  });

  // Dark Mode State
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [errors, setErrors] = useState({});

  // Save form data
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  // Save theme
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Real-time validation
  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedForm = {
      ...formData,
      [name]: value
    };

    setFormData(updatedForm);

    let newErrors = { ...errors };

    if (!value.trim()) {
      newErrors[name] =
        `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    } else {
      delete newErrors[name];

      if (name === "email") {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(value)) {
          newErrors.email = "Invalid email format";
        }
      }

      if (name === "password") {
        if (value.length < 6) {
          newErrors.password =
            "Password must be at least 6 characters";
        } else {
          const strongPassword =
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/;

          if (!strongPassword.test(value)) {
            newErrors.password =
              "Password must contain uppercase, lowercase and number";
          }
        }
      }
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(errors).length === 0 &&
        formData.name &&
        formData.email &&
        formData.password) {

      alert("Form submitted successfully!");

      localStorage.removeItem("formData");

      setFormData({
        name: "",
        email: "",
        password: ""
      });
    }
  };

  return (
  <div className={darkMode ? "dark app-wrapper" : "app-wrapper"}>

    <div className="top-bar">
      <button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>

    <div className="container">
      <h2>React Form Validation</h2>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "error-input" : ""}
            placeholder="Enter your name"
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error-input" : ""}
            placeholder="Enter your email"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? "error-input" : ""}
            placeholder="Enter your password"
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <button type="submit">Submit</button>

      </form>
    </div>

  </div>
);

}

export default App;
