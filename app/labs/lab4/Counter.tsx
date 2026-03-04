import { useState } from "react"; 

export default function Counter() { 
    // let count = 7; 
    const [count, setCount] = useState(7);  // create and initialize state variable     
    console.log(count);  //prints changes to the console
    return ( 
        <div id="wd-counter-use-state"> 
            {/* <h2>Counter: {count}</h2> 
            <button 
                onClick={() => { count++; console.log(count); }}    // variable updates on console, but fails to update the DOM 
                className="btn btn-success me-1"
                id="wd-counter-up-click">Up</button> 
            <button 
                onClick={() => { count--; console.log(count); }} 
                className="btn btn-danger"
                id="wd-counter-down-click">Down</button> 
            <hr/> */}
            <h2>Counter: {count}</h2> 
            <button 
                onClick={() => setCount(count + 1)}    // variable updates on console, updates the DOM by using useState hook
                className="btn btn-success me-1"
                id="wd-counter-up-click">Up</button> 
            <button 
                onClick={() => setCount(count + 1)} 
                className="btn btn-danger"
                id="wd-counter-down-click">Down</button> 
            <hr/>
        </div>
    );
}

// render state variable 
// handle events and update 
// state variable with mutator 
// now updates to the state 
// state variable do update the 
// DOM as desired