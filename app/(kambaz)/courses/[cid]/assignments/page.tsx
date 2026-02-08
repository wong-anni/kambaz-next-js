import Link from "next/link"; 
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import AssignmentControls from "./AssignmentControls";
import AssignmentItemControlButtons from "./AssignmentItemControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { LuNotebookPen } from "react-icons/lu";
import GradePercentage from "./GradePercentage";
import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5"; 
import { FaPlus } from "react-icons/fa6";

export default function Assignments() { 
    return (  
        <div>
        <AssignmentControls /><br /><br /><br />
        <ListGroup className="rounded-0" id="wd-assignments">

            <ListGroupItem className="wd-assignment p-0 mb-5 fs-5 border-gray"> 

            <div id="wd-assignments-title" className="p-3 ps-2 bg-secondary"> 
                <BsGripVertical className="me-0 fs-3" /> <IoMdArrowDropdown className="me-2 fs-3" />
                <strong>ASSIGNMENTS</strong> 
                <div className="d-flex align-items-center float-end"> 
                    <GradePercentage /> 
                    <FaPlus className="me-2" /> 
                    <IoEllipsisVertical className="fs-4 me-0" />
                </div>           
            </div>                 

            <ListGroup id="wd-assignment-list" className="rounded-0"> 
                
                <ListGroupItem className="wd-assignment-list-item p-3 ps-1 d-flex align-items-center"> <BsGripVertical className="me-2 fs-3" /> <LuNotebookPen className="me-3 fs-3" style={{ color:"green"}} />
                    <div className="d-flex flex-column">
                        <Link href="/courses/1234/assignments/123" 
                            className="wd-assignment-link" > 
                            <strong>A1</strong>
                        </Link> 
                        <span className="wd-assignment-subtitle">
                            <span style={{color:"#ca1313"}}>Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am | 
                        </span>
                        <span className="wd-assignment-subtitle">
                            <strong>Due </strong>May 13 at 11:59pm | 100 pts
                        </span>
                    </div>
                    <div className="ms-auto d-flex align-items-center gap-2">
                            <AssignmentItemControlButtons />
                    </div>
                </ListGroupItem> 
                
                <ListGroupItem className="wd-assignment-list-item p-3 ps-1 d-flex align-items-center"> <BsGripVertical className="me-2 fs-3" /> <LuNotebookPen className="me-3 fs-3" style={{ color:"green"}} />
                    <div className="d-flex flex-column">
                    <Link href="/courses/1234/assignments/123" 
                          className="wd-assignment-link" > 
                        <strong>A2 </strong>  
                    </Link>
                    <span className="wd-assignment-subtitle">
                        <span style={{color:"#ca1313"}}>Multiple Modules</span> | <strong>Not available until</strong> May 13 at 12:00am | 
                    </span>
                    <span className="wd-assignment-subtitle">
                        <strong>Due </strong>May 20 at 11:59pm | 100 pts 
                    </span>
                    </div>
                    <div className="ms-auto d-flex align-items-center gap-2">
                        <AssignmentItemControlButtons />
                    </div>
                </ListGroupItem>

                <ListGroupItem className="wd-assignment-list-item p-3 ps-1 d-flex align-items-center"> <BsGripVertical className="me-2 fs-3" /> <LuNotebookPen className="me-3 fs-3" style={{ color:"green"}} />
                    <div className="d-flex flex-column">
                    <Link href="/courses/1234/assignments/123" 
                          className="wd-assignment-link" > 
                        <strong>A3 </strong>  
                    </Link>
                    <span className="wd-assignment-subtitle">
                        <span style={{color:"#ca1313"}}>Multiple Modules</span> | <strong>Not available until</strong> May 20 at 12:00am | 
                    </span>
                    <span className="wd-assignment-subtitle">
                        <strong>Due </strong>May 27 at 11:59pm | 100 pts 
                    </span>
                    </div>
                    <div className="ms-auto d-flex align-items-center gap-2">
                        <AssignmentItemControlButtons />
                    </div>
                </ListGroupItem>
            </ListGroup>
            </ListGroupItem> 
        </ListGroup > 
        </div>
);} 
