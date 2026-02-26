import React from "react";
import { Link } from "react-router-dom";

const Sidebar = React.memo(() => {
  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-5">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>

      <ul className="space-y-4">
        <li>
          <Link to="/" className="hover:text-gray-300">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/users" className="hover:text-gray-300">
            Users
          </Link>
        </li>
      </ul>
    </div>
  );
});

export default Sidebar;