import React from 'react';
import { NavLink } from 'react-router-dom';
const Error=()=>{
    return(
        <>
            <div className="setStyle2">
                <h1 className="py-2">404 Error Page</h1>
                <p className="pb-1">Sorry Page not Found</p>
                <NavLink style={{textDecoration:'none'}} to="/"> Go back</NavLink>
            </div>
        </>
    );
};
export default Error;