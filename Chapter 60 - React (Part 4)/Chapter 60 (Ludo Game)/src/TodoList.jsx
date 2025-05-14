import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todo() {
  const [todos, setTodos] = useState([
    { task: "Sample Task", id: uuidv4(), isDone: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addNewTask = () => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { task: newTodo, id: uuidv4(), isDone: false },
    ]);
    setNewTodo("");
  };

  const updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const upperCaseAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo,
        task: todo.task.toUpperCase(),
      }))
    );
  };

  const updateTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        } else {
          return todo;
        }
      })
    );
  };

  const toggleDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div>
      <input
        placeholder="Add Task"
        value={newTodo}
        onChange={updateTodoValue}
      />{" "}
      <br /> <br />
      <button onClick={addNewTask}>Add</button>
      <br />
      <br />
      <br />
      <hr />
      <h4>Tasks</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.isDone ? "line-through" : "none",
              }}
            >
              {todo.task}
            </span>{" "}
            &nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button> &nbsp;
            <button onClick={() => updateTodo(todo.id)}>Update</button> &nbsp;
            <button onClick={() => toggleDone(todo.id)}>
              {todo.isDone ? "Undo" : "Done"}
            </button>
            <br />
            <br />
          </li>
        ))}
      </ul>
      <br />
      <br />
      <button onClick={upperCaseAll}>Upper Case All</button>
    </div>
  );
}
