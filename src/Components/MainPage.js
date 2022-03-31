import { Link } from "react-router-dom";

const MainPage = ({ firstName, lastName, address, zipcode }) => {
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
        </div>
        <div className="card">
          <h3>Adresse :</h3>
          <p>{address}</p>
          <p>{zipcode}</p>
        </div>
      </div>
    </>
  );
};

export default MainPage;
