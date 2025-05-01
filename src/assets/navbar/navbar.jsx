import React from 'react';
import './navbar.css'; 

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="brand">MyBrand</div>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
            <div className="nav-buttons">
                <button className="login-btn">Login</button>
                <button className="signup-btn">Signup</button>
            </div>
        </nav>
    )
}