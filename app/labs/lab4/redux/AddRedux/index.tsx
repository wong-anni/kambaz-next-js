import { FormControl, Button} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";         // to read/write to reducer
import { useState } from "react";                               // to maintain a and b parameters in UI
import { add } from "./addReducer"; 
import { RootState } from "../../store";

export default function AddRedux() { 
  const [a, setA] = useState(12); 
  const [b, setB] = useState(23);                               // a and b state variables to edit
  const { sum } = useSelector((state: RootState) =>             // parameters to add in the reducer
state.addReducer);                                              // read the sum state variable from the reducer
  const dispatch = useDispatch();                               // dispatch to call add redux function
  return ( 
    <div className="w-25" id="wd-add-redux">                    
      <h1>Add Redux</h1> 
      <h2>{a} + {b} = {sum}</h2> 
      <FormControl type="number" defaultValue={a}               // update the local component state variable a 
        onChange={(e) => setA(parseInt(e.target.value))} /> 
      <FormControl type="number" defaultValue={b}               // update the local component state variable b
        onChange={(e) => setB(parseInt(e.target.value))} /> 
      <Button id="wd-add-redux-click"                           // on click, call add reducer function compute the arithmetic addition of a and b, and store in application state variable, sum
              onClick={() => dispatch(add({ a, b }))}>         
        Add Redux  
      </Button>                                 
      <hr/> 
    </div> 
  ); 
}