import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">Mehak Fatima</Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="navbar-social">
                <a href="https://www.linkedin.com/in/mehak-fatima-08a568275/" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/MehakRauf" rel="noopener noreferrer">GitHub</a>
            </div>
        </nav>
    );
}

export default Navbar;
