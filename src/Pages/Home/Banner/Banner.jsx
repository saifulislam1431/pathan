import React from 'react';
import banner from "../../../assets/banner-01.png"
import { IoLocationSharp } from "react-icons/io5";
import axios from 'axios';
import { useNavigate, useNavigation } from 'react-router-dom';
import Swal from 'sweetalert2';

const Banner = () => {
const navigate = useNavigate();

    const handleSubmit =(e) =>{
e.preventDefault();
const form = e.target;
const from = form.from.value;
const to = form.to.value;
// const destination = to.

 axios.get(`https://pathan-server.vercel.app/calculate-distance?destination=${to}`)
// console.log(res.data);
.then(res=>{
    if(res.data.distance){
        const preferences = {
            from,
            to,
            distance:res.data.distance
        }
        localStorage.setItem("preferences",JSON.stringify(preferences))
        navigate("/restPage/secondStep")
        }
})
.catch(error=>{
    Swal.fire({
        title: 'Error!',
        text: error.response.data.error,
        icon: 'error',
        confirmButtonText: 'Cool'
      })
})


    }

    return (
        <section className='mt-10'>
<div className="hero h-40 lg:h-96 min-w-md lg:w-full" style={{backgroundImage: `url(${banner})`}}>
</div>
<div className='text-center'>
<form onSubmit={handleSubmit} className='flex items-center justify-center'>
    <div className='relative'>
    <input type="text" className='inputField' 
    disabled = {true}
    name='from'
    value="Dhaka"
    placeholder='Dhaka'/>
    <IoLocationSharp className='text-secondary w-6 h-5 absolute top-[33%] left-2' />
    </div>
    <div className='relative'>
    <input type="text" 
    name='to'
    className='inputField2' placeholder='To'/>
    <IoLocationSharp className='text-secondary w-6 h-5 absolute top-[33%] left-2' />
    <button className='absolute right-0 bg-primary px-3 py-5 rounded-r-full font-semibold text-white'>Calculate Price</button>
    </div>
</form>
</div>
        </section>
    );
};

export default Banner;