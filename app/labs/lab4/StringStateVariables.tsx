// import useState
import { useState } from "react"; 
import { FormControl } from "react-bootstrap"; 

export default function StringStateVariables() { 
  // declare and initialize state variable
  const [firstName, setFirstName] = useState("John"); 
  return ( 
    <div> 
      <h2>String State Variables</h2> 
      <p>{firstName}</p> 
      <FormControl 
        defaultValue={firstName} 
        onChange={(e) => setFirstName(e.target.value)}/> 
<hr/></div>);}

// render string 
// state variable 
// initialize a 
// text input field with the state variable 
// update the state variable at each key stroke 