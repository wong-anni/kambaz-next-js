// "use client";
// import ListGroup from "react-bootstrap/ListGroup";
// import ListGroupItem from "react-bootstrap/ListGroupItem";

// import ModulesControls from "./ModulesControls";
// import ModuleControlButtons from "./ModuleControlButtons";
// import LessonControlButtons from "./LessonControlButtons";
// import { BsGripVertical } from "react-icons/bs";

// export default function Modules() { 
//   return ( 
//     <div> 
//       {/* Implement Collapse All button, View Progress button, etc. */} 
//       {/* <button>Collapse All</button> <button>View Progress</button> <select defaultValue="PUBLISHONE"> 
//         <option value="PUBLISHALL">Publish All</option> 
//         <option value="UNPUBLISHALL">Unpublish All</option> 
//         <option value="PUBLISHONE">Publish One</option> 
//         <option value="UNPUBLISHONE">Unpublish One</option> 
//       </select> <button>+ Module</button> */}

//       <ModulesControls /><br /><br /><br /><br />
//       <ListGroup className="rounded-0" id="wd-modules"> 
//         <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray"> 
//           <div className="wd-title p-3 ps-2 bg-secondary">
//             <BsGripVertical className="me-2 fs-3" />Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda <ModuleControlButtons /> 
//           </div> 

//           <ListGroup className="wd-lessons rounded-0"> 
//             <ListGroupItem className="wd-lesson p-3 ps-1"> 
//               <span className="wd-title">
//                 <BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES<LessonControlButtons />
//               </span>
//               <ListGroup className="wd-content"> 
//                 <ListGroupItem className="wd-content-item">
//                   <BsGripVertical className="me-2 fs-3" />Introduction to the course<LessonControlButtons />
//                 </ListGroupItem> 
//                 <ListGroupItem className="wd-content-item">
//                   <BsGripVertical className="me-2 fs-3" />Learn what is Web Development<LessonControlButtons />
//                   </ListGroupItem> 
//               </ListGroup>
//             </ListGroupItem> 

//             <ListGroupItem className="wd-lesson p-3 ps-1">
//               <span className="wd-title">
//                 <BsGripVertical className="me-2 fs-3" />READING<LessonControlButtons />
//               </span>
//               <ListGroup className="wd-content"> 
//                 <ListGroupItem className="wd-content-item">
//                   <BsGripVertical className="me-2 fs-3" />Full Stack Developer - Chapter 1 - Introduction<LessonControlButtons />
//                 </ListGroupItem> 
//                 <ListGroupItem className="wd-content-item">
//                   <BsGripVertical className="me-2 fs-3" />Full Stack Developer - Chapter 2 - Creating User Interfaces with HTML<LessonControlButtons />
//                 </ListGroupItem> 
//               </ListGroup>
//             </ListGroupItem>

//             <ListGroupItem className="wd-lesson p-3 ps-1">
//               <span className="wd-title">
//                 <BsGripVertical className="me-2 fs-3" />SLIDES<LessonControlButtons />
//               </span>
//               <ListGroup className="wd-content"> 
//                 <ListGroupItem className="wd-content-item">
//                   <BsGripVertical className="me-2 fs-3" />Introduction to Web Development<LessonControlButtons />
//                   </ListGroupItem> 
//                 <ListGroupItem className="wd-content-item">
//                   <BsGripVertical className="me-2 fs-3" />Creating an HTTP server with Node.js<LessonControlButtons />
//                 </ListGroupItem> 
//                 <ListGroupItem className="wd-content-item">
//                   <BsGripVertical className="me-2 fs-3" />Creating a React Application<LessonControlButtons />
//                 </ListGroupItem> 
//               </ListGroup>
//             </ListGroupItem> 
//           </ListGroup> 
//         </ListGroupItem> 

//         <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray"> 
//           <div className="wd-title p-3 ps-2 bg-secondary">
//             <BsGripVertical className="me-2 fs-3" />Week 1, Lecture 2 - Formatting User Interfaces with HTML<ModuleControlButtons />
//             </div> 
//           <ListGroup className="wd-lessons rounded-0">
//             <ListGroupItem className="wd-lesson p-3 ps-1"> 

//               <span className="wd-title">
//                 <BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES<LessonControlButtons />
//               </span> 
//               <ListGroup className="wd-content"> 
//                 <ListGroupItem className="wd-content-item">
//                   <BsGripVertical className="me-2 fs-3" />How to create user interfaces with HTML<LessonControlButtons />
//                   </ListGroupItem> 
//                 <ListGroupItem className="wd-content-item">
//                   <BsGripVertical className="me-2 fs-3" />Deploy the assignment with Netlify<LessonControlButtons />
//                   </ListGroupItem> 
//               </ListGroup>
//             </ListGroupItem>

