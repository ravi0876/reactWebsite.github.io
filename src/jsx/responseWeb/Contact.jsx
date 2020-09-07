import React, { useState } from 'react';

const Contact=()=>{
  const [data,setData]=useState({
    fullname:'',
    phone:'',
    email:'',
    msg:'',
  });

  const inputEvent=(event)=>{
      const {name,value}=event.target;
      setData((preval)=>{
        return{
          ...preval,
          [name]:value,
        }
      })
  };
  const formSubmit=(event)=>{
      event.preventDefault();
      alert(`My Name is ${data.fullname}, My Mobile no. is ${data.phone}, My email id is ${data.email}, Here is what i want to say ${data.msg}`);
  };
  return(
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
            <div className="row">
                <div className="col-10 col-md-6 mx-auto">
                  <form onSubmit={formSubmit}>
                    <div className="mb-3">
                      <label for="exampleInputEmail1">Full Name</label>
                      <input type="text" className="form-control" name="fullname" value={data.fullname} onChange={inputEvent} placeholder="Enter your name" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1">Mobile no</label>
                      <input type="tel" className="form-control" name="phone" value={data.phone} onChange={inputEvent} placeholder="Enter your no." id="exampleInputPassword1" required/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1">Email Id</label>
                      <input type="email" className="form-control" name="email" value={data.email} onChange={inputEvent} placeholder="Enter your email id" id="exampleInputPassword1" required/>
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputPassword1">Message</label>
                      <textarea className="form-control" name="msg" value={data.msg} onChange={inputEvent} placeholder="Enter your email id" rows="3" id="exampleInputPassword1" required/>
                    </div>
                    <button type="submit" className="btn btn-outline-primary mr-2">Submit</button>
                  </form>
                </div>
            </div>
        </div>
    </>
  );
};
export default Contact;