// src/RegistrationForm.js
import React, { useState } from "react";
import axios from "axios";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/register/",
        {
          username,
          phonenumber,
          password,
          confirm_password: confirmPassword, // ensure this is being sent
        }
      );
      console.log(response.data);
      alert("Registration successful!");
    } catch (error) {
      console.error(error);
      alert("Registration failed.");
    }
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phonenumber">Phonenumber</label>
        <input
          type="phonenumber"
          id="phonenumber"
          value={phonenumber}
          onChange={(e) => setPhonenumber(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="registration-button">
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
