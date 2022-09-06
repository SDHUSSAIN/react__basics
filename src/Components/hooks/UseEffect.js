import React, {useState,useEffect} from "react";
import "./style.css";

const UseEffect=()=>{
    const initialState = 0;
    const [num, setNum] = useState(initialState);


    useEffect(()=>{
        document.title = `Chats(${num})`;

    },);

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

        </div>
        </>
    );


};

export default UseEffect;
