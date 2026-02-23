"use client";
import { Form, FormLabel, FormControl, FormGroup, FormSelect, FormCheck } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { ListGroup, InputGroup } from "react-bootstrap";
import { LiaCalendar } from "react-icons/lia";
import { Button } from "react-bootstrap";
import { useParams } from "next/navigation";
import Link from "next/link";
import * as db from "../../../../database";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const assignments = db.assignments.filter((assignment: any) => assignment.course === cid);
    const assignment = assignments.find((assignment: any) => assignment._id === aid);
    return (
        <div id="wd-assignments-editor">
            <Form>
                <FormGroup>
                    <FormLabel htmlFor="wd-name"><strong>Assignment Name</strong></FormLabel> 
                    <FormControl id="wd-name" defaultValue={assignment?.title} className="mb-4" />
                </FormGroup>

                <FormGroup>
                    <FormControl as="textarea" id="wd-description"  rows={13} className="mb-4"
                        defaultValue={assignment?.description} />
                </FormGroup>

                <FormGroup className="mb-4">
                <Row> 
                    <Col align="right" valign="top">
                        <FormLabel htmlFor="wd-points">Points</FormLabel>
                    </Col>
                    <Col>
                        <FormControl id="wd-points" defaultValue={assignment?.points} />
                    </Col>
                </Row>
                </FormGroup>

                <FormGroup className="mb-4">
                <Row> 
                    <Col align="right" valign="top">
                        <FormLabel htmlFor="wd-group">Assignment Group</FormLabel>
                    </Col>
                    <Col>
                        <FormSelect id="wd-group" defaultValue={assignment?.assignmentGroup}>
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
                        <FormSelect id="wd-display-grade-as" defaultValue={assignment?.display}>
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
                        <FormSelect id="wd-submission-type" className="mb-3" defaultValue={assignment?.type}>
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
                            <FormCheck type="checkbox" id="wd-text-entry" defaultChecked={assignment?.options === "Text Entry"} />
                            <FormLabel className="assignment-editor-spacing" 
                                        htmlFor="wd-text-entry">Text Entry</FormLabel>
                            </span>
                        </Col>
                    </Row>
                    <Row> 
                        <Col align="left" valign="top">
                            <span  style={{ display: "inline-flex", gap: "0.5rem" }}>
                            <FormCheck type="checkbox" id="wd-website-url" defaultChecked={assignment?.options === "Website URL"} />
                            <FormLabel className="assignment-editor-spacing" 
                                        htmlFor="wd-website-url">Website URL </FormLabel>
                            </span>
                        </Col> 
                    </Row>
                    <Row>
                        <Col align="left" valign="top">
                            <span  style={{ display: "inline-flex", gap: "0.5rem" }}>
                            <FormCheck type="checkbox" id="wd-media-recordings" defaultChecked={assignment?.options === "Media Recordings"} />
                            <FormLabel className="assignment-editor-spacing" 
                                        htmlFor="wd-media-recordings">Media Recordings</FormLabel>
                            </span>
                        </Col> 
                    </Row> 
                    <Row> 
                        <Col align="left" valign="top"> 
                            <span  style={{ display: "inline-flex", gap: "0.5rem" }}>
                            <FormCheck type="checkbox" id="wd-student-annotation" defaultChecked={assignment?.options === "Student Annotation"} />
                            <FormLabel className="assignment-editor-spacing" 
                                        htmlFor="wd-student-annotation">Student Annotation</FormLabel>
                            </span>
                        </Col> 
                    </Row> 
                    <Row> 
                        <Col align="left" valign="top"> 
                            <span  style={{ display: "inline-flex", gap: "0.5rem" }}>
                            <FormCheck type="checkbox" id="wd-file-upload" defaultChecked={assignment?.options === "File Uploads"} />
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
                        <FormSelect id="wd-assign-to" defaultValue={assignment?.assign} className="assignment-editor-spacing"> 
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
                        <FormControl id="wd-due-date"
                               defaultValue={assignment?.due} /> 
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
                            <FormControl id="wd-available-from" 
                               defaultValue={assignment?.available} />
                            <InputGroup.Text> <LiaCalendar /> </InputGroup.Text>
                        </InputGroup>
                    </Col>
                    <Col align="left" valign="top">
                        <InputGroup className="assignment-editor-spacing">
                            <FormControl id="wd-available-until"
                            defaultValue={assignment?.until}/>
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
                    <Link href={`/courses/${cid}/assignments/`} className="text-decoration-none">
                        <Button variant="danger" size="lg" className="me-1 float-end"> 
                        Save
                        </Button>
                    </Link>
                    <Link href={`/courses/${cid}/assignments/`} className="text-decoration-none">
                        <Button variant="secondary" size="lg" className="me-1 float-end">
                        Cancel
                        </Button>
                    </Link>                           
                </Col>
            </Row>
            </Form>
        </div>
);}
