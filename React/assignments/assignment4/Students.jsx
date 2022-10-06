import { Link } from "react-router-dom"
import React from "react";
import App from "../App";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AddStudents } from "./Student2";

const StudentList = () => {
    return(
        <>
        <div className="container">
        <div className="link" > 
        <Link to='/' style={{ textDecoration: 'none' , color:'white'}}>Home Page</Link>
        </div>

        <div className="link">
            Student Page
        </div>

        <div className="link">
            <Link to='/contact' style={{ textDecoration: 'none' , color:'white'}}>Contact Us</Link>
        </div>
        </div> <br /> <br />
    
    <div className="studentitem">
    <h1 className="studentlist">Student List</h1>
    </div>

    <div>
        <Link to='/studentlist/AddStudents'>
        <button type="button" className="button">Add New Student</button>
        </Link>
    </div>

   <table border={1}> 
    <th>Name</th>
    <th>Age</th>
    <th>Course</th>
    <th>Batch</th>

    <tr>
        <td>Harsh</td>
        <td>25</td>
        <td>Full Stack Development</td>
        <td>June 2022</td>
    </tr>

    <tr>
        <td>Piku</td>
        <td>25</td>
        <td>Business Management</td>
        <td>June 2022</td>
    </tr>

    <tr>
        <td>Ankitha</td>
        <td>22</td>
        <td>Full Stack Development</td>
        <td>June 2022</td>
    </tr>

    <tr>
        <td>Karthik</td>
        <td>25</td>
        <td>HR</td>
        <td>May 2022</td>
    </tr>

    <tr>
        <td>Gautam</td>
        <td>25</td>
        <td>Full Stack Development</td>
        <td>June 2022</td>
    </tr>
   </table>

    </>

    )
}


export default StudentList