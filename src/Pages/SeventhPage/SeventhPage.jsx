import React, { useEffect, useState } from 'react';
import { HiArrowSmallRight, HiOutlineBuildingOffice, HiOutlineCurrencyBangladeshi } from 'react-icons/hi2';
import { IoSwapVerticalOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import TitleTag from '../../Components/TitleTag';

const SeventhPage = () => {
    const navigate = useNavigate()
    const oldPreferences = localStorage.getItem("preferences");
    const preferences = JSON.parse(oldPreferences);
    const oldAdd = parseFloat(preferences.additionalTaka);

    const [allFloor, setAllFloor] = useState([]);
    const [pickFloors, setFloor] = useState("");
    const [additionalTaka , setAdditionalTaka] = useState(0);


    useEffect(() => {
        fetch("../../../public/floor.json")
            .then(res => res.json())
            .then(data => setAllFloor(data))
    }, [])

    const handleFloor = (no, taka) => {
        setFloor(no)
        setAdditionalTaka(oldAdd + parseFloat(taka))
    }

    
    const handlePagination =()=>{

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
            deliveryTime: preferences.deliveryTime,
            deliveryFloors: preferences.deliveryFloors,
            pickFloors,
            additionalTaka
        }
        localStorage.setItem("preferences", JSON.stringify(newPreferences))
        navigate("/restPage/eightStep")

    }
    return (
        <section>
        <TitleTag num="7" name="Extra Service"></TitleTag>
        <h1 className='text-3xl font-extrabold text-slate-700 mt-3 mb-8'>Pick: Where are the items?</h1>


        <div className='date-container mt-5'>
            {allFloor.map((floor, index) => (
                <div className={` ${pickFloors === floor.name ? "optionActive flex justify-between items-center" : "my-3 border py-3 px-3 flex justify-between rounded cursor-pointer hover:border-primary"}`} key={index} onClick={() => handleFloor(floor.name, floor.charge)}>

                    <div className='inline-flex items-center gap-2'>
                        <div>
                            <p className='font-semibold text-secondary border border-secondary rounded-full px-2 py-2'>{floor.id === 0 ? <><HiOutlineBuildingOffice className='h-6 w-6'/></> : floor.id === 11 ? <><IoSwapVerticalOutline className='h-6 w-6'/></> : <span className='px-2 py-1'>{floor.id}</span>}</p>
                        </div>
                        <div>
                            <p className='font-medium'>{floor.name}</p>
                            <p className='font-normal text-sm'>{floor.description}</p>
                        </div>
                    </div>
                    <p><span className='inline-flex items-center text-error font-medium'>+<HiOutlineCurrencyBangladeshi className='w-4 h-4' />{floor.charge}</span></p>

                </div>
            ))}
        </div>

        <div className='flex items-end justify-end mt-11' onClick={handlePagination}>
            <button className='myBtn'>Continue <HiArrowSmallRight className='w-6 h-6' /></button>
        </div>
    </section>
    );
};

export default SeventhPage;