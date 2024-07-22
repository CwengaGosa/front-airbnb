import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Bordeaux.css";
import sleep from "../assets/sleep.png";
import img1 from "../assets/Bordeaux1.png";
import img2 from "../assets/Bordeaux2.png";
import img3 from "../assets/Bordeaux3.png";
import img4 from "../assets/Bordeaux4.png";
import img5 from "../assets/Bordeaux5.png";
import StarRateIcon from "@mui/icons-material/StarRate";
import HomeIcon from "@mui/icons-material/Home";
import CleanHandsIcon from "@mui/icons-material/CleanHands";
import KeyIcon from "@mui/icons-material/VpnKey";
import CancelIcon from "@mui/icons-material/Cancel";

const Bordeaux = () => {
  const accommodationType = "Bordeaux Getaway";
  const starRating = 5.0;
  const numberOfReviews = 7;

  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [nights, setNights] = useState(0);
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

  const calculateNights = (checkIn, checkOut) => {
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const diffTime = Math.abs(checkOutDate - checkInDate);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const handleDateChange = () => {
    if (checkInDate && checkOutDate) {
      const nights = calculateNights(checkInDate, checkOutDate);
      setNights(nights);
      const nightlyRate = 79;
      const weeklyDiscount = nights >= 7 ? -28 : 0;
      const cleaningFee = 62;
      const serviceFee = 83;
      const taxes = 29;
      const total =
        nightlyRate * nights +
        weeklyDiscount +
        cleaningFee +
        serviceFee +
        taxes;
      setTotal(total);
    }
  };

  useEffect(() => {
    handleDateChange();
  }, [checkInDate, checkOutDate]);

  const handleReservation = () => {
    navigate("/reserve", { state: { accommodationType, nights, total } });
  };

  return (
    <div className="container">
      <div className="locations-details">
        <div className="details-header">
          <h1>{accommodationType}</h1>
          <p>
            <StarRateIcon /> {starRating} ({numberOfReviews} reviews) -
            Bordeaux, France
          </p>
        </div>
        <div className="image-section-container">
          <div className="main-image">
            <img src={img1} alt="Main" />
          </div>
          <div className="small-images">
            <div className="small-images-row">
              <img src={img2} alt="Small 1" />
              <img src={img3} alt="Small 2" />
            </div>
            <div className="small-images-row">
              <img src={img4} alt="Small 3" />
              <img src={img5} alt="Small 4" />
            </div>
          </div>
        </div>
        <div className="listing-rentals">
          <div className="rental">
            <span className="rental-heading">
              Entire Rental Hosted By Ghazel
            </span>
          </div>
          <div className="rental">
            <HomeIcon className="rental-icon" />
            <div>
              <h3>Entire home</h3>
              <p>You'll have the apartment to yourself</p>
            </div>
          </div>
          <div className="rental">
            <CleanHandsIcon className="rental-icon" />
            <div>
              <h3>Enhanced Clean</h3>
              <p>
                This Host committed to Airbnb's 5-step enhanced cleaning
                process.
              </p>
            </div>
          </div>
          <div className="rental">
            <KeyIcon className="rental-icon" />
            <div>
              <h3>Self check-in</h3>
              <p>Check yourself in with the keypad.</p>
            </div>
          </div>
          <div className="rental">
            <CancelIcon className="rental-icon" />
            <div>
              <h3>Free cancellation before Feb 14</h3>
              <p>Get a full refund if you change your mind.</p>
            </div>
          </div>
        </div>
        <div className="listing-description">
          <p>
            Come and stay in this superb duplex T2, in the heart of the historic
            center of Bordeaux. Spacious and bright! Inside a real Bordeaux
            building in exposed stone. Enjoy the charms of the city thanks to
            this ideal location...
          </p>
          <a href="Home.js">Show more</a>
        </div>
        <div className="sleep-section">
          <h2>Where you'll sleep</h2>
          <img src={sleep} alt="Bedroom" className="sleep-image" />
          <div className="sleep-details">
            <h3>Bedroom</h3>
            <p>1 queen bed</p>
          </div>
        </div>
        <div className="amenities-section">
          <h2>What this place offers</h2>🌬️
          <div className="amenities-grid">
            <div className="amenity-item">
              <span>🌳</span> Garden view
            </div>
            <div className="amenity-item">
              <span>🛜</span> Wifi
            </div>
            <div className="amenity-item">
              <span>🧫</span> Free washer - in building
            </div>
            <div className="amenity-item">
              <span>🌬️</span> Central air conditioning
            </div>
            <div className="amenity-item">
              <span>❄️</span> Refrigerator
            </div>
            <div className="amenity-item">
              <span>🍽️</span> Kitchen
            </div>
            <div className="amenity-item">
              <span>🐈</span> Pets allowed
            </div>
            <div className="amenity-item">
              <span>🔌</span> Dryer
            </div>
            <div className="amenity-item">
              <span>📹</span> Security cameras on property
            </div>
            <div className="amenity-item">
              <span>🚴‍♂️</span> Bicycles
            </div>
          </div>
          <button className="show-all-button">Show all 37 amenities</button>
        </div>
        <div className="calendar-section">
          <h2>7 nights in New York</h2>
          <p>Feb 19, 2022 - Feb 26, 2022</p>
          <div className="calendar">
            <div className="month">
              <h3>February 2022</h3>
              <div className="weekdays">
                <span>Su</span>
                <span>Mo</span>
                <span>Tu</span>
                <span>We</span>
                <span>Th</span>
                <span>Fr</span>
                <span>Sa</span>
              </div>
              <div className="days">
                {Array.from({ length: 28 }, (_, i) => (
                  <span key={i} className={i >= 18 ? "active" : ""}>
                    {i + 1}
                  </span>
                ))}
              </div>
            </div>
            <div className="month">
              <h3>March 2022</h3>
              <div className="weekdays">
                <span>Su</span>
                <span>Mo</span>
                <span>Tu</span>
                <span>We</span>
                <span>Th</span>
                <span>Fr</span>
                <span>Sa</span>
              </div>
              <div className="days">
                {Array.from({ length: 31 }, (_, i) => (
                  <span key={i} className={i < 10 ? "active" : ""}>
                    {i + 1}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <button className="clear-dates-button">Clear dates</button>
        </div>
      </div>
      <div className="reservation-card">
        <div className="price-info">
          <h2>$75 / night</h2>
          <p>
            <StarRateIcon /> 5.0 · 7 reviews
          </p>
        </div>
        <div className="booking-info">
          <div className="date-picker">
            <label>Check-in</label>
            <input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
            <label>Check-out</label>
            <input
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
          </div>
          <div className="guests-picker">
            <label>Guests</label>
            <select>
              <option>2 guests</option>
            </select>
          </div>
        </div>
        <button className="reserve-button" onClick={handleReservation}>
          Reserve
        </button>
        <div className="price-breakdown">
          <div className="price-section">
            <p>$79 x {nights} nights: </p>
            <p> ${79 * nights}</p>
          </div>
          <div className="price-section">
            <p>Weekly discount:</p>
            <p> {nights >= 7 ? "-$28" : "$0"}</p>
          </div>
          <div className="price-section">
            <p>Cleaning fee: </p>
            <p> $62</p>
          </div>
          <div className="price-section">
            <p>Service fee:</p>
            <p> $83</p>
          </div>
          <div className="price-section">
            <p>Occupancy taxes and fees: </p>
            <p> $29</p>
          </div>

          <hr />
          <div className="total">
            <h3>Total: ${total}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bordeaux;
