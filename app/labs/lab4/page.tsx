"use client"
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

export default function Lab4() {
    // implement callback function
    function sayHello() { 
        alert("Hello"); 
    } 

    return(
        <div>
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

        </div>
    );
}