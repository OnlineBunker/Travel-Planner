import React from 'react';
import './homepage.css';
import { Link } from 'react-router-dom';

const Homepage = () => {
    const locations = [
        { name: 'Leh', image: 'https://images.wanderon.in/blogs/new/2023/12/leh-ladakh.jpg', id: "leh" },
        { name: 'Kasol', image: 'https://lazymonkadventure.com/wp-content/uploads/2021/10/Kasol-Kheerganga-Trek-3-scaled.jpg', id: "kasol" },
        { name: 'Bangalore', image: 'https://i.kinja-img.com/image/upload/c_fill,h_900,q_60,w_1600/1432fedb88c0d1cc56f4c496a80f251c.jpg', id: "banglore" },
        { name: 'Dubai', image: 'https://thumbs.dreamstime.com/b/dubai-marina-beauty-view-rooftop-showing-cityscape-boats-sea-view-51444879.jpg', id: "dubai" },
        { name: 'Jibhi', image: 'https://pix10.agoda.net/hotelImages/59431270/-1/b9d4e77846c951d00f3c0b74c90788f0.jpg?ce=0&s=702x392', id: "jibhi-tirthan" },
        { name: 'Chikmagalur', image: 'https://rivermistresorts.com/wp-content/uploads/2022/05/Chikmagalur-the-crown-jewel-of-state-Karnataka-1024x569.jpg', id: "chikmaglur" },
        { name: 'Manali', image: 'https://larisaresort.com/assets/images/blogposts/Manali_Feature_1.1.jpg', id: "manali" },
        { name: 'Dharamshala', image: 'https://www.tripsavvy.com/thmb/WL6eR0h8UKxPXNiDWhB4KCPpzSo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/dharamsala-1134331246-cfdf3711c9f543ca9b758a25c3386b6e.jpg', id: "dharamshala" }
    ];

  return (
    <>
      <div className="banner">
        <img 
          src="https://res.cloudinary.com/dyiffrkzh/image/upload/v1684667439/banbanjara/sq1sbd1lf5k8r5xerk5g.jpg" 
          alt="Travel Banner" 
          className="banner-image"
        />
        <div className="banner-text">
          One World, Infinite Experiences
        </div>
      </div>

      <div className="homepage">
        <div className="hot-locations">
          <h2>Top 8 Picks</h2>
          <div className="locations-grid">
            {locations.map((location) => (
              <Link
                key={location.name}
                to={`/location/${location.id}`}
                className="location-card-link"
              >
                <div className="location-card">
                  <img 
                    src={location.image} 
                    alt={location.name} 
                    className="location-image"
                  />
                  <h3>{location.name}</h3>
                  <p>Explore Now</p>
                </div>
              </Link>
            ))}
          </div>
          <Link to="/destinations"><button className="more-btn">View More →</button></Link>
        </div>
      </div>

      <div className="banjara-section">
        <div className="banjara-container">
          <div className="banjara-image">
            <img 
              src="https://banbanjara.com/desktop/img/home_callback_img001.webp" 
              alt="Family hiking in snowy mountains" 
            />
          </div>
          <div className="banjara-content">
            <h2>Tourism by Heart</h2>
            <p>
              Only the best of tours for our truly nomadic travellers. Discover, 
              what's extraordinary out there with this curated list of our favorite tours.
            </p>
            <Link to="/destinations"> <button className="explore-btn">Explore Now</button></Link>
          </div>
        </div>
      </div>

      <div className="why-choose-us">
        <div className="section-header">
          <h2>Why Choose Us</h2>
          <p className="intro-text">Looking for a Himalayan Trek? An awesome nearby weekend getaway? Scuba Diving, rafting or paragliding? How about an experiential stay in a coffee estate?</p>
        </div>
        
        <div className="features-container">
          <div className="feature">
            <h3>All in one platform</h3>
            <p>Discover experiences from around the world that excite you. At Travel Planner, there's something for everyone.</p>
          </div>
          
          <div className="feature">
            <h3>Never Settle for Average</h3>
            <p>Verified Suppliers ensuring that you don't have to do the tedious work of finding a quality operator for your plans.</p>
          </div>
          
          <div className="feature">
            <h3>Truly Unique Experiences</h3>
            <p>We're always on the lookout for new and unique experiences to make your trip truly memorable.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;