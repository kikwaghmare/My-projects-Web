import React, { useState} from "react";

const FunctionComponent = () =>{

    const[box1, setModal] = useState(false);

    const toggleModal = () =>{
        setModal(!box1)
    }

    return(
        <>
        <button onClick={toggleModal} className="funcc">To see styling in Function Component</button>

{box1 && (
    <div className="box1">
            <h1>This is created using Function Component</h1>

            <p className="para">This is done using external css</p>
            <p style={{color: 'blue', fontWeight: 'bold'}}>This is done using inline css</p>
        </div>
)}
        </>
    )
}

export default FunctionComponent