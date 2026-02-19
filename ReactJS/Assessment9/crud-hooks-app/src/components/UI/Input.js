import React from "react";

function Input({ type = "text", value, onChange, placeholder, inputRef }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      ref={inputRef}
      style={{
        padding: "8px",
        margin: "5px",
        borderRadius: "5px",
        border: "1px solid #ccc"
      }}
    />
  );
}

export default Input;
