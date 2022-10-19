import React from "react";

export const BollywoodFiles = ({headerB, descriptionB, imgurlB}) =>{
    return(
<>
     <div className="bollywoodcontent">
           <div className="bollywoodimage" style={{backgroundImage: `url(${imgurlB})`}}></div>

            <div>
            <h3 className="bhead" >{headerB}</h3>
            <p className="bpara" >{descriptionB}</p></div>
            
     </div>
  </>
    )
}