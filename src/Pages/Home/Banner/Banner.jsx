import React from 'react';
import banner from "../../../assets/banner-01.png"
import { IoLocationSharp } from "react-icons/io5";

const Banner = () => {
    return (
        <section className='mt-10'>
<div className="hero h-40 lg:h-96 min-w-md lg:w-full" style={{backgroundImage: `url(${banner})`}}>
</div>
<div className='text-center'>
<form className='flex items-center justify-center'>
    <div className='relative'>
    <input type="text" className='inputField' placeholder='From'/>
    <IoLocationSharp className='text-secondary w-6 h-5 absolute top-[33%] left-2' />
    </div>
    <div className='relative'>
    <input type="text" className='inputField2' placeholder='To'/>
    <IoLocationSharp className='text-secondary w-6 h-5 absolute top-[33%] left-2' />
    <button className='absolute right-0 bg-primary px-3 py-5 rounded-r-full font-semibold text-white'>Calculate Price</button>
    </div>
</form>
</div>
        </section>
    );
};

export default Banner;