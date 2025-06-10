import React from 'react';
import './destinations.css';
import locations from '../api/travelData';
import { Link } from 'react-router-dom';

const Destinations = () => {

    const locationArray = Object.values(locations);

    return (
        <div className="destination">
            <div className="banner">
                <img 
                src="https://res.cloudinary.com/dyiffrkzh/image/upload/v1682682015/banbanjara/nyonevfnkstdstoxozkx.png" 
                alt="Travel Banner" 
                className="banner-image"
                />
                <div className="banner-text">
                Discover Places
                </div>
            </div>
            <div className="main">
                <div className="dest-grid">
                    {locationArray.map((location) => (
                        <Link
                        key={location.id}
                        to={`/location/${location.id}`}
                        className="location-card-link"
                        >
                        <div className="location-card">
                            <img 
                            src={location.images[0]} 
                            alt={location.title} 
                            className="location-image"
                            />
                            <h3>{location.title}</h3>
                            <p>Explore Now</p>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Destinations;