import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Discover Delicious Recipes</h1>
        <p>Explore our collection of tasty recipes and cooking tips.</p>
        <button className="cta-button">Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;
