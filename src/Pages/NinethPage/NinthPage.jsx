import React from 'react';
import TitleTag from '../../Components/TitleTag';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import FinalPage from '../FinalPage/FinalPage';
import { HiOutlineCurrencyBangladeshi } from 'react-icons/hi2';


const stripePromise = loadStripe(`${import.meta.env.VITE_PAYMENT_PK}`)
const NinthPage = () => {
    const oldPreferences = localStorage.getItem("preferences");
    const preferences = JSON.parse(oldPreferences);
    const price = parseFloat(preferences.additionalTaka);
    return (
        <section>
            <TitleTag num="9" name="Payment"></TitleTag>
            <h1 className='text-3xl font-extrabold text-slate-700 mt-3 mb-8'>Complete Your Payment</h1>
            
<div>
<div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={preferences.url} alt="Movie" className='h-full w-60'/></figure>
  <div className="card-body">
 
<div className='info  flex flex-row justify-between items-start'>
<div className='from'>
    <h1 className='text-accent font-bold text-xl underline decoration-wavy mb-2'>Start Point</h1>
<div className='font-medium'>
<h1>From: {preferences.from}</h1>
<h1>Pick: {preferences.pick}</h1>
<h1>Floor: {preferences.pickFloors}</h1>
<h1>Date: {preferences.selectedDate}</h1>
<h1>Type: {preferences.type}</h1>
<h1>Quantity: {preferences.quantity} KG</h1>
</div>
 </div>
 <div className="divider divider-horizontal"></div>
 <div className='to'>
    <h1 className='text-accent font-bold text-xl underline decoration-wavy mb-2'>Destination</h1>
<div className='font-medium'>
<h1>To: {preferences.to}</h1>
<h1>Floor: {preferences.deliveryFloors}</h1>
<h1>Date: {preferences.selectedDate}</h1>
<h1>Time: {preferences.deliveryTime}</h1>
</div>
 </div>
</div>

 <div className="divider"></div>
<div className='flex flex-col items-end justify-end w-full'>
<p className='font-semibold inline-flex items-center gap-1 text-error'>Shipping Charge: <HiOutlineCurrencyBangladeshi className='w-5 h-5'/> {preferences.shippingCharge}</p>
<p className='font-semibold inline-flex items-center gap-1 text-error'>Additional Charge: + {preferences.additionalTaka ? preferences.additionalTaka : 0}</p>

<div className="divider"></div>

<p className='font-semibold inline-flex items-center gap-1 text-secondary'>Total Charge: <HiOutlineCurrencyBangladeshi className='w-5 h-5'/> {parseFloat(preferences.shippingCharge) + parseFloat(preferences.additionalTaka)}</p>
</div>

<div>

</div>

  </div>
  <div>
  </div>
</div>

</div>

            <div className='my-14 w-3/4 lg:w-1/2 mx-auto'>
                <Elements stripe={stripePromise}>
                <FinalPage price={price}></FinalPage>
                </Elements>
            </div>
        </section>
    );
};

export default NinthPage;