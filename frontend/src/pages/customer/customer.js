import React, { useContext, useEffect, useState } from "react";
import "./customer.css";
import _ from "lodash";
import AuthContext from "../../AuthContext";
import { useNavigate } from "react-router-dom";

const Customer = (props) => {
  const [offerStatus, setOfferStatus] = useState("Pending");
  const [likedProperty, setLikedProperty] = useState(1);
  const [saved, setSaved] = useState([]);
  
  const auth = useContext(AuthContext)
    const navigate = useNavigate()
  useEffect(()=>{
    console.log(auth.saved)
    setSaved(auth.saved)
  },[])

  const offerActionHandler = () => {
    alert("Offer is cancelled by the customer.");
  };

  const removeFromSaved = () => {
    alert("Proeprty removed from saved list");
  };

  //   const checkOfferStatus = () => {
  //     if({offerStatus} === "Accepted") {
  //         setOfferStatus(<button className="btn btn-outline-primary">Download Receipt</button>);
  //     } else {
  //         setOfferStatus(offerStatus);
  //     }
  //   }

  const downloadReceipt = () => {
    alert("Receipt is downloaded");
  };

  return (
    <div className="customer-dashboard container album py-5 bg-light list_card">
      <h1 className="title">Customer Dashboard</h1> <hr/>
      <h2>My Placed Offers</h2>
      <hr />
      <table className="table table-striped-sm table-hover ">
        <thead>
          <th>Property ID</th>
          <th>Offer Status</th>
          <th>Actions</th>
        </thead>
        <tbody>
        {saved.length>0? saved.map(property=>{
          return (<tr>
            <td>{property.id}</td>
            <td>
              {offerStatus === "Accepted" ? (
                <div>
                  {" "}
                  <p>{offerStatus}</p>{" "}
                  <button
                    className="btn btn-outline-primary"
                    onClick={downloadReceipt}
                  >
                    Download Receipt
                  </button>
                </div>
              ) : (
                offerStatus
              )}
            </td>
            <td>
      
                {offerStatus === "Pending" || offerStatus === "Rejected" ? (<button
                className="btn btn-outline-danger"
                onClick={offerActionHandler}
              >Cancel Offer</button>) : ("Offer contingent. No actions allowed")}
    
            </td>
          </tr>) }):null}
        </tbody>
      </table>{" "}
      <hr />
      <h2>My Saved Properties</h2> <hr />
      <table className="table table-striped-sm table-hover">
        <thead>
          <th>Property ID</th>
          <th>Property Type</th>
          <th>Actions</th>
        </thead>
        <tbody>
           
         {saved.length>0? saved.map(property=>{
        return( <tr>
           <td>{property.id}</td>
           <td>{property.type}</td>
           <td ><button className="btn btn-success" onClick={()=>navigate('/view-property',{state:{ id: property.id}})}>View</button></td>
          </tr>)}):null}
          
         
        </tbody>
      </table> <hr/>

      <button className="btn btn-primary">Download Receipt</button>
    </div>
  );
};

export default Customer;
