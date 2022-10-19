import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import React from "react";
import { Latest } from "./MocKDate";
import { ImageWithTitle } from "./Latest";
import { Link } from "react-router-dom";
import {LatestArticlescontents} from "./latestarticles";
import { LatestArticles } from "./MocKDate";
import { TopPost } from "./topostimages";
import { Toppostimages } from "./MocKDate";
import { LatestStories } from "./lateststories";
import { lateststories } from "./MocKDate";
import { NavBar } from "../NavBar";

const HomePage = () => {
    return(
        <div className="container">

        <div>
        <span className='the'>The </span>
        <span className='siren'>Siren</span>
      </div> <br />

      <NavBar/>
     
        {/* <div  className="header">
            <div>
            <div style={{color:'red'}}>Home Page</div>
            </div>
            <div>
                <Link to='/Bollywood' style={{ textDecoration: 'none', color:'black'}}>Bollywood</Link>
            </div>
            <div>
                <Link to='/Technology' style={{ textDecoration: 'none',color:'black'}}>Technology</Link>
            </div>
            <div>
                <Link to='/Hollywood' style={{ textDecoration: 'none', color:'black'}}>Hollywood</Link>
            </div>
            <div>
                <Link to='/Fitness' style={{ textDecoration: 'none', color:'black'}}>Fitness</Link>
            </div>
            <div>
                <Link to='/Food' style={{ textDecoration: 'none', color:'black'}}>Food</Link>
            </div>
        </div> <br/> */} <br />
        <hr className="hr1"/> <br /> <br /> <br />


        {/* Header Images */}

        <div className="img1">
            <div className="parent"> <Link to='/Heading1'><span className="imgtext1">Title of Vertical Gallery<p className="imgpara" style={{color:'#FCFCFC'}}>Travel / September 25, 2022</p></span> </Link> 
            <img className="cheetah" src="images/cheetah.jpg" alt="not available" height={"449px"} width={"736px"}/> 
            </div>

            <div className="img2">
            <div className="parent2">  <Link to='/Heading2'><span className="imgtext2">Heading 2 </span> </Link> 
            <img className="lion" src="images/lion.jpg" alt="NA" height={"220px"} width={"363px"}/></div>
                
            <div className="parent3"> <Link to='/Heading3'><span className="imgtext3">Heading 3 </span> </Link> 
            <img className="rocks" src="images/rocks.jpg" alt="NA" height={"220px"} width={"363px"} /> </div>
            </div>
        </div> <br />

        {/* The Latest */}

    

<div style={{display:'flex',flexDirection:'column'}}>
<h2 className="latestt" >Latest <hr style={{width:"100px", height:'2px', backgroundColor:'red'}} /></h2>
<div  className="latestcontents">

            {
                Latest.map((item,index)=>{
                    return(
                        <ImageWithTitle 
                        header={item.header}
                        description = {item.description}
                        imgurl={item.background}
                        />
                    )
                })
            }
</div>
</div>


{/* Latest Articles */}


 <div className="latestarticlescontents">

<h2>Latest Articles<hr style={{width:"200px", height:'2px', backgroundColor:'red'}}/></h2>
<br />
<div className="laadvert">
 <div className="laflex">
{
    LatestArticles.map((item2,index2)=>{
        return(
            <LatestArticlescontents 
            header2={item2.header2}
            description2={item2.description2}
            imgurl2={item2.background2}
            />
        )
    })
}</div>

<div className="advert">Advertisement</div>
</div>
</div>

<div className="toppostcontents">
    <div>
        <img className="verticalimage" src="images/verticalimage.jpg" alt="" />
        <span className="imgtext1">Title of Vertical Gallery
        <p className="imgpara" style={{color:'#FCFCFC'}}>Travel / September 25, 2022</p>
        </span>
    </div>
    <div className="topposthead">
    <h2>
        Top Posts <hr style={{width:"100px", height:'2px', backgroundColor:'red'}}/>
    </h2>
    <br />
    <div>
        <img className="toppostimg" src="images/topostimg.jpg" alt="" />
        <div className="topostmedia" style={{display:"flex", flexDirection:'row', justifyContent: "space-between"}}>
        <div><h2 className="toposth2">Catch waves with an adventure guide</h2> <br />
        <p className="topostpara">Gujarat is vastly underrated and its a mystery to us why the region isnt more well known as a tourist destination.</p></div>
        <span className="num">1</span>
        </div>


        <hr className="tpline" />
        <div>
            {
                Toppostimages.map((item3,index3)=>{
                    return(
                        <TopPost
                        header3={item3.header3}
                        description3 = {item3.description3}
                        imgurl3={item3.background3}
                        numbertp={item3.numbertp}
                        />
                    )
                })
            }
        </div>
    </div>
    </div>
</div>


<div className="lateststories">
        <h2>Latest Stories <hr style={{width:"180px", height:'2px', backgroundColor:'red'}}/></h2>
    </div>
    <br />
    <hr />
    <br />

    <div className="lateststoriescontent">
            {
                lateststories.map((item4,index4)=>{
                    return(
                        <>

                        
                        <LatestStories
                        header4={item4.header4}
                        description4 = {item4.description4}
                        />

                        <hr className="lsline" />
                    
                        </>
                    )
                })
            }
        
            </div>
            <hr className="lsline2"/>
        
     
</div>
    )
}

export default HomePage