import React, {useState, useEffect} from 'react'

export default function UseEffect() {

const[count, setcount] = useState(0)
const[calculation,setcalculation] = useState(0)
 
const multiply = () =>{
    setcount(count + 1);
}

useEffect(() =>{
    setcalculation(count*2)
},[count])

return (
    <div>
        <p>{`(useState)The count is ${count} `}</p>
        <button onClick={multiply}>+</button>
        <p>{`(useEffect)The calculation is ${calculation}`}</p>
    </div>
  )
}
