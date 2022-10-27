import React,{useState, useEffect} from 'react'

export default function Useeffecttwo() {

const[count, setcount] = useState(0)

useEffect(()=>{
    setTimeout(()=>{
        setcount(count + 1)
    },2000)  
})
return (
    <div>
        <h3>{count}</h3>
    </div>
  )
}
