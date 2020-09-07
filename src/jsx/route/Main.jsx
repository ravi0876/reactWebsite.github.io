import React from 'react';
import {Route,Switch, Redirect} from 'react-router-dom';
import About from './route/About';
import Contact from './route/Contact';
import Error from './route/Error';
import Menu from './route/Navbar';
// import Service from './route/Service';
// import User from './route/User';
// import Search from './route/Search';
import Home from './route/Home';
const App=()=>{
    return (
        <>
        <Menu/>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            {/* <Route exact path='/service' render={()=><Service name="Service"></Service>}/> */}
            <Route exact path='/contact' component={Contact}/>
            {/* <Route exact path='/search' component={Search}/> */}
            {/* <Route path='/contact/name' component={Name}/> */}
            {/* <Route path='/user/:fname/:lname' component={User}/> */}
            {/* <Route component={Error}/> */}
            <Redirect to="/"/>
        </Switch>
            {/* <About/>
            <Contact/> */}
        </>
    );
};
export default App;

/*
When you use component (instead of render or children ,below)
the router uses React.createElement to create a new React element from a given component.
that means if u provide a inline function to the componentprop, u would create a new component every render.
this results in the existing component unmounting and the new component mounting instead of just updating the existing component.
When using an inline function for inline rendering,use render   

if (component)
  return match ? React.createElement(component, props) : null

if (render)
  return match ? render(props) : null

So the conclusion is, there is not performance different between component and render prop if you are use component={AppComponent} directly, 
if you want to assign some props to AppComponent, use render={() => <AppComponent {...props}/> } instead of component={() => <AppComponent {...props}/> }
*/