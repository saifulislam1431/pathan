import React from 'react';

const HowItWork = () => {
    return (
        <section className='my-14 flex items-center justify-center'>
<div className='w-full text-center'>
<h2 className='text-center mb-10 text-2xl font-bold text-primary'>Simplified Booking Process: Deliver your parcel in a Few Simple Steps</h2>

<ul className="steps steps-vertical lg:steps-horizontal">
  <li data-content="+" className="step step-accent font-semibold">Adding Information</li>
  <li data-content="$" className="step step-success font-semibold">Confirm Payment</li>
  <li data-content="★" className="step step-success font-semibold">Shift Into Your Destination</li>
</ul>
</div>
        </section>
    );
};

export default HowItWork;