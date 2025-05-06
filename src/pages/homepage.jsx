import React from 'react';
import './homepage.css'; 

export default function HomePage() {
    return (
        <div className="homepage">
            <h1 className='heading'>Welcome To Travel Planner</h1>
            <h3 className='description'>Travel Planner is a simple and intuitive web app designed to help users organize and visualize their travel plans with ease. Whether you're planning a weekend getaway or a multi-city adventure, 
                Travel Planner allows you to manage destinations, create itineraries, and keep all your travel details in one convenient place. 
                Perfect for travelers who like to stay organized and make the most of every trip!</h3>
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