import React from "react";
import { Link } from "react-router-dom";
import Navdash from "./Navdash";
import Filters from "./Filters";
import "./CreateListing.css"

const CreateListing = () => {

  const CreateHandler =()=>{
    alert('listing created')
  }
  return (
    <>
      <Navdash />
      <Filters />
      <div className="create-listing-container">
        <h1>Create Listing</h1>
        <form className="create-listing-form">
          <div className="form-group">
            <label htmlFor="listing-name">Listing Name</label>
            <input type="text" id="listing-name" name="listingName" />
          </div>
          <div className="form-group-inline">
            <div className="form-group">
              <label htmlFor="rooms">Rooms</label>
              <input type="number" id="rooms" name="rooms" />
            </div>
            <div className="form-group">
              <label htmlFor="baths">Baths</label>
              <input type="number" id="baths" name="baths" />
            </div>
            <div className="form-group">
              <label htmlFor="type">Type</label>
              <select id="type" name="type">
                <option value="">Select Type</option>
                
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input type="text" id="location" name="location" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description"></textarea>
          </div>
          <div className="form-group-inline">
            <div className="form-group">
              <label htmlFor="amenities">Amenities</label>
              <input type="text" id="amenities" name="amenities" />
              <button type="button">Add</button>
            </div>
            <div className="form-group">
              <label htmlFor="images">Images</label>
              <button type="button">Upload Image</button>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="images-list">Images</label>
            <textarea id="images-list" name="imagesList"></textarea>
          </div>
          <div className="form-actions">
           <Link to={'/viewlistings'}><button onClick={CreateHandler} type="submit" className="btn-create">Create</button></Link> 
            <button type="button" className="btn-cancel">Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateListing;

