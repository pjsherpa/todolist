import React, { useState } from "react";

const TodoList = () => {
  const [todoInput, setTodoInput] = useState("");
  const [list, setList] = useState([
    { id: 1, text: "new" },
    { id: 2, text: "new 2" },
  ]);

  const [editInput, setEditInput] = useState();
  const [editList, setEditList] = useState(null);

  const handleChange = (e) => setTodoInput(e.target.value);

  const addTodo = () => {
    const newTodo = [...list, { id: todoInput, text: todoInput }];
    setList(newTodo);
    setTodoInput("");
  };

  const removeTodo = (id) => {
    const deleteTodo = list.filter((list) => id !== list.id);
    setList(deleteTodo);
  };

  const editTodo = (text) => {
    const edits = list.map((item) => {
      if (text === item.text) {
        item.text = editInput;
      }
      return item;
    });
    setList(edits);
    setEditList(null);
    setEditInput("");
  };

  const displayList = () =>
    list.map((item) => (
      <li>
        {editList === item.text ? (
          <div>
            <input
              onChange={(e) => setEditInput(e.target.value)}
              value={editInput}
            />
            <button onClick={() => editTodo(item.text)}>Save Edit</button>
          </div>
        ) : (
          item.text
        )}
        <button onClick={() => removeTodo(item.id)}>Remove</button>
        <button onClick={() => setEditList(item.id)}>Edit</button>
      </li>
    ));
  return (
    <div>
      <h1>Todo List App</h1>
      <div>
        <input value={todoInput} onChange={handleChange} />
        <button onClick={addTodo}>Save</button>
      </div>
      <ol>{displayList()}</ol>
    </div>
  );
};

export default TodoList;
