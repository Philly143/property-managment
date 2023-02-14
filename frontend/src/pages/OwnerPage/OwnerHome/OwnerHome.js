import "../OwnerHome/OwnerHome.css";

import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import AuthContext from "../../../AuthContext";
import Modal from "react-bootstrap/Modal";

const OwnerHome = () => {
  const navigate = useNavigate();
  const [propertyStatus, setPropertyStatus] = useState("Available");

  const [propertyName, setPropertyName] = useState([
    {
      id: 1,
      propertyName: "WhiteHouse",
      images: [
        {
          imgUrl:
            "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
      ],
      rentAmount: "1,650,00$ FORSELL",
      numberOfRooms: "8",
      numberOfBathRooms: "3",
      squareFeet: "750",
      address: "5416 ",
      street: "FisherMan",
      city: "Oakland",
      zip: "94609",
      status: { propertyStatus },
    },
  ]);

  const editHandler = () => {
    navigate("/edit-property");
  };

  const deleteHandler = () => {
    alert("Property deleted successfully");
  };

  return (
    <div className="list_cart">
      <div className="container album py-5 bg-light list_card">
        <Link to="/owner-dashboard">
          <h4>Go to Owner Dashboard</h4>
        </Link>
        <Link to="/add-property">
          <h4>Add New Property</h4>
        </Link>

        <div className="row row-cols-3 row-cols-sm-2 row-cols-md-3 g-3 ">
          {propertyName.map((data) => {
            return (
              //  <div class="album py-5 bg-light">

              <div className="col">
                <div className="card shadow-sm">
                  {/* <svg class="bd-placeholder-img card-img-top " width="100%" height="225" xmlns="http://www.w3.org/2000/svg" 
                                  role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"> */}
                  <title>{data.propertyName}</title>

                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  {/* <text class="text-center" x="50%"  y="50%" fill="#eceeef" dy=".3em">Thumbnail</text> */}

                  <img
                    src={data.images.length > 0 ? data.images[0].imgUrl : ""}
                    alt="..."
                    class="img-thumbnail"
                    onClick={() => navigate(`/property/${data.id}`)}
                  />

                  {/* </svg> */}

                  <div className="card-body">
                    <div className="fs-4">
                      <strong>${data.rentAmount} </strong>
                    </div>
                    <div>
                      {data.numberOfRooms} bds | {data.numberOfBathRooms} ba |{" "}
                      {data.squareFeet} sqft- {data.propertyType}
                    </div>
                    <p class="card-text">
                      {data.address} {data.street}, {data.city}, {data.zip}
                    </p>

                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        {/* <Link
                          to={`/property/${data.id}`}
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </Link> */}
                        {/* <Link
                          to={`/editProperty/${data.id}`}
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </Link> */}
                        {/* <Link
                          onClick={() => DeleteProperty(data.id)}
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          Delete
                        </Link> */}
                        {/* {populateEditDeleteButton(data)} 
                        {populateSubmitRequestButton(data)}
                       {populateFavouriteButton(data)}  */}
                      </div>
                      {/* <small class="text-muted"> 9 mins</small> */}
                    </div>

                    <button
                      className="edit-property btn btn-outline-primary"
                      onClick={editHandler}
                    >
                      Edit Property
                    </button>

                    {propertyStatus === "Pending" ? (
                      <button
                        className="delete-property btn btn-outline-danger"
                        onClick={deleteHandler}
                      >
                        Delete Property
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>

              //  </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OwnerHome;
