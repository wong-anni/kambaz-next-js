"use client";
import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { CiSearch } from "react-icons/ci";
import InputGroup from "react-bootstrap/InputGroup";


export default function AssignmentControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment
      </Button>

      <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-assignment-group">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group
      </Button>

      <Form className="float-start me-1">
        <InputGroup size="lg">
          <InputGroup.Text> <CiSearch /> </InputGroup.Text>
          <FormControl id="wd-search-assignment" type="text"placeholder="Search..."/>
        </InputGroup>
      </Form>
    </div>
);}
