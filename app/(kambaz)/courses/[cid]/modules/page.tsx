"use client";
import { v4 as uuidv4 } from "uuid"; 
import { useState } from "react"; 
import { useParams } from "next/navigation";
import * as db from "../../../database";
import ModulesControls from "./ModulesControls";
import { ListGroup, ListGroupItem, FormControl } from "react-bootstrap";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";

// import reducer functions to add, delete, and update modules 
import { addModule, editModule, updateModule, deleteModule } from "./reducer"; 
import { useSelector, useDispatch } from "react-redux"; 
import { RootState } from "../../../store";

export default function Modules() { 
  const { cid } = useParams();
  // const [modules, setModules] = useState<any[]>(db.modules); 

  const [moduleName, setModuleName] = useState(""); 
  // const addModule = () => { 
  //   setModules([ ...modules, { _id: uuidv4(), name: moduleName, course: cid, lessons: [] } ]); 
  //   setModuleName(""); 
  // }; 

  // const deleteModule = (moduleId: string) => { 
  //   setModules(modules.filter((m) => m._id !== moduleId)); 
  // };

  // // set the module's editing flag to true so that we can display 
  // // the input field to edit name update any field(s) of a module
  // const editModule = (moduleId: string) => { 
  //   setModules(modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m))); 
  // }; 
  // const updateModule = (module: any) => { 
  //   setModules(modules.map((m) => (m._id === module._id ? module : m))); 
  // };

  // retrieve modules state variables
  const { modules } = useSelector((state: RootState) => state.modulesReducer);
  // get dispatch to call reducer functions
  const dispatch = useDispatch();

  return ( 
    <div> 
      <ModulesControls  setModuleName={setModuleName} moduleName={moduleName} 
        addModule={() => { 
            dispatch(addModule({ name: moduleName, course: cid })); 
            setModuleName("");
        }}/>
      <br /><br /><br /><br />
      <ListGroup id="wd-modules" className="rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <ListGroupItem key={module._id} className="wd-module p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary"> 
              <BsGripVertical className="me-2 fs-3" /> 
              
              {/* // show name if not editing  */}
              {!module.editing && module.name}         
              {/* // show input field if editing                                          */}
              { module.editing && ( 
                <FormControl className="w-50 d-inline-block" 
                      onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))} 
                      onKeyDown={(e) => { 
                        if (e.key === "Enter") { 
                          dispatch(updateModule({ ...module, editing: false })); 
                        } 
                      }} 
                      defaultValue={module.name}/> 
              )} 
              <ModuleControlButtons 
                  moduleId={module._id} 
                  deleteModule={(moduleId) => { 
                    dispatch(deleteModule(moduleId)); 
                  }} 
                  editModule={(moduleId) => dispatch(editModule(moduleId))} /> </div> 
            {module.lessons && ( 
              <ListGroup className="wd-lessons rounded-0"> 
                {module.lessons.map((lesson: any) => ( 
                  <ListGroupItem key={lesson._id} className="wd-lesson p-3 ps-1"> 
                    <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                  </ListGroupItem>
                   ))}</ListGroup>)}</ListGroupItem>

        ))}
      </ListGroup>
    </div> 
);}