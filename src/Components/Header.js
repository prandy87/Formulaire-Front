import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = ({ token, setUser }) => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <span>
        {token ? (
          <span>
            <Link to={"/MainPage"}>
              <button className="decon-btn">Mon Espace</button>
            </Link>
            <button
              className="decon-btn"
              onClick={() => {
                setUser(null);
                navigate("/");
              }}
            >
              Déconnexion
            </button>{" "}
          </span>
        ) : (
          <span>
            <Link to={"/signin"}>
              <button>S'identifier</button>
            </Link>
          </span>
        )}
      </span>
    </div>
  );
};

export default Header;
