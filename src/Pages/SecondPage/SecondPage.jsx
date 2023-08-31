import React, { useEffect, useState } from 'react';
import TitleTag from '../../Components/TitleTag';
import { IoBusOutline, IoHomeOutline, IoStorefrontOutline } from 'react-icons/io5';
import { HiArrowSmallRight, HiMegaphone } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import usePreferences from '../../hooks/usePreferences';





const SecondPage = () => {
  const [,refetch] = usePreferences()
    const [pick, setPick] = useState("");


    const oldPreferences = localStorage.getItem("preferences");
    const preferences = JSON.parse(oldPreferences);
    // console.log(preferences);
    
    useEffect(()=>{
        const newPreferences = {
            from :preferences.from,
            to :preferences.to,
            distance:preferences.distance,
            pick
        }
        localStorage.setItem("preferences",JSON.stringify(newPreferences))
        refetch()
    },[pick,preferences])




    return (
        <section className='my-5 mx-6'>
<TitleTag num="2" name="Type of transport"/>

<div className='mt-5'>
    <h1 className='text-3xl font-extrabold text-slate-700 mb-8'>Where do we pick it up?</h1>
<div className='option-container'>
   <div className={`${pick === "from home" ? 'optionActive' : 'options'}`} onClick={()=>setPick("from home")}>
      <div>
        <IoHomeOutline className='w-6 h-6 text-accent'/>
      </div>
      <div>
        <p className='font-semibold'>From a private home</p>
        <p>From someone you know or via an online marketplace</p>
      </div>
   </div> 

   <div className={`${pick === "from store" ? 'optionActive' : 'options'}`} onClick={()=>setPick("from store")}>
      <div>
        <IoStorefrontOutline className='w-6 h-6 text-accent'/>
      </div>
      <div>
        <p className='font-semibold'>From a store</p>
        <p>From example from a furniture store</p>
      </div>
   </div>

      <div className={`${pick === "from auction" ? 'optionActive' : 'options'}`} onClick={()=>setPick("from auction")}>
      <div>
        <HiMegaphone className='w-6 h-6 text-accent'/>
      </div>
      <div>
        <p className='font-semibold'>From an auction</p>
        <p>From troostwijk for example</p>
      </div>
   </div>   

   <div className={`${pick === "small move" ? 'optionActive' : 'options'}`} onClick={()=>setPick("small move")}>
      <div>
        <IoBusOutline className='w-6 h-6 text-accent'/>
      </div>
      <div>
        <p className='font-semibold'>Small move</p>
        <p>From someone you know or via an online marketplace</p>
      </div>
   </div>     
</div> 

<div className='flex items-end justify-end'>
    <Link to="/restPage/thirdStep" className='myBtn'>
        Continue <HiArrowSmallRight className='w-6 h-6'/>
    </Link>
</div>
</div>
        </section>
    );
};

export default SecondPage;