import Link from "next/link"; 
import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/CardBody";
import CardImg from "react-bootstrap/CardImg"; //replaces html img tag
import CardTitle from "react-bootstrap/CardTitle"; //replaces html h5 tag
import CardText from "react-bootstrap/CardText"; //replaces html p tag
import Button from "react-bootstrap/Button"; //replaces html button tag
import { Row, Col } from "react-bootstrap";

import * as db from "../database";


export default function Dashboard() { 
  const courses = db.courses;
  return ( 
    <div id="wd-dashboard"> 
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr /> 
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr /> 
      <div id="wd-dashboard-courses"> 

      <Row xs={1} md={5} className="g-4">
        {courses.map((course) => (
        <Col className="wd-dashboard-course" style={{ width: "300px" }} key={course._id}>
          <Card>
            <Link href={`/courses/${course._id}/home`} className="wd-dashboard-course-link text-decoration-none text-dark">
              <CardImg variant="top" src= {course.image} width="100%" height={160} alt="reactjs" />
              <CardBody>
                <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> {course.name} </CardTitle>
                <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}> 
                      {course.description} </CardText>
                <Button variant="primary"> Go </Button> 
              </CardBody>
            </Link>
          </Card>
        </Col>
      ))}




        {/* // <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        //   <Card>
        //     <Link href="/courses/1234/home" className="wd-dashboard-course-link text-decoration-none text-dark">
        //       <CardImg variant="top" src="/images/linearprof.jpg" width="100%" height={160} alt="linearprof" />
        //       <CardBody>
        //         <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> MATH2331 Linear Algebra </CardTitle>
        //         <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}> 
        //               Linear algebra course </CardText>
        //         <Button variant="primary"> Go </Button> 
        //       </CardBody>
        //       </Link>
        //   </Card>
        // </Col>

        // <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        //   <Card>
        //     <Link href="/courses/1234/home" className="wd-dashboard-course-link text-decoration-none text-dark">
        //       <CardImg variant="top" src="/images/oodrage.jpg" width="100%" height={160} alt="oodrage" />
        //       <CardBody>
        //         <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS3100 OOD </CardTitle>
        //         <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}> 
        //               Object Oriented Design course   </CardText>
        //         <Button variant="primary"> Go </Button> 
        //       </CardBody>
        //       </Link>
        //   </Card>
        // </Col>

        // <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        //   <Card>
        //     <Link href="/courses/1234/home" className="wd-dashboard-course-link text-decoration-none text-dark">
        //       <CardImg variant="top" src="/images/databaseprof.jpg" width="100%" height={160} alt="databaseprof" />
        //       <CardBody>
        //         <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS3200 Intro to Databases </CardTitle>
        //         <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}> 
        //               Intro to Databases course    </CardText>
        //         <Button variant="primary"> Go </Button> 
        //       </CardBody>
        //       </Link>
        //   </Card>
        // </Col>

        // <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        //   <Card>
        //     <Link href="/courses/1234/home" className="wd-dashboard-course-link text-decoration-none text-dark">
        //       <CardImg variant="top" src="/images/gameprof.jpg" width="100%" height={160} alt="gameprof" />
        //       <CardBody>
        //         <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> GAME1110 Games and Society </CardTitle>
        //         <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}> 
        //               Games and Society course     </CardText>
        //         <Button variant="primary"> Go </Button> 
        //       </CardBody>
        //       </Link>
        //   </Card>
        // </Col>

        // <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        //   <Card>
        //     <Link href="/courses/1234/home" className="wd-dashboard-course-link text-decoration-none text-dark">
        //       <CardImg variant="top" src="/images/statsprof.jpg" width="100%" height={160} alt="statsprof" />
        //       <CardBody>
        //         <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> MATH3081 Probability </CardTitle>
        //         <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}> 
        //               Probability and Statistics course     </CardText>
        //         <Button variant="primary"> Go </Button> 
        //       </CardBody>
        //       </Link>
        //   </Card>
        // </Col>

        // <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        //   <Card>
        //     <Link href="/courses/1234/home" className="wd-dashboard-course-link text-decoration-none text-dark">
        //       <CardImg variant="top" src="/images/systemsprof.jpg" width="100%" height={160} alt="systemsprof" />
        //       <CardBody>
        //         <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS3650 Computer Systems </CardTitle>
        //         <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}> 
        //               Computer Systems course      </CardText>
        //         <Button variant="primary"> Go </Button> 
        //       </CardBody>
        //       </Link>
        //   </Card>
        // </Col>

        // <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        //   <Card>
        //     <Link href="/courses/1234/home" className="wd-dashboard-course-link text-decoration-none text-dark">
        //       <CardImg variant="top" src="/images/mathreasoning.jpg" width="100%" height={160} alt="mathreasoning" />
        //       <CardBody>
        //         <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> MATH1365 Intro to Math Reasoning </CardTitle>
        //         <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}> 
        //               Introduction to Mathematical Reasoning course      </CardText>
        //         <Button variant="primary"> Go </Button> 
        //       </CardBody>
        //       </Link>
        //   </Card>
        // </Col>

        // <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        //   <Card>
        //     <Link href="/courses/1234/home" className="wd-dashboard-course-link text-decoration-none text-dark">
        //       <CardImg variant="top" src="/images/algoprof.jpg" width="100%" height={160} alt="algoprof" />
        //       <CardBody>
        //         <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS3000 Algo </CardTitle>
        //         <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}> 
        //               Algorithms and Data course      </CardText>
        //         <Button variant="primary"> Go </Button> 
        //       </CardBody>
        //       </Link>
        //   </Card>
        // </Col>

        // <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        //   <Card>
        //     <Link href="/courses/1234/home" className="wd-dashboard-course-link text-decoration-none text-dark">
        //       <CardImg variant="top" src="/images/discreteprof.jpg" width="100%" height={160} alt="discreteprof" />
        //       <CardBody>
        //         <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> CS1800 Discrete Structures </CardTitle>
        //         <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}> 
        //               Discrete Structures course       </CardText>
        //         <Button variant="primary"> Go </Button> 
        //       </CardBody>
        //       </Link>
        //   </Card>
        // </Col> */}





</Row>

      </div> 
    </div> 
);} 