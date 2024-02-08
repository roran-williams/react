// Header.js
import React from 'react';

const Header = () => {
  return (
    <header data-bs-theme="dark">
      <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container">
          <a href="/" className="navbar-brand d-flex align-items-center">
            {/* Replace this with your logo or icon */}
            <strong>Album</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarHeader"
            aria-controls="navbarHeader"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
