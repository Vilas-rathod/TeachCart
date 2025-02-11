import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have a separate CSS file for styling


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">YourLogo</Link>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search products..." aria-label="Search" />
          <button type="submit">Search</button>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/Cart" className="cart-icon">Cart</Link></li>
        </ul>
        <div className="user-options">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
