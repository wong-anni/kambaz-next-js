import Link from "next/link"; 
import { FormControl } from "react-bootstrap";

export default function Profile() { 
  return ( 
    <div id="wd-profile-screen">
      <h1>Profile</h1> 
      <FormControl defaultValue="alice" placeholder="username" className="wd-username mb-2"/>
      <FormControl defaultValue="123"   placeholder="password" type="password" className="wd-password mb-2" />
      <FormControl defaultValue="Alice" placeholder="First Name" id="wd-firstname" className="mb-2" />
      <FormControl defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" className="mb-2" />
      <FormControl type="date" id="wd-dob" className="mb-2" />
      <FormControl defaultValue="alice@wonderland.com" type="email" id="wd-email" className="mb-2" />
      <FormControl defaultValue="User" id="wd-role" className="mb-2"/>
      <Link id="wd-signout-btn"
            href="signin"
            className="btn btn-danger w-100 mb-2 danger" >
          Sign out 
      </Link> 
    </div> 
);} 