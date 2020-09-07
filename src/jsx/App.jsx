import React from 'react';
import Home from './responseWeb/Home';
import About from './responseWeb/About';
import Contact from './responseWeb/Contact';
import Service from './responseWeb/Service';
import Navbar from './responseWeb/Navbar';
import Footer from './responseWeb/Footer';
import {Route,Switch, Redirect} from 'react-router-dom';
const App=()=>{
  return(
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/> 
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/service" component={Service}/>
        <Redirect to="/" />
      </Switch>
      <Footer/>
    </>
  );
};
export default App;