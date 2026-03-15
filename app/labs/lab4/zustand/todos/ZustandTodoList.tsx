// Renders the todos as shown in Figure 4.5.2 allowing users to create, update, and delete todos

"use client";

import { useTodoStore } from "./useTodoStore"; 
import { Button, ListGroup, ListGroupItem, FormControl } from "react-bootstrap";

export default function ZustandTodoList() {
    const{ todos, currentTodo, 
           addTodo, deleteTodo, 
           updateTodo, setTodo } = useTodoStore( (state) => state);

return (
    <div className="m-2">
        <h1 className="text-3xl font-semibold leading-10 text-black"> 
       Todo List</h1>
       <ListGroup>
            <ListGroupItem className="d-flex align-items-center gap-2">
                <FormControl 
                style={{ maxWidth: "230px" }}
                value={currentTodo.title}
                onChange={(e) => setTodo({ ...currentTodo, title: e.target.value })}
                className="float-start"/>
            <Button 
                onClick={updateTodo}
                variant="warning"
                className="float-end me-2">Update</Button>
            <Button 
                onClick={addTodo} 
                variant="success"
                className="float-end me-2">Add</Button> 
            </ListGroupItem>

            {todos.map((todo) => (
                <ListGroupItem key={todo.id}> 
                    {todo.title}
                    <Button 
                    onClick={() => deleteTodo(todo.id)}
                    className="float-end me-2"
                    variant="danger">Delete</Button>
                    <Button 
                    onClick={() => setTodo(todo)}
                    className="float-end me-2"
                    variant="primary">Edit</Button>
                </ListGroupItem>
                ))}
       </ListGroup>
    </div>
);
}


// todos: Todo[]; 
//     currentTodo: Todo;
//     addTodo: () => void; 
//     deleteTodo: (id: string) => void; 
//     updateTodo: () => void; 
//     setTodo: (todo: Todo) => void;