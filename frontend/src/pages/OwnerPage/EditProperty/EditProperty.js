import React, { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../EditProperty/EditProperty.css";

const EditProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [message, setMessage] = useState({
    fullName: "",
    email: "",
    contactNo: "",
    message: "",
  });

  useEffect(() => {
    let access = sessionStorage.getItem("access_token");
    console.log(access);
    if (access) {
      // axios
      // .get(process.env.REACT_APP_API_URL + `/properties/${id}`)
      // .then((res) => {
      //   setProperty(res.data);
      // });
    } else {
      navigate("/signup");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    //  axios.post(process.env.REACT_APP_API_URL+`/properties/${id}`, message)
    //  .then(res=>console.log(res.data))
    alert("Property Edited Successfully");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row ms-5 me-5">
          <div className="row">
            <input
              type="text"
              className="form-control"
              placeholder="Property ID"
              onChange={(e) =>
                setMessage({ ...message, fullName: e.target.value })
              }
            />
          </div>
          <div className="row">
            <input
              type="email"
              className="form-control"
              placeholder="Rent Amount"
              onChange={(e) =>
                setMessage({ ...message, email: e.target.value })
              }
            />
          </div>
          <div className="row">
            <input
              type="phone"
              className="form-control"
              placeholder="Number of Rooms"
              onChange={(e) =>
                setMessage({ ...message, contactNo: e.target.value })
              }
            />
          </div>
          <div className="row">
            <input
              type="number"
              className="form-control"
              placeholder="Number of Bathrooms"
              onChange={(e) =>
                setMessage({ ...message, contactNo: e.target.value })
              }
            />
          </div>
          <div className="row">
            <input
              type="text"
              className="form-control"
              placeholder="Square Ft"
              onChange={(e) =>
                setMessage({ ...message, contactNo: e.target.value })
              }
            />
          </div>
          <div className="row">
            <input
              type="text"
              className="form-control"
              placeholder="Address"
              onChange={(e) =>
                setMessage({ ...message, contactNo: e.target.value })
              }
            />
          </div>
          <div className="row">
            <input
              type="text"
              className="form-control"
              placeholder="Street"
              onChange={(e) =>
                setMessage({ ...message, contactNo: e.target.value })
              }
            />
          </div>
          <div className="row">
            <input
              type="text"
              className="form-control"
              placeholder="City"
              onChange={(e) =>
                setMessage({ ...message, contactNo: e.target.value })
              }
            />
          </div>
          <div className="row">
            <input
              type="text"
              className="form-control"
              placeholder="Zip"
              onChange={(e) =>
                setMessage({ ...message, contactNo: e.target.value })
              }
            />
          </div>
          <div className="row">
            <input
              type="text"
              className="form-control"
              placeholder="Home Type"
              onChange={(e) =>
                setMessage({ ...message, contactNo: e.target.value })
              }
            />
          </div>
          <div className="row">
            <input
              type="text"
              className="form-control"
              placeholder="Property Type"
              onChange={(e) =>
                setMessage({ ...message, contactNo: e.target.value })
              }
            />
          </div>

          <div className="row">
            <input
              type="text-area"
              className="form-control"
              placeholder="Description"
              onChange={(e) =>
                setMessage({ ...message, contactNo: e.target.value })
              }
            />
          </div>
          
          
          <input
            type="submit"
            value="Edit"
            className="btn btn-secondary"
          />
        </div>
      </form>
    </div>
  );
};

export default EditProperty;
