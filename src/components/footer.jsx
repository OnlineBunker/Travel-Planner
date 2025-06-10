import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img 
          src="https://media.istockphoto.com/id/1056120516/vector/travel-icons-with-airplane-fly-around-the-earth.jpg?s=612x612&w=0&k=20&c=KhopDx1Z56Wv11p_XUXG0yO6JBSdRHCOxjFZqqurG40=" 
          alt="Travel Logo" 
          className="logo-img"
        />
      </div>
      
      <div className="footer-title">
        <h2>TRAVEL PLANNER</h2>
      </div>

      <div className="footer-links">
        <ul>
          <li>
            <a href="https://www.instagram.com/yash_d_dhankhar/" target='_blank' className="link-anchor">
              <img className="social-icon" src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
              <span className="underline"></span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/yash-d-dhankhar/" target='_blank' className="link-anchor">
              <img className="social-icon" src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="LinkedIn" />
              <span className="underline"></span>
            </a>
          </li>
          <li>
            <a href="https://github.com/OnlineBunker?tab=repositories" target='_blank' className="link-anchor">
              <img className="social-icon" src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" />
              <span className="underline"></span>
            </a>
          </li>
          <li>
            <a href="mailto:yash.dhankhar06@gmail.com" target='_blank' className="link-anchor">
              <img className="social-icon" src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" />
              <span className="underline"></span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;