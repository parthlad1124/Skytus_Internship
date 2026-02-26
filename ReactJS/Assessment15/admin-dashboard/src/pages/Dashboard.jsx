import StatCard from "../components/StatCard";
import UserTable from "../components/UserTable";

function Dashboard() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-3 gap-6">
        <StatCard title="Total Users" value="120" />
        <StatCard title="Revenue" value="$4,500" />
        <StatCard title="Orders" value="320" />
      </div>

      <UserTable />
    </div>
  );
}

export default Dashboard;