import React from 'react';
// import { NavLink } from 'react-router-dom';
import Web from '../../images/about.png';
import Common from './Common';
const About=()=>{
  return(
    <>
      <Common 
      name="Welcome to About Page"
      imgsrc={Web}
      visit="/contact"
      btname="Contact now"
      />
    </>
  );
};
export default About;