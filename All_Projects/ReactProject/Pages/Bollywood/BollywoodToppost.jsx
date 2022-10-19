import React from "react";

export const BollywoodToppost = ({headerBtp, descriptionBtp, imgurlBtp, number}) =>{
    return(
<>
     <div className="bwtpheadcontent">
           <div className="bwtpheadcontentimg" style={{backgroundImage: `url(${imgurlBtp})`}}></div>

     <div className="bw123">
            <div>
            <h3 className="bwtpheadcontenthead">{headerBtp}</h3>
            <p className="bwtpheadcontentpara">{descriptionBtp}</p></div>

            <span className="one">{number}</span>
            </div>  
    </div>
  </>
    )
}