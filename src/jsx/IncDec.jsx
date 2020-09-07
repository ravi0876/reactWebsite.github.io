import React, { useState } from 'react';

const IncDec=()=>{
    const [count,setCount]=useState(0);
    const increNum=()=>{
        setCount(count+1);
    };
    const decNum=()=>{
        count<=0?alert("Value cannot less than 0"):setCount(count-1);
    }
    return(
        <>
           <div className="main_div">
               <div className="center_div">
                   <h1>{count}</h1>
                   <div className="btn_div">
                      <button onClick={increNum}>Inc</button>
                      <button onClick={decNum}>Dec</button> 
                   </div>
               </div>
           </div>  
        </>
    );
};
export default IncDec;