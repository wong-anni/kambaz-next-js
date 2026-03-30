"use client";
import { Form, FormLabel, FormControl, FormGroup, FormSelect, FormCheck } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { ListGroup, InputGroup } from "react-bootstrap";
import { LiaCalendar } from "react-icons/lia";
import { Button } from "react-bootstrap";
import { useParams } from "next/navigation";
import Link from "next/link";
import * as db from "../../../../database";
import { useSelector, useDispatch } from "react-redux"; 
import { RootState } from "../../../../store"; 
import { useState } from "react";
import { useRouter } from "next/navigation";
import { setAssignments, addAssignment, updateAssignment } from "../reducer";
import * as client from "../client";

type Assignment = {
  _id: string;
  title: string;
  course: string;
  available: string;
  due: string;
  points: number;
  description: string;
  assignmentGroup: string;
  display: string;
  type: string;
  options: string;
  assign: string;
  until: string;
};

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const { assignments } = useSelector((state: RootState) => state.assignmentsReducer) as { assignments: Assignment[] };
    const assignment = assignments.find((assignment: any) => assignment._id === aid);
    const { currentUser } = useSelector((state: RootState) => state.accountReducer);
    const isStudent = (currentUser as any)?.role === "STUDENT";
    // const assignments = db.assignments.filter((assignment: any) => assignment.course === cid);

    const dispatch = useDispatch();
    const router = useRouter();

    const [assignmentState, setAssignmentState] = useState({
        _id: aid,
        title: assignment?.title || "",
        course: cid,
        available: assignment?.available || "",
        due: assignment?.due || "",
        points: assignment?.points || 0,
        description: assignment?.description || "",

        assignmentGroup: assignment?.assignmentGroup || "ASSIGNMENTS",
        display: assignment?.display || "PERCENTAGE",
        type: assignment?.type || "ONLINE",
        options: assignment?.options || "Website URL",
        assign: assignment?.assign || "Everyone",

        until: assignment?.until || ""
    });

    const onCreateAssignmentForCourse = async () => { 
        if (!cid) return; 
        const assignment = await client.createAssignmentForCourse(cid as string, assignmentState); 
        dispatch(setAssignments([...assignments, assignment])); 
    }; 

    const onUpdateAssignment = async (assignment: any) => { 
        await client.updateAssignment(assignment); 
        const newAssignments = assignments.map((a: any) => a._id === assignment._id ? assignment : a ); 
        dispatch(setAssignments(newAssignments)); 
    }; 

    return (
        <div id="wd-assignments-editor">
            <Form>
                <FormGroup>
                    <FormLabel htmlFor="wd-name"><strong>Assignment Name</strong></FormLabel> 
                    <FormControl id="wd-name" disabled={isStudent} value={assignmentState.title} className="mb-4"
                        onChange={(e) => setAssignmentState({...assignmentState, title: e.target.value})} />
                </FormGroup>

                <FormGroup>
                    <FormControl as="textarea" id="wd-description" disabled={isStudent}  rows={13} className="mb-4"
                        value={assignmentState.description}
                        onChange={(e) => setAssignmentState({...assignmentState, description: e.target.value})} />
                </FormGroup>

                <FormGroup className="mb-4">
                <Row> 
                    <Col align="right" valign="top">
                        <FormLabel htmlFor="wd-points">Points</FormLabel>
                    </Col>
                    <Col>
                        <FormControl id="wd-points" disabled={isStudent} value={assignmentState.points}
                            onChange={(e) => setAssignmentState({...assignmentState, points: parseInt(e.target.value) || 0})} />
                    </Col>
                </Row>
                </FormGroup>

                <FormGroup className="mb-4">
                <Row> 
                    <Col align="right" valign="top">
                        <FormLabel htmlFor="wd-group">Assignment Group</FormLabel>
                    </Col>
                    <Col>
                        <FormSelect id="wd-group" disabled={isStudent} defaultValue={assignment?.assignmentGroup}
                            onChange={(e) => {
                                setAssignmentState({
                                        ...assignmentState,
                                        assignmentGroup: e.target.value
                                    });
                                }}>
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="A1">A1</option>
                            <option value="A2">A2</option>
                            <option value="A3">A3</option>
                        </FormSelect>
                    </Col>
                </Row>
                </FormGroup>

                <FormGroup className="mb-4">
                <Row> 
                    <Col align="right" valign="top">
                        <FormLabel htmlFor="wd-display-grade-as">Display Grade as</FormLabel>
                    </Col>
                    <Col>
                        <FormSelect id="wd-display-grade-as" disabled={isStudent} defaultValue={assignment?.display}
                            onChange={(e) => {
                            setAssignmentState({
                                    ...assignmentState,
                                    display: e.target.value
                                });
                            }}>
                            <option value="PERCENTAGE">Percentage</option>
                            <option value="Fraction">Fraction</option>
                            <option value="Letter">Letter</option>
                            <option value="Integer">Integer</option>
                        </FormSelect>
                    </Col>
                </Row>
                </FormGroup>

                
                <FormGroup className="mb-4">
                <Row> 
                    <Col align="right" valign="top">
                        <FormLabel htmlFor="wd-submission-type">Submission Type</FormLabel>
                    </Col>
                    <Col>
                    <ListGroup className="p-3 rounded-2 assignment-editor-subbox">
                        <FormSelect id="wd-submission-type" disabled={isStudent} className="mb-3" defaultValue={assignment?.type}
                            onChange={(e) => {
                            setAssignmentState({
                                ...assignmentState,
                                type: e.target.value
                                });
                            }}>
                            <option value="Online">Online</option>
                            <option value="Paper">Paper</option>
                        </FormSelect>
                    <Row>
                        <Col align="left" valign="top">
                            <FormLabel className="assignment-editor-spacing">
                                <strong>Online Entry Options</strong>
                            </FormLabel>
                        </Col>
                    </Row>
                    <Row>
                        <Col align="left" valign="top">
                            <span  style={{ display: "inline-flex", gap: "0.5rem"}}>
                            <FormCheck disabled={isStudent} type="checkbox" id="wd-text-entry" defaultChecked={assignment?.options === "Text Entry"} />
                            <FormLabel className="assignment-editor-spacing" 
                                        htmlFor="wd-text-entry">Text Entry</FormLabel>
                            </span>
                        </Col>
                    </Row>
                    <Row> 
                        <Col align="left" valign="top">
                            <span  style={{ display: "inline-flex", gap: "0.5rem" }}>
                            <FormCheck disabled={isStudent} type="checkbox" id="wd-website-url" defaultChecked={assignment?.options === "Website URL"} />
                            <FormLabel className="assignment-editor-spacing" 
                                        htmlFor="wd-website-url">Website URL </FormLabel>
                            </span>
                        </Col> 
                    </Row>
                    <Row>
                        <Col align="left" valign="top">
                            <span  style={{ display: "inline-flex", gap: "0.5rem" }}>
                            <FormCheck disabled={isStudent} type="checkbox" id="wd-media-recordings" defaultChecked={assignment?.options === "Media Recordings"} />
                            <FormLabel className="assignment-editor-spacing" 
                                        htmlFor="wd-media-recordings">Media Recordings</FormLabel>
                            </span>
                        </Col> 
                    </Row> 
                    <Row> 
                        <Col align="left" valign="top"> 
                            <span  style={{ display: "inline-flex", gap: "0.5rem" }}>
                            <FormCheck disabled={isStudent} type="checkbox" id="wd-student-annotation" defaultChecked={assignment?.options === "Student Annotation"} />
                            <FormLabel className="assignment-editor-spacing" 
                                        htmlFor="wd-student-annotation">Student Annotation</FormLabel>
                            </span>
                        </Col> 
                    </Row> 
                    <Row> 
                        <Col align="left" valign="top"> 
                            <span  style={{ display: "inline-flex", gap: "0.5rem" }}>
                            <FormCheck disabled={isStudent} type="checkbox" id="wd-file-upload" defaultChecked={assignment?.options === "File Uploads"} />
                            <FormLabel className="assignment-editor-spacing" 
                                        htmlFor="wd-file-upload">File Uploads</FormLabel>
                            </span>
                        </Col>
                    </Row>
                </ListGroup>

                    </Col>
                </Row>
                </FormGroup>
                

                <FormGroup className="mb-3">
                <Row>
                    <Col align="right" valign="top">
                        <FormLabel>Assign</FormLabel>
                    </Col>    
                    <Col align="left" valign="top">
                        <ListGroup className="p-3 rounded-2 assignment-editor-subbox" >
                        <FormLabel htmlFor="wd-assign-to"><strong>Assign To</strong></FormLabel>

                <Row>
                    <Col align="left" valign="top">
                        <FormSelect id="wd-assign-to" disabled={isStudent} defaultValue={assignment?.assign} className="assignment-editor-spacing"
                            onChange={(e) => {
                                setAssignmentState({
                                    ...assignmentState,
                                    assign: e.target.value
                                });
                            }}> 
                            <option value="assign-to">Everyone</option> 
                        </FormSelect>
                    </Col>    
                </Row>                

                <Row>
                    <Col align="left" valign="top">
                        <FormLabel htmlFor="wd-due-date"><strong>Due</strong></FormLabel>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <InputGroup className="assignment-editor-spacing">
                        <FormControl id="wd-due-date" disabled={isStudent}
                               value={assignmentState.due} onChange={(e) => setAssignmentState({...assignmentState, due: e.target.value})} /> 
                        <InputGroup.Text>  <LiaCalendar /> </InputGroup.Text>
                    </InputGroup>
                    </Col>
                </Row>

                <Row>
                    <Col align="left" valign="top">
                        <FormLabel htmlFor="wd-available-from"><strong>Available From</strong></FormLabel>
                    </Col>
                    <Col align="left" valign="top">
                        <FormLabel htmlFor="wd-available-until"><strong>Until</strong></FormLabel>
                    </Col>
                </Row>
                <Row>
                    <Col align="left" valign="top">
                        <InputGroup className="assignment-editor-spacing">
                            <FormControl id="wd-available-from" disabled={isStudent}
                               value={assignmentState.available} onChange={(e) => setAssignmentState({...assignmentState, available: e.target.value})} />
                            <InputGroup.Text> <LiaCalendar /> </InputGroup.Text>
                        </InputGroup>
                    </Col>
                    <Col align="left" valign="top">
                        <InputGroup className="assignment-editor-spacing">
                            <FormControl id="wd-available-until" disabled={isStudent}
                            value={assignmentState.until} onChange={(e) => setAssignmentState({...assignmentState, until: e.target.value})}/>
                            <InputGroup.Text> <LiaCalendar /> </InputGroup.Text>
                        </InputGroup>
                    </Col>
                </Row>
                </ListGroup>
                </Col>
                </Row>
                </FormGroup>

                
            
            <hr />
            <Row>
                <Col align="right">
                    <Button variant="danger" size="lg" className="me-1 float-end"
                        onClick={async () => {
                            if (aid === "new") {
                            await onCreateAssignmentForCourse();
                            } else {
                            await onUpdateAssignment(assignmentState);
                            }

                            router.push(`/courses/${cid}/assignments`);
                    }}>
                        Save
                    </Button>
                    <Button variant="secondary" size="lg" className="me-1 float-end"
                        onClick={() => {
                            router.push(`/courses/${cid}/assignments`);
                        }}>
                        Cancel
                    </Button>                          
                </Col>
            </Row>
            </Form>
        </div>
);}
