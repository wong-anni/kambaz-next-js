import { ListGroupItem, Button, FormControl } from "react-bootstrap";
import React from "react"; 
import { useSelector, useDispatch } from "react-redux";             // import useSelector, useDispatch to read/write to reducer
import { addTodo, updateTodo, setTodo } from "./todosReducer";      // reducer functions remove dependency from parent component
import { RootState } from "../../store";

export default function TodoForm(
//   { todo, setTodo, addTodo, updateTodo }: {                                     // breaks out todo form
//   todo: { id: string; title: string };                                          // todo to be added or edited
//   setTodo: (todo: { id: string; title: string }) => void;                       // event handler to update todo's title
//   addTodo: (todo: { id: string; title: string }) => void;                       // event handler to add new todo
//   updateTodo: (todo: { id: string; title: string }) => void;                    // event handler to update todo
// }
) { 
  const { todo } = useSelector((state: RootState) => state.todosReducer); 
  const dispatch = useDispatch();               // retrieve todo from reducer create dispatch instance to invoke reducer functions
  return ( 
    <ListGroupItem className="d-flex align-items-center gap-2">    
      <FormControl value={todo.title}                                    // update title on each key stroke
        onChange={ (e) => dispatch(setTodo({ ...todo, title: e.target.value })) }/> 
      
      <Button onClick={() => dispatch(updateTodo(todo))}                           // invoke update todo
              id="wd-update-todo-click"
              variant="warning"
              className="float-end me-2"> Update </Button> 

      <Button onClick={() => dispatch(addTodo(todo))}                    // invoke add new todo, wrap reducer functions with dispatch
              id="wd-add-todo-click"
              variant="success"
              className="float-end"> Add </Button>                             
        
      
    </ListGroupItem> 
);} 



