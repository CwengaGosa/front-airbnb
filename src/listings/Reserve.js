import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Navdash from "../components/controls/Navdash";
import reserve from '../assets/reserve.png'
import "./Reserve.css";
import Filters from "../components/controls/Filters";

const Reserve = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { accommodationType, nights, total, imageUrl } = location.state || {};

  const handleUpdate = () => {
    navigate("/Listing/Bordeaux%20Getaway", {
      state: { accommodationType, nights, total, imageUrl },
    });
  };

  const handleDelete = () => {
  
    navigate("/locations");
  };

  const ConfirmationHanle = () => {
    alert('Reservation Confirmed!')
  };

  

  return (
    <div className="reserve-container">
      <Navdash />
      <Filters/>
      <h1>Reservation Confirmation</h1>
      <div className="reservation-details">
        <img
          src={reserve}
          alt={accommodationType}
          className="accommodation-image"
        />
        <div className="accommodation-info">
          <h2>{accommodationType}</h2>
          <p>Nights: {nights}</p>
          <p>Total Amount: ${total}</p>
        </div>
        <div className="buttons-container">
          <button className="update-button" onClick={handleUpdate}>
            Update
          </button>
          <button className="delete-button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
      <Link to={'/'}><button onClick={ConfirmationHanle} className="confirm-button">Confirm Reservation</button></Link> 
    </div>
  );
};

export default Reserve;
