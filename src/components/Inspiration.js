import React from 'react';
import sandton from '../assets/sandton.png'
import joburg from '../assets/joburg.png'
import woodmead from '../assets/woodmead.png'
import hyde from '../assets/hyde.png'
import things from '../assets/things.png'
import home from '../assets/things_home.png'
import giftcard from '../assets/giftcard.png'
import questions from '../assets/questions.png'

import './Inspiration.css';

const Inspiration = () => {
  return (
    // all cards for hotels
    <div className="inspiration-container">
      <div className="cards-section">
        <h2 className="inspo-header">Inspiration for your next trip</h2>
        <div className="cards-row">
          <div className="city-card ">
            <img src={sandton} alt="Sandton City Hotel" className="card-photo"/>
            <div className="card-info sandton">
              <h3>Sandton City Hotel</h3>
              <p>53 km away</p>
            </div>
          </div>
          <div className="city-card">
            <img src={joburg} alt="Joburg City Hotel" className="card-photo"/>
            <div className="card-info joburg">
              <h3>Joburg City Hotel</h3>
              <p>168 km away</p>
            </div>
          </div>
          <div className="city-card">
            <img src={woodmead} alt="Woodmead Hotel" className="card-photo"/>
            <div className="card-info woodmead">
              <h3>Woodmead Hotel</h3>
              <p>30 miles away</p>
            </div>
          </div>
          <div className="city-card">
            <img src={hyde} alt="Hyde Park Hotel" className="card-photo"/>
            <div className="card-info hyde">
              <h3>Hyde Park Hotel</h3>
              <p>34 km away</p>
            </div>
          </div>
        </div>
      </div>

      <div className="discover-experiences">
        <h2 className="inspo-header">Discover Airbnb Experiences</h2>
        <div className="experiences-row">
          <div className="experience-image">
            <img src={things} alt="Things to do on your trip" />
            <div className="experience-info">
              <h3>Things to do on your trip</h3>
              <button>Experiences</button>
            </div>
          </div>
          <div className="experience-image">
            <img src={home} alt="Things to do from home" />
            <div className="experience-info">
              <h3>Things to do from home</h3>
              <button>Online Experiences</button>
            </div>
          </div>
        </div>
      </div>

      <div className="gift-cards-section">
        <div className="gift-cards-content">
          <div className="left-content">
            <p>Shop Airbnb gift cards</p>
            <button>Learn more</button>
          </div>
          <img src={giftcard} alt="Airbnb gift cards" className="gift-cards-image"/>
        </div>
      </div>

      <div className="hosting-section">
        <img src={questions} alt="Questions about hosting?" />
        <div className="hosting-content">
          <h4>Questions about hosting?</h4>
          <button>Ask a Superhost</button>
        </div>
      </div>

      <div className="pre-footer">
        <h2>Inspiration for future getaways</h2>
        <div className="getaways-links">
          <a href="Home.js">Destinations for arts & culture</a>
          <a href="Home.js">Destinations for outdoor adventure</a>
          <a href="Home.js">Mountain cabins</a>
          <a href="Home.js">Beach destinations</a>
          <a href="Home.js">Popular destinations</a>
          <a href="Home.js">Unique Stays</a>
        </div>
        <div className="destinations">
          <div>
            <h3>Phoenix</h3>
            <p>Arizona</p>
          </div>
          <div>
            <h3>Hot Springs</h3>
            <p>Arkansas</p>
          </div>
          <div>
            <h3>Los Angeles</h3>
            <p>California</p>
          </div>
          <div>
            <h3>San Diego</h3>
            <p>California</p>
          </div>
          <div>
            <h3>San Francisco</h3>
            <p>California</p>
          </div>
          <div>
            <h3>Barcelona</h3>
            <p>Catalonia</p>
          </div>
          <div>
            <h3>Prague</h3>
            <p>Czechia</p>
          </div>
          <div>
            <h3>Washington</h3>
            <p>District of Columbia</p>
          </div>
          <div>
            <h3>Keswick</h3>
            <p>England</p>
          </div>
          <div>
            <h3>London</h3>
            <p>England</p>
          </div>
          <div>
            <h3>Scarborough</h3>
            <p>England</p>
          </div>
          <div>
            <h3><a href="Home.js">Show more</a></h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inspiration;
