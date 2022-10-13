import React from "react"
import { useState } from "react"

export function HOC(){
    return(
      <>
      <h1>HOC</h1>
      <HOC cmp={Counter} />
   </>
    )
  }
  
  export function Hocprops(props)
  {
    return <h2 style={{backgroundColor:'red', width:"50px", height:'30px'}} ><props.cmp/></h2>
  }
  
  export function Counter(){
    const[count,setCount] = useState(0)
    return(
      <>
      <h3>{count}</h3>
      <div className="btnflex2">
      <button className="btn" onClick={()=>setCount(count+1)} >Increment</button>
      <button className="btn" onClick={()=>setCount(count-1)} >Decrement</button>
      </div>
      </>
    )
  }
