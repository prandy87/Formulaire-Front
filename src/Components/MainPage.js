import { Link } from "react-router-dom";

const MainPage = ({ firstName, lastName, address, zipcode, city, comment }) => {
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
          <h4>Votre Commentaire :</h4>
          <p>{comment}</p>
        </div>
      </div>
    </>
  );
};

export default MainPage;
