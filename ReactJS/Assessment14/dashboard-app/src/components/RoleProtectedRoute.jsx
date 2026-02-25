import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function RoleProtectedRoute({ children, allowedRoles }) {
  const { role } = useContext(AuthContext);

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/dashboard/overview" />;
  }

  return children;
}

export default RoleProtectedRoute;