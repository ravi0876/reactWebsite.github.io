import React from 'react';
// import { NavLink } from 'react-router-dom';
import Web from '../../images/home.svg';
import Common from './Common';
const Home=()=>{
  return(
    <>
      <Common 
      name="Grow your Business With"
      imgsrc={Web}
      visit="/service"
      btname="Get Started"
      />
    </>
  );
};
export default Home;