import React, {useState} from 'react'

export default function UseState() {

const[count, setcount] = useState(0)

return (
    <div>

        <p>{`The count is ${count}`}</p>
        <button onClick={()=>{setcount(count+1)}}>+</button>
        &nbsp;
        &nbsp;
        <button onClick={()=>{setcount(count-1)}}>-</button>

    </div>
  )
}
