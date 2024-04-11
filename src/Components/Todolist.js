import React, { useContext } from "react";
import { Todocontext } from "../Context/Todocontext";
import "./Todolist.css";
const Todolist = () => {
  const { todos, deletetodoAction } = useContext(Todocontext);

  console.log(todos);

  return (
    <div className="todo-list-container">
      <div className="todo-item-container">
        {todos.map((todo) => {
          return (
            <div key={todo.id} className="todo-item container">
              <h1>{todo.title}</h1>
              <button onClick={() => deletetodoAction(todo.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todolist;
