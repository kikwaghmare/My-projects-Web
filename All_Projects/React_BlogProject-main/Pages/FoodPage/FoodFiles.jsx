import React from "react";

export const FoodFiles = ({headerFood, descriptionFood, imgurlFood}) =>{
    return(
<>
     <div className="bollywoodcontent">
           <div className="bollywoodimage" style={{backgroundImage: `url(${imgurlFood})`}}></div>

            <div>
            <h3 className="bhead" >{headerFood}</h3>
            <p className="bpara" >{descriptionFood}</p></div>
            
        </div>
  </>
    )
}