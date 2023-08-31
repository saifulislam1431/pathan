import React, { useEffect, useState } from 'react';
import TitleTag from '../../Components/TitleTag';
import useAuth from '../../hooks/useAuth';
import { IoMdReturnRight } from 'react-icons/io';
import { HiOutlineCurrencyBangladeshi } from 'react-icons/hi2';

const UserDash = () => {
    const {user} = useAuth();
    const [allOrders , setAllOrders] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/all-orders?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setAllOrders(data))
    },[user.email])

    return (
        <section>
            <TitleTag num="1" name="My Orders"></TitleTag>

<div className='my-10'>
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Item</th>
        <th>Transport Info</th>
        <th>Shipping Charge</th>
        <th>Additional Charge</th>
        <th>Total Charge</th>
        <th>Transaction Id</th>
      </tr>
    </thead>
    <tbody>
      {
        allOrders.map(order=> <tr key={order._id}>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={order.url} alt="Order img" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">
                    {order.type}
                  </div>
                  <div className="text-sm opacity-50">{order.pick}</div>
                </div>
              </div>
            </td>
            <td>
              <span className='font-semibold inline-flex items-center gap-1'>{order.from} <IoMdReturnRight className='w-5 h-4'/> {order.to}</span>
              <br/>
              <span className=" badge-sm font-medium">{order.weight}KG with <br /> quantity {order.quantity} Pics</span>
            </td>
            <td className='font-semibold'>{order.shippingCharge ? <span className='inline-flex gap-1'><HiOutlineCurrencyBangladeshi className='w-5 h-5 text-error'/>{order.shippingCharge}</span> : "None"}</td>
            <td className='font-semibold'>{order.additionalTaka ? <span className='inline-flex gap-1'><HiOutlineCurrencyBangladeshi className='w-5 h-5 text-error'/>{order.additionalTaka}</span> : "None"}</td>
            <td className='font-semibold'>{order.shippingCharge ? <span className='inline-flex gap-1'><HiOutlineCurrencyBangladeshi className='w-5 h-5 text-error'/>{parseFloat(order.shippingCharge) + parseFloat(order.additionalTaka)}</span> : "None"}</td>
            <td className='font-semibold'>{order.paymentIntent ? order.paymentIntent : "None"}</td>
          </tr>)
      }

      </tbody>
    
  </table>
</div>   
</div>           
        </section>
    );
};

export default UserDash;