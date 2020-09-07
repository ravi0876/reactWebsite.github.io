import React, { useState } from 'react';

const Event=()=>{
    
    const color=["#8e44ad"];
    const [bg,setBg]=useState(color[0]);
    const[name,setName]=useState('Click Me');
    const bgChangeOnClick=()=>{
       let newBg='#34495e';
       let newName='Ouch !! 🐱';
        setBg(newBg);
        setName(newName);
    };
    const bgChangeOnDblClick=()=>{
        setBg(color[0]);
        setName('Argh !! 😠');
    };
    return(
        <>
            <div style={{backgroundColor:bg}}>
                <button onClick={bgChangeOnClick} onDoubleClick={bgChangeOnDblClick}>{name}</button>
            </div>
        </>
    );
};

export default Event;