//             <ListGroupItem className="wd-lesson p-3 ps-1">
//               <span className="wd-title">
//                 <BsGripVertical className="me-2 fs-3" />SLIDES<LessonControlButtons />
//               </span> 
//               <ListGroup className="wd-content"> 
//                 <ListGroupItem className="wd-content-item">
//                   <BsGripVertical className="me-2 fs-3" />Introduction to HTML and the DOM<LessonControlButtons />
//                   </ListGroupItem> 
//                 <ListGroupItem className="wd-content-item">
//                   <BsGripVertical className="me-2 fs-3" />Formatting Web content with Headings<LessonControlButtons />
//                   </ListGroupItem> 
//                 <ListGroupItem className="wd-content-item">
//                   <BsGripVertical className="me-2 fs-3" />Formatting content with Lists and Tables<LessonControlButtons />
//                   </ListGroupItem> 
//               </ListGroup>
//             </ListGroupItem>
//           </ListGroup>
//         </ListGroupItem> 

//         <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray"> 
//           <div className="wd-title p-3 ps-2 bg-secondary">
//             <BsGripVertical className="me-2 fs-3" />Week 2, Lecture 1 - Getting Started with the Kambaz Web Application<ModuleControlButtons />
//             </div> 
//           <ListGroup className="wd-lessons rounded-0"> 
//             <ListGroupItem className="wd-lesson p-3 ps-1"> 
//               <span className="wd-title">
//                 <BsGripVertical className="me-2 fs-3" />LEARNING OBJECTIVES<LessonControlButtons />
//               </span> 
//               <ListGroup className="wd-content"> 
//                 <ListGroupItem className="wd-content-item">
//                   <BsGripVertical className="me-2 fs-3" />Learn how to create user interfaces with HTML<LessonControlButtons /></ListGroupItem> 
//                 <ListGroupItem className="wd-content-item">
//                   <BsGripVertical className="me-2 fs-3" />Start implementing the Kambaz Web Application<LessonControlButtons /></ListGroupItem> 
//                 <ListGroupItem className="wd-content-item">
//                   <BsGripVertical className="me-2 fs-3" />Update Vercel deployment<LessonControlButtons /></ListGroupItem>
//               </ListGroup> 
//             </ListGroupItem>

//             <ListGroupItem className="wd-lesson p-3 ps-1">
//               <span className="wd-title">
//                 <BsGripVertical className="me-2 fs-3" />SLIDES<LessonControlButtons />
//               </span>
//               <ListGroup className="wd-content"> 
//                 <ListGroupItem className="wd-content-item">
//                   <BsGripVertical className="me-2 fs-3" />Implementing the Kambaz Account Screens<LessonControlButtons /></ListGroupItem> 
//                 <ListGroupItem className="wd-content-item">
//                   <BsGripVertical className="me-2 fs-3" />Implementing the Kambaz Dashboard Screens<LessonControlButtons /></ListGroupItem> 
//                 <ListGroupItem className="wd-content-item">
//                   <BsGripVertical className="me-2 fs-3" />Implementing the Kambaz Courses Screens<LessonControlButtons /></ListGroupItem> 
//                 <ListGroupItem className="wd-content-item">
//                   <BsGripVertical className="me-2 fs-3" />Implementing the Kambaz Modules Screens<LessonControlButtons /></ListGroupItem> 
//                 <ListGroupItem className="wd-content-item">
//                   <BsGripVertical className="me-2 fs-3" />Implementing the Kambaz Assignments Screens<LessonControlButtons /></ListGroupItem> 

//               </ListGroup>
//             </ListGroupItem> 
//           </ListGroup> 
//         </ListGroupItem>

//         <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray"> 
//           <div className="wd-title p-3 ps-2 bg-secondary">
//             <BsGripVertical className="me-2 fs-3" />Week 3<ModuleControlButtons /></div> 
//         </ListGroupItem> 

//       </ListGroup> 


      
//     </div> 
// );} 





"use client";

import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import { BsGripVertical } from "react-icons/bs";

