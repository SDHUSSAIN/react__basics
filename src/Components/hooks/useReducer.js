import React,{useReducer,useState} from "react";
import"./style.css";

const reducer=(state,action)=>{
    if(action.type==="INCR"){
        state = state+1;
    }
    if(action.type==="DECR" && state>0){
    
        state = state-1;    
        
    }
    return state;

}

const UseReducer =()=>{
    const initialState = 0;
    // const [num, setNum] = React.useState(initialState)

    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
        <div className="center_div">
            <p>{state}</p>
            <div className="button2" onClick={()=>dispatch({type: "INCR"})}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                INCR
            </div>
            <div className="button2" onClick={()=>dispatch({type: "DECR"})}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                DECR
            </div>

        </div>
        </>
    );


};

export default  UseReducer;