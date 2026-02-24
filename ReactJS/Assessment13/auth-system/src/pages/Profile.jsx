import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function Profile() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <h3>My App</h3>

        <div className="nav-links">
          <Link to="/dashboard">Dashboard</Link>

          <button className="primary-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      {/* Centered Profile Content */}
      <div className="content-wrapper">
        <div className="page-center">
          <div className="container">
            <h2>Profile Page</h2>
            <p>This is your profile section.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;