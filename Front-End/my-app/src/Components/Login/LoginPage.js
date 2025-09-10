import React from "react";
import "./LoginPage.css";
import LoginForm from "./LoginForm";
import Header from "../LandingPage/Header";
import Footer from "../LandingPage/Footer";

const LoginPage = () => {
  return (
    <div>
      <Header />
      <div className="login-page">
        <div className="login-container">
          <h1>Welcome Back!</h1>
          <LoginForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
