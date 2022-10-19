import React from "react";

export const LatestStories = ({header4, description4}) =>{
    return(
<>
     <div >
        <div ></div> 
           <div >
            <h3 className="lshead" >{header4}</h3>
            <p className="lspara" >{description4}</p>
            </div>
        </div>
  </>
    )
}