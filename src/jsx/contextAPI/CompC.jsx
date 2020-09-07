import React, { useContext } from 'react';
import {Firstname,Lasttname} from './Comp';
const CompC=()=>{
    const fname=useContext(Firstname);
    const lname=useContext(Lasttname);
    return(
        <>
     {/* <Firstname.Consumer>
     {(fname)=>{
        return(
            <Lasttname.Consumer>
            {(lname)=>{
                return <h1>My Name is {fname} {lname}</h1>;
            }}
            </Lasttname.Consumer>
        );
    }}</Firstname.Consumer> */}
        <h1>My Name is {fname} {lname}</h1>
    </>
    );
};
export default CompC;