import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Filters.css';

const Filters = () => {
  const navigate = useNavigate();

  return (
    <div className="filters-container">
      <button className="filter-button" onClick={() => navigate('/reserve')}>View Reservations</button>
      <button className="filter-button" onClick={() => navigate('/Viewlistings')}>View Listings</button>
      <button className="filter-button" onClick={() => navigate('/create-listing')}>Create Listing</button>
    </div>
  );
};

export default Filters;
