import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Todos from "./compoents/Todos";
import TodoForm from "./compoents/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);

  // This "useEffect is used to fetch from localStorage"
  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    console.log({ localStorage });
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
      //if local Todos are available this is going to be executed
    }
    console.log(localTodos);
  }, []);
  // [] this needs to be here compulsary

  const addTodos = async (todo) => {
    setTodos([...todos, todo]);
  };

  // This "useEffect is used to set into localStorage"
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  // [] this array catches all the dependencies
  // or dependency function

  const markTodoCompleted = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <Container fluid>
      <h1>Todo with LOCAL STORAGE</h1>
      <hr color="white" />
      <Todos todos={todos} markTodoCompleted={markTodoCompleted} />
      <TodoForm addTodos={addTodos} />
    </Container>
  );
};

export default App;
