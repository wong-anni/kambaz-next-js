"use client";
import Link from "next/link"; 
import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/CardBody";
import CardImg from "react-bootstrap/CardImg"; //replaces html img tag
import CardTitle from "react-bootstrap/CardTitle"; //replaces html h5 tag
import CardText from "react-bootstrap/CardText"; //replaces html p tag
import Button from "react-bootstrap/Button"; //replaces html button tag
import { Row, Col, FormControl } from "react-bootstrap";

import { useState, useEffect } from "react"; // add useState hook
import { v4 as uuidv4 } from "uuid";  // install the uuid library if necessary

import { useDispatch, useSelector } from "react-redux"; 
import { addNewCourse, deleteCourse, updateCourse, setCourses } from "../courses/reducer"; 

// import * as db from "../database"; 
import * as client from "../courses/client"; 
import * as enrollmentClient from "./client";

import { RootState } from "../store"; 
import { setEnrollments, enroll, unenroll } from "../dashboard/reducer";

type Enrollment = {
  _id: string;
  user: string;
  course: string;
};

export default function Dashboard() { 
  const { courses } = useSelector((state: RootState) => state.coursesReducer); 
  const { currentUser } = useSelector((state: RootState) => state.accountReducer) as any; 
  const { enrollments } = useSelector((state: RootState) => state.enrollmentsReducer) as { enrollments: Enrollment[] };
  const dispatch = useDispatch();

  const role = currentUser?.role;
  const isStudent = role === "STUDENT";

  const [showAllCourses, setShowAllCourses] = useState(false);
  const [allCourses, setAllCourses] = useState<any[]>([]);

  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number", 
    startDate: "2023-09-10", endDate: "2023-12-15", 
    image: "/images/reactjs.jpg", description: "New Description" 
  });

  const onAddNewCourse = async () => { 
    const newCourse = await client.createCourse(course); 
    dispatch(setCourses([ ...courses, newCourse ])); 

    dispatch(setEnrollments([
      ...enrollments,
      { _id: uuidv4(), user: currentUser._id, course: newCourse._id }
    ]));

    const allCourses = await client.fetchAllCourses();
    setAllCourses(allCourses);
    fetchCourses();
  };

  const onDeleteCourse = async (courseId: string) => { 
    const status = await client.deleteCourse(courseId); 
    dispatch(setCourses(courses.filter((course) => course._id !== courseId))); 
    const allCourses = await client.fetchAllCourses();
    setAllCourses(allCourses);
    fetchCourses();
  };

  const onUpdateCourse = async () => { 
    await client.updateCourse(course); 
    dispatch(setCourses(courses.map((c) => { 
        if (c._id === course._id) { return course; } 
        else { return c; } 
  })));}; 

  const displayedCourses = showAllCourses
  ? allCourses
  : courses.filter((course) =>
      enrollments.some(
        (e: Enrollment) => e.user === currentUser._id && e.course === course._id
      )
    );

    const fetchEnrollments = async () => {
      const enrollments = await enrollmentClient.findEnrollmentsForUser(currentUser._id);
      dispatch(setEnrollments(enrollments));
  }

  const handleEnrollments = async (courseId: string) => { 
    await enrollmentClient.enrollUserInCourse(courseId, currentUser._id);

    const updated = await enrollmentClient.findEnrollmentsForUser(currentUser._id);
    dispatch(setEnrollments(updated));

    const allCourses = await client.fetchAllCourses();
    setAllCourses(allCourses);
    fetchCourses();
  }; 

  const handleUnenrollments = async (courseId: string) => {
    await enrollmentClient.unenrollUserInCourse(currentUser._id, courseId);

    const updated = await enrollmentClient.findEnrollmentsForUser(currentUser._id);
    dispatch(setEnrollments(updated));

    const allCourses = await client.fetchAllCourses();
    setAllCourses(allCourses);
    fetchCourses();
  }

  const toggleShowCourses = async () => {
    setShowAllCourses(!showAllCourses);
  };

  useEffect(() => { 
  //   fetchEnrollments(); 
  // }, []);
  if (!currentUser?._id) return;
  fetchEnrollments(); 
}, [currentUser]);

  const fetchCourses = async () => { 
    if (!currentUser?._id) return;
    try { 
      const courses = await client.findMyCourses(); 
      const allCourses = await client.fetchAllCourses();

      dispatch(setCourses(courses)); 
      setAllCourses(allCourses);
    } catch (error) { 
      console.error("FETCH COURSES ERROR:", error); 
    } 
  }; 

  useEffect(() => { 
    if (!currentUser?._id) return;
    fetchCourses(); 
  }, [currentUser]);

  return ( 
    <div id="wd-dashboard"> 
      <div className="d-flex align-items-center justify-content-between">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <button 
          onClick={toggleShowCourses} className="btn btn-danger" > 
          Enrollments 
        </button>
      </div>
      <hr />
      
        
      {/* 
      // add a button to invoke addNewCourse. 
      // Note no argument syntax */}
      <h5>New Course 
          <button className="btn btn-primary float-end" 
                  disabled={isStudent}
                  id="wd-add-new-course-click" 
                  onClick={onAddNewCourse} > 
                  Add </button>
          <button className="btn btn-warning float-end me-2" 
                  disabled={isStudent}
                  onClick={onUpdateCourse} id="wd-update-course-click"> 
                  Update </button> 
      </h5><br /> 
      <FormControl value={course.name} 
                   disabled={isStudent}
                   className="mb-2" 
                   onChange={(e) => setCourse({ ...course, name: e.target.value }) } /> 
      <FormControl value={course.description} as="textarea" rows={3}
                   disabled={isStudent}
                   onChange={(e) => setCourse({ ...course, description: e.target.value }) } /> <hr />

      <h2 id="wd-dashboard-published">Published Courses ({displayedCourses.length})</h2> <hr /> 
      <div id="wd-dashboard-courses"> 

      <Row xs={1} md={5} className="g-4">
        {displayedCourses
            // .filter((course) => {
            //   if (showAllCourses) return true;

            //   return (
            //     currentUser &&
            //     enrollments.some( 
            //       (enrollment) => 
            //         enrollment.user === currentUser._id && 
            //         enrollment.course === course._id 
            //     )
            //   )
            // }) 
            .map((course) => { if (!course) return null;
              const isEnrolled =
                  currentUser &&
                  enrollments.some(
                    (e: Enrollment) => e.user === currentUser._id && e.course === course?._id
  );
              return (
                  <Col className="wd-dashboard-course" style={{ width: "300px" }} key={course._id}>
                    <Card>
                      <Link href={`/courses/${course._id}/home`} className="wd-dashboard-course-link text-decoration-none text-dark">
                        <CardImg variant="top" src= {course.image} width="100%" height={160} alt="reactjs" />
                        <CardBody>
                          <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden"> {course.name} </CardTitle>
                          <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}> 
                                {course.description} </CardText>
                          <div className="mb-2 mt-auto">
                            <Button variant="primary"> Go </Button> 
                            
                            {/* 
                            // Delete button next to the course's 
                            // name to invoke deleteCourse when clicked 
                            // passing the course's ID and preventing 
                            // the Link's default behavior to navigate 
                            // to Course Screen */}
                            <Button disabled={isStudent} 
                                  onClick={(event) => { 
                                  event.preventDefault(); 
                                  onDeleteCourse(course._id);
                                }} className="btn btn-danger float-end" 
                                id="wd-delete-course-click"> 
                                Delete 
                            </Button>

                            {/* 
                            // Edit button to copy the course 
                            // to be edited into the form so we can 
                            // edit it. Prevent default to navigate 
                            // to Course screen */}
                            <Button id="wd-edit-course-click" disabled={isStudent}
                              onClick={(event) => { 
                                event.preventDefault(); 
                                setCourse(course); 
                              }} 
                              className="btn btn-warning me-2 float-end" > 
                              Edit 
                            </Button>
                          </div>
                          <Button variant={isEnrolled ? "danger" : "success"}
                            onClick={async (event) => {
                              event.preventDefault();

                              if (isEnrolled) {
                                await handleUnenrollments(course._id);
                              } else {
                                await handleEnrollments(course._id);
                              }
                            }}
                          >
                            {isEnrolled ? "Unenroll" : "Enroll"}
                          </Button>

                        </CardBody>
                      </Link>
                    </Card>
                  </Col>
              )})}
      </Row>

      </div> 
    </div> 
);} 