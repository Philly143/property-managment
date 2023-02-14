import "./App.css";
import NavBarComponent from "./component/navbar/NavBarComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import FooterComponent from "./component/footer/FooterComponent";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import ViewProperty from "./pages/viewProperty/ViewProperty";
import axios from "axios";
import AuthContext from "./AuthContext";
import { React, useState } from "react";
import Favorite from "./pages/favorite/Favorite";
import AdminDashboard from "./pages/adminPage/AdminDashboard";
import OwnerPage from "./pages/OwnerPage/OwnerDashboard/OwnerPage";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import AddProperty from "./pages/addProperty/AddProperty";
import OwnerHome from "./pages/OwnerPage/OwnerHome/OwnerHome";
import EditProperty from "./pages/OwnerPage/EditProperty/EditProperty";
import Customer from "./pages/customer/customer";

// axios.interceptors.request.use(function (config) {
 
//   const url = config.url;
//   if (config.url.endsWith("/auth") || config.url.endsWith("/users")) {
//     return config;
//   }
//   const token = sessionStorage.getItem("access_token");
//   config.headers.Authorization = token ? `Bearer ${token}` : "";
//   return config;
// });

// axios.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (err) {
//     console.log(err);
//     if (err.response.status === 401 || err.response.status === 403) {
//       console.log("Unauthorized");
//       sessionStorage.removeItem("access_token");
//       sessionStorage.removeItem("refresh_token");
//       window.location.href = "/login";
//     }
//     return Promise.reject(err);
//   }
// );

function App() {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [saved, setSaved] = useState([])


  return (
    <div>
      <AuthContext.Provider
        value={{
          user,
          setUser,
          accessToken,
          setAccessToken,
          refreshToken,
          setRefreshToken,
          saved,
          setSaved
        }}
      >
        <BrowserRouter>
          <NavBarComponent />
          <div>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/owner-dashboard" element={<OwnerPage />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/property/:id" element={<ViewProperty />}></Route>
              <Route path="/favorite" element={<Favorite />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/add-property" element={<AddProperty />}></Route>
              <Route path="/owner-home" element={<OwnerHome />}></Route>
              <Route path="/edit-property" element={<EditProperty />}></Route>
              <Route path="/view-property" element={<ViewProperty />}></Route>
              <Route path="/customer-dashboard" element={<Customer />}></Route>
              <Route
                path="/admin-dashboard"
                element={<AdminDashboard />}
              ></Route>
            </Routes>
          </div>
          <FooterComponent />
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
