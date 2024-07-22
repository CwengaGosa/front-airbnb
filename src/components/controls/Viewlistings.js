import React from "react";
import Navdash from "./Navdash";
import Filters from "./Filters";
import "./Viewlistings.css"; 

const Viewlistings = () => {
  return (
    <>
      <Navdash />
      <Filters />
      <div className="viewlist-container">
        <h1>My Listings</h1>
        <table className="reservations-table">
          <thead>
            <tr>
              <th>Booked by</th>
              <th>Property</th>
              <th>Checkin</th>
              <th>Checkout</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cwenga Gosa</td>
              <td>Property A</td>
              <td>15/07/2024</td>
              <td>19/07/2024</td>
              <td><button className="btn-delete">Delete</button></td>
            </tr>
            <tr>
              <td>Simamkele Gosa</td>
              <td>Property B</td>
              <td>20/01/2024</td>
              <td>28/01/2024</td>
              <td><button className="btn-delete">Delete</button></td>
            </tr>
            <tr>
              <td>Mbasa Gosa</td>
              <td>Property C</td>
              <td>2/12/2024</td>
              <td>16/12/2024</td>
              <td><button className="btn-delete">Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Viewlistings;
