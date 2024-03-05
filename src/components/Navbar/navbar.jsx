import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";


export default function Navbar() {
  return (
    <div>
        <nav>
        <ul className='nav'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/AboutUs">About Us</Link></li>
            <li><Link to="/Countries">Countries</Link></li>
            <li><Link to="/Country">Country</Link></li>
            <li><Link to="/">Flags</Link></li>
        </ul>
        </nav>
    </div>
  )
};
