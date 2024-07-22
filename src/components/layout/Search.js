import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  const [filters, setFilters] = useState({
    location: "",
    checkInDate: "",
    checkOutDate: "",
    guests: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const LocationSelector = () => {
    return <Navigate to={"/locations"} />;
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <div className="search-section">
          <label>Hotels</label>
          <div
            name="location"
            value={filters.location}
            className="sub-dropdown"
          >
            <span className="sub-heading">Select Hotels</span>
            <div className="search-content">
              <Link to={"/locations"}>
                <span onClick={LocationSelector}>All Hotels</span>
              </Link>
              <Link to={"/locations"}>
                <span>Sandton City Hotel</span>
              </Link>
              <Link to={"/locations"}>
                <span>Joburg City Hotel</span>
              </Link>
              <Link to={"/locations"}>
                <span>Woodmead Hotel</span>
              </Link>
              <Link to={"/locations"}>
                <span>Hyde Park Hotel</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="search-section">
          <label>Check in</label>
          <input
            type="date"
            name="checkInDate"
            value={filters.checkInDate}
            onChange={handleChange}
          />
        </div>
        <div className="search-section">
          <label>Check out</label>
          <input
            type="date"
            name="checkOutDate"
            value={filters.checkOutDate}
            onChange={handleChange}
          />
        </div>
        <div className="search-section">
          <label>Guests</label>
          <select name="guests" value={filters.guests} onChange={handleChange}>
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
            <option value="5">5 Guests</option>
            <option value="6">6 Guests</option>
          </select>
        </div>
        <div className="search_button">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default Search;
