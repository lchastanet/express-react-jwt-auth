import { Link, useNavigate } from "react-router-dom";

import expressAPI from "../services/expressAPI";
import { useAuthContext } from "../contexts/authContext";

function Header() {
  const { user, setUser } = useAuthContext();

  const navigate = useNavigate();

  const handleDisconnection = () => {
    expressAPI
      .get("/api/logout")
      .then(() => {
        localStorage.clear();
        setUser(null);
        navigate("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {user ? (
                <>
                  <li className="nav-item">
                    <Link to="/movies" className="nav-link">
                      Movies
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/user" className="nav-link">
                      Profile
                    </Link>
                  </li>
                  {user.roles.includes("admin") && (
                    <li className="nav-item">
                      <Link to="/users-list" className="nav-link">
                        Users List
                      </Link>
                    </li>
                  )}
                  <li className="nav-item">
                    <button
                      onClick={handleDisconnection}
                      className="ml-auto btn btn-danger"
                    >
                      Disconnect
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/signUp" className="nav-link">
                      SignUp
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
