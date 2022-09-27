import React, {useState} from "react";

const ClassComponent = () =>{

const[box2, setbox2] = useState(false);

const toggleBox2 = () =>{
    setbox2(!box2)
}

    return(
        <>
        <button onClick={toggleBox2} type="button" className="classcomp">To see styling in Class Component</button>


{box2 && (

<div className="box2">
        <h1>This is created using Class Component</h1>
        
        <p className="para">This is done using external css</p>
        <p style={{color: 'blue', fontWeight: 'bold'}}>This is done using inline css</p>
        </div>
        
)}
</>
        
    )
}

export default ClassComponent