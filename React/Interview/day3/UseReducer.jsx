import React, {useReducer} from 'react'

export default function UseReducer() {

function reducer(state, action){
    switch(action.type){
        case "Increment":
           return{count: state.count + 1}
        case "Decrement":
            return{count: state.count - 1}
        case "Multiply":
            return{count: state.count * 2}
        default :
            return state
    }
}

function Increment(){
    dispatch({type: "Increment"})
}

function Decrement(){
    dispatch({type: "Decrement"})
}

function Multiply(){
    dispatch({type: "Multiply"})
}

const[state, dispatch] = useReducer(reducer, {count:0})
  return (
    <div>
        <p>{`The count is ${state.count}`}</p>
        <button onClick={Increment}>+</button>
        &nbsp;
        &nbsp;

        <button onClick={Decrement}>-</button>
        &nbsp;
        &nbsp;

        <button onClick={Multiply}>*2</button>
    </div>
  )
}
