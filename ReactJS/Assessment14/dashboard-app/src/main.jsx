import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DashboardProvider } from "./context/DashboardContext";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <DashboardProvider>
        <App />
      </DashboardProvider>
    </AuthProvider>
  </React.StrictMode>
);