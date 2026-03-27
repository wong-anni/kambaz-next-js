"use client";

import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import UrlEncoding from "./query-parameters/index";
import Link from "next/link"; 
import store from "./store"; 
import { Provider } from "react-redux";

export default function Lab4() {
    function sayHello() { 
        alert("Hello"); 
    } 
    return(
        <Provider store={store}>
            <div>
                <h2>Lab 4</h2> 
            {/* Managing State and User Input with Forms */}
                {/* Handling User Events */}
                <ClickEvent />
                <PassingDataOnEvent />
                <PassingFunctions theFunction={sayHello}/>   {/* // pass callback function as a parameter */}

                {/* Managing Component State */}
                <Counter /> 
                <BooleanStateVariables />
                <StringStateVariables /> 
                <DateStateVariable /> 
                <ObjectStateVariable />
                <ArrayStateVariable />
                <ParentStateComponent /> 

                {/* Encoding State in URL */}
                <UrlEncoding />

            {/* Managing Application State with Redux */}
                <Link href="/labs/lab4/redux">Redux Examples</Link>
                <hr /> 
            {/* Managing State with React Context */}
                <Link href="./lab4/react-context">React Context Examples</Link>
                <hr /> 
            {/* Managing State with Zustand */}
                <Link href="./lab4/zustand">Zustand Examples</Link> 
                <hr /> 
            </div>
        </Provider>
    );
}