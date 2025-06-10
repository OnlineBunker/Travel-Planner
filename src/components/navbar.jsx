import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img 
          src="https://media.istockphoto.com/id/1056120516/vector/travel-icons-with-airplane-fly-around-the-earth.jpg?s=612x612&w=0&k=20&c=KhopDx1Z56Wv11p_XUXG0yO6JBSdRHCOxjFZqqurG40=" 
          alt="Travel Logo" 
          className="logo-img"
        />
      </div>
      
      <div className="navbar-links">
        <Link to="/" className="nav-link">HOME</Link>
        <Link to="/about" className="nav-link">ABOUT</Link>
        <div 
          className="dropdown-container"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <Link className='nav-link' to="/destinations"> <span className="nav-link">DESTINATIONS  </span></Link>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/location/mcleodganj-triund" className="dropdown-item">Mcleodganj Triund</Link>
              <Link to="/location/kasol-kheerganga" className="dropdown-item">Kasol Kheerganga</Link>
              <Link to="/location/jibhi-tirthan" className="dropdown-item">Jibhi Tirthan</Link>
              <Link to="/location/manali-solang" className="dropdown-item">Manali to Solang Valley</Link>
              <Link to="/location/manali-lahaul" className="dropdown-item">Manali and Lahaul Trip</Link>
              <Link to="/location/chopta-chandrashila" className="dropdown-item">Chopta Chandrashila trek</Link>
              <Link to="/location/mcleodganj-kareri" className="dropdown-item">Mcleodganj Kareri Trek</Link>
              <Link to="/location/manali-solang-kasol" className="dropdown-item">Manali, Solang and Kasol Tour</Link>
            </div>
          )}
        </div>
      </div>
      
      <div className="navbar-actions">
        <Link to="#" className="nav-link contact-link">+91 9876543210</Link>
      </div>
    </nav>
  );
};

export default Navbar;