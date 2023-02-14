import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddProperty.css";
import AuthContext from "../../AuthContext";

const AddProperty = () => {
  const auth = useContext(AuthContext);



  const navigate = useNavigate();
  const [data, setData] = useState({street: "",
  zip: "",
  city: "",
  type: "",
  propertyName: "",
  description: "",
  numberOfRooms: 6,
  numberOfBathRooms: 4,
  amount: 0.00,
  status: true,
  postedDate: new Date
})
  const hasRoleOwner = () => {
    try {
      if (auth.user.realm_access.roles.includes("Owner")) {
        return true;
      }
    } catch (error) {
      return false;
    }
  };

  const hasRoleAdmin = () => {
    try {
      if (auth.user.realm_access.roles.includes("Admin")) {
        return true;
      }
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    // if (!hasRoleOwner() && !hasRoleAdmin()) {
    //   navigate("/login");
    // }
  }, []);

  function Submit(e) {
    e.preventDefault();
  

    axios.post(
        "http://localhost:9090/api/v1/properties",
        data
      )

      .then((res) => {
        alert("Property Added Successfully");
      
      })
      .catch(err=>console.log("Error is Here   ",err))
  }

  return (
    <div class="container mt-5 mb-5">
      <div className="card ms-auto me-auto p-3 shadow-lg custom--card">
        <form className="row g-3">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Property Name
            </label>
            <input
              
              onChange={(e) => setData({...data, propertyName:e.target.value})}
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
         
          </div>

          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Description
            </label>
            <textarea
              class="form-control"
             
              onChange={(e) => setData({...data, description:e.target.value})}
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          

          <div class="col-md-4">
            <label for="inputStreet" class="form-label">
              Street
            </label>
            <input
             
              onChange={(e) => setData({...data, street:e.target.value})}
              type="text"
              class="form-control"
              id="inputCity"
            />
          </div>

          <div class="col-md-4">
            <label for="inputCity" class="form-label">
              City
            </label>
            <input
              
              onChange={(e) => setData({...data, city:e.target.value})}
              type="text"
              class="form-control"
              id="inputCity"
            />
          </div>

          <div class="col-md-4">
            <label for="inputZip" class="form-label">
              ZipCode
            </label>
            <input
              
              onChange={(e) => setData({...data, zip:e.target.value})}
              type="text"
              class="form-control"
              id="inputZip"
            />
          </div>

     

          <div class="col-md-3">
            <label for="inputZip" class="form-label">
              Number Of Rooms
            </label>
            <input
             
              onChange={(e) => setData({...data, numberOfRooms:JSON.parse(e.target.value)})}
              type="number"
              class="form-control"
              id="inputZip"
            />
          </div>

          <div class="col-md-4">
            <label for="inputZip" class="form-label">
              Number Of Bathrooms
            </label>
            <input
             
              onChange={(e) => setData({...data, numberOfBathRooms:JSON.parse(e.target.value)})}
              type="number"
              class="form-control"
              id="inputZip"
            />
          </div>

          <div class="col-md-3">
            <label for="rentAmount" class="form-label">
              Rent Amount
            </label>
            <input
              
              onChange={(e) => setData({...data, amount:JSON.parse(e.target.value)})}
              type="number"
              class="form-control"
              id="rentAmount"
            />
          </div>
         
          <div class="col-md-4">
            <label for="homeType" class="form-label">
              Home Type
            </label>
            <select
             
              onChange={(e) => setData({...data, type:e.target.value})}
              id="homeType"
              class="form-select"
            >
              <option selected>Choose...</option>
              <option>House</option>
              <option>Appartment</option>
              <option>Trailer</option>
              <option>Studio</option>
            </select>
          </div>

        
          <div class="mb-3">
            <label for="formFile" class="form-label">
              Insert pictures
            </label>
            <select
              onChange={(e) => setData({...data, image:e.target.value})}
              id="homeType"
              class="form-select"
            >
              <option selected>Choose...</option>
              <option>"https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=600"</option>
              <option>Trailer</option>
            </select>
          </div>
          <button onClick={Submit} type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
