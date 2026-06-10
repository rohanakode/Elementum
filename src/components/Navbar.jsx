import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const handleNavLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#about" className="navbar-logo">
          Elementum
        </a>

        <div className="navbar-right-side">
          <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <li className="nav-item">
              <a
                href="#about"
                className="nav-link"
                onClick={handleNavLinkClick}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                className="nav-link"
                onClick={handleNavLinkClick}
              >
                Studio
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#offers"
                className="nav-link"
                onClick={handleNavLinkClick}
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#footer"
                className="nav-link"
                onClick={handleNavLinkClick}
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#testimonials"
                className="nav-link"
                onClick={handleNavLinkClick}
              >
                FAQ's
              </a>
            </li>
          </ul>

          <div className="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
