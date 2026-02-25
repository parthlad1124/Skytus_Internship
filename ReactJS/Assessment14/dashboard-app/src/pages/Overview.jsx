import { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";
import DashboardCard from "../components/DashboardCard";


function Overview() {
const { dashboardData, loading, error, fetchDashboardData } =
    useContext(DashboardContext);

  if (loading) return <h3>Loading dashboard data...</h3>;
  if (error) return <h3 style={{ color: "red" }}>{error}</h3>;

  return (
    <div>
        <button
            onClick={fetchDashboardData}
            style={refreshButtonStyle}>
            🔄 Refresh Data
        </button>

      {/* Top Cards */}
      <div style={cardContainerStyle}>
        <DashboardCard
          title="Total Sales"
          value={`₹${dashboardData.totalSales}`}
        />
        <DashboardCard
          title="Total Products"
          value={dashboardData.totalProducts}
        />
        <DashboardCard
          title="Total Users"
          value={dashboardData.totalUsers}
        />
      </div>

      {/* Charts Section */}
      <div style={chartSectionStyle}>
        <div style={chartBoxStyle}>
          <h4>Sales Chart</h4>
          <div style={chartPlaceholderStyle}>Chart Placeholder</div>
        </div>

        <div style={chartBoxStyle}>
          <h4>User Growth</h4>
          <div style={chartPlaceholderStyle}>Chart Placeholder</div>
        </div>
      </div>
    </div>
  );
}

const cardContainerStyle = {
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
  marginBottom: "30px",
};

const chartSectionStyle = {
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
};

const chartBoxStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  flex: "1",
  minWidth: "300px",
};

const chartPlaceholderStyle = {
  height: "200px",
  background: "#e2e8f0",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "15px",
  color: "#475569",
};

const refreshButtonStyle = {
  marginBottom: "20px",
  padding: "10px 15px",
  background: "#1e293b",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

export default Overview;