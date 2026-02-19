import React from "react";
import Button from "./UI/Button";

function TaskItem({ task, onDelete, onEdit }) {
  return (
    <li
      style={{
        listStyle: "none",
        margin: "10px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px"
      }}
    >
      <h3>{task.title}</h3>
      <p>{task.description}</p>

        <Button color="#28a745" onClick={() => onEdit(task)}>Edit</Button>
        <Button color="#dc3545" onClick={() => onDelete(task.id)}>Delete</Button>

    </li>
  );
}

export default TaskItem;
