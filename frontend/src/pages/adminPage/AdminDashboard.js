import React, { useEffect } from "react";
import ReactEcharts from "echarts-for-react";
import axios from "axios";

const AdminDashboard = (props) => {
  const [ownerProperty, setOwnerProperty] = React.useState([])

  useEffect(()=>{
  
    axios.get("http://localhost:9090/api/v1/properties")
    .then(res=>{
      console.log(res.data);
      setOwnerProperty(res.data)})
  },[]);

  const deleteHandler = (id) => {
    axios.delete(`http://localhost:9090/api/v1/properties/${id}`)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err.message);
    });
  }

  const approveHandler = () => {
    alert("Owner allowed to add property.");
  }

  return (
    <div>
      <h1 className="text-center mt-5 mb-5">Admin Dashboard</h1>
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            
            <th>PropertyName</th>
            <th>Amount</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
    {ownerProperty.map(property=>{
      return(
        <tr>
         
          <td>{property.propertyName}</td>
          <td>{property.amount}</td>
          <td>{property.description}</td>
          <td><button className="btn btn-success me-4" onClick={approveHandler}>Approve</button></td>

        </tr>
      )
    })}
    </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
