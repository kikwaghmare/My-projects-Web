import React from "react";

export const TopPost = ({header3, description3,imgurl3, numbertp}) =>{
    return(
<>
     <div className="toppostflex">
        <div className="topostimage" style={{backgroundImage: `url(${imgurl3})`}}></div> 

            <div className="tpflex">
            <div><h3 className="tphead">{header3}</h3>
            <p className="tppara">{description3}</p> </div>
            <span className="num">{numbertp}</span>
            </div>
        </div>
        <hr className="tpline"/>
  </>
    )
}
