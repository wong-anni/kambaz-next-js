"use client";

import { ReactNode, useState } from "react"; 
import CourseNavigation from "./navigation"; 
import { FaAlignJustify } from "react-icons/fa";
import { courses } from "../../database";
import Breadcrumb from "./breadcrumb";

import { useSelector } from "react-redux"; 
import { useParams } from "next/navigation"; 
import { RootState } from "../../store";

export default function CoursesLayout({ children }: { children: ReactNode }) { 
 const { cid } = useParams(); 

 const { courses } = useSelector((state: RootState) => state.coursesReducer); 
 const course = courses.find((course: any) => course._id === cid);

  // state for sidebar visibility
  const [showNav, setShowNav] = useState(true);
  const toggleNav = () => {
    setShowNav(!showNav);
  };

 return ( 
   <div id="wd-courses"> 
  <h2 className="text-danger"> 
      <FaAlignJustify 
          className="me-4 fs-4 mb-1" 
          style={{ cursor: "pointer" }}
          onClick={toggleNav}/>  
      <Breadcrumb course={course} /> 
      {/* {course?.name}   */}
      </h2> <hr /> 
  <div className="d-flex"> 
      {showNav && (
        <div className="d-none d-md-block"> 
          <CourseNavigation /> 
        </div> 
      )}
    <div className="flex-fill"> 
      {children} 
    </div></div>             
   </div> 
);} 