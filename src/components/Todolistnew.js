import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const initialState = [
    "Go Shopping",
    "Do Laundry",
    "Read a book",
    "Go to gym",
  ];

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(initialState);

  const handlechange = (e) => setTodo(e.target.value);

  const addTodo = () => {
    const newTodo = todos.concat(todo);
    setTodos(newTodo);
  };
  const todosList = () => initialState.map((itm) => <li>{itm}</li>);
  return (
    <div className="App">
      <h1>Todos</h1>
      <div>
        <input
          type="text"
          placeholder="
        Add todo"
          onChange={handlechange}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <ol>{todosList()}</ol>
    </div>
  );
}
