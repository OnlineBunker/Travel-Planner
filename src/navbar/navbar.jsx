import React from 'react';
import './navbar.css'; 

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <img src="./././Image/websitelogo.png" alt="Logo" className="logo-icon" />
          <span className="logo-text">Travel Planner</span>
        </div>
  
        <div className="navbar-center">
          <a href="#">Discover</a>
          <a href="#">Trips</a>
          <a href="#">Review</a>
          <a href="#">More</a>
        </div>
  
        <div className="navbar-right">
          <button className="signin-btn">Sign in</button>
        </div>
      </nav>
    );
};
  
export default Navbar;