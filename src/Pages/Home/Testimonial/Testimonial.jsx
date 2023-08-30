import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch("./testimonial.json")
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <section className='my-14'>
<div>
<h2 className='text-center mb-10 text-2xl font-bold text-primary'>Words of Praise and Trust</h2>

<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
            reviews.map(review=><SwiperSlide
            key={review.id}
            >
                <div className='flex flex-col h-full items-center justify-center lg:px-14 space-y-4 px-8'>
                <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />     
    <FaQuoteLeft className='w-16 h-16 opacity-50 text-primary' />              
<p className='font-semibold'>{review.testimonial}</p>
<h1 className='font-bold discount'>{review.name}</h1>
                </div>
            </SwiperSlide>)
        }
      </Swiper>

</div>
        </section>
    );
};

export default Testimonial;