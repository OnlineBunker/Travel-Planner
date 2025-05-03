import React from 'react';
import './navbar.css'; 

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <span className="logo-text">Travel Planner</span>
        </div>
  
        <div className="navbar-center">
          <a href="#">Discover</a>
          <a href="#">Trips</a>
          <a href="#">Review</a>
          <a href="#">More</a>
        </div>
  
        <div className="navbar-right">
          <span className="currency">USD</span>
          <button className="signin-btn">Sign in</button>
        </div>
      </nav>
    );
};
  
export default Navbar;