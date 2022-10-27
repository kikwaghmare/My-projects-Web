import React from "react";
import { Students } from "./Students";
import Edit from "./Edit";
import Add from "./Addstudent";


const Reducer = (state = '', action)=>{
    switch(action){
        case Add : return <Add/>
        case Edit : return <Edit/>
        default : return <Students/>
    }
}

export default Reducer