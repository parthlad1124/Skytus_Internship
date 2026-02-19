import React, { useState, useRef, useEffect } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";

function TaskForm({ onAddTask, editingTask, onUpdateTask }) {
  const [title, setTitle] = useState("");
  const descriptionRef = useRef();

  useEffect(() => {
    descriptionRef.current.focus();
  }, []);

  // 🟢 Load editing task into form
  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      descriptionRef.current.value = editingTask.description;
    }
  }, [editingTask]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (title.trim() === "") return;

    if (editingTask) {
      onUpdateTask({
        ...editingTask,
        title: title,
        description: descriptionRef.current.value
      });
    } else {
      onAddTask({
        id: Date.now(),
        title: title,
        description: descriptionRef.current.value
      });
    }

    setTitle("");
    descriptionRef.current.value = "";
  };

  return (
    <form onSubmit={submitHandler} style={{ marginBottom: "20px" }}>
      <h2>{editingTask ? "Edit Task" : "Add Task"}</h2>

      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task title"
      />

      <Input
        inputRef={descriptionRef}
        placeholder="Enter description"
      />

      <Button type="submit">
        {editingTask ? "Update Task" : "Add Task"}
      </Button>
    </form>
  );
}

export default TaskForm;
