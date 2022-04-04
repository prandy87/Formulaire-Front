import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

const MainPage = ({
  firstName,
  lastName,
  address,
  zipcode,
  city,
  comment,
  setUser,
  _id,
}) => {
  const [newAddress, setNewAddress] = useState();
  const [newZipCode, setNewZipCode] = useState();
  const [newCity, setNewCity] = useState();
  const [newComment, setNewComment] = useState();

  const navigate = useNavigate();
  const handleSubmit1 = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "https://formulaire-backend-ressources.herokuapp.com/update",
        {
          _id: _id,
          address: newAddress,
        }
      );
      if (response.data) {
        console.log(response.data);
        Cookies.set("address", newAddress);
        alert("Données personelles mises à jour !");
        window.location.reload(false);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const handleSubmit2 = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "https://formulaire-backend-ressources.herokuapp.com/update",
        {
          _id: _id,
          zipcode: newZipCode,
        }
      );
      if (response.data) {
        console.log(response.data);
        Cookies.set("zipcode", newZipCode);
        alert("Données personelles mises à jour !");
        window.location.reload(false);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSubmit3 = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "https://formulaire-backend-ressources.herokuapp.com/update",
        {
          _id: _id,
          city: newCity,
        }
      );
      if (response.data) {
        console.log(response.data);
        Cookies.set("city", newCity);
        alert("Données personelles mises à jour !");
        window.location.reload(false);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSubmit4 = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "https://formulaire-backend-ressources.herokuapp.com/update",
        {
          _id: _id,
          comment: newComment,
        }
      );
      if (response.data) {
        console.log(response.data);
        Cookies.set("comment", newComment);
        alert("Données personelles mises à jour !");
        window.location.reload(false);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div>
        <h2>
          Bonjour, {firstName} {lastName} !
        </h2>
      </div>
      <div className="info">
        <div className="card">
          <h3>Adresse :</h3>
          <p>{address}</p>
          <p>{zipcode}</p>
          <p>{city}</p>
        </div>
        <div className="card">
          <h3>Votre Commentaire:</h3>
          <p>{comment}</p>
        </div>
        <h2>Modifier les informations : </h2>
        <div className="form3">
          <form>
            <input
              type="text"
              placeholder="Modifier mon adresse"
              onChange={(e) => setNewAddress(e.target.value)}
            />
            <button onClick={handleSubmit1}>Valider</button>
          </form>
          <form>
            <input
              type="text"
              placeholder="Modifier mon code postal"
              onChange={(e) => setNewZipCode(e.target.value)}
            />
            <button onClick={handleSubmit2}>Valider</button>
          </form>
          <form>
            <input
              type="text"
              placeholder="Modifier ma ville"
              onChange={(e) => setNewCity(e.target.value)}
            />
            <button onClick={handleSubmit3}>Valider</button>
          </form>
          <form>
            <textarea
              maxLength="255"
              type="text"
              placeholder="Modifier mon commentaire"
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button onClick={handleSubmit4}>Valider</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default MainPage;
