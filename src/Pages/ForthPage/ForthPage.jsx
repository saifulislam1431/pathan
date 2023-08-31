import React, { useEffect, useState } from 'react';
import TitleTag from '../../Components/TitleTag';
import { HiArrowSmallRight, HiOutlineCurrencyBangladeshi } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import usePreferences from '../../hooks/usePreferences';


const ForthPage = () => {
    const [,refetch] = usePreferences()
    const oldPreferences = localStorage.getItem("preferences");
    const preferences = JSON.parse(oldPreferences);
    const [selectedDate, setSelectedDate] = useState(null);
    console.log(selectedDate);
    const [additionalTaka, setAdditionalTaka] = useState(0)
    console.log(additionalTaka);
    const [dateList, setDateList] = useState([]);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const navigate = useNavigate()

    const generateDateList = () => {

        const dateArray = [];

        const options = { weekday: 'long', month: 'long', day: 'numeric' };

        for (let i = 0; i < 10; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            const formattedDate = date.toLocaleDateString(undefined, options);
            dateArray.push(formattedDate);
        }

        return dateArray;
    };

    useEffect(() => {
        setDateList(generateDateList());
    }, []);


    const handleDate = (newDate) => {
        setSelectedDate(newDate)
        if (newDate === today.toLocaleDateString(undefined, options)) {
            setAdditionalTaka(30)
        } else if (newDate === tomorrow.toLocaleDateString(undefined, options)) {
            setAdditionalTaka(15)
        } else {
            setAdditionalTaka(0)
        }
    }
    const handlePagination = () =>{
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
            selectedDate,
            additionalTaka
        }
        localStorage.setItem("preferences", JSON.stringify(newPreferences))
        refetch()
        navigate("/restPage/fifthStep")
    }

    return (
        <section>
            <TitleTag num="4" name="Date and time"></TitleTag>
            <h1 className='text-3xl font-extrabold text-slate-700 mb-8'>Select a date for pickup and delivery</h1>


            <div className='date-container mt-5'>
                {dateList.map((date, index) => (
                    <div className={` ${date === selectedDate ? "optionActive flex justify-between" : "my-3 border py-3 px-3 flex justify-between rounded cursor-pointer hover:border-primary"}`} key={index} onClick={() => handleDate(date)}>

                        <p className='font-medium'>{date}</p>
                        <p>{date === today.toLocaleDateString(undefined, options) ? <span className='inline-flex items-center text-error font-medium'>+<HiOutlineCurrencyBangladeshi className='w-4 h-4' />30</span> : date === tomorrow.toLocaleDateString(undefined, options) ? <span className='inline-flex items-center text-error font-medium'>+<HiOutlineCurrencyBangladeshi className='w-4 h-4' />15</span> : <span className='inline-flex items-center text-accent font-medium'>+<HiOutlineCurrencyBangladeshi className='w-4 h-4' />0</span>}</p>

                    </div>
                ))}
            </div>

            <div className='flex items-end justify-end mt-11' onClick={handlePagination}>
                        <button className='myBtn'>Continue <HiArrowSmallRight className='w-6 h-6' /></button>
                    </div>
        </section>
    );
};

export default ForthPage;