import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import "./App.css";

function App() {

  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");


    return savedUsers ? JSON.parse(savedUsers) : [
      { id: 1, name: "Parth", email: "parth@gmail.com", active: true },
      { id: 2, name: "Harsh", email: "harsh@gmail.com", active: false },
      { id: 3, name: "Aryan", email: "aryan@gmail.com", active: true }
    ];
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [darkMode, setDarkMode] = useState(false);



  // 💾 Save to Local Storage whenever users change
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const toggleStatus = (id) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, active: !user.active } : user
    );
    setUsers(updatedUsers);
  };

  const removeUser = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  const addUser = (e) => {
    e.preventDefault();

    if (!name || !email) return;

    const newUser = {
      id: Date.now(),
      name,
      email,
      active: true
    };

    setUsers([...users, newUser]);
    setName("");
    setEmail("");
  };

  const filteredUsers = users
  .filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  )
  .filter(user => {
    if (filter === "active") return user.active;
    if (filter === "inactive") return !user.active;
    return true; // all
  });

const totalUsers = users.length;
const activeUsers = users.filter(user => user.active).length;

  return (
    <div className={`container ${darkMode ? "dark" : ""}`}>
      <button
        className="button"
        onClick={() => setDarkMode(!darkMode)}
        style={{ marginBottom: "15px" }}>

          {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
      </button>

      <h1 className="title">User List App</h1>
      <div className="stats">
          <p>Total Users: {totalUsers}</p>
          <p>Active Users: {activeUsers}</p>
      </div>


      <form onSubmit={addUser} className="form">
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit" className="button toggle-btn">
          Add User
        </button>
      </form>

      <div className="filter-buttons">
  <button
    className={`button ${filter === "all" ? "active-filter" : ""}`}
    onClick={() => setFilter("all")}
  >
    All
  </button>

  <button
    className={`button ${filter === "active" ? "active-filter" : ""}`}
    onClick={() => setFilter("active")}
  >
    Active
  </button>

  <button
    className={`button ${filter === "inactive" ? "active-filter" : ""}`}
    onClick={() => setFilter("inactive")}
  >
    Inactive
  </button>
</div>


      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {filteredUsers.length === 0 ? (
        <h2 className="no-users">No users available</h2>
      ) : (
        filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            toggleStatus={toggleStatus}
            removeUser={removeUser}
          />
        ))
      )}
    </div>
  );
}

export default App;
