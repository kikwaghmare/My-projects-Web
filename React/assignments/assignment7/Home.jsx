import React from "react";
import { Link } from "react-router-dom";

export const Home = () =>{
    return(
        <>

      <div className="container">
        <div className="link"><Link to='/' style={{ textDecoration: 'none' , color:'white'}}>Home</Link> </div>

        <div className="link"><Link to='/Student' style={{ textDecoration: 'none' , color:'white'}}>Student</Link> </div>

        <div className="link"> <Link to='/Contact' style={{ textDecoration: 'none' , color:'white'}}>Contact</Link></div>
      
      </div>

      <div className="homecontent">Home Page</div>
      
    </>
    )
}