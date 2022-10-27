import React, {useState} from "react";
import { Students } from "./Students";
import { Student } from "./Student";
import {v4 as uuid} from "uuid";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Edit(){
    const[name, setname] = useState("");
    const[age, setage] = useState("");
    const[course, setcourse] = useState("");
    const[batch, setbatch] = useState("");

    const[id, setid] = useState("")

    let navigate= useNavigate();

    var index = Students.map(function(e){
        return e.id
      }).indexOf(id)

      const UpdateDetails = (e) =>{
        e.preventDefault();

        let x = Students[index];
        x.Name = name;
        x.Age = age;
        x.Course = course;
        x.Batch = batch;
        x.id = id;


        navigate("/Student");

    }

    useEffect(() =>{
        setname(localStorage.getItem('Name'))
        setage(localStorage.getItem('Age'))
        setcourse(localStorage.getItem('Course'))
        setbatch(localStorage.getItem('Batch'))
        setid(localStorage.getItem('id'))
    }, [])

      return(
        <div className="containeredit">


        <h2>Update Student Details</h2>
        
        <div className="inputs">
            <p style={{fontSize : '20px'}} > Name 
               &nbsp;
            <input className="inputfield" value={name} placeholder="Enter Name" type='text' onChange = {((e) => setname(e.target.value))} />
            </p>
            <p style={{fontSize : '20px'}}> Age 
                &nbsp; 
            <input className="inputfield" value={age} placeholder="Enter Age" type='text' onChange = {((e) => setage(e.target.value))}/>
            </p>

            <p style={{fontSize : '20px'}}> Course
                &nbsp;
            <input className="inputfield" value={course} type='text' onChange = {((e) => setcourse(e.target.value))}/>
            </p>

            <p style={{fontSize : '20px'}}> Batch
               &nbsp;
            <input className="inputfield" value={batch} type='text' onChange = {((e) => setbatch(e.target.value))}/>
            </p>

            <button className="updatebtn" onClick = {(e) => UpdateDetails(e)}>Update Student</button>
        </div>

            
        </div>
      )

}

export default Edit