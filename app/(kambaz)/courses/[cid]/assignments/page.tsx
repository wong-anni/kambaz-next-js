"use client";

import Link from "next/link"; 
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import AssignmentControls from "./AssignmentControls";
import AssignmentItemControlButtons from "./AssignmentItemControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { LuNotebookPen } from "react-icons/lu";
import GradePercentage from "./GradePercentage";
import { IoEllipsisVertical } from "react-icons/io5"; 
import { FaPlus } from "react-icons/fa6";
import { useParams } from "next/navigation";
import * as db from "../../../database";

import { useState, useEffect } from "react";
import * as client from "./client";
import { setAssignments, addAssignment, deleteAssignment, updateAssignment, editAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux"; 
import { RootState } from "../../../store"; 

export default function Assignments() { 
    const { cid } = useParams();
    const { assignments } = useSelector((state: RootState) => state.assignmentsReducer); 
    const { currentUser } = useSelector((state: RootState) => state.accountReducer); 
    const role = (currentUser as any).role;
    const isStudent = role === "STUDENT";
    const dispatch = useDispatch();

    const fetchAssignments = async () => { 
        const assignments = await client.findAssignmentsForCourse(cid as string); 
        dispatch(setAssignments(assignments)); 
    }; 

    const onRemoveAssignment = async (assignmentId: string) => { 
        await client.deleteAssignment(assignmentId); 
        dispatch(setAssignments(assignments.filter((a: any) => a._id !== assignmentId))); 
        };

    useEffect(() => { 
        fetchAssignments(); 
    }, []); 
    return (  
        <div>
        <AssignmentControls isStudent={isStudent} cid={cid as string} /><br /><br /><br />
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

            <ListGroup id="wd-assignments-list" className="rounded-0"> 
                {assignments
                .map((assignment: any) => (
                    <ListGroupItem key={assignment._id} 
                        id="wd-assignment-list-item" 
                        className="wd-assignment-list-item p-3 ps-1 d-flex align-items-center"> <BsGripVertical className="me-2 fs-3" /> <LuNotebookPen className="me-3 fs-3" style={{ color:"green"}} />
                        <div className="d-flex flex-column">
                            <Link href={`/courses/${cid}/assignments/${assignment._id}`}
                                className="wd-assignment-link mb-0 text-decoration-none text-black" > 
                                {assignment.title}
                            </Link> 
                            <span className="wd-assignment-subtitle">
                                <span className="multiple-modules">Multiple Modules</span> | <strong>Not available until</strong> {assignment.available} | 
                            </span>
                            <span className="wd-assignment-subtitle">
                                <strong>Due </strong>{assignment.due} | {assignment.points} pts
                            </span>
                        </div>
                        <div className="ms-auto d-flex align-items-center gap-2">
                                <AssignmentItemControlButtons isStudent={isStudent} assignmentID={assignment._id}
                                    deleteAssignment={(assignmentID) => onRemoveAssignment(assignmentID)} />
                        </div>
                    </ListGroupItem> 
                ))}
                </ListGroup>
            </ListGroupItem> 
        </ListGroup > 
        </div>
);} 
