import React from "react";

export const FitnessToppost = ({headerFtp, descriptionFtp, imgurlFtp, numberF}) =>{
    return(
<>
     <div className="bwtpheadcontent">
           <div className="bwtpheadcontentimg" style={{backgroundImage: `url(${imgurlFtp})`}}></div>

     <div className="bw123">
            <div>
            <h3 className="bwtpheadcontenthead">{headerFtp}</h3>
            <p className="bwtpheadcontentpara">{descriptionFtp}</p></div>

            <span className="one">{numberF}</span>
            </div>  
    </div>
  </>
    )
}