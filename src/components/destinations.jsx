import React, { useState } from 'react';
import './destinations.css';
import locations from '../api/travelData';
import { Link } from 'react-router-dom';

const Destinations = () => {
    const [sortOrder, setSortOrder] = useState('Default');

    const locationArray = Object.values(locations);

    const sortedLocations = [...locationArray].sort((a, b) => {
        if (sortOrder === 'lowTohigh') {
            return a.price - b.price;
        } else if (sortOrder === 'highTolow') {
            return b.price - a.price;
        } else {
            return 0;
        }
    })

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
            <div className="sort-section">
                <label>Sort By Price: </label>
                <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                    <option value="default">Default</option>
                    <option value="lowTohigh">Low to High</option>
                    <option value="highTolow">High to Low</option>
                </select>
            </div>
            <div className="main">
                <div className="dest-grid">
                    {sortedLocations.map((location) => (
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
