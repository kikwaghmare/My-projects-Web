import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
import {} from 'react-router-dom'
import uuid from 'uuid'
import { Students } from "./Students";

export const Student = () =>{

  let navigate = useNavigate();

  const handleDelete = (id) =>{
    var index = Students.map(function(e){
      return e.id
    }).indexOf(id)

    Students.splice(index, 1);
    
    navigate('/Student')
  }

  const handleEdit = (id, name, age, course, batch) =>{
    localStorage.setItem("Name", name)
    localStorage.setItem("Age", age)
    localStorage.setItem("Course", course)
    localStorage.setItem("Batch", batch)
    localStorage.setItem("id", id)
  }

    return(
        <>
       <div className="container">
        <div className="link"><Link to='/' style={{ textDecoration: 'none' , color:'white'}}>Home</Link> </div>

        <div className="link"><Link to='/Student' style={{ textDecoration: 'none' , color:'white'}}>Student</Link> </div>

        <div className="link"> <Link to='/Contact' style={{ textDecoration: 'none' , color:'white'}}>Contact</Link></div>
      
      </div>

      <div className="studentlist">Student List</div>

      <Link to="/Add">
      <button className="btn1">Add New Student</button>
      </Link>

      <table border={2}>

        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {
            Students && Students.length > 0
            ?
            Students.map((item) =>{
              return(
                <tr>
                  <td>{item.Name}</td>
                  <td>{item.Age}</td>
                  <td>{item.Course}</td>
                  <td>{item.Batch}</td>
                  <td>
                    <Link to='/Edit'>
                    <button onClick = {() => handleEdit(item.id, item.Name, item.Age, item.Course, item.Batch)} >Edit</button> 
                    </Link>
                    &nbsp;
                    &nbsp;
                    <button onClick={handleDelete}>Delete</button>
                  </td>
                </tr>
              )
              
            })
            :
            "No Data"
          }        
        </tbody>
        
        </table>
  
      
    </>
    )
}