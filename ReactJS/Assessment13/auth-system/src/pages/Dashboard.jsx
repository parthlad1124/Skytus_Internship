import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function Dashboard() {
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
        <Link to="/profile">Profile</Link>

        <button className="primary-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>

    {/* Centered Content */}
    <div className="content-wrapper">
      <div className="page-center">
        <div className="container">
          <h2>Dashboard</h2>
          <p>Welcome to your dashboard.</p>
        </div>
      </div>
    </div>
  </div>
);
}

export default Dashboard;