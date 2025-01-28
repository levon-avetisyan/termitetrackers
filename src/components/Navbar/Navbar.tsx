import React, { useState } from 'react';
import './Navbar.scss';
import HamburgerMenu from './HamburgerMenu.tsx';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <div className="navbar-container">
          <Link to={'/'} className="navbar-brand">
            <img src={Logo} alt="Termite Trackers" />
          </Link>
          <h3>Termite Trackers</h3>
          <button className="btn-get-quote">
            <i className="bi bi-telephone-fill me-1"></i>
            (385) 469-2853
          </button>
          <HamburgerMenu toggleMenu={toggleMenu} isOpen={isOpen} />
        </div>
      </nav>
      <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <ul className="nav-links list-unstyled">
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">SERVICES</a>
          </li>
          <li>
            <a href="">ABOUT US</a>
          </li>
          <li>
            <a href="">LOCATIONS</a>
          </li>
          <li>
            <a href="">GET QUOTE</a>
          </li>
          <li>
            <a href="">CONTACT US</a>
          </li>
          <li>
            <a href="">CAREER</a>
          </li>
        </ul>
        <ul className="social-links">
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook">
              <i className="bi bi-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter">
              <i className="bi bi-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram">
              <i className="bi bi-instagram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
