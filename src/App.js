import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

import Header from "./Components/Header";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import MainPage from "./Components/MainPage";

function App() {
  const [token, setToken] = useState(Cookies.get("userToken") || null);
  const [firstName, setFirstName] = useState(Cookies.get("firstName") || null);
  const [lastName, setLastName] = useState(Cookies.get("lastName") || null);
  const [address, setAddress] = useState(Cookies.get("address") || null);
  const [zipcode, setZipcode] = useState(Cookies.get("zipcode") || null);
  const [city, setCity] = useState(Cookies.get("city") || null);
  const [comment, setComment] = useState(Cookies.get("comment") || null);

  const setUser = (
    token,
    firstName,
    lastName,
    address,
    zipcode,
    city,
    comment
  ) => {
    if (
      token ||
      firstName ||
      lastName ||
      address ||
      zipcode ||
      city ||
      comment
    ) {
      Cookies.set("userToken", token);
      Cookies.set("firstName", firstName);
      Cookies.set("lastName", lastName);
      Cookies.set("address", address);
      Cookies.set("zipcode", zipcode);
      Cookies.set("city", city);
      Cookies.set("comment", comment);
    } else {
      Cookies.remove("userToken");
    }
    setToken(token);
    setFirstName(firstName);
    setLastName(lastName);
    setAddress(address);
    setZipcode(zipcode);
    setCity(city);
    setComment(comment);
  };

  return (
    <Router>
      <Header token={token} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Signup setUser={setUser} />} />
        <Route path="/signin" element={<Signin setUser={setUser} />} />
        <Route
          path="/mainpage"
          element={
            <MainPage
              firstName={firstName}
              lastName={lastName}
              address={address}
              zipcode={zipcode}
              city={city}
              comment={comment}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
