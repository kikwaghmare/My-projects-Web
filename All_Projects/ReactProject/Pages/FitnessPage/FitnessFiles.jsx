import React from "react";

export const FitnessFiles = ({headerF, descriptionF, imgurlF}) =>{
    return(
<>
     <div className="bollywoodcontent">
           <div className="bollywoodimage" style={{backgroundImage: `url(${imgurlF})`}}></div>

            <div>
            <h3 className="bhead" >{headerF}</h3>
            <p className="bpara" >{descriptionF}</p></div>
            
        </div>
  </>
    )
}