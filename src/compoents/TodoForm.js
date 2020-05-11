import React, { useState } from "react";
import {
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  Container,
  FormGroup,
} from "reactstrap";

import { v4 } from "uuid";

// methods can also be passed as a props
const TodoForm = ({ addTodos }) => {
  const [todoString, setTodoString] = useState("");

const handleSubmit = e => {
    e.preventDefault();
    if (todoString === "") {
      return alert("Please enter a todo to proceed");
    }

    const todo = {
      todoString, //same as todo : todoString
      id: v4(),
    };

    // this is a method which somebody is passing us
    // as a prop
    addTodos(todo); // whateever the method is passed on
    //  we are assuming that it expects
    //  to pass on "todo" here

    setTodoString("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="enter a todo string"
            value={todoString}
            onChange={ e => setTodoString(e.target.value)}
          />
          <InputGroupAddon addonType="prepend">
            <Button color="outline-success">Add todo</Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default TodoForm;
