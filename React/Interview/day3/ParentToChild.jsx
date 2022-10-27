import React from 'react'

export default function Parent() {
  
const data = "Data from Parent"
    return (
    <div>
        <Child 
        transfer = {data}
        />
    </div>
  )
}

export const Child = ({transfer}) =>{
    return(
        <div>
            {transfer}
        </div>
    )
}

