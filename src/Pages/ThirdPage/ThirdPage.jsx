import React, { useState } from 'react';
import TitleTag from '../../Components/TitleTag';
import { HiArrowSmallRight } from 'react-icons/hi2';
import { Link, useNavigate } from 'react-router-dom';
import { data } from 'autoprefixer';
import axios from 'axios';
import Swal from 'sweetalert2';
import usePreferences from '../../hooks/usePreferences';

const token = import.meta.env.VITE_IMAGE_TOKEN

const ThirdPage = () => {
    const [,refetch] = usePreferences()
    const navigate = useNavigate()
    const [url, setUrl] = useState("");
    console.log(url);
    const oldPreferences = localStorage.getItem("preferences");
    const preferences = JSON.parse(oldPreferences);
    // console.log(preferences);

    // useEffect(()=>{

    //     localStorage.setItem("preferences",JSON.stringify(newPreferences))
    // },[pick,preferences])


    const hosting_url = `https://api.imgbb.com/1/upload?key=${token}`

    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const type = form.type.value;
        const weight = form.weight.value;
        const quantity = form.quantity.value;
        const image = form.image.files;
        console.log(type, weight, quantity, image);
        const formData = new FormData();
        formData.append("image", image[0])

        fetch(hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setUrl(data.data.display_url)
                    axios.get(`http://localhost:5000/calculate-total-price?distance=${preferences.distance}&&weight=${weight}&&quantity=${quantity}`)
                        .then(res => {
                            console.log(res);
                            if (res.data.totalPrice) {
                                const newPreferences = {
                                    from: preferences.from,
                                    to: preferences.to,
                                    distance: preferences.distance,
                                    pick: preferences.pick,
                                    weight,
                                    quantity,
                                    url: data.data.display_url,
                                    shippingCharge: res.data.totalPrice,
                                    type
                                }
                                localStorage.setItem("preferences", JSON.stringify(newPreferences))
                                refetch()
                                navigate("/restPage/forthStep")
                            }
                            console.log(url);
                        })
                }
            })


        // .catch(error=>{
        //     // Swal.fire({
        //     //     title: 'Error!',
        //     //     text: error.response.data.error,
        //     //     icon: 'error',
        //     //     confirmButtonText: 'Cool'
        //     //   })
        // })
    }

    return (
        <section className='my-5 mx-6'>
            <TitleTag num="3" name="Item" />

            <div className='mt-5'>
                <h1 className='text-3xl font-extrabold text-slate-700 mb-8'>Item (s)</h1>

                <form onSubmit={handleForm}>
                    <div className='flex w-full gap-4 items-center'>
                        <div className='flex flex-col gap-2 w-1/2'>
                            <label> Select Type</label>
                            <select defaultValue="Type Of Parcel" className="select select-bordered border-secondary w-full" name='type'>
                                <option disabled >Type Of Parcel</option>
                                <option value="Wood">Wood</option>
                                <option value="Glass">Glass</option>
                                <option value="Steel">Steel</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className='flex flex-col gap-2 w-1/2'>
                            <label>Weight</label>
                            <input type="number"
                                required={true}
                                name='weight'
                                className='bg-secondary bg-opacity-30 placeholder:text-white py-3 rounded px-4' placeholder='1,2,3,4,5....' />
                        </div>
                    </div>

                    <div className='flex w-full gap-4 items-center mt-5'>

                        <div className='flex flex-col gap-2 w-1/2'>
                            <label>Quantity</label>
                            <input type="number"
                                required={true}
                                name='quantity'
                                className='bg-secondary bg-opacity-30 placeholder:text-white py-3 rounded px-4' placeholder='Item Number' />
                        </div>

                        <div className='flex flex-col gap-2 w-1/2'>
                            <label>Picture</label>
                            <input type="file"
                                required={true}
                                name='image'
                                className="file-input file-input-bordered file-input-primary w-full" placeholder='1Kg, 2Kg,....' />
                        </div>
                    </div>

                    <div className='flex items-end justify-end mt-11'>
                        <button className='myBtn'>Continue <HiArrowSmallRight className='w-6 h-6' /></button>
                    </div>

                </form>
            </div>
        </section>
    );
};

export default ThirdPage;