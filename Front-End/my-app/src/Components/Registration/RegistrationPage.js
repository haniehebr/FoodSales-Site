import React from "react";
import "./RegistrationPage.css";
import RegistrationForm from "./RegistrationForm";
import Header from "../LandingPage/Header";
import Footer from "../LandingPage/Footer";

const RegistrationPage = () => {
  return (
    <div>
      <Header />
      <div className="registration-page">
        <div className="registration-container">
          <h1>Create an Account</h1>
          <RegistrationForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegistrationPage;
