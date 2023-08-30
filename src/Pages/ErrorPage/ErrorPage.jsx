import React from 'react';
import animation from "../../../public/404Error.json";
import Lottie from "lottie-react";
import { Link } from 'react-router-dom';
import { HiArrowSmallLeft } from 'react-icons/hi2';

const ErrorPage = () => {
    return (
        <section className='flex items-center justify-center min-h-[calc(100vh-150px)]'>
        <div className='text-center'>
        <Lottie animationData={animation} loop={true} className='w-96'/>
        <Link to="/" className='my-btn inline-flex items-center gap-1'><HiArrowSmallLeft className='h-6 w-6'/>Back Home</Link>
        </div>
               </section>
    );
};

export default ErrorPage;