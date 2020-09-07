import React, { useState, useEffect } from 'react';
const App=()=>{
const[num,setNum]=useState(0);
const[nums,setNums]=useState(0);
//means once page is refresh it's called when passing [](empty array) as argument of useEffect.
// useEffect(()=>{
//   alert("I am Clicked");
// },[num]);
useEffect(()=>{
  document.title=`you clicked me ${num} times`;
});
return(
  <>
    <button onClick={()=>{
      setNum(num+1);
    }}>Click me {num}</button>
    {/* <br/>
    <br/>
    <button onClick={()=>{
      setNums(nums+1);
    }}>Click me {nums}</button> */}
  </>
);
};
export default App;