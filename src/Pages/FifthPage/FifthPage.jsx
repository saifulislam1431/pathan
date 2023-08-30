import React, { useState } from 'react';
import TitleTag from '../../Components/TitleTag';
import { HiArrowSmallRight, HiOutlineCurrencyBangladeshi } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

const FifthPage = () => {
    const oldPreferences = localStorage.getItem("preferences");
    const preferences = JSON.parse(oldPreferences);
    const oldAdd = parseFloat(preferences.additionalTaka);
    const [deliveryTime , setDeliveryTime] = useState("");
    const [additionalTaka , setAdditionalTaka] = useState(0);
    const navigate = useNavigate()

    const handleTime = (time) =>{
        setDeliveryTime(time)
        if(time === "08:00 - 18:00"){
            setAdditionalTaka(0 + oldAdd)
        }else{
            setAdditionalTaka(10 + oldAdd)
        }
    }
    const handleNextPage = () =>{

        const newPreferences = {
            from: preferences.from,
            to: preferences.to,
            distance: preferences.distance,
            pick: preferences.pick,
            weight:preferences.weight,
            quantity:preferences.quantity,
            url:preferences.url,
            shippingCharge: preferences.shippingCharge,
            type:preferences.type,
            selectedDate:preferences.selectedDate,
            deliveryTime,
            additionalTaka
        }
        localStorage.setItem("preferences", JSON.stringify(newPreferences))
        navigate("/restPage/sixStep")

    }
    return (
       <section>
                    <TitleTag num="5" name="Date and time"></TitleTag>
            <h1 className='text-3xl font-extrabold text-slate-700 mt-3 mb-8'>Delivery: Select a time slot</h1>
            <div className='date-container mt-5'>
               <div className='optional-1 mb-5'>
                <p className='font-semibold'>Option 1: I'm Flexible</p>
                <div className={`${deliveryTime === "08:00 - 18:00" ? 'optionActive flex justify-between' : 'options flex justify-between'}`} onClick={()=>handleTime("08:00 - 18:00")}>
                        <p className='font-medium'>Flexible between 08:00 - 18:00</p>
                        <p><span className='inline-flex items-center text-accent font-medium'>+<HiOutlineCurrencyBangladeshi className='w-4 h-4' />0</span> </p>
                    </div>
               </div>

               <div className='optional-2'>
                <p className='font-semibold mb-2'>Option 2: Pick a time slot</p>
                <div className={`${deliveryTime === "10:20 - 15:20" ? 'optionActive flex justify-between' : 'options flex justify-between'}`} onClick={()=>handleTime("10:20 - 15:20")}>
                        <p className='font-medium'>10:20 - 15:20</p>
                        <p><span className='inline-flex items-center text-error font-medium'>+<HiOutlineCurrencyBangladeshi className='w-4 h-4' />10</span> </p>
                    </div>

                    <div className={`${deliveryTime === "12:20 - 17:20" ? 'optionActive flex justify-between' : 'options flex justify-between'}`} onClick={()=>handleTime("12:20 - 17:20")}>
                        <p className='font-medium'>12:20 - 17:20</p>
                        <p><span className='inline-flex items-center text-error font-medium'>+<HiOutlineCurrencyBangladeshi className='w-4 h-4' />10</span> </p>
                    </div>


                    <div className={`${deliveryTime === "14:20 - 18:20" ? 'optionActive flex justify-between' : 'options flex justify-between'}`} onClick={()=>handleTime("14:20 - 18:20")}>
                        <p className='font-medium'>14:20 - 18:20</p>
                        <p><span className='inline-flex items-center text-error font-medium'>+<HiOutlineCurrencyBangladeshi className='w-4 h-4' />10</span> </p>
                    </div>


                    <div className={`${deliveryTime === "15:20 - 20:20" ? 'optionActive flex justify-between' : 'options flex justify-between'}`} onClick={()=>handleTime("15:20 - 20:20")}>
                        <p className='font-medium'>15:20 - 20:20</p>
                        <p><span className='inline-flex items-center text-error font-medium'>+<HiOutlineCurrencyBangladeshi className='w-4 h-4' />10</span> </p>
                    </div>


                    <div className={`${deliveryTime === "16:20 - 21:20" ? 'optionActive flex justify-between' : 'options flex justify-between'}`} onClick={()=>handleTime("16:20 - 21:20")}>
                        <p className='font-medium'>16:20 - 21:20</p>
                        <p><span className='inline-flex items-center text-error font-medium'>+<HiOutlineCurrencyBangladeshi className='w-4 h-4' />10</span> </p>
                    </div>



               </div>
                    
              
                
            </div>
            <div className='flex items-end justify-end mt-11' onClick={handleNextPage}>
                        <button className='myBtn'>Continue <HiArrowSmallRight className='w-6 h-6' /></button>
                    </div>
       </section>
    );
};

export default FifthPage;