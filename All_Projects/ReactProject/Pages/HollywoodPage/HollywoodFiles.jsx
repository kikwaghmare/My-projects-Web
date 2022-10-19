import React from "react";

export const HollywoodFiles = ({headerHollywood, descriptionHollywood, imgurlHolly}) =>{
    return(
<>
     <div className="bollywoodcontent">
           <div className="bollywoodimage" style={{backgroundImage: `url(${imgurlHolly})`}}></div>

            <div>
            <h3 className="bhead" >{headerHollywood}</h3>
            <p className="bpara" >{descriptionHollywood}</p></div>
            
        </div>
  </>
    )
}