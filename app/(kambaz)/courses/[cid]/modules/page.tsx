"use client";
import { v4 as uuidv4 } from "uuid"; 
import { useState, useEffect } from "react"; 
import * as client from "../../client"; 
import { useParams } from "next/navigation";
import * as db from "../../../database";
import ModulesControls from "./ModulesControls";
import { ListGroup, ListGroupItem, FormControl } from "react-bootstrap";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";

// import reducer functions to add, delete, and update modules 
import { addModule, editModule, updateModule, deleteModule, setModules } from "./reducer"; 
import { useSelector, useDispatch } from "react-redux"; 
import { RootState } from "../../../store";

export default function Modules() { 
  const params = useParams();
  const cid = Array.isArray(params.cid) ? params.cid[0] : params.cid;

  const [moduleName, setModuleName] = useState(""); 

  const { currentUser } = useSelector((state: RootState) => state.accountReducer) as any; 
  const role = (currentUser as any).role;
  const isStudent = role === "STUDENT";

  // retrieve modules state variables
  const { modules } = useSelector((state: RootState) => state.modulesReducer);
  // get dispatch to call reducer functions
  const dispatch = useDispatch();

  const fetchModules = async () => { 
    const modules = await client.findModulesForCourse(cid as string); 
    dispatch(setModules(modules)); 
  }; 

  const onCreateModuleForCourse = async () => { 
    if (!cid) return; 
    const newModule = { name: moduleName, course: cid }; 
    const newCreatedModule = await client.createModuleForCourse(cid, newModule); 
    dispatch(setModules([...modules, newCreatedModule])); 
  }; 

  const onRemoveModule = async (moduleId: string) => { 
    await client.deleteModule(cid, moduleId); 
    dispatch(setModules(modules.filter((m: any) => m._id !== moduleId))); 
  }; 

  const onUpdateModule = async (module: any) => { 
    await client.updateModule(cid, module); 
    const newModules = modules.map((m: any) => m._id === module._id ? module : m ); 
    dispatch(setModules(newModules)); 
  }; 

  useEffect(() => { 
    fetchModules(); 
  }, []); 

  return ( 
    <div> 
      <ModulesControls  isStudent={isStudent} setModuleName={setModuleName} moduleName={moduleName} addModule={onCreateModuleForCourse}/>
      <br /><br /><br /><br />
      <ListGroup id="wd-modules" className="rounded-0">
        {modules
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
                          onUpdateModule({ ...module, editing: false });
                        } 
                      }} 
                      defaultValue={module.name}/> 
              )} 
              <ModuleControlButtons 
                  moduleId={module._id} 
                  isStudent={isStudent}
                  deleteModule={(moduleId) => onRemoveModule(moduleId)}
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