"use client";
import Form from "react-bootstrap/Form";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FormSelect, FormCheck } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

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
            </Form>

            <Form>
                <FormGroup>
                {/* tr -- declares the start of a row */}
                <Row> 
                    <Col align="right" valign="top">
                        <FormLabel htmlFor="wd-points">Points</FormLabel>
                    </Col>
                    <Col>
                        <FormControl id="wd-points" defaultValue={100} />
                    </Col>
                </Row>

                <br></br> 
                <Row> 
                    <Col align="right" valign="top">
                        <FormLabel htmlFor="wd-group">Assignment Group</FormLabel>
                    </Col>
                    <Col>
                        <FormSelect id="wd-group">
                            <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="A1">A1</option>
                            <option value="A2">A2</option>
                            <option value="A3">A3</option>
                        </FormSelect>
                    </Col>
                </Row>

                <br></br> 
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


                <br></br> 
                <Row> 
                    <Col align="right" valign="top">
                        <FormLabel htmlFor="wd-submission-type">Submission Type</FormLabel>
                    </Col>
                    <Col>
                    <ListGroup className="rounded-0">
                    <ListGroupItem className="p-3 m-3 mb-5 border-gray">

                        <FormSelect id="wd-submission-type">
                            <option selected value="Online">Online</option>
                            <option value="Paper">Paper</option>
                        </FormSelect>
                <br></br> 
                <Row>
                    <Col align="left" valign="top">
                        <FormLabel><strong>Online Entry Options</strong></FormLabel>
                    </Col>
                </Row>
                <Row>
                    <Col align="left" valign="top">
                        <span  style={{ display: "inline-flex", gap: "0.5rem" }}>
                        <FormCheck type="checkbox" id="wd-text-entry" />
                        <FormLabel htmlFor="wd-text-entry">Text Entry</FormLabel>
                        </span>
                    </Col>
                </Row>
                <Row> 
                    <Col align="left" valign="top">
                        <span  style={{ display: "inline-flex", gap: "0.5rem" }}>
                        <FormCheck type="checkbox" id="wd-website-url" />
                        <FormLabel htmlFor="wd-website-url">Website URL </FormLabel>
                        </span>
                    </Col> 
                </Row>
                <Row>
                    <Col align="left" valign="top">
                        <span  style={{ display: "inline-flex", gap: "0.5rem" }}>
                        <FormCheck type="checkbox" id="wd-media-recordings" />
                        <FormLabel htmlFor="wd-media-recordings">Media Recordings</FormLabel>
                        </span>
                    </Col> 
                </Row> 
                <Row> 
                    <Col align="left" valign="top"> 
                        <span  style={{ display: "inline-flex", gap: "0.5rem" }}>
                        <FormCheck type="checkbox" id="wd-student-annotation" />
                        <FormLabel htmlFor="wd-student-annotation">Student Annotation</FormLabel>
                        </span>
                    </Col> 
                </Row> 
                <Row> 
                    <Col align="left" valign="top"> 
                        <span  style={{ display: "inline-flex", gap: "0.5rem" }}>
                        <FormCheck type="checkbox" id="wd-file-upload" />
                        <FormLabel htmlFor="wd-file-upload">File Uploads</FormLabel>
                        </span>
                    </Col>
                </Row>
                </ListGroupItem>
                </ListGroup>

                    </Col>
                </Row>

                

                <br />
                <Row>
                    <Col align="right" valign="top">
                        <FormLabel>Assign</FormLabel>
                    </Col>    
                    <Col align="left" valign="top">
                        <FormLabel htmlFor="wd-assign-to">Assign To</FormLabel>
                    </Col>
                </Row>

                <Row>
                    <Col></Col>
                    <Col align="left" valign="top">
                        <FormControl id="wd-assign-to" type="text" defaultValue="Everyone" />
                    </Col>    
                </Row>                
                  


                <br />
                <Row>
                    <Col></Col>
                    <Col align="left" valign="top">
                        <FormLabel htmlFor="wd-due-date">Due</FormLabel>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col>
                        <FormControl id="wd-due-date"
                               type="date" 
                               defaultValue="2024-05-13" />
                    </Col>
                </Row>


                <br /> 
                <Row>
                    <Col></Col>
                    <Col align="left" valign="top">
                        <FormLabel htmlFor="wd-available-from">Available From</FormLabel>
                    </Col>
                    <Col align="left" valign="top">
                        <FormLabel htmlFor="wd-available-until">Until</FormLabel>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col align="left" valign="top">
                        <FormControl id="wd-available-from" 
                               type="date"
                               defaultValue="2024-05-06" />
                    </Col>
                    <Col align="left" valign="top">
                        <FormControl id="wd-available-until"
                               type="date"
                               defaultValue="2024-05-20" />
                    </Col>
                </Row>


                </FormGroup>
            </Form>
            <hr />
            <table width="100%">
                <tfoot>
                    <tr>
                        <td align="right">
                            <button>Cancel</button> <button>Save</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
            
        </div>
);}
