import React from 'react';
import logo from "../../assets/express-delivery.png"
import { Link, NavLink, Outlet } from 'react-router-dom';
import { HiListBullet } from "react-icons/hi2";
import {  CiHome } from "react-icons/ci";
import useAuth from '../../hooks/useAuth';
const Dashboard = () => {

  const {user} = useAuth()

    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col lg:px-16 lg:py-10">
    <Outlet />
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden absolute top-2 left-2">Open drawer</label>

  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu pl-4 pr-0 py-7 w-72 min-h-full bg-base-200 text-base-content">
    <Link to="/" className='flex flex-col items-center relative'>
        <img src={logo} alt="Logo" className='w-11'/>
        <p className='brandTitle text-xl font-bold text-primary'>Pathan</p>
    </Link>


<div className="divider"></div>

<div className='flex flex-col items-center my-4'>
  <img src={user?.photoURL} alt="User" className='w-20 h-20 rounded-full'/>
  <p className='my-2 font-bold text-lg text-secondary'>{user?.displayName}</p>
</div>

<NavLink to="/dashboard/my-orders" className={({isActive})=>(isActive ? "dash-active" : "dash-default")}><HiListBullet className='inline-flex items-center h-6 w-6'/> My Orders</NavLink>

<NavLink to="/" className={({isActive})=>(isActive ? "dash-active" : "dash-default")}><CiHome className='inline-flex items-center h-6 w-6'/> Home</NavLink>

    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;