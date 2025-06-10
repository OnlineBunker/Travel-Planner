import React from 'react';
import { useParams } from 'react-router-dom';
import './LocationPage.css';
import locations from '../api/travelData';

const LocationPage = () => {
  const { locationId } = useParams();
  const location = locations[locationId];

  if (!location) return <div className="not-found">Location not found</div>;

  return (
    <div className="location-page">
      
      <div className="blurred-bg" style={{ backgroundImage: `url(${location.images[2]})` }} />

      <div className="location-content">

        <h1 className="location-title">{location.title}</h1>
        
        {/* Image Grid */}
        <div className="image-grid">
          {location.images.length > 0 ? (
            <>
              <div className="main-image">
                <img src={location.images[0]} alt={`Main view of ${location.title}`} />
              </div>
              {location.images.slice(1, 5).map((img, index) => (
                <div key={index} className="sub-image">
                  <img src={img} alt={`View ${index + 1} of ${location.title}`} />
                </div>
              ))}
            </>
          ) : (
            <div className="no-images">No images available for this location</div>
          )}
        </div>

        {/* Overview Section */}
        <section className="overview-section">
          <h2>Overview</h2>
          <div className="content-container">
            <div className="description">
              <p>{location.description}</p>
            </div>
            <div className="price-card">
              <div className="price-info">
                <span className="price-starts-from">
                  Starts From: <span className="original-price">₹{location.price.toFixed(2)}</span>
                </span>
                <span className="discounted-price">₹{location.discountedPrice.toFixed(2)}</span>
                <span className="duration">{location.duration}</span>
              </div>
              <button className="book-now-btn">Book Now</button>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="highlights-section">
          <h2>Highlights</h2>
          <ul className="route-list">
            {location.route.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default LocationPage;