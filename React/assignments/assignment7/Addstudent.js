import React, {useState} from "react";
import { Students } from "./Students";
import {v4 as uuid} from "uuid";
import { Link, useNavigate } from "react-router-dom";

function Add(){

    const[name, setname] = useState("");
    const[age, setage] = useState("");
    const[course, setcourse] = useState("");
    const[batch, setbatch] = useState("");

    let navigate= useNavigate();

    const SubmitDetails = (e) =>{
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = name,
        b = age,
        c = course,
        d = batch;

        Students.push({id: uniqueId, Name : a, Age : b, Course : c, Batch : d})

        navigate("/Student")

    }

    return(
        <div className="containeredit">

            <h2>Add Student Details</h2>

        <div className="inputs">
            <p style={{fontSize : '20px'}} > Name 
               &nbsp;
            <input className="inputfield" placeholder="Enter Name" type='text' onChange = {((e) => setname(e.target.value))} />
            </p>
            <p style={{fontSize : '20px'}}> Age 
                &nbsp; 
            <input className="inputfield" placeholder="Enter Age" type='text' onChange = {((e) => setage(e.target.value))}/>
            </p>

            <p style={{fontSize : '20px'}}> Course
                &nbsp;
            <input className="inputfield" type='text' onChange = {((e) => setcourse(e.target.value))}/>
            </p>

            <p style={{fontSize : '20px'}}> Batch
               &nbsp;
            <input className="inputfield" type='text' onChange = {((e) => setbatch(e.target.value))}/>
            </p>

            <button className="updatebtn" onClick = {(e) => SubmitDetails(e)}>Add Student</button>
        </div>
           


           
        </div>
    )
}


export default Add