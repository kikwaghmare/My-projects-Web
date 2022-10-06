import React from "react";
import { Link } from "react-router-dom";
import { Add } from "./Students";

export class AddStudents extends React.Component{

    render(){
        return(
            <>
            <center><h1>Enter Student Details</h1></center>
            <div className="arrangeinputs">
            <input className="input" type="text" placeholder=" Enter Name" />
            <input className="input" type="text" placeholder=" Enter Age" />
            <input className="input" type="text" placeholder=" Enter Course" />
            <input className="input" type="text" placeholder=" Enter Batch" />
            </div>

            <Link to='/studentlist'>
                <button className="btn2">Back</button>
            </Link>
            <Link to='/studentlist'>
            <button className="btn" type='button'>Add Details</button>
            </Link>
            </>
        )
    }
}

