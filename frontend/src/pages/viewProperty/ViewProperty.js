import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, Navigate, useLocation } from "react-router-dom";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./viewProperty.css";

function ViewProperty() {
  const navigate = useNavigate()

  const location = useLocation()


  const [propertyStatus, setPropertyStatus] = useState("Available");

  const [property, setProperty] = useState({});
  const [message, setMessage] = useState({
    fullName: "",
    email: "",
    contactNo: "",
    message: ""
  })

  useEffect(() => {
    let access = sessionStorage.getItem("access_token")
    console.log(access)
    if (access) {
      axios
        .get(`http://localhost:9090/api/v1/properties/${location.state.id}`)
        .then((res) => {
          console.log(res.data)
          setProperty(res.data);
        });
    } else {
      navigate('/signup')
    }


  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    //  axios.post(process.env.REACT_APP_API_URL+`/properties/${id}`, message)
    //  .then(res=>console.log(res.data))
    alert("Message sent SuccessFully")
  }

  return (
    <div className="property--card" style={{
      background: 'green'

    }}>
      {property ? (
        <div className="card shadow-sm shadow-lg  ">
          <div className="mt-5 mb-5">
            <div className="text-center fs-2 ">{property.propertyName}</div>
            <br />

            <div className="row">
              <div className="col text-center">
                {/* <img
                  src={
                    property.images.length > 0 ? property.images[0].imgUrl : ""
                  }
                  className="img-thumbnail"
                  width="400"
                  height="400"
                  alt="property image"
                ></img> */}

                <img
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Sorry image not available at the moment"
                  class="img-thumbnail"
                />
                
              </div>
              <div className="col">
                <div>
                  <strong>Rent Amount: </strong> ${property.amount}
                </div>


                <div>
                  <strong>Number Of Rooms: </strong>
                  {property.numberOfRooms}
                </div>

                <div>
                  <strong>Number Of Bathrooms: </strong>
                  {property.numberOfBathRooms}
                </div>


                <div>
                  <strong>Property Type: </strong>
                  {property.type}
                </div>


                <div>
                  <strong>Address: </strong>
                  {property.address} {property.street}, {property.city},{" "}
                  {property.zip}
                </div>
              </div>
            </div>

            <br></br>
            <div>
              <div className="text-center">
                {" "}
                <strong>Description:</strong>
              </div>
              <p className="text-center"> {property.description}</p>

              <form onSubmit={handleSubmit}>
                <div className="row ms-5 me-5">
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Full Name" onChange={(e) => setMessage({ ...message, fullName: e.target.value })} />
                  </div>
                  <div className="col">
                    <input type="email" className="form-control" placeholder="Email" onChange={(e) => setMessage({ ...message, email: e.target.value })} />
                  </div>
                  <div className="col">
                    <input type="phone" className="form-control" placeholder="Contact No:" onChange={(e) => setMessage({ ...message, contactNo: e.target.value })} />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Please Leave a Message</label>
                    <textarea className="form-control" rows="3" onChange={(e) => setMessage({ ...message, message: e.target.value })}></textarea>
                  </div>
                  <input type="submit" value="Send Message" className="btn btn-secondary" />

                </div>
              </form>

            </div>
            <div className="text-center mt-5">
              <Link
                to={"/"}
                type="button"
                class="btn btn-outline-secondary"
              >
                Back To Home
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default ViewProperty;
