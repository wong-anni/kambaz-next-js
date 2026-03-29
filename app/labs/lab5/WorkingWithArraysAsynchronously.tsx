import { ListGroup, ListGroupItem } from "react-bootstrap";
import React, { useState, useEffect } from "react"; 
import * as client from "./client"; 

type Assignment = {
  title: string;
  description: string;
  due: string;
  completed: boolean;
};

export default function WorkingWithArraysAsynchronously() { 
//   const [todos, setTodos] = useState<any[]>([]); 
  const [todos, setTodos] = useState<Assignment>({
    title: "",
    description: "",
    due: "",
    completed: false,
  }); 
  const fetchTodos = async () => { 
    const todos = await client.fetchTodos(); 
    setTodos(todos); 
  }; 
//   useEffect(() => { 
//     fetchTodos(); 
//   }, []); 
    useEffect(() => { 
    const fetchData = async () => {
        const todo = await client.fetchTodos();
        setTodos(todo);
    };
    fetchData();
    }, []);
  return ( 
    <div id="wd-asynchronous-arrays"> 
      <h3>Working with Arrays Asynchronously</h3> 
      <h4>Todos</h4> 
      <ListGroup> 
        {todos.map((todo) => ( 
          <ListGroupItem key={todo.id}> 
            <input type="checkbox" className="form-check-input me-2" 
                   defaultChecked={todo.completed}/> 
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
              {todo.title} </span> 
          </ListGroupItem> 
        ))} 
      </ListGroup> <hr /> 
    </div> 
);} 