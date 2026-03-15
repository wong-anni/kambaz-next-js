// import useState
import { useState } from "react";
import { useSelector } from "react-redux"; 
import { RootState } from "./store"; 
import { ListGroup,  ListGroupItem } from "react-bootstrap";

export default function ArrayStateVariable() { 
    // declare array state 
    // event handler appends random number at end of array 
    // event handler removes element by index
    const [array, setArray] = useState([1, 2, 3, 4, 5]); 
    const addElement = () => { 
        setArray([...array, Math.floor(Math.random() * 100)]); 
    };
    const deleteElement = (index: number) => { 
        setArray(array.filter((item, i) => i !== index)); 
    };


    const { todos } = useSelector((state: RootState) => state.todosReducer);

    
    return ( 
        <div id="wd-array-state-variables"> 
            <h2>Array State Variable</h2> 
            {/* // button calls addElement to append to array iterate over array items */}
            <button onClick={addElement}>Add Element</button> 
            <ul> 
                {array.map((item, index) => ( 
                <li key={index}> {item} 
                    <button onClick={() => deleteElement(index)}> 
                    Delete
                    </button> 
                </li>))} 
            </ul>
        <hr/>
        <ListGroup> 
        {todos.map((todo: any) => ( 
          <ListGroupItem key={todo.id}> 
            {todo.title} 
          </ListGroupItem> 
        ))} 
      </ListGroup> 
      <hr />
        </div>);}

// render item's value 
// button to delete element 
// by its index