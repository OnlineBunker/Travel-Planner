import React from 'react';
import './homepage.css'; 

export default function HomePage() {
    return (
        <div className="homepage">
            <h1 className='heading'>Welcome To Travel Planner</h1>
            <div className="dest-input-div">
                <h2>Enter your Travel Destination</h2>
                <div className="extra-div">
                    <input type="text" placeholder="Enter your destination" className='dest-input'/>
                    <button className='dest-search-btn'>Search</button>
                </div>
            </div>
        </div>
    )
}