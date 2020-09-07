import React from 'react';
import {useParams,useLocation,useHistory} from 'react-router-dom';
// const User=({match})=>{
//     return <h1>Hi i am User {match.params.name} Page</h1>
// };
const User=()=>{
    const { fname,lname } = useParams();
    const location=useLocation();
    const history=useHistory();
    return(
    <>
        <h1>Hi i am User {fname} {lname} Page</h1>
        <p style={{paddingBottom:'2%'}}>My Current Location is {location.pathname}</p>
        {location.pathname===`/user/abc/def`?
        <button style={{padding:'0.5%'}} onClick={()=>history.push('/')}>Home Page</button>:null
        }
        {/* <button style={{padding:'0.5%'}} onClick={()=>alert("This is Awsome")}>Click Me</button>:null} */}
    </>);
     
};
export default User; 