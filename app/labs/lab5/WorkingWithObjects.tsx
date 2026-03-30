"use client";
import { Form, FormControl } from "react-bootstrap";
import React, { useState } from "react"; 
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER; 

export default function WorkingWithObjects() { 
    const [assignment, setAssignment] = useState({ 
        id: 1, title: "NodeJS Assignment", 
        description: "Create a NodeJS server with ExpressJS", 
        due: "2021-10-10", completed: false, score: 0, 
    }); 
    const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`

    // module state variable
    const [module, setModule] = useState({ 
        id: 1, 
        name: "Web Development", 
        description: "Create a full-stack web application", 
        course: "CS4450",
    });
    // non-hardcoded environment variable 
    const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`
  return ( 
    <div id="wd-working-with-objects"> 
      <h3>Working With Objects</h3> 
      <h4>Retrieving Objects</h4> 
      <a id="wd-retrieve-assignments" className="btn btn-primary" 
         href={`${HTTP_SERVER}/lab5/assignment`}> 
        Get Assignment 
      </a><hr/> 

      <h4>Retrieving Properties</h4> 
      <a id="wd-retrieve-assignment-title" className="btn btn-primary" 
         href={`${HTTP_SERVER}/lab5/assignment/title`}> 
        Get Title 
      </a><hr/> 

      <h4>Modifying Properties</h4> 
      {/* // encode the title in the URL that updates the title  */}
      <a id="wd-update-assignment-title" 
         className="btn btn-primary float-end" 
         href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}> 
         Update Title </a> 
      <FormControl className="w-75 mb-2" id="wd-assignment-title" 
        defaultValue={assignment.title} onChange={(e) => 
            setAssignment({ ...assignment, title: e.target.value })}/> 
        
      <a id="wd-update-assignment-score" 
         className="btn btn-primary float-end" 
         href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}> 
         Update Score </a> 
      <FormControl className="w-75 mb-2" id="wd-assignment-score" 
        defaultValue={assignment.score} onChange={(e) => 
            setAssignment({ ...assignment, score: e.target.value === "" ? 0 : parseInt(e.target.value) })}/>

      <a id="wd-update-assignment-completed" 
         className="btn btn-primary float-end" 
         href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}> 
         Update Completed </a> 
      <Form.Check type="checkbox"
        label="completed"
        className="w-75" id="wd-assignment-completed" 
        checked={assignment.completed} 
        onChange={(e) => 
            setAssignment({ ...assignment, completed: e.target.checked })}/>
      <hr />


      <h3>Working with Modules</h3> 
      <h4>Retrieving Module Object</h4>
      {/* a link labeled Get Module that retrieves the module object from the server mapped at /lab5/module */}
      <a id="wd-retrieve-module" className="btn btn-primary" 
         href={`${HTTP_SERVER}/lab5/module`}> 
        Get Module 
      </a><hr/>
      
      <h4>Retrieving Module Properties</h4>
      <a id="wd-retrieve-module-name" className="btn btn-primary" 
         href={`${HTTP_SERVER}/lab5/module/name`}> 
        Get Module Name 
      </a><hr/> 

      <h4>Updating Module Properties</h4>
      <a id="wd-retrieve-module-name" className="btn btn-primary float-end"
         href={`${MODULE_API_URL}/name/${module.name}`}> 
        Update Name 
      </a>
      <FormControl className="w-50 mb-2" id="wd-module-name" 
        defaultValue={module.name} onChange={(e) => 
            setModule({ ...module, name: e.target.value })}/>

      <a id="wd-retrieve-module-description" className="btn btn-primary float-end"
         href={`${MODULE_API_URL}/description/${module.description}`}> 
        Update Description 
      </a>
      <FormControl className="w-50" id="wd-module-description" 
        defaultValue={module.description} onChange={(e) => 
            setModule({ ...module, description: e.target.value })}/>
        <hr/> 

    </div> 
);} 