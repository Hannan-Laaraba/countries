import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/AboutUs">About Us</Link></li>
            <li><Link to="/Countries">Countries</Link></li>
            <li><Link to="/">Gallery</Link></li>
            <li><Link to="/">Contact</Link></li>
        </ul>
        </nav>
    </div>
  )
};
