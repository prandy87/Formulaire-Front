import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = ({ setUser }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "https://formulaire-backend-ressources.herokuapp.com/signin",
        {
          email: email,
          password: password,
        }
      );
      if (response.data) {
        console.log(response.data);
        setUser(
          response.data.token,
          response.data.account.firstName,
          response.data.account.lastName,
          response.data.account.address,
          response.data.account.zipcode,
          response.data.account.city,
          response.data.account.comment
        );

        navigate("/mainpage");
      }
    } catch (error) {
      console.log(error.message);
      if (error.message.includes("401")) {
        alert("Mauvais mot de passe !");
      } else {
        alert("Mauvais identifiant !");
      }
    }
  };
  return (
    <>
      <h2>Identifiez-vous :</h2>
      <div>
        <form className="form2">
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mot de Passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSubmit}>Se connecter</button>
        </form>
        <Link to={"/"}>
          <p className="reminder">Pas encore de compte ? Inscrivez-vous !</p>
        </Link>
      </div>
    </>
  );
};

export default Signin;
