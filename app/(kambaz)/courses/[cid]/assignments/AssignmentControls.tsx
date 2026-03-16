"use client";
import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { CiSearch } from "react-icons/ci";
import InputGroup from "react-bootstrap/InputGroup";
import Link from "next/link";


export default function AssignmentControls({ isStudent, cid }: { isStudent: boolean, cid: string }) {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <Link href={`/courses/${cid}/assignments/new`}>
        <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment"
                disabled={isStudent}> 
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} /> 
          Assignment 
        </Button>
      </Link>

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
