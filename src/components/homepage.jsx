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
        { name: 'Manali', image: 'https://larisaresort.com/assets/images/blogposts/Manali_Feature_1.1.jpg', id: "Manali" },
        { name: 'Dharamshala', image: 'https://www.tripsavvy.com/thmb/WL6eR0h8UKxPXNiDWhB4KCPpzSo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/dharamsala-1134331246-cfdf3711c9f543ca9b758a25c3386b6e.jpg', id: "Dharamshala" }
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
          <button className="more-btn">View More →</button>
        </div>
      </div>
    </>
  );
};

export default Homepage;