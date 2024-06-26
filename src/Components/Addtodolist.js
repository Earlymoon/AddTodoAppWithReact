import React, { useContext, useState } from "react";
import { Todocontext } from "../Context/Todocontext";
import "./Addtodolist.css";

const Addtodolist = () => {
  const { todos, state, AddtodoAction } = useContext(Todocontext);
  console.log(state);

  const [title, setTitle] = useState("");
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  //submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      return alert("hey your task is empty!");
    }
    console.log(state);
    // Check if task already exists
    let isTaskExists = todos.some((todo) => todo.title === title);
    if (isTaskExists) {
      return alert("This task already exists!"), setTitle("");
    }

    AddtodoAction(title);
    setTitle("");
  };
  return (
    <div className="form-container">
      <h1 className="header-title">
        I'm ToDo Application Developed Using React🔥
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Add task"
          type="text"
          value={title}
          onChange={handleTitle}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Addtodolist;
