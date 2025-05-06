import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p>If you’d like to learn more about the Travel Planner project or collaborate, feel free to reach out!</p>
        
        <div className="contact-details">
          <p><strong>Email:</strong> yash@example.com</p>
          <p><strong>Phone:</strong> +91 9876543210</p>
          <p><strong>Location:</strong> Delhi, India</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
