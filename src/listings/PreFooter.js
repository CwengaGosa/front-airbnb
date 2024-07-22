import React from "react";
import "./PreFooter.css";

const PreFooter = () => {
  return (
    <div className="explore-options-container">
      <div className="explore-options-content">
        <h2>Explore other options in France</h2>
        <div className="cities">
          <span>Paris</span>
          <span>Nice</span>
          <span>Lyon</span>
          <span>Marseille</span>
          <span>Lille</span>
          <span>Aix-en-Provence</span>
          <span>Rouen</span>
          <span>Amiens</span>
          <span>Toulouse</span>
          <span>Montpellier</span>
          <span>Dijon</span>
          <span>Grenoble</span>
        </div>
        <h2>Unique stays on Airbnb</h2>
        <div className="unique-stays">
          <span>Beach House Rentals</span>
          <span>Camper Rentals</span>
          <span>Glamping Rentals</span>
          <span>Treehouse Rentals</span>
          <span>Cabin Rentals</span>
          <span>Tiny House Rentals</span>
          <span>Lakehouse Rentals</span>
          <span>Mountain Chalet Rentals</span>
        </div>
        <div className="breadcrumb">
          <span>Airbnb</span> &gt; <span>Europe</span> &gt; <span>France</span> &gt; <span>Bordeaux</span>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
