import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src="./img2.png" alt="Logo" className="navbar-logo" />
                <span>Safe Space</span>
            </div>
            <div className="navbar-links">
                {/* Use Link for navigation */}
                <Link to="/">Home</Link>
                <Link to="/mood-tracker">Mood Tracker</Link>
                <Link to="/task-creation">Task Creation</Link>
                <Link to="/mental-well-being">Mental Well Being</Link>
                <Link to="/emergency">Emergency</Link>
                <Link to="/recommendations">Recommendations</Link>
                <Link to="/logout">Logout</Link>
            </div>
        </nav>
    );
};

export default Navbar;
