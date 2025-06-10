import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1>About Travel Planner</h1>
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            Travel Planner was born out of a passion for exploration and adventure. 
            Founded in 2023, we aim to make trip planning effortless and enjoyable.
          </p>
        </div>
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            To connect travelers with the most breathtaking destinations and 
            provide seamless planning tools for unforgettable journeys.
          </p>
        </div>
        <div className="about-section">
          <h2>The Team</h2>
          <p>
            We're a group of travel enthusiasts, developers, and designers 
            dedicated to creating the best travel planning experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;