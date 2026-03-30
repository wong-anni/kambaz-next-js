"use client"; 
import { useTodos } from "./todosContext"; 
import { ListGroup, ListGroupItem, FormControl, Button } from "react-bootstrap"

export default function TodosContext() { 
 const { todo, todos, addTodo, deleteTodo, updateTodo, setTodo } = useTodos(); 
 
 return ( 
   <div id="wd-todo-list-context"> 
     <h2>Todo List</h2> 
     <ListGroup> 
        <ListGroupItem> 
        <FormControl 
            style={{ maxWidth: "235px" }}
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            className="float-start" /> 
            <Button 
              onClick={addTodo}
              variant="success"
              className="float-end me-2">Add</Button>
            <Button 
              onClick={updateTodo}
              variant="warning"
              className="float-end me-2">Update</Button>
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
     <hr /> 
   </div> 
 ); 
} 