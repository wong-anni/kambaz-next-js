"use client" 

// function expects a and b 
const add = (a: number, b: number) => { 
  alert(`${a} + ${b} = ${a + b}`); 
}; 

// noticed the syntax wont create an infinite loop: onClick={() => add(2, 3)}
// -- Make sure to wrap the function call in a closure 
// but this syntax will cause it:  onClick={add(2, 3)} 
export default function PassingDataOnEvent() { 
  return ( 
    <div id="wd-passing-data-on-event"> 
      <h2>Passing Data on Event</h2> 
      <button onClick={() => add(2, 3)}
              className="btn btn-primary" 
              id="wd-pass-data-click">
            Pass 2 and 3 to add() 
      </button> 
      <hr/> 
    </div> 
);} 