import {Link} from "react-router-dom"
import { FitnessData, FitnessTp } from "./fitnessdata"
import { FitnessFiles } from "./FitnessFiles"
import { FitnessToppost } from "./FitnessTopost"

const Fitness = () =>{
    return(
        <div className="container">

       <div>
        <span className='the'>The </span>
        <span className='siren'>Siren</span>
       </div>
       <br />
        <div className="header">
            <div>
                <Link to='/' style={{textDecoration: 'none', color:'black'}}>Home Page</Link>
            </div>
            <div>
                <Link to='/Bollywood' style={{ textDecoration: 'none', color:'black'}}>Bollywood</Link>
            </div>
            <div>
                <Link to='/Technology' style={{ textDecoration: 'none', color:'black'}}>Technology</Link>
            </div>
            
            <div>
            <Link to='/Hollywood' style={{ textDecoration: 'none', color:'black'}}>Hollywood</Link>
            </div>
            <div>
            <div style={{color:'red'}}>Fitness</div>
            </div>
            <div>
                <Link to='/Food' style={{ textDecoration: 'none', color:'black'}}>Food</Link>
            </div>
        </div> <br/>
        <hr className="hr1"/> <br /> <br />

        <div className="containerBollywood">

<div>
    <h2 className="bollywoodhead">Fitness<hr style={{height:'2px', backgroundColor:'red', width:'150px'}} /></h2>

<br />
   <div className="bollywoodflex">
    {
            FitnessData.map((itemF,indexF)=>{
                return(
                    <FitnessFiles 
                    headerF={itemF.headerF}
                    descriptionF = {itemF.descriptionF}
                    imgurlF={itemF.backgroundF}
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
    <img className="abimg" src="images/fitness1.webp" alt="" />
    <div className="bw123">
    <div><h2 className="bwtphead">Catch waves with an adventure guide</h2>
    <p className="bwtpara">Gujarat is vastly underrated and its a mystery to us why the region isnt more well known as a tourist destination.</p></div>
    <span className="one">1</span>
    </div>
</div> <br />
<hr />

<div>

    {
                FitnessTp.map((itemFtp,indexFtp)=>{
                    return(
                        <>
                        <FitnessToppost 
                        headerFtp={itemFtp.headerFtp}
                        descriptionFtp = {itemFtp.descriptionFtp}
                        imgurlFtp={itemFtp.backgroundFtp}
                        numberF={itemFtp.numberF}
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

export default Fitness