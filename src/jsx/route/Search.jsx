import React, { useState } from 'react';
import Sresult from './Sresult'; 
const Search=()=>{
    const [img,setImg]=useState("");
    const inputEvent=(event)=>{
        const data = event.target.value;
        setImg(data);
    }
    return (
    <>
        <div className="searchbar">
            <input 
            type="text" 
            placeholder="Search Anything"
            value={img}
            onChange={inputEvent}
            />
        </div>
        {img===""?null:<Sresult name={img}/>}
    </>
    )
};
export default Search;