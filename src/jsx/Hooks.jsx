import React, { useState } from 'react';
// const state = useState();

const Hook=()=>{
//syntax
    //const [var,func]=useState(initial_data);
    let time=new Date().toLocaleTimeString();
    const[ctime,setCtime]=useState(time);
    // const [count,setCount]=useState(0);
    // const IncNum=()=>{
    //   setCount(count+1 );  
    // };
    const SetTime = () => {
        time=new Date().toLocaleTimeString();
        setCtime(time);
    };
    //every second chng time
    setInterval(SetTime,1000);

    return(
        <>
            {/* <h1>{count}</h1>
            <button onClick={IncNum}>Click Me</button> */}
            {/* <h1>{ctime}</h1>
            <button onClick={SetTime}>Get Time</button> */}
            <h1>{ctime}</h1>
        </>
    );
};

export default Hook;