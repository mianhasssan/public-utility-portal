import React from 'react';
import { ArrowRight, FileText, Zap, Clock, ShieldCheck } from 'lucide-react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <ShieldCheck size={16} />
            <span>Citizen-first public services</span>
          </div>
          
          <h1 className="hero-title">
            One portal for every public utility issue in your city.
          </h1>
          
          <p className="hero-subtitle">
            File complaints, monitor outages and check queue status — all in real time.
          </p>
          
          <div className="hero-actions">
            <Link to="/complaints" className="btn btn-primary">
              File a Complaint <ArrowRight size={16} />
            </Link>
            <Link to="/outages" className="btn btn-secondary">
              View Outages
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="services-header">
          <h2>What you can do</h2>
          <p>Three simple tools designed around real citizen needs.</p>
        </div>

        <div className="services-grid">
          {/* Card 1 */}
          <div className="service-card">
            <div className="card-icon-wrapper" style={{ color: '#0d83c6' }}>
              <FileText size={28} />
            </div>
            <h3>File a Complaint</h3>
            <p>Report issues with water, electricity or gas and track resolution.</p>
            <Link to="/complaints" className="card-link">
              Open <ArrowRight size={16} />
            </Link>
          </div>

          {/* Card 2 */}
          <div className="service-card">
            <div className="card-icon-wrapper" style={{ color: '#f59e0b' }}>
              <Zap size={28} />
            </div>
            <h3>Service Outages</h3>
            <p>See current outages in your area with restoration estimates.</p>
            <Link to="/outages" className="card-link">
              Open <ArrowRight size={16} />
            </Link>
          </div>

          {/* Card 3 */}
          <div className="service-card">
            <div className="card-icon-wrapper" style={{ color: '#10b981' }}>
              <Clock size={28} />
            </div>
            <h3>Office Queues</h3>
            <p>Live token numbers and waiting time at government offices.</p>
            <Link to="/queues" className="card-link">
              Open <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;