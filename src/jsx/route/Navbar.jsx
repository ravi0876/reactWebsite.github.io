import React from 'react';
import {NavLink} from 'react-router-dom';
const Navbar=()=>{
    return (
        <>
            <div className="nav_style">
                <NavLink exact activeClassName="active_class" to='/'>
                Home
                </NavLink>
                <NavLink exact activeClassName="active_class" to='/about'>
                About Us
                </NavLink>
                {/* <NavLink exact activeClassName="active_class" to='/service'>
                Services
                </NavLink> */}
                {/* <NavLink exact activeClassName="active_class" to='/search'>
                Search
                </NavLink>
                <NavLink exact activeClassName="active_class" to='/user/abc/def'>
                User
                </NavLink> */}
                <NavLink exact activeClassName="active_class" to='/contact'>
                Contact Us
                </NavLink>
            </div>
            {/* <br/>
            <a href="/" style={{color:'blue',textDecoration:'none',fontSize:'24px'}}>About Us</a>
            &nbsp;&nbsp;&nbsp;
            <a href="/contact" style={{color:'blue',textDecoration:'none',fontSize:'24px'}}>Contact Us</a> */}
        </>
    );
};
export default Navbar;