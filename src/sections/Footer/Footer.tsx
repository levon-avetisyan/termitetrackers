import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="text-center bg-black pt-3 fs-6 text-light">
      <p className="text-light mb-0">
        &copy; {new Date().getFullYear()} Termite Trackers. All rights reserved.
      </p>
      <p className="mb-0">
        <Link className="text-light" to="/privacy-policy" rel="noopener noreferrer">
          Privacy Policy
        </Link>{' '}
        |
        <Link className="text-light" to="/terms-and-conditions" rel="noopener noreferrer">
          Terms of Service
        </Link>
      </p>
      <p className="mb-0">Version: 0.1.7</p>
    </footer>
  );
};

export default Footer;
// sed: can't read s|%VITE_BASE_PATH%|${VITE_BASE_PATH}|g: No such file or directory
