// 🔹 MUI Components Import
import Box from '@mui/material/Box';              // Layout wrapper component (enhanced div with styling support)
import TextField from '@mui/material/TextField';  // Input field component
import Button from '@mui/material/Button';        // Styled button component

// 🔹 React Hook
import { useState } from "react";                 // Used to manage component state

// 🔹 Unique ID generator
import { v4 as uuidv4 } from 'uuid';              // Generates unique IDs for each task

// 🔹 MUI Icons
import DeleteIcon from '@mui/icons-material/Delete';           // Icon for delete button
import DoneSharpIcon from '@mui/icons-material/DoneSharp';     // Icon for mark-as-done button
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp'; // Icon for add button

// 🔹 CSS File
import './Todo.css';   // Custom styling file

// 🔹 Main Component
export default function TodoApp() {

  // 🌙 Dark Mode State (default is Light mode)
  const [darkMode, setDarkMode] = useState(false);

  // 📝 Todos State (Array of task objects)
  const [todos, setTodo] = useState([
    { task: "sample-task", id: uuidv4(), isDone: false }
  ]);

  // ✏ Input Field State (stores new task value)
  const [newTodo, setNewTodo] = useState("");

  // ➕ Function to Add a New Task
  const addNewTask = () => {
    // Do nothing if input is empty or only spaces
    if (newTodo.trim() === "") return;

    // Add new task to the existing todo list
    setTodo((prevTodos) => [
      ...prevTodos,
      { task: newTodo, id: uuidv4(), isDone: false }
    ]);

    // Clear input field after adding
    setNewTodo("");
  };

  // 🔄 Handle Input Field Changes
  const updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  // ❌ Delete a Single Task
  const deleteTodo = (id) => {
    setTodo(todos.filter((todo) => todo.id !== id));
  };

  // 🔠 Convert All Tasks to Uppercase
  const upperCaseAll = () => {
    setTodo(
      todos.map((todo) => ({
        ...todo,
        task: todo.task.toUpperCase()
      }))
    );
  };

  // 🔠 Convert a Single Task to Uppercase
  const UpperCaseOne = (id) => {
    setTodo(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, task: todo.task.toUpperCase() }
          : todo
      )
    );
  };

  // ✅ Mark a Single Task as Done
  const TaskDone = (id) => {
    setTodo(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isDone: true }
          : todo
      )
    );
  };

  // ✅ Mark All Tasks as Done
  const TaskDoneAll = () => {
    setTodo(
      todos.map((todo) => ({
        ...todo,
        isDone: true
      }))
    );
  };

  // 🔹 Component UI
  return (
    // Apply dark mode class conditionally
    <div className={darkMode ? "main-container dark" : "main-container"}>
      <div className="todo-card">

        {/* 🔹 Header Section */}
        <div className="header">
          <h2>📝 Todo App</h2>

          {/* 🌙 Dark Mode Toggle Button */}
          <Button
            variant="contained"
            className="toggle-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </Button>
        </div>

        <br />

        {/* 🔹 Input + Add Button Section */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            label="Add Task"
            variant="outlined"
            value={newTodo}
            onChange={updateTodoValue}
            fullWidth
          />

          <Button
            variant="outlined"
            onClick={addNewTask}
            size="large"
          >
            Add <AddCircleSharpIcon />
          </Button>
        </Box>

        {/* 🔹 Todo List Rendering */}
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} className="task-item">

              {/* Task text (applies line-through style if completed) */}
              <span className={todo.isDone ? "done" : ""}>
                {todo.task}
              </span>

              {/* 🔹 Action Buttons */}
              <div className="btn-group">

                {/* Delete Button */}
                <Button
                  variant="outlined"
                  className="delete-btn"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete <DeleteIcon />
                </Button>

                {/* Convert Single Task to Uppercase */}
                <Button
                  variant="outlined"
                  className="upper-btn"
                  onClick={() => UpperCaseOne(todo.id)}
                >
                  UpperCase One
                </Button>

                {/* Mark Task as Done */}
                <Button
                  className="done-btn"
                  onClick={() => TaskDone(todo.id)}
                >
                  Task Done <DoneSharpIcon />
                </Button>

              </div>
            </li>
          ))}
        </ul>

        {/* 🔹 Bulk Action Buttons */}
        <div className="bulk-buttons">

          {/* Convert All Tasks to Uppercase */}
          <Button
            className="bulk-red"
            onClick={upperCaseAll}
          >
            Uppercase All
          </Button>

          {/* Mark All Tasks as Done */}
          <Button
            className="bulk-green"
            onClick={TaskDoneAll}
          >
            <DoneSharpIcon /> Mark All Done
          </Button>

        </div>
      </div>
    </div>
  );
}