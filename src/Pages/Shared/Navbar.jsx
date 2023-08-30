import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import logo from "../../assets/express-delivery.png"
import { IoIosLogIn } from "react-icons/io";
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "lightThem")

  const [subMenu, setSubMenu] = useState(false)

  const handleToggle = e => {
      if (e.target.checked) {
          setTheme("night")
      } else {
          setTheme("lightThem")
      }
  }
  const {user,logOut} = useAuth();
  const handleOut =()=>{
    logOut()
    .then(()=>{
        Swal.fire({
            title: 'Success!',
            text: 'Sign Out',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
          
    })
    .catch(error=>{
        Swal.fire({
            title: 'Error!',
            text: error.message,
            icon: 'error',
            confirmButtonText: 'Cool'
          })
    })
}

    const navItems = <>
    <li><NavLink to="/" className={({isActive}) => (isActive ? "navActive" : "navDefault")}>Home</NavLink></li>

    <li><NavLink to="/dashboard" className={({isActive}) => (isActive ? "navActive" : "navDefault")}>Dashboard</NavLink></li>

    <li><NavLink to="/about" className={({isActive}) => (isActive ? "navActive" : "navDefault")}>About Us</NavLink></li>


        {
          user ? 
          <div className="dropdown dropdown-end"  onClick={()=>setSubMenu(!subMenu)}>
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user.photoURL} />
        </div>
      </label>
      {
        subMenu ? <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 ">
        <li className='my-3 border border-primary py-2 px-2 rounded font-medium hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer'>
          
            Profile
          
        </li>
        <li className='my-3 border border-primary py-2 px-2 rounded font-medium hover:bg-primary hover:text-white transition-all duration-200 cursor-pointer' onClick={handleOut}>Logout</li>
      </ul>: ""
      }
    </div>
          :<Link to="/signIn">
          <button className='myBtn'>Sign In <IoIosLogIn className='w-6 h-6'/></button>
      </Link>
        }

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