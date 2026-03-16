import { ListGroupItem, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";                       // import useDispatch to invoke reducer functions 
import { deleteTodo, setTodo } from "./todosReducer";            // deleteTodo and setTodo
// Define the Todo type
type Todo = {
  id: string;
  title: string;
};

// Define props type
type TodoItemProps = {
  todo: Todo;
};

export default function TodoItem({ todo,  }: TodoItemProps                       // remove dependency with parent component
//                                                               // create dispatch instance to invoke reducer functions
//     , deleteTodo, setTodo }: {                                       // breaks out todo item
//   todo: { id: string; title: string };                               // todo to render 
//   deleteTodo: (id: string) => void;                                  // event handler to remove todo
//   setTodo: (todo: { id: string; title: string }) => void;            // event handler to select todo
) { 
    const dispatch = useDispatch();
  return ( 
    <ListGroupItem key={todo.id}>
      <Button onClick={() => dispatch(deleteTodo(todo.id))}      // invoke delete todo with ID, wrap reducer functions with dispatch
              id="wd-delete-todo-click"
              className="float-end"
              variant="danger"> Delete </Button> 
      <Button onClick={() => dispatch(setTodo(todo))}            // invoke select todo 
              id="wd-set-todo-click"
              className="float-end me-2"
              variant="primary"> Edit </Button> 
      {todo.title}    </ListGroupItem>);}                        // render todo's title 
