import React from "react";
import { Link } from "react-router-dom";

export const Contact = () =>{
    return(
        <>
       <div className="container">
        <div className="link"><Link to='/' style={{ textDecoration: 'none' , color:'white'}}>Home</Link> </div>

        <div className="link"><Link to='/Student' style={{ textDecoration: 'none' , color:'white'}}>Student</Link> </div>

        <div className="link"> <Link to='/Contact' style={{ textDecoration: 'none' , color:'white'}}>Contact</Link></div>
        
        
        <div className="contactbox"> 
        
        <div className="contact">Contact Us</div>
        <hr />
        <div className="items">Email : support-in@xyz.com</div>
        <div className="items">Tel : +9989XXXXXXXX</div>
        </div>


      </div>

        <div>Contact Us</div>
    </>
    )
}