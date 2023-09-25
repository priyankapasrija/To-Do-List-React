import { useState, useEffect } from "react";
import "./mainSection.css";

function MainSection() {
  const [todos, setTodos] = useState(() => {
    const savedItem = localStorage.getItem("todos");
    if (savedItem) {
      return JSON.parse(savedItem);
    } else {
      return [];
    }
  });
  const [todo, setTodo] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleInputChange(event) {
    setTodo(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (todo === "") {
      alert("Please add your todo");
    }

    if (todo !== "") {
      // set the new todos state (the array)
      setTodos([
        // copy the current values in state
        ...todos,
        {
          // setting a basic id to identify the object
          // id: todo.length + 1;
          // Old approach
          id: new Date(),
          // set a text property to the value of the todo state and
          // trim the whitespace from the input
          text: todo.trim(),
        },
      ]);
    }

    setTodo("");
  }

  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  }
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          name="todo"
          type="text"
          placeholder="Create a new todo"
          className="border-black border-2 w-72"
          value={todo}
          onChange={handleInputChange}
          maxLength={40}
        ></input>
        <button type="submit" onClick={handleFormSubmit} className="ml-2.5">
          Add
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button id="delete-btn" onClick={() => handleDeleteClick(todo.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MainSection;
