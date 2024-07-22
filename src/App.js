import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from "axios";
import LocalPage from './components/LocalPage.js';
import Homepage from './components/Homepage.js';
import Login from './components/layout/Login.js';
import PropertyList from './Pages/PropertyList.js';
import Listing from './listings/Listing.js'; 
import Reserve from './listings/Reserve.js';
import CreateListing from './components/controls/CreateListing.js';
import Viewlistings from './components/controls/Viewlistings.js';


axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/locations" element={<LocalPage/>}/>
          <Route path="/properties" element={<PropertyList/>} />
          <Route path="/listing/:name" element={<Listing/>} /> 
          <Route path="/reserve" element={<Reserve/>} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/viewlistings" element={<Viewlistings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
