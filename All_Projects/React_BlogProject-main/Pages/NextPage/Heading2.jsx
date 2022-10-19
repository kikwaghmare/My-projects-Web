import React from "react";

const Heading2 = () =>{
    return(
<>
        
        
        <div className="heading1">
            <div className="thesiren" style={{float:'left', paddingLeft:'50px'}}>
            <span className='the'>The </span>
            <span className='siren'>Siren</span>
            </div>

            <div className="getstarted" style={{float:'right', marginRight:'50px'}}>
                <span style={{color:'#03A87C',fontFamily:"Arial, Helvetica, sans-serif"}}>Get Started</span>
            </div>
        </div>

<div className="clap">
    <div><img src="images/clap.png" alt="" />
    <span style={{color:'gray', position:'relative', top:'-15px',left:'15px'}} >9.5k claps</span>
    </div>

    <div className="share">
        <img src="images/setting.png" alt="" />
        <span style={{color:'gray', position:'relative', top:'-15px',left:'15px'}} >Share this Article</span>
    </div>
</div>

<div className="npdiv" style={{textAlign:'center'}}>
        <h1 className="nph1">Heading 2</h1>

<div className="profilebox">
    <div>
        <div style={{display:'flex', flexDirection:'row', gap:'10px', float:'left'}}>
            <img src="images/profilepic.png" height={'70px'} width={'70px'} />
            <div style={{textAlign:'start', marginTop:'10px'}}>
                <span>Dmitry Korlenko</span>
                <p style={{color:'gray', fontSize:'10px'}}>September 25, 2022 <br/> 10 min read</p>
            </div>
        </div>
    </div>

    <div style={{float:'right', marginTop:'20px'}}>
        <img src="images/twitter.png" alt="" height='30px' width='30px' />
        <img src="images/yt.png" alt=""height='30px' width='30px' />
        <img src="images/insta.png" alt=""height='30px' width='30px'/>
        <img src="images/fb.png" alt="" height='30px' width='30px'/>

    </div>
</div> <br />

<div className="nextpagecontents">
    <img className="nextpageimg" src="images/lion.jpg"/>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mattis ipsum vel enim venenatis, ac varius sapien ullamcorper. Maecenas sed nulla risus. Etiam vel est bibendum, consectetur ligula luctus, cursus velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas feugiat ligula vel arcu pulvinar, in tristique sapien malesuada. Sed consequat in purus non consequat. Maecenas sed erat hendrerit, maximus magna ac, condimentum dui. Etiam pretium purus ut congue viverra. Sed vulputate fringilla fringilla. Sed nec ligula scelerisque, lacinia est sed, imperdiet turpis. Fusce in libero ligula. Nulla non ipsum vitae nisi ultrices vulputate nec ac neque. Sed condimentum metus sit amet enim hendrerit ultricies. Duis et congue dui. Vestibulum lobortis magna sed semper laoreet
    Vestibulum luctus a velit a semper. Nullam bibendum accumsan orci, eu mattis leo sodales sit amet. Duis semper vulputate elit eu dignissim. In venenatis eros semper justo venenatis, ac suscipit sem efficitur. Proin eu sem aliquet, sollicitudin libero vulputate, imperdiet lectus. Nullam vestibulum ipsum tellus, sed fermentum est feugiat a. Maecenas interdum nisi est, eget sagittis lacus suscipit et. Vivamus placerat dictum facilisis.
    </p>
    <img className="nextpageimg" src="images/lion2.jpg" alt="" />
</div>

<div className="tags">
    <div style={{display:'flex',flexDirection:'row', gap:'10px'}}>
        <span className="tagstyle">React</span>
        <span className="tagstyle1">Photography</span>
        <span className="tagstyle2">Travel</span>
    </div>
    <div style={{marginTop:'20px', textAlign:'start'}}>
        <img src="images/clap.png" alt="" />
        <span style={{color:'gray', position:'relative', top:'-15px',left:'15px'}}>9.5K claps</span>
    </div>
    <hr style={{width:'600px'}} />
    <div style={{textAlign:'start'}}>
        <img src="images/profilepic.png" height={'70px'} />
        <span style={{position:'relative',top:'-30px',left:'15px'}}>Dmitry Korlenko</span>
    </div>

    <hr style={{width:'600px'}} />
</div>


<div className="morefromsiren">

    <div style={{marginLeft:'90px', fontSize:'20px'}}>More from Siren</div>
<br />
    <hr />
<br />
    <div className="morefromsirenflex">
    <div><img src="images/rocks.jpg" alt="" />
        <div style={{width:'200px', fontWeight:'bold', marginLeft:'10px',marginTop:'10px'}}>Catch waves with an adventure guide</div>
        <p style={{width:'280px', marginLeft:'10px',marginTop:'10px', fontSize:'12px'}}>Gujarat is vastly underrated and its a mystery to us why the region isnt more well known as a tourist destination</p>
        <div><img src="images/profilepic.png" alt="" height={'50px'} />
        <span style={{fontSize:'12px', position:'relative',top:'-20px',left:'10px'}}>Dmitry Korlenko</span>
        </div>
        </div>

        <div><img src="images/rocks.jpg" alt="" />
        <div style={{width:'200px', fontWeight:'bold', marginLeft:'10px',marginTop:'10px'}}>Catch waves with an adventure guide</div>
        <p style={{width:'280px', marginLeft:'10px',marginTop:'10px', fontSize:'12px'}}>Gujarat is vastly underrated and its a mystery to us why the region isnt more well known as a tourist destination</p>
        <div><img src="images/profilepic.png" alt="" height={'50px'} />
        <span style={{fontSize:'12px', position:'relative',top:'-20px',left:'10px'}}>Dmitry Korlenko</span>
        </div>
        </div>

        <div><img src="images/rocks.jpg" alt="" />
        <div style={{width:'200px', fontWeight:'bold', marginLeft:'10px',marginTop:'10px'}}>Catch waves with an adventure guide</div>
        <p style={{width:'280px', marginLeft:'10px',marginTop:'10px', fontSize:'12px'}}>Gujarat is vastly underrated and its a mystery to us why the region isnt more well known as a tourist destination</p>
        <div><img src="images/profilepic.png" alt="" height={'50px'} />
        <span style={{fontSize:'12px', position:'relative',top:'-20px',left:'10px'}}>Dmitry Korlenko</span>
        </div>
        </div>
    </div>
</div>

</div>
</>

    )
}

export default Heading2