import { NavLink, Outlet } from "react-router-dom";
import "./DashboardLayout.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function DashboardLayout() {

    const { logout } = useContext(AuthContext);
    const { role } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        navigate("/login");
    };

  return (
    <div className="dashboard">
      
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">MyDashboard</h2>

        <nav>
            <NavLink to="/dashboard/overview">Overview</NavLink>

            {role === "admin" && (
                <>
                <NavLink to="/dashboard/products">Products</NavLink>
                <NavLink to="/dashboard/users">Users</NavLink>
                </>
            )}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="main-content">
        
        {/* Header */}
        <header className="header">
            <h3>Dashboard</h3>

            <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                <span>👤 {role === "admin" ? "Admin" : "User"}</span>

                <button
                onClick={handleLogout}
                style={logoutButtonStyle}
                >
                Logout
                </button>
            </div>
        </header>

        {/* Page Content */}
        <div className="page-content">
          <Outlet />
        </div>

      </div>
    </div>
  );
}

export default DashboardLayout;

const logoutButtonStyle = {
  padding: "6px 12px",
  background: "#ef4444",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};