import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
  return (
      <div> 
  <ModulesControls /><br /><br /><br /><br /> 
  <ListGroup className="rounded-0" id="wd-modules"> 

    {/* ====================== MODULE ====================== */}
    <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray"> 
      <div className="wd-title p-3 ps-2 bg-secondary"> <BsGripVertical className="me-2 fs-3" />
        Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda <ModuleControlButtons />
      </div> 
      <ListGroup className="wd-lessons rounded-0"> 
        {/* ====================== LEARNING OBJECTIVES ====================== */}
        <ListGroupItem className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />
          LEARNING OBJECTIVES <LessonControlButtons /> </ListGroupItem> 
        <ListGroupItem className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />
          Introduction to the course <LessonControlButtons /> </ListGroupItem> 
        <ListGroupItem className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />
          Learn what is Web Development <LessonControlButtons /> </ListGroupItem>
        {/* ====================== READING ====================== */}
        <ListGroupItem className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />
          READING <LessonControlButtons /> </ListGroupItem> 
        <ListGroupItem className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />
          Full Stack Developer - Chapter 1 - Introduction <LessonControlButtons /> </ListGroupItem> 
        <ListGroupItem className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />
          Full Stack Developer - Chapter 2 - Creating User Interfaces with HTML <LessonControlButtons /> </ListGroupItem>
        {/* ====================== SLIDES ====================== */}
        <ListGroupItem className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />
          SLIDES <LessonControlButtons /> </ListGroupItem> 
        <ListGroupItem className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />
          Creating an HTTP server with Node.js <LessonControlButtons /> </ListGroupItem> 
        <ListGroupItem className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />
          Creating a React Application <LessonControlButtons /> </ListGroupItem>

        <ListGroupItem className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />
          LESSON 1 <LessonControlButtons /> </ListGroupItem> 
        <ListGroupItem className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />
          LESSON 2 <LessonControlButtons /> </ListGroupItem>  
      </ListGroup> 
    </ListGroupItem> 

    {/* ====================== MODULE ====================== */}
    <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray"> 
      <div className="wd-title p-3 ps-2 bg-secondary"> <BsGripVertical className="me-2 fs-3" />
        Week 1, Lecture 2 - Formatting User Interfaces with HTML <ModuleControlButtons />
      </div> 
      <ListGroup className="wd-lessons rounded-0"> 
        {/* ====================== LEARNING OBJECTIVES ====================== */}
        <ListGroupItem className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />
          LEARNING OBJECTIVES <LessonControlButtons /> </ListGroupItem> 
        <ListGroupItem className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />
          How to create user interfaces with HTML <LessonControlButtons /> </ListGroupItem> 
        <ListGroupItem className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />
          Deploy the assignment with Netlify <LessonControlButtons /> </ListGroupItem> 
        {/* ====================== READING ====================== */}

        {/* ====================== SLIDES ====================== */}
        <ListGroupItem className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />
          SLIDES <LessonControlButtons /> </ListGroupItem> 
        <ListGroupItem className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />
          Introduction to HTML and the DOM <LessonControlButtons /> </ListGroupItem> 
        <ListGroupItem className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />
          Formatting Web content with Headings <LessonControlButtons /> </ListGroupItem> 
        <ListGroupItem className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />
          Formatting content with Lists and Tables <LessonControlButtons /> </ListGroupItem>

        <ListGroupItem className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />
          LESSON 1 <LessonControlButtons /> </ListGroupItem> 
        <ListGroupItem className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />
          LESSON 2 <LessonControlButtons /> </ListGroupItem> 
      </ListGroup> 
    </ListGroupItem>

    {/* ====================== MODULE ====================== */}
    <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray"> 
      <div className="wd-title p-3 ps-2 bg-secondary"> <BsGripVertical className="me-2 fs-3" />
        Week 2, Lecture 1 - Getting Started with the Kambaz Web Application <ModuleControlButtons />
      </div> 
      <ListGroup className="wd-lessons rounded-0"> 
        {/* ====================== LEARNING OBJECTIVES ====================== */}
        <ListGroupItem className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />
          LEARNING OBJECTIVES <LessonControlButtons /> </ListGroupItem> 
        <ListGroupItem className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />
          Learn how to create user interfaces with HTML <LessonControlButtons /> </ListGroupItem> 
        <ListGroupItem className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />
          Start implementing the Kambaz Web Application <LessonControlButtons /> </ListGroupItem>
        <ListGroupItem className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />
          Update Vercel deployment <LessonControlButtons /> </ListGroupItem>
        {/* ====================== READING ====================== */}

        {/* ====================== SLIDES ====================== */}
        <ListGroupItem className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />
          SLIDES <LessonControlButtons /> </ListGroupItem> 
        <ListGroupItem className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />
          Implementing the Kambaz Account Screens <LessonControlButtons /> </ListGroupItem> 
        <ListGroupItem className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />
          Implementing the Kambaz Dashboard Screens <LessonControlButtons /> </ListGroupItem> 
        <ListGroupItem className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />
          Implementing the Kambaz Courses Screens <LessonControlButtons /> </ListGroupItem>
        <ListGroupItem className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />
          Implementing the Kambaz Modules Screens <LessonControlButtons /> </ListGroupItem>
        <ListGroupItem className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />
          Implementing the Kambaz Assignments Screens <LessonControlButtons /> </ListGroupItem>

        <ListGroupItem className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />
          LESSON 1 <LessonControlButtons /> </ListGroupItem> 
        <ListGroupItem className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />
          LESSON 2 <LessonControlButtons /> </ListGroupItem> 
      </ListGroup> 
    </ListGroupItem>



    <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray"> 
      <div className="wd-title p-3 ps-2 bg-secondary"> <BsGripVertical className="me-2 fs-3" />
        Week 3 <ModuleControlButtons />
      </div> 
            <ListGroup className="wd-lessons rounded-0"> 
        <ListGroupItem className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />
          LESSON 1 <LessonControlButtons /> </ListGroupItem> 
        <ListGroupItem className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" />
          LESSON 2 <LessonControlButtons /> </ListGroupItem> 
      </ListGroup> 
    </ListGroupItem> 
  </ListGroup> 
</div> 
  );
}

