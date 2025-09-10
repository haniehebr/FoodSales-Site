import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo">PlatePicks</div>
        <div className="slogan">Experience the best with us</div>
      </div>
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
