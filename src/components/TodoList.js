import React, { useState } from "react";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
  };
  return (
    <div>
      <h1>What's the Plan for Today</h1>
      <TodoForm />
    </div>
  );
};

export default TodoList;
