import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState(() => {
    // 🔥 Load from localStorage immediately
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [editingTask, setEditingTask] = useState(null);

  // 🔥 Save whenever tasks change
  useEffect(() => {
    console.log("Saving to localStorage:", tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTaskHandler = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  const deleteTaskHandler = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const editTaskHandler = (task) => {
    setEditingTask(task);
  };

  const updateTaskHandler = (updatedTask) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
    setEditingTask(null);
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Task Manager</h1>

      <TaskForm
        onAddTask={addTaskHandler}
        editingTask={editingTask}
        onUpdateTask={updateTaskHandler}
      />

      <TaskList
        tasks={tasks}
        onDelete={deleteTaskHandler}
        onEdit={editTaskHandler}
      />
    </div>
  );
}

export default App;
