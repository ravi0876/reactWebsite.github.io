import React, { useState } from 'react';

const Form=()=>{
    // const[name,setName]=useState("");
    const[fullname,setFullname]=useState({
        fname:'',
        lname:'',
        email:'',
        mobile:'',
    });
    // const[pass,setPass]=useState("");
    // const[fullname,setFullName]=useState();
    const nameEvent=(event)=>{
        // console.log(event.target.value);
        // console.log(event.target.name);
        // setName(event.target.value);
        // const value=event.target.value;
        // const name=event.target.name;

        const {value,name}=event.target;
        setFullname((prevalue) => {
        return{
            ...prevalue,
            [name]:value,
        };
            /*if(name==="fname") 
            {
                return{
                    fname:value,
                    lname:prevalue.lname,
                    email:prevalue.email,
                    mobile:prevalue.mobile,
                };
            }
           else if(name==="lname")
            {
                return{
                    fname:prevalue.fname,
                    lname:value,
                    email:prevalue.email,
                    mobile:prevalue.mobile,
                };
            }
            else if(name==="email")
            {
                return{
                    fname:prevalue.fname,
                    lname:prevalue.fname,
                    email:value,
                    mobile:prevalue.mobile,
                };
            }
            else if(name==="mobile")
            {
                return{
                    fname:prevalue.fname,
                    lname:prevalue.fname,
                    email:prevalue.email,
                    mobile:value,
                };
            }*/
        });
    };
    // const passEvent=(event)=>{
    //     // console.log(event.target.value);
    //     setPass(event.target.value);
    // };
    const onSubmit=(event)=>{
/*The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
For example, this can be useful when:
Clicking on a "Submit" button, prevent it from submitting a form
Clicking on a link, prevent the link from following the URL */
        event.preventDefault();
        // let full=name + " " + pass;
        // setFullName(full);
        alert('form submitted');
    };
    return(
        <>
            <form onSubmit={onSubmit} style={{width:'100%'}}>
                <div>
                    {/* <h1>Hello {fullname}</h1> */}
                    <h1>Hello {fullname.fname} {fullname.lname}</h1>
                    <p>{fullname.email}</p>
                    <p>{fullname.mobile}</p>
                    <input type="text" placeholder="Enter your First name" name="fname" onChange={nameEvent} value={fullname.fname}/>
                    <input type="text" placeholder="Enter your Last Name" name="lname" onChange={nameEvent} value={fullname.lname}/>
                    <input type="email" placeholder="Enter your email" name="email" onChange={nameEvent} value={fullname.email}/>
                    <input type="number" placeholder="Enter your mobile" name="mobile" onChange={nameEvent} value={fullname.mobile}/>
                    <button type="submit"> Click 😏</button>
                </div>
            </form>
        </>
    );
};

export default Form;