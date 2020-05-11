import React from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap'
import {FaJira} from 'react-icons/fa'

const Todos = ({todos, markTodoCompleted}) => {

        return (
            <ListGroup
             className="mt-5 mb-2 items"
             >
                 {todos.map(todo => (
                    <ListGroupItem key={todo.id}>
                        {todo.todoString}
                        <button
                        style={{width:"60px", color:"red",height:"30px",boxShadow:"gray 2px 2px 10px"}}
                        className="float-right"
                        onClick={() => markTodoCompleted(todo.id)}>
                            <FaJira/>
                        </button>
                    </ListGroupItem>
                 ))}
            </ListGroup>
        )
}

export default Todos;