import Link from "next/link"; 
import Image from "next/image"; 
export default function Dashboard() { 
  return ( 
    <div id="wd-dashboard"> 
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr /> 

      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr /> 

      <div id="wd-dashboard-courses"> 
        <div className="wd-dashboard-course"> 
          <Link href="/courses/1234" className="wd-dashboard-course-link"> 
            <Image src="/images/reactjs.png" width={200} height={150} alt="reactjs" /> 
            <div> 
              <h5> CS1234 React JS </h5> 
              <p className="wd-dashboard-course-title"> 
                Full Stack software developer 
              </p> 
              <button> Go </button> 
            </div> 
          </Link> 
        </div> 


        <div className="wd-dashboard-course"> 
          <Link href="/courses/2331" className="wd-dashboard-course-link"> 
            <Image src="/images/linearprof.jpg" width={200} height={150} alt="linearprof" /> 
            <div> 
              <h5> MATH2331 Linear Algebra </h5> 
              <p className="wd-dashboard-course-title"> 
                Linear algebra course   
              </p> 
              <button> Go </button> 
            </div> 
          </Link> 
        </div> 

        <div className="wd-dashboard-course"> 
          <Link href="/courses/3100" className="wd-dashboard-course-link"> 
            <Image src="/images/oodrage.jpg" width={200} height={150} alt="oodrage" /> 
            <div> 
              <h5> CS3100 OOD </h5> 
              <p className="wd-dashboard-course-title"> 
                Object Oriented Design course  
              </p> 
              <button> Go </button> 
            </div> 
          </Link> 
        </div> 

        <div className="wd-dashboard-course"> 
          <Link href="/courses/3200" className="wd-dashboard-course-link"> 
            <Image src="/images/databaseprof.jpg" width={200} height={150} alt="databaseprof" /> 
            <div> 
              <h5> CS3200 Intro to Databases </h5> 
              <p className="wd-dashboard-course-title"> 
                Intro to Databases course  
              </p> 
              <button> Go </button> 
            </div> 
          </Link> 
        </div> 

        <div className="wd-dashboard-course"> 
          <Link href="/courses/1110" className="wd-dashboard-course-link"> 
            <Image src="/images/gameprof.jpg" width={200} height={150} alt="gameprof" /> 
            <div> 
              <h5> GAME1110 Games and Society </h5> 
              <p className="wd-dashboard-course-title"> 
                Games and Society course  
              </p> 
              <button> Go </button> 
            </div> 
          </Link> 
        </div> 

        <div className="wd-dashboard-course"> 
          <Link href="/courses/3081" className="wd-dashboard-course-link"> 
            <Image src="/images/statsprof.jpg" width={200} height={150} alt="statsprof" /> 
            <div> 
              <h5> MATH3081 Probability </h5> 
              <p className="wd-dashboard-course-title"> 
                Probability and Statistics course 
              </p> 
              <button> Go </button> 
            </div> 
          </Link> 
        </div>                                 

        <div className="wd-dashboard-course"> 
          <Link href="/courses/3650" className="wd-dashboard-course-link"> 
            <Image src="/images/systemsprof.jpg" width={200} height={150} alt="systemsprof" /> 
            <div> 
              <h5> CS3650 Computer Systems </h5> 
              <p className="wd-dashboard-course-title"> 
                Computer Systems course  
              </p> 
              <button> Go </button> 
            </div> 
          </Link> 
        </div> 


        <div className="wd-dashboard-course"> 
          <Link href="/courses/1365" className="wd-dashboard-course-link"> 
            <Image src="/images/mathreasoning.jpg" width={200} height={150} alt="mathreasoning" /> 
            <div> 
              <h5> MATH1365 Intro to Math Reasoning </h5> 
              <p className="wd-dashboard-course-title"> 
                Introduction to Mathematical Reasoning course   
              </p> 
              <button> Go </button> 
            </div> 
          </Link> 
        </div> 

        <div className="wd-dashboard-course"> 
          <Link href="/courses/3000" className="wd-dashboard-course-link"> 
            <Image src="/images/algoprof.jpg" width={200} height={150} alt="algoprof" /> 
            <div> 
              <h5> CS3000 Algo </h5> 
              <p className="wd-dashboard-course-title"> 
                Algorithms and Data course   
              </p> 
              <button> Go </button> 
            </div> 
          </Link> 
        </div> 

        <div className="wd-dashboard-course"> 
          <Link href="/courses/1800" className="wd-dashboard-course-link"> 
            <Image src="/images/discreteprof.jpg" width={200} height={150} alt="discreteprof" /> 
            <div> 
              <h5> CS1800 Discrete Structures </h5> 
              <p className="wd-dashboard-course-title"> 
                Discrete Structures course   
              </p> 
              <button> Go </button> 
            </div> 
          </Link> 
        </div> 
        {/* <div className="wd-dashboard-course"> ... </div> 
        <div className="wd-dashboard-course"> ... </div>  */}


      </div> 
    </div> 
);} 