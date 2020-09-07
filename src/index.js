// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <h1>Hello World</h1>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// var React = require('react');
// import React from 'react';
// var ReactDOM = require('react-dom');
// import ReactDOM from 'react-dom;
// ReactDOM.render('kya dikhana hai what to show','kha dikhana hai where to show','callback func');

// ReactDOM.render(
//   <h1>Hello World!!</h1>
//   ,document.getElementById('root'));

//render multiple elements inside ReactDOM.render() 
// place html (or can say jsx elemnts) put it in div tag

// ReactDOM.render(
//   <div>
//   <h1>Hello World!!</h1>
//   <p>Welcome</p>
//   </div>
//   ,document.getElementById('root'));

//To avoid unneccesary tag place on html code while including multiple elements inside ReactDom.render()
//we use React.fragment

// ReactDOM.render(
//   <React.Fragment> also u can avoid to write fragment like <>elements</>
//   <h1>Hello World!!</h1>
//   <p>Welcome</p>
//   </React.Fragment>
//   ,document.getElementById('root'));

// const arr=['abc','def','efg'];
// In react v16 it's possible for render()
// to  return an array of elements 

// ReactDOM.render(
//   [
//   <h1>Hello World!!</h1>,
//   <p>Welcome enjoy</p>
//   ],
//    document.getElementById('root'));

// after converted by babel(Javascript Compiler) 
// ReactDOM.render(React.createElement("h1",null,"Hello world"),document.getElementById("root"));

//traditional javascript code to render into html code 
// var h1 = document.createElement("h1");
// h1.innerHTML="hello world";
// document.getElementById("root").appendChild(h1);

//new series challenge

// ReactDOM.render(
//   [
//   <h1>NetFlix</h1>,
//   <p>List of best series</p>,
//     <ol>
//       <li>A</li>
//       <li>B</li>
//       <li>C</li>
//       <li>D</li>
//       <li>E</li>
//     </ol>
//   ],
//    document.getElementById('root'));

//use javscript element into html or jsx element using {} also use to write expression bt not statements(conditional,looping)

// const fname="CM Punk";
// ReactDOM.render(
//   <>
//   <h1>My name is {fname}</h1>
//   <p>Sum is : {3 + 4}</p>
//   <p>Random no : {Math.random()}</p>
//   </>
//   ,document.getElementById('root'));

  //Template Literals
  // const fname="CM";
  // const lname="Punk";
  // ReactDOM.render(
  //   <h1>{`My name is ${fname} ${lname}`}</h1>,
  //   document.getElementById('root')
  // );

  //Challenge to show current date and time

  // const d = new Date;
  // ReactDOM.render(
  //   <>
  //   <h2>{`Current date ${d.toLocaleDateString()}`}</h2>
  //   <h3>{`Current Time ${d.toLocaleTimeString()}`}</h3>
  //   </>,
  //   document.getElementById('root')
  // );  

//jsx attribute
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// const name="Abhi";
//inline css for jsx elements
// const heading={
//   color: 'maroon',
//   textAlign: 'center',
//   textTransform: 'capitalize',
//   fontWeight: 'bold',
//   textShadow: "0px 2px 4px darkorange",
//   margin: "50px 0px",
//   fontFamily: "'Josefin Sans', sans-serif",
// };
// ReactDOM.render(
//   <>
//     {/* <h1 className="heading">My name is {name}</h1> */}
//     <h1 style={heading}>My name is {name}</h1>
//     <div className="img_div">
//       <img src="https://picsum.photos/200/300" alt="img"/>
//       <img src="https://picsum.photos/250/300" alt="img"/>
//       <img src="https://picsum.photos/300/300" alt="img"/>
//     </div>
//   </>,
//   document.getElementById("root")
// );

//challenge 3
// let currDate = new Date();
// let currHrs = currDate.getHours();

// let greeting='';
// let greetCss={  
// };
// let heading={
//   color:'darksalmon'
// };
// if (currHrs>=1 && currHrs < 12)
// {
//   greeting='Good Morning';
  
//    greetCss.color='green';
  
//    greetCss.textShadow= '0px 2px 4px darkorange';
// }
// else if(currHrs>=12 && currHrs < 16)
// {
//   greeting='Good Afternoon';
  
//    greetCss.color='red';

//    greetCss.textShadow= '0px 2px 4px darkorange';
// }
// else if(currHrs>=16 && currHrs<19)
// {
//   greeting='Good Evening';
  
//    greetCss.color='orangered';
//    greetCss.textShadow= '0px 2px 4px palevioletred';
// }
// else{
//   greeting='Good night';
  
//    greetCss.color='Black';
//    greetCss.textShadow= '0px 2px 4px darkturquoise';
// }
//  ReactDOM.render(
//    <>
//       <div>
//         <h1 style={heading}>Hello Sir, <span style={
//         greetCss}> {greeting}</span></h1>
//       </div>
//    </>,
//    document.getElementById('root')
//  );

//Components  //challenge 3 rewrite using components
import React, { version } from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import HeadParaList from './jsx/HeadParaList';
// ReactDOM.render(
// <HeadParaList></HeadParaList>,
// document.getElementById('root')
// );

//import & export of components

//jo export hum default wala kr rhe hai uska naam hum kuch bhi de skte hai
//bt otherthan default wahi naam dena padega jo humne export kiya tha curly braces me pass krke
// import intro,{favprog,myName} from './jsx/App';

//import all from app.jsx using * as <obj>
// import * as abc from './jsx/HeadParaList';

/*ReactDOM.render(
  <>
    <ol>
      { <li>{intro}</li>
      <li>{favprog}</li>
      <li>{myName()}</li>
      }
      <li>{abc.default}</li>
      <li>{abc.favprog}</li>
      <li>{abc.myName()}</li>
    </ol>
  </>,
  document.getElementById('root')
);*/

//challenge 5 simple calculation
/*import {add,sub,mul,div} from './jsx/Calc';
ReactDOM.render(
  <>
    <ul>
      <li>Sum is : {add(30,2)}</li>
      < li>Differnce is: {sub(30,15)}</li>
      <li>Multiple is: {mul(30,2)}</li>
      <li>Division is: {div(10,3)}</li>
    </ul>
  </>,
  document.getElementById('root')
)*/
//Challenge netflix 
//props (custom attributes)
// import './index.css';
// import Card from './jsx/Card';
// import Sdata from './jsx/Sdata';
// import Netflix from './jsx/Netflix';

/*function ncard(val)
{
  return (
    <Card 
    img_src={val.img_src}
    title={val.title}
    sname={val.sname}
    link={val.link}
     />
  );
}*/
// ReactDOM.render(
//   <>
//     <Netflix></Netflix>   
//   </>,
//   document.getElementById('root')
// );
/*The map() method creates a new array with the results of calling a function for every array element. The map() method calls the provided function once for each element in an array, in order. 
Note: map() does not execute the function for array elements without values.
Note: this method does not change the original array.
Syntax:
array.,map(function(currentValue,index,arr),thisValue);
*/
// const oldarr = ['abc','def'];
// const newarr = oldarr.map(function(cvalue,i){
//     return i + ":" + cvalue + " " + "gfi";
// });
// console.log(newarr);

// const studdata= [
// {
//   id : 1, name : "abc"
// },
// {
//   id : 2, name : "def"
// }
// ];

// const newstud = studdata.map((cvalue) => {
//   return `My name is ${cvalue.name}`;
// });
// console.log(newstud);


//Challenge 6 slot game

/*import Slot from './jsx/Slotgame';
import './index.css';
ReactDOM.render(
  <Slot></Slot>,
  document.getElementById('root')
);*/

//Array Destructuring(syntax is a javascript expression that makes it possible to unpack values from arrays, or properties from objects,into district variables)
// const myfavprog=['js','c','c++','java','php'];

// let [top1,,,,toplast]=myfavprog;
// console.log(`my fav program is ${top1} and my least fav is ${toplast}`);

//Hooks
/*
1.Hooks are the new feature introduced in the react 16.8 version.
2.It allows you to use state and other React features without writing a class.
Hooks are functions that let you “hook into” React state and lifecycle features from function components.
3.Hooks don’t work inside classes — they let you use React without classes. 
4.Hooks should always be used at the top level of the react functions.
5.Node Version 6 or Above. NPM version 5.2 or above

useState is a hook(function) that allows you to have state variables in functional componenets.
You pass the intial state to this function,and it retrns a variable with the current state value.
(not neccessary the intial state) and another function to update this value
*/

