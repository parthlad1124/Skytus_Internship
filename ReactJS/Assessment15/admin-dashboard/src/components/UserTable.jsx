import React, { useEffect, useState } from "react";

const UserTable = React.memo(() => {
  const [users, setUsers] = useState([]);

  // Load users from localStorage
  const loadUsers = () => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  };

  // Listen for updates from Users page
  useEffect(() => {
    loadUsers(); // initial load

    window.addEventListener("usersUpdated", loadUsers);
    return () => {
      window.removeEventListener("usersUpdated", loadUsers);
    };
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white p-6 rounded-xl shadow mt-6 transition-colors duration-300">
      <h2 className="text-lg font-semibold mb-4">Users</h2>

      {users.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-300">
          No users available.
        </p>
      ) : (
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b dark:border-gray-600">
              <th className="py-2">Name</th>
              <th className="py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                className="border-b dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <td className="py-2">{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
});

export default UserTable;