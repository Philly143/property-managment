import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./Home.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../AuthContext";





const Home = () => {

  const auth = useContext(AuthContext);
  const navigate = useNavigate();


  const [token, setToken] = useState(true);

  useEffect(() => {
   
      loadProperty();
    const storageToken = sessionStorage.getItem('access_token');
    
    setToken(storageToken)
    console.log("Token is here", )
  }, [])

  const [propertyName, setPropertyName] = useState([]);

  const [id, setId] = useState("");
  
  
  function loadProperty() {
    console.log("Fetching")
    axios.get("http://localhost:9090/api/v1/properties").then((res) => {
      console.log("property", res.data);
      setPropertyName(res.data.reverse());
    }).catch(err=>console.log("here is the error.",  err));
  }


  const saveProperty = (data) => {
    const copySaved = [...auth.saved]
    copySaved.push(data)
    auth.setSaved(copySaved)
   
    alert("Property saved to your saved list");
  }

  return (
    <div className="list_cart">
      <div className="container album py-5 bg-light list_card">
        <h2 className="text-center fw-lighter">Property Management Portal</h2>
        <br />
       {token && <button onClick={()=>navigate('/customer-dashboard')} className="btn btn-success">Saved Properties</button>}
        <div className="row row-cols-3 row-cols-sm-2 row-cols-md-3 g-3 ">
        
          {propertyName.map((data) => {
            return (
              //  <div class="album py-5 bg-light">

              <div className="col" >
                <div className="card shadow-sm">
                 
                  <title>{data.propertyName}</title>

                  <rect width="100%" height="100%" fill="#55595c"></rect>
                
                  <img
                    src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Sorry image not available at the moment"
                    class="img-thumbnail"   
                  />
                  

                 

                  <div className="card-body">
                    <div className="fs-4">
                      <strong>${data.amount} </strong>
                    </div>
                    <div>
                      {data.numberOfRooms} bds | {data.numberOfBathRooms} ba |{" "}
                      {data.propertyType}
                    </div>
                    <p class="card-text">
                      {data.address} {data.street}, {data.city}, {data.zip}
                    </p>

                   

                    <p className={id == data.id ?"pending": "available" } name="status">
                      {" "}
                      { id == data.id?"Pending": "Available"}{" "}
                    </p>
                    <button
                      className="send-offer btn btn-outline-success btn-sm"
                      onClick={()=>navigate('/view-property',{state:{ id:data.id}})}
                    >View</button>
                    {token ? (<button
                      className="send-offer btn btn-outline-primary btn-sm"
                      onClick={()=>setId(data.id)}
                    >

                      {id == data.id ? "Offer Sent": "Send Offer"}
                    </button>) : ('')}
                    {token ? (<button className="save-property btn btn-outline-success btn-sm" onClick={()=>saveProperty(data)}>Save Property</button>) : ('')}
                  </div>
                </div>
              </div>

            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Home;
