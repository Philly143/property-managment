import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddProperty from "../../addProperty/AddProperty";
import "../OwnerDashboard/OwnerPage.css";
import axios from "axios";

// OWNER DASHBOARD

function OwnerPage() {

  const navigate = useNavigate();

  const [token, setToken] = useState(true);

  useEffect(() => {

    loadProperty();
    const storageToken = sessionStorage.getItem('access_token');

    setToken(storageToken)
    console.log("Token is here",)
  }, [])

  const [propertyName, setPropertyName] = useState([]);

  const [propertyStatus, setPropertyStaus] = useState("Available");

  const [id, setId] = useState("");

  function loadProperty() {
    console.log("Fetching")
    axios.get("http://localhost:9090/api/v1/properties").then((res) => {
      console.log("property", res.data);
      setPropertyName(res.data.reverse());
    }).catch(err => console.log("here is the error.", err));
  }

  const [messages, setMessages] = useState([
    {
      name: "Dani",
      email: "dani@gmail.com",
      contactNo: "510-456-1234",
      message: "I am interested in the house",
      propertyId: 14,
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [SelectedUser, setSelectedUser] = useState({});
  const [className, setClassName] = useState("available");

  const [offers, setOffers] = useState([
    {
      name: "Dani",
      email: "dani@gmail.com",
      contactNo: "510-456-1234",
      propertyId: 14,
    }
  ]);

  const [contingent, setContingent] = useState([
    {
      name: "Dani",
      email: "dani@gmail.com",
      contactNo: "510-456-1234",
      propertyId: 14,
    }
  ]);

  useEffect(() => {
    // axios.get()
    // .then(res=>{
    //     setMessages()
    // })
  }, []);

  const contact = (message) => {
    setShowForm(!showForm);
    setSelectedUser(message);
  };

  
  const acceptOffer = () => {
    // alert("Offer accepted");
    setPropertyStaus("Contingent");
    setClassName("contingent");


  };

  const rejectOffer = () => {
    // alert("Offer rejected");
    setPropertyStaus("Available");
    setClassName("available");
  };

  const cancelContingent = () => {
    setPropertyStaus("Available");
    setClassName("available");
  };

  const pendingHandler = () => {
    setPropertyStaus("Pending");
    setClassName("pending");
  }
  return (






    <div>

      <button className="btn btn-success" onClick={() => setShowForm(!showForm)}>Add Property</button>
      {showForm && <AddProperty />}
      <div className="list_cart">
        <div className="container album py-5 bg-light list_card">
          <h2 className="text-center fw-lighter">Property Management Portal</h2>
          <br />

          <div className="row row-cols-3 row-cols-sm-2 row-cols-md-3 g-3 " onClick={pendingHandler}>

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



                      <p className={className} name="status">
                        {" "}
                        {propertyStatus}
                      </p>
                      <button
                        className="send-offer btn btn-outline-success btn-sm"
                        onClick={() => navigate('/view-property', { state: { id: data.id } })}
                      >View</button>

                    </div>
                  </div>
                </div>

              );
            })}
          </div>
        </div>
      </div>

      <h1 style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '5vh',
        fontStyle: 'italic',
        color: 'cornflowerblue'
      }}> Owner Dashboard</h1>  <hr />






      <h2 style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

      }}  > <strong>Offers Received</strong> </h2>


      <hr />
      <table class="table table-striped-sm table-hover ">
        <thead>
          <th>Full Name</th>
          <th>Email</th>
          <th>Phone No</th>
          <th>Property Id</th>
        </thead>
        <tbody>
          {offers.map((offer, index) => {
            return (
              <tr key={index}>
                <td>{offer.name}</td>
                <td>{offer.email}</td>
                <td>{offer.contactNo}</td>
                <td>{offer.propertyId}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={
                      acceptOffer

                    }
                  >
                    Accept Offer
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={rejectOffer}
                  >
                    Reject Offer
                  </button>
                </td>
                <td>
                <button
                    className="btn btn-danger"
                    onClick={() => cancelContingent(contingent)}
                  >
                    Cancel Contingent
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <hr></hr>

      

      <h2 style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

      }} > <strong>General Inquiries</strong>  </h2>
      <hr />
      <table class="table table-striped-sm table-hover ">
        <thead>
          <th>Full Name</th>
          <th>Email</th>
          <th>Phone No.</th>
          <th>Message</th>
          <th>Property Id</th>
        </thead>
        <tbody>
          {messages.map((messages, index) => {
            return (
              <tr key={index}>
                <td>{messages.name}</td>
                <td>{messages.email}</td>
                <td>{messages.contactNo}</td>
                <td>{messages.message}</td>
                <td>{messages.propertyId}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => contact(messages)}
                  >
                    Reply
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <hr></hr>




    </div>
  );
}

export default OwnerPage;
