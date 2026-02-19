import React from "react";

function Button({ children, onClick, type = "button", color = "#007bff" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: "8px 15px",
        margin: "5px",
        backgroundColor: color,
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      }}
    >
      {children}
    </button>
  );
}


export default Button;
