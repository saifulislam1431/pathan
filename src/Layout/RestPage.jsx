import React, { useEffect, useState } from 'react';
import logo from "../assets/express-delivery.png"
import { Link, Outlet } from 'react-router-dom';
import { HiOutlineCurrencyBangladeshi } from 'react-icons/hi2';



const RestPage = () => {

    const [preferences , setPreferences] = useState([]);


    useEffect(()=>{
        const storedPre = JSON.parse(localStorage.getItem("preferences"))
        setPreferences(storedPre)
    },[])
    

    
    
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col lg:px-16 lg:py-10">
    <Outlet />
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden absolute top-2 left-2">Open drawer</label>

  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu px-4 py-7 w-80 lg:w-96 min-h-full bg-base-200 text-base-content">
    <Link to="/" className='flex flex-col items-center relative'>
        <img src={logo} alt="Logo" className='w-11'/>
        <p className='brandTitle text-xl font-bold text-primary'>Pathan</p>
    </Link>

<div>
<ul className="steps steps-vertical">
  <li data-content="From" className="step step-primary font-semibold"><span className='text-secondary text-base hover:bg-transparent hover:text-secondary'>{preferences.from}</span></li>

  <li data-content="Pick" className="step step-primary font-semibold"><span className='text-secondary text-base hover:bg-transparent hover:text-secondary'>{`${preferences.pick === "" ? "Pick" : preferences.pick}`} on {preferences.selectedDate}</span></li>


  <li data-content="W/Q" className="step step-primary font-semibold"><span className='text-secondary text-base hover:bg-transparent hover:text-secondary'>{preferences.weight}Kg * {preferences.quantity} Pice</span></li>


  <li data-content="Type" className="step step-primary font-semibold"><span className='text-secondary text-base hover:bg-transparent hover:text-secondary'>{preferences.type}</span></li>


  <li data-content="To" className="step step-primary font-semibold"><span className='text-secondary text-base hover:bg-transparent hover:text-secondary'>{preferences.to}</span></li>
</ul>
</div>

<div className="divider"></div>
<div className='flex flex-col items-end justify-end w-full'>
<p className='font-semibold inline-flex items-center gap-1 text-error'>Shipping Charge: <HiOutlineCurrencyBangladeshi className='w-5 h-5'/> {preferences.shippingCharge}</p>
<p className='font-semibold inline-flex items-center gap-1 text-error'>Additional Charge: + {preferences.additionalTaka ? preferences.additionalTaka : 0}</p>

<div className="divider"></div>

<p className='font-semibold inline-flex items-center gap-1 text-secondary'>Total Charge: <HiOutlineCurrencyBangladeshi className='w-5 h-5'/> {parseFloat(preferences.shippingCharge) + parseFloat(preferences.additionalTaka)}</p>
</div>

    </ul>
  
  </div>
</div>
    );
};

export default RestPage;