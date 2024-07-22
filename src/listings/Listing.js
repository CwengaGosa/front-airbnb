import React from 'react'
import Navlist from './NavList'
import Bordeaux from './Bordeaux'
import Footer from '../components/Footer'
import Review from './Review'
import AboutHost from './AboutHost'
import PreFooter from './PreFooter'

const Listing = () => {
  return (
    <div>
      <Navlist/>
      <Bordeaux/>
      <Review/>
      <AboutHost/>
      <PreFooter/>
      <Footer/>
    
    </div>
  )
}

export default Listing