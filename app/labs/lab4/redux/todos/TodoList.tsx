import { useState } from "react";                                             // import useState
import { ListGroup, ListGroupItem, Button, FormControl } from "react-bootstrap";

import TodoForm from "./TodoForm"; 
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";                                   // import useSelector to retrieve data from reducer
import { RootState } from "../../store"; 

export default function TodoList() { 
     const { todos } = useSelector((state: RootState) =>                      // extract todos from reducer and remove
state.todosReducer);                                                          // all other event handlers

//   const [todos, setTodos] = useState([                                        // create todos array state variable
//     { id: "1", title: "Learn React" },                                        // initialize with 2 todo objects
//     { id: "2", title: "Learn Node"  }]); 
//   const [todo, setTodo] = useState({ id: "-1", title: "Learn Mongo" });       // create todo state variable object
//   const addTodo = (todo: any) => {                                            // event handler to add new todo
//     const newTodos = [ ...todos, { ...todo,                                   // spread existing todos, append new todo,
//       id: new Date().getTime().toString() }];                                 // override id 
//     setTodos(newTodos);                                                       // update todos 
//     setTodo({id: "-1", title: ""});                                           // clear the todo
//   }; 
//   const deleteTodo = (id: string) => {                                        // event handler to remove
//     const newTodos = todos.filter((todo) => todo.id !== id);                  // todo by their ID
//     setTodos(newTodos); 
//   }; 
//   const updateTodo = (todo: any) => {                                         // event handler to
//     const newTodos = todos.map((item) =>                                      // update todo by
//       (item.id === todo.id ? todo : item));                                   // replacing todo
//     setTodos(newTodos);                                                       // by their ID
//     setTodo({id: "-1", title: ""}); 
//   }; 
  return ( 
    <div id="wd-todo-list-redux"> 
      <h2>Todo List</h2> 
      <ListGroup> 
         <TodoForm /> 
        {todos.map((todo: any) => ( 
          <TodoItem todo={todo} /> 
        ))}
        
        {/* <TodoForm 
          todo={todo} 
          setTodo={setTodo} 
          addTodo={addTodo} 
          updateTodo={updateTodo}/> 
        {todos.map((todo) => ( 
          <TodoItem 
            todo={todo} 
            deleteTodo={deleteTodo} 
            setTodo={setTodo} /> 
        ))}  */}

        {/* <ListGroupItem> 
          <Button onClick={() => addTodo(todo)}                              
                  id="wd-add-todo-click"> Add </Button> 
          <Button onClick={() => updateTodo(todo)} 
                  id="wd-update-todo-click"> Update </Button> 
          <FormControl value={todo.title} 
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}/> 
        </ListGroupItem> 
        {todos.map((todo) => ( 
          <ListGroupItem key={todo.id}> 
            <Button onClick={() => deleteTodo(todo.id)} 
                    id="wd-delete-todo-click"> Delete </Button> 
            <Button onClick={() => setTodo(todo)} 
                    id="wd-set-todo-click"> Edit </Button> 
            {todo.title} 
          </ListGroupItem> 
        ))}  */}
      </ListGroup>
      <hr/> 
</div>);}

// input field to update todo's title 
// for every keystroke update the todo's title, 
// but copy old values first 
// render all todos as line items 
// button to delete todo by their ID

//--------------

// TodoForm breaks out form to add or update todo 
// pass state variables and event handlers 
// so component can communicate with TodoList's data and functions 
 
// TodoItem breaks out todo item 
// pass state variables and event handlers to 
// communicate with TodoList's data and functions

//--------------

// remove unnecessary attributes 
 
// remove unnecessary attributes, 
// but still pass the todo