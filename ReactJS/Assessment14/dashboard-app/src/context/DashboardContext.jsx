import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [dashboardData, setDashboardData] = useState({
    totalSales: 0,
    totalProducts: 0,
    totalUsers: 0,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError(null);

      const usersRes = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      const productsRes = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setDashboardData({
        totalSales: productsRes.data.length * 100,
        totalProducts: productsRes.data.length,
        totalUsers: usersRes.data.length,
      });

    } catch (err) {
      setError("Failed to fetch dashboard data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
  <DashboardContext.Provider
    value={{
      dashboardData,
      loading,
      error,
      fetchDashboardData, // 👈 expose this
    }}
  >
    {children}
  </DashboardContext.Provider>
);
};