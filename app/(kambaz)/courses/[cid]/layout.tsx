"use client";

import { ReactNode, useState, useEffect } from "react"; 
import CourseNavigation from "./navigation"; 
import { FaAlignJustify } from "react-icons/fa";
import { courses } from "../../database";
import Breadcrumb from "./breadcrumb";

import { useSelector } from "react-redux"; 
import { useParams, useRouter } from "next/navigation"; 
import { RootState } from "../../store";

export default function CoursesLayout({ children }: { children: ReactNode }) { 
 const { cid } = useParams(); 
 const router = useRouter();

 const { courses } = useSelector((state: RootState) => state.coursesReducer); 
 const course = courses.find((course: any) => course._id === cid);

 const { currentUser } = useSelector((state: RootState) => state.accountReducer) as any;
 const { enrollments } = useSelector((state: RootState) => state.enrollmentsReducer);

 const isEnrolled = enrollments.some(
   (e: any) => e.user === currentUser?._id && e.course === cid
 );

 useEffect(() => {
    if (currentUser && !isEnrolled) {
      router.push("/dashboard");
    }
 }, [currentUser, isEnrolled, router]);

  // state for sidebar visibility
  const [showNav, setShowNav] = useState(true);
  const toggleNav = () => {
    setShowNav(!showNav);
  };

if (!isEnrolled) return null;

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