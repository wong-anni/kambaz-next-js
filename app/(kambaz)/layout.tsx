"use client";

import { ReactNode } from "react"; 
import KambazNavigation from "./navigation"; 
import "./styles.css";

// Import and use the store and Provider to provide all Kambaz related data to all pages and components
import store from "./store"; 
import { Provider } from "react-redux";

import Session from "./account/session"; 


export default function KambazLayout({ children }: Readonly<{ children: ReactNode }>) { 
 return ( 
  <Provider store={store}> 
  <Session>
  <div id="wd-kambaz">
    <div className="d-flex"> 
      <div> 
        <KambazNavigation /> 
      </div> 
      <div className="wd-main-content-offset p-3 flex-fill"> 
        {children} 
      </div> 
    </div>       
  </div>
  </Session>
  </Provider>
);} 