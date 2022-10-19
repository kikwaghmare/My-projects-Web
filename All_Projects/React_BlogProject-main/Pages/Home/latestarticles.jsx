import React from "react";

export const LatestArticlescontents = ({header2, description2,imgurl2}) =>{
    return(
<>
     <div className="xyz">
        <div className="latestarticlesimg" style={{backgroundImage: `url(${imgurl2})`}}></div> 
           <div className="latestarticlesflex">
            <h3 className="lahead">{header2}</h3>
            <p className="lapara">{description2}</p>
            </div>
        </div>
        <hr className="laline"/>
  </>
    )
}
