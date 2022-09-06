import React from "react";
import"./style.css";

const UseState =()=>{
    const initialState = 0;
    const [num, setNum] = React.useState(initialState)
    return (
        <>
        <div className="center_div">
            <p>{num}</p>
            <div className="button2" onClick={()=>setNum(num+1)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                INCR
            </div>
            <div className="button2" onClick={()=>num > 0 ? setNum(num-1):setNum(0)}>
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

export default UseState;