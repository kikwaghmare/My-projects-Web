import React, { useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = () =>{
 const [Toggle, SetToggle] = useState(true)

return(
    <div>
        {
            Toggle ? <div  className="header">
            <div>
            <div style={{color:'red'}}>Home Page</div>
            </div>
            <div>
                <Link to='/Bollywood' style={{ textDecoration: 'none', color:'black'}}>Bollywood</Link>
            </div>
            <div>
                <Link to='/Technology' style={{ textDecoration: 'none',color:'black'}}>Technology</Link>
            </div>
            <div>
                <Link to='/Hollywood' style={{ textDecoration: 'none', color:'black'}}>Hollywood</Link>
            </div>
            <div>
                <Link to='/Fitness' style={{ textDecoration: 'none', color:'black'}}>Fitness</Link>
            </div>
            <div>
                <Link to='/Food' style={{ textDecoration: 'none', color:'black'}}>Food</Link>
            </div>
        </div> : null
        }

<button className="menubar" onClick = {()=>SetToggle(!Toggle)}>
    <img src="images/menubar.png" alt="" height={'15px'} width='20px' />
</button>

    </div>
)}