import React from 'react';
import './HamburgerMenu.scss';

interface IProps {
  toggleMenu: () => void;
  isOpen: boolean;
}
const HamburgerMenu: React.FC<IProps> = ({ toggleMenu, isOpen }) => {
  return (
    <div className="hamburger-container">
      <div
        className={`hamburger ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle Navigation Menu"
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
