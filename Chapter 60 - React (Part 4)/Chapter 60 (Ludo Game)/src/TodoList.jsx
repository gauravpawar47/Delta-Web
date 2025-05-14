import { useState } from "react";

export default function Todo() {
  let [todos, setTodos] = useState(["Sample Task"]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos([...todos, newTodo]);
  };

  let updateTodoValue = () => {
    setNewTodo(event.target.value);
  };

  return (
    <div>
      <input
        placeholder="Add Task"
        value={newTodo}
        onChange={updateTodoValue}
      ></input>{" "}
      <br /> <br />
      <button onClick={addNewTask}>Add</button>
      <br />
      <br />
      <br />
      <hr />
      <h4>Tasks</h4>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
