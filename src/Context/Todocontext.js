import React, { useReducer, createContext, useEffect } from "react";

export const Todocontext = createContext();

//reducer function
const todoReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TODO":
      return [...state, payload];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== payload);
    default:
      return state;
  }
};

//get item from localstorage
const getItem = () => {
  const todos = localStorage.getItem("todos");

  if (todos) {
    return JSON.parse(todos);
  } else {
    return [];
  }
};

//initial state
const INITIAL_STATE = getItem();

export const TodoContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  //save to the local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //add todo action
  const AddtodoAction = (title) => {
    dispatch({
      type: "ADD_TODO",
      payload: {
        id: todos.length + 1,
        title,
      },
    });
  };

  //delete todos action
  const deletetodoAction = (id) => {
    dispatch({
      type: "REMOVE_TODO",
      payload: id,
    });
  };

  return (
    <>
      <Todocontext.Provider value={{ todos, AddtodoAction, deletetodoAction }}>
        {children}
      </Todocontext.Provider>
    </>
  );
};
