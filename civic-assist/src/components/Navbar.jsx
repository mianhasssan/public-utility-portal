import React from 'react';
import { NavLink } from 'react-router-dom';
import { Shield } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <div className="logo-container">
            <div className="drop-shape">
              <Shield size={16} color="white" />
            </div>
          </div>
          <div className="brand-text">
            <h1 className="brand-title">Public Utility Helper</h1>
            <span className="brand-subtitle">Citizen Service Portal</span>
          </div>
        </div>
        
        <div className="navbar-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            Home
          </NavLink>
          <NavLink to="/complaints" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            Complaints
          </NavLink>
          <NavLink to="/outages" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            Outages
          </NavLink>
          <NavLink to="/queues" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
            Queues
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
