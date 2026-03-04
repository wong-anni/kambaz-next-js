import { useState } from "react"; 
import { FormControl } from "react-bootstrap"; 

export default function ObjectStateVariable() { 
    // declare and initialize object state 
    // variable with multiple fields
    const [person, setPerson] = useState({ name: "Peter", age: 24 }); 
    return ( 
        <div> 
            <h2>Object State Variables</h2> 
            {/* //The HTML <pre> tag is used for displaying preformatted text */}
            <pre>{JSON.stringify(person, null, 2)}</pre> 
            <FormControl 
                defaultValue={person.name} 
                onChange={(e) => setPerson({ ...person, name: e.target.value })}/> 
            <FormControl 
                defaultValue={person.age} type="number" 
                onChange={(e) => setPerson({ ...person, age: parseInt(e.target.value) })} /> 
        <hr/> 
        </div> 
    ); 
} 

// display raw JSON 
// initialize input field with an object's 
// field value 
// update field as user types. copy old 
// object, override specific field with new 
// value 
// update field as user types. copy old 
// object, 
// override specific field with new value 