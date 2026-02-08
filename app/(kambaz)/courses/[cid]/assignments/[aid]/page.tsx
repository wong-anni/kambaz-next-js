"use client";
import { Form, FormLabel, FormControl, FormGroup, FormSelect, FormCheck } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { ListGroup, InputGroup } from "react-bootstrap";
import { LiaCalendar } from "react-icons/lia";
import { Button } from "react-bootstrap";

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <Form>
                <FormGroup>
                    <FormLabel htmlFor="wd-name"><strong>Assignment Name</strong></FormLabel> 
                    <FormControl id="wd-name" defaultValue="A1" className="mb-4" />
                </FormGroup>

                <FormGroup>
                    <FormControl as="textarea" id="wd-description"  rows={13} className="mb-4"
                        defaultValue={
`
The assignment is available online

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following: 

• Your full name and section
• Links to each of the lab assignments  
• Link to the Kambas application
• Links to all relevant source code repositories

The Kambas application should include a link to navigate back to the landing page.` } />
                </FormGroup>

                <FormGroup className="mb-4">
                <Row> 
                    <Col align="right" valign="top">
                        <FormLabel htmlFor="wd-points">Points</FormLabel>
                    </Col>
                    <Col>
                        <FormControl id="wd-points" defaultValue={100} />
                    </Col>
                </Row>
                </FormGroup>

                <FormGroup className="mb-4">
                <Row> 
                    <Col align="right" valign="top">
                        <FormLabel htmlFor="wd-group">Assignment Group</FormLabel>
                    </Col>
                    <Col>
                        <FormSelect id="wd-group" defaultValue="ASSIGNMENTS">
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
                        <FormSelect id="wd-display-grade-as">
                            <option selected value="Percentage">Percentage</option>
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
                        <FormSelect id="wd-submission-type" className="mb-3">
                            <option selected value="Online">Online</option>
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
                            <FormCheck type="checkbox" id="wd-text-entry" />
                            <FormLabel className="assignment-editor-spacing" 
                                        htmlFor="wd-text-entry">Text Entry</FormLabel>
                            </span>
                        </Col>
                    </Row>
                    <Row> 
                        <Col align="left" valign="top">
                            <span  style={{ display: "inline-flex", gap: "0.5rem" }}>
                            <FormCheck type="checkbox" id="wd-website-url" />
                            <FormLabel className="assignment-editor-spacing" 
                                        htmlFor="wd-website-url">Website URL </FormLabel>
                            </span>
                        </Col> 
                    </Row>
                    <Row>
                        <Col align="left" valign="top">
                            <span  style={{ display: "inline-flex", gap: "0.5rem" }}>
                            <FormCheck type="checkbox" id="wd-media-recordings" />
                            <FormLabel className="assignment-editor-spacing" 
                                        htmlFor="wd-media-recordings">Media Recordings</FormLabel>
                            </span>
                        </Col> 
                    </Row> 
                    <Row> 
                        <Col align="left" valign="top"> 
                            <span  style={{ display: "inline-flex", gap: "0.5rem" }}>
                            <FormCheck type="checkbox" id="wd-student-annotation" />
                            <FormLabel className="assignment-editor-spacing" 
                                        htmlFor="wd-student-annotation">Student Annotation</FormLabel>
                            </span>
                        </Col> 
                    </Row> 
                    <Row> 
                        <Col align="left" valign="top"> 
                            <span  style={{ display: "inline-flex", gap: "0.5rem" }}>
                            <FormCheck type="checkbox" id="wd-file-upload" />
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
                        <FormSelect id="wd-assign-to" defaultValue="Everyone" className="assignment-editor-spacing"> 
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
                               defaultValue="May 13, 2024, 11:59 PM " /> 
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
                               defaultValue="May 6, 2024, 12:00 AM" />
                            <InputGroup.Text> <LiaCalendar /> </InputGroup.Text>
                        </InputGroup>
                    </Col>
                    <Col align="left" valign="top">
                        <InputGroup className="assignment-editor-spacing">
                            <FormControl id="wd-available-until"/>
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
                    <Button variant="danger" size="lg" className="me-1 float-end">
                        Save
                    </Button> 
                    <Button variant="secondary" size="lg" className="me-1 float-end">
                        Cancel
                    </Button>                            
                </Col>
            </Row>
            </Form>
        </div>
);}
