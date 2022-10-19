import React from "react";

export const FoodToppost = ({headerFoodtp, descriptionFoodtp, imgurlFoodtp, numberFood}) =>{
    return(
<>
     <div className="bwtpheadcontent">
           <div className="bwtpheadcontentimg" style={{backgroundImage: `url(${imgurlFoodtp})`}}></div>

     <div className="bw123">
            <div>
            <h3 className="bwtpheadcontenthead">{headerFoodtp}</h3>
            <p className="bwtpheadcontentpara">{descriptionFoodtp}</p></div>

            <span className="one">{numberFood}</span>
            </div>  
    </div>
  </>
    )
}