import { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "../components/DataTable";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(res.data);
    } catch (err) {
      setError("Failed to fetch users.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
  ];

  if (loading) return <h3>Loading users...</h3>;
  if (error) return <h3 style={{ color: "red" }}>{error}</h3>;

  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>Users List</h2>
      <DataTable columns={columns} data={users} />
    </div>
  );
}

export default Users;