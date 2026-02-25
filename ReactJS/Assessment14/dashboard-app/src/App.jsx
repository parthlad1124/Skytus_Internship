import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Overview from "./pages/Overview";
import Products from "./pages/Products";
import Users from "./pages/Users";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import RoleProtectedRoute from "./components/RoleProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />

        
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="overview" element={<Overview />} />
          
          <Route
            path="products"
            element={
              <RoleProtectedRoute allowedRoles={["admin"]}>
                <Products />
              </RoleProtectedRoute>
            }
          />

          <Route
            path="users"
            element={
              <RoleProtectedRoute allowedRoles={["admin"]}>
                <Users />
              </RoleProtectedRoute>
            }
          />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;