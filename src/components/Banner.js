import React from 'react';
import banner from '../assets/bigcard.png'
import './Banner.css';

const Banner = () => {
  return (
    <div className='banner-container'>
      <div className='banner'>
        <img
          className='banner-image'
          src={banner}
          alt='AirBnB Banner'
        />
      <div className='banner-text-container'>
          <h1 className='banner-text'>Not sure where to go? Perfect.</h1>
          <button className='banner-text-button'>I'm flexible</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;