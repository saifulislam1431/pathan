import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from "../../assets/express-delivery.png"
import { IoIosLogIn } from "react-icons/io";

const Navbar = () => {

    const navItems = <>
    <li><NavLink to="/" className={({isActive}) => (isActive ? "navActive" : "navDefault")}>Home</NavLink></li>

    <li><NavLink to="/dashboard" className={({isActive}) => (isActive ? "navActive" : "navDefault")}>Dashboard</NavLink></li>

    <li><NavLink to="/about" className={({isActive}) => (isActive ? "navActive" : "navDefault")}>About Us</NavLink></li>


        <Link to="/signIn">
            <button className='myBtn'>Sign In <IoIosLogIn className='w-6 h-6'/></button>
        </Link>

    </>
    const logoContainer = <div className='flex flex-col items-center relative'>
        <img src={logo} alt="Logo" className='w-11'/>
        <p className='brandTitle text-xl font-bold text-primary'>Pathan</p>
    </div>


    return (
        <div className="navbar bg-base-100 sticky top-0 shadow-md">
            <Link to="/" className='navbar-start lg:hidden'>
{logoContainer}
            </Link>
  <div className="navbar-end lg:navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#4FD894"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 absolute right-0">
        {navItems}
      </ul>
    </div>
    <Link to="/" className='hidden lg:flex'>
{logoContainer}
    </Link>
  </div>

  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      
      {navItems}
    </ul>
  </div>
</div>
    );
};

export default Navbar;