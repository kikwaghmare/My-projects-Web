import React from "react";

export const ImageWithTitle = ({header, description,imgurl}) =>{
    return(

        <div className="latestimage" style={{backgroundImage: `url(${imgurl})`}}>
            <div className="latestmedia"><h3 className="latesth3">{header}</h3>
            <p className="latestpara">{description}</p>
            </div>
        </div>
    )
}