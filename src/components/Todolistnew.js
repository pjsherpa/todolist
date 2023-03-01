import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const initialState = [
    "Go shopping",
    "Do laundry!",
    "Read a book",
    "Go to Gym",
  ];
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(initialState);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const addTodo = () => {
    const newTodos = todos.concat(todo);
    setTodos(newTodos);
  };
  const listTodos = () => {
    return todos.map((itm) => <li>{itm}</li>);
  };
  return (
    <div>
      <div className="App">
        <h1>TODOS</h1>
        <div>
          <input placeholder="Add todo" onChange={handleChange} />
          <button onClick={addTodo}>Add Todo</button>
        </div>
        <ol>{listTodos()}</ol>
      </div>
    </div>
  );
}