//Challenge hook on click get time and digital clock
/* import Hooks from './jsx/Hooks';
import './index.css';

ReactDOM.render(
  <Hooks></Hooks>,
  document.getElementById('root')
);*/

//Event Handling
/*import './index.css';
import Event from './jsx/Event';

ReactDOM.render(
  <Event></Event>,
  document.getElementById('root')
  );
*/

//Forms
// import Form from './jsx/Form';
// import './index.css';

// ReactDOM.render(
//   <Form></Form>,
//   document.getElementById('root')
// );

//Spread Operator
/*the syntax is three dots (...) followed by array (or iterable) 
it expands the array into individual elements.
so it can be useed to expand rhe array in a places where zero or more elements are expected*/

// const fullname=['abc','def'];
// const bio=[1,...fullname,26,'male'];

// console.log(fullname);
// console.log(bio);

// const shootgames=['cod','far cry','resident evil'];
// const[first,...remain]=shootgames;

// console.log(first);
// console.log(remain);

//Challenge TodoList
// import TodoList from './jsx/todolist/ToDoList';
// import './index.css';

// ReactDOM.render(
//   <TodoList></TodoList>,
//   document.getElementById('root')
// );

//Challenge Increment/Decrement by button
// import IncDec from './jsx/IncDec';
// import './index.css';

// ReactDOM.render(
//   <IncDec></IncDec>,
//   document.getElementById('root')
// );

//Digital clock using npm
// import ClockDemo from "./jsx/ClockDemo";
// import './index.css';
// ReactDOM.render(
// <ClockDemo></ClockDemo>,
// document.getElementById('root')
// );

//Todolist using material

// import TodoListM from './jsx/todolist/TodoListM';
// import './index.css';

// ReactDOM.render(
//   <TodoListM></TodoListM>,
//   document.getElementById('root')
// );

//Bootstrap
/*
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
  <>
    <h1 className="text-center text-capitalize my-5 text-danger">Welcome</h1>
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="card">
            <img src="https://picsum.photos/seed/picsum/200/300" className="card-img-top" alt="..." height="200px"/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." height="200px"/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <img src="https://picsum.photos/201/300" className="card-img-top" alt="..." height="200px"/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>,
  document.getElementById('root')
);
*/
//Challenge GoogleKeep app
// import GoogleKeep from './jsx/googlekeep/Google';
// import './index.css';
// ReactDOM.render(
//   <GoogleKeep/>,
//   document.getElementById('root')
// );

//Context API
/*React Context API is a way to essentially create global variables that can be passed around in a React app. 
This is the alternative to "prop drilling", or passing props from grandparent to parent to child, and so on. 
Context is often touted as a simpler, lighter solution to using Redux for state management.
In a typical React application, data is passed top-down (parent to child) via props, but this can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application.
 Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree. 
 React Context API allows u to easily access data at diff. levels of the component tree,
 without passing prop to every level.
 */

// import Comp from './jsx/contextAPI/Comp';
// ReactDOM.render(
// <Comp/>,
// document.getElementById('root')
// );
 
//UseEffect and challenge chnage the title of page
/*By using this Hook, you tell React that your component needs to do something after render. 
React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. 
In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.
  */
// import useEffect from './jsx/useEffect';
// ReactDOM.render(
// <useEffect/>,
// document.getElementById('root')
// );

//Pokemon
// import Poke from './jsx/Pokemon';
// ReactDOM.render(
// <Poke/>,
// document.getElementById('root')
// );

//React Router
/*Many modern websites are actually made up of a single page, they just look like multiple pages because they contain components that render like separate pages. 
These are usually referred to as SPAs - single-page applications.
 At its core, what React Router does is conditionally render certain components to display depending on the route being used in the URL (/ for the home page, /about for the about page, etc.). */
// import Main from './jsx/route/Main';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './index.css';
// import {BrowserRouter} from 'react-router-dom';
// ReactDOM.render(
// <BrowserRouter>
//   <Main/>
// </BrowserRouter>,
// document.getElementById('root')
// );

import App from './jsx/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './index.css';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);