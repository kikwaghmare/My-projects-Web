import {Link} from "react-router-dom"
import { HollywoodFiles } from "./HollywoodFiles"
import { HollywoodData } from "./hollywooddata"
import { HollywoodToppost } from "./HollywoodToppost"
import { HollywoodTpData } from "./hollywooddata"

const Hollywood = () =>{
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
            <Link to='/Bollywood' style={{ textDecoration: 'none', color:'black'}}>Bollywood</Link>
            </div>
            <div>
            <Link to='/Technology' style={{ textDecoration: 'none', color:'black'}}>Technology</Link>
            </div>
            <div>
            <div style={{color:'red'}}>Hollywood</div>
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
        <h2 className="bollywoodhead">Hollywood<hr style={{height:'2px', backgroundColor:'red', width:'150px'}} /></h2>

<br />
       <div className="bollywoodflex">
        {
                HollywoodData.map((itemHolly,indexHolly)=>{
                    return(
                        <HollywoodFiles 
                        headerHollywood={itemHolly.headerHollywood}
                        descriptionHollywood = {itemHolly.descriptionHollywood}
                        imgurlHolly={itemHolly.backgroundHollywood}
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
        <img className="abimg" src="images/avengers.jpg" alt="" />
        <div className="bw123">
        <div><h2 className="bwtphead">Catch waves with an adventure guide</h2>
        <p className="bwtpara">Gujarat is vastly underrated and its a mystery to us why the region isnt more well known as a tourist destination.</p></div>
        <span className="one">1</span>
        </div>
    </div> <br />
    <hr />

    <div>
    {
                HollywoodTpData.map((itemHollytp,indexHollytp)=>{
                    return(
                        <>
                        <HollywoodToppost 
                        headerHollytp={itemHollytp.headerHollytp}
                        descriptionHollytp = {itemHollytp.descriptionHollytp}
                        imgurlHollytp={itemHollytp.backgroundHollytp}
                        numberHolly={itemHollytp.numberHolly}
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
export default Hollywood