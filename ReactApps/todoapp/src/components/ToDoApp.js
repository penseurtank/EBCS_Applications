import React, { useState, useEffect } from "react";

const FILTERS = {
  ALL: "all",
  ACTIVE: "active",
  COMPLETED: "completed",
};

const ToDoApp = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState(FILTERS.ALL);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const newTask = {
      id: Date.now(),
      text: trimmed,
      completed: false,
    };

    setTasks([newTask, ...tasks]);
    setInput("");
  };

  const handleToggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === FILTERS.ACTIVE) return !task.completed;
    if (filter === FILTERS.COMPLETED) return task.completed;
    return true;
  });

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAddTask();
  };

  return (
    <div style={styles.container}>
      <h2>📝 React To-Do App</h2>

      <div style={styles.inputContainer}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="What needs to be done?"
          style={styles.input}
        />
        <button onClick={handleAddTask} style={styles.addBtn}>
          Add
        </button>
      </div>

      <ul style={styles.list}>
        {filteredTasks.map((task) => (
          <li key={task.id} style={styles.listItem}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggle(task.id)}
            />
            <span
              style={{
                ...styles.taskText,
                textDecoration: task.completed ? "line-through" : "none",
                color: task.completed ? "gray" : "black",
              }}
            >
              {task.text}
            </span>
            <button
              onClick={() => handleDelete(task.id)}
              style={styles.deleteBtn}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      <div style={styles.filters}>
        {Object.values(FILTERS).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              ...styles.filterBtn,
              fontWeight: filter === f ? "bold" : "normal",
            }}
          >
            {f[0].toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

// 🧾 Inline Styles
const styles = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontFamily: "sans-serif",
    textAlign: "center",
  },
  inputContainer: {
    display: "flex",
    marginBottom: "20px",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "16px",
  },
  addBtn: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
    textAlign: "left",
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
  },
  taskText: {
    flex: 1,
  },
  deleteBtn: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "18px",
  },
  filters: {
    marginTop: "20px",
  },
  filterBtn: {
    margin: "0 5px",
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default ToDoApp;
