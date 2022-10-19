import {Link} from "react-router-dom"
import { BollywoodFiles } from "./bolywoodfiles"
import { Bollywood } from "./mockdata"
import { BollywoodToppost } from "./BollywoodToppost"
import { BollywoodTp } from "./mockdata"

const BollywoodPage = () =>{
    return(
        <div className="container">

       <div>
        <span className='the'>The </span>
        <span className='siren'>Siren</span>
       </div>
       <br/>
        <div className="header">
            <div>
            <Link to='/' style={{ textDecoration: 'none', color:'black'}}>Home Page</Link>
            </div>
            <div>
            <div style={{color:'red'}}>Bollywood</div>
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
        </div> <br/>
        <hr className="hr1"/> <br /> <br />

<div className="containerBollywood">

    <div>
        <h2 className="bollywoodhead">Bollywood <hr style={{height:'2px', backgroundColor:'red', width:'150px'}} /></h2>

<br />
       <div className="bollywoodflex">
        {
                Bollywood.map((itemb,indexb)=>{
                    return(
                        <BollywoodFiles 
                        headerB={itemb.headerB}
                        descriptionB = {itemb.descriptionB}
                        imgurlB={itemb.backgroundB}
                        />
                    )
                })
            }
        </div>

    </div>

    <div className="Bollywoodtoposts">
        <h2 className="bwtopposthead">Top Posts <hr style={{width:'150px', height:'2px',backgroundColor:'red'}} /> </h2>
<br />
    <div>
        <img className="abimg" src="images/Amitabhji.jpg" alt="" />
        <div className="bw123">
        <div><h2 className="bwtphead">Catch waves with an adventure guide</h2>
        <p className="bwtpara">Gujarat is vastly underrated and its a mystery to us why the region isnt more well known as a tourist destination.</p></div>
        <span className="one">1</span>
        </div>
    </div> <br />
    <hr />

    <div>
    {
                BollywoodTp.map((itembtp,indexbtp)=>{
                    return(
                        <>
                        <BollywoodToppost 
                        headerBtp={itembtp.headerBtp}
                        descriptionBtp = {itembtp.descriptionBtp}
                        imgurlBtp={itembtp.backgroundBtp}
                        number={itembtp.number}
                        />
                        <hr />
                        </>
                    )
                })
            }
    </div>

    <div className="advertbw">advertisement</div>

    </div>

</div>


        </div>
    )
}

export default BollywoodPage