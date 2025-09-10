import React from "react";
import "./LandingPage.css";
import Header from "./Header";
import HeroSection from "./HeroSection";
import CategoryMenu from "./CategoryMenu";
import RecipeList from "./RecipeList";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <HeroSection />
      <CategoryMenu />
      <RecipeList />
      <Footer />
    </div>
  );
};

export default LandingPage;
