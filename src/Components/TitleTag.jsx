import React from 'react';
import { IoIosInformationCircleOutline } from 'react-icons/io';

const TitleTag = ({num,name}) => {
    return (
        <section className='flex items-center justify-between'>
<div className='flex items-center gap-2 font-semibold'>
    <p className='bg-secondary bg-opacity-30 px-3 py-1 rounded-full text-xl text-secondary'>{num}</p>
    <p className='text-secondary'>{name}</p>
</div>
<div>
    <p className='flex items-center gap-1 font-medium text-secondary'><IoIosInformationCircleOutline className='w-5 h-5'/> <span>More Info</span></p>
</div>
        </section>
    );
};

export default TitleTag;