import React from "react";

export const HollywoodToppost = ({headerHollytp, descriptionHollytp, imgurlHollytp, numberHolly}) =>{
    return(
<>
     <div className="bwtpheadcontent">
           <div className="bwtpheadcontentimg" style={{backgroundImage: `url(${imgurlHollytp})`}}></div>

     <div className="bw123">
            <div>
            <h3 className="bwtpheadcontenthead">{headerHollytp}</h3>
            <p className="bwtpheadcontentpara">{descriptionHollytp}</p></div>

            <span className="one">{numberHolly}</span>
            </div>  
    </div>
  </>
    )
}