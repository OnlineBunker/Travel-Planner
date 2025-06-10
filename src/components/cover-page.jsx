import React from 'react';
import './cover-page.css';

const CoverPage = ({ onStart }) => {
  return (
    <div className="landing-container">
      <div className="buttons-container">
        {/* Tell App to start when clicked */}
        <button className="get-start" onClick={onStart}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CoverPage;