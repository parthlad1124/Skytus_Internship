import React from "react";

function UserCard({ user, toggleStatus, removeUser }) {
  return (
     <div className={`user-card ${user.active ? "active" : "inactive"}`}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>Status: {user.active ? "Active" : "Inactive"}</p>

      <button
        className="button toggle-btn"
        onClick={() => toggleStatus(user.id)}
      >
        Toggle Status
      </button>

      <button
        className="button remove-btn"
        onClick={() => removeUser(user.id)}
      >
        Remove
      </button>
    </div>
  );
}

export default UserCard;
