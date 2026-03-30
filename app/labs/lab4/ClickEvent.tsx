"use client"                                // declare a function to handle the event 
const hello = () => {  
  alert("Hello World!"); 
}; 
const lifeIs = (good: string) => { 
  alert(`Life is ${good}`); 
}; 
export default function ClickEvent() { 
  return ( 
    <div id="wd-click-event"> 
      <h2>Click Event</h2> 
      <button onClick={hello} className="btn btn-primary me-1" id="wd-hello-world-click">         {/* // configure the function call */}
        Hello World!</button> 
      <button onClick={() => lifeIs("Good!")} 
              className="btn btn-primary me-1"                  
              id="wd-life-is-good-click"> 
        Life is Good!</button>                                   {/* // wrap in {} if you need more than one line of code */}
      <button onClick={() => {                                   {/* // calling hello() */}
                hello();                                         {/* // calling lifeIs() */}
                lifeIs("Great!"); 
              }} 
              className="btn btn-primary"
              id="wd-life-is-great-click"> 
        Life is Great! 
      </button> 
      <hr/> 
    </div> 
);}