import React from 'react'

const Package = () => {
  return (
    <div className='w-full mt-44 md:mt-32 lg:w-full'>
      <div className='text-4xl font-bold text-center md:text-6xl'>
        <h1 className=''>Our Packages</h1>
      </div>

      <div className='ml-4 md:grid md:grid-cols-2 md:-gap-4 md:w-full lg:grid lg:grid-cols-3 lg:ml-0'>
        <div className='md:mx-20 lg:mx-32'>
          <div className='flex text-red font-bold text-3xl gap-10 mt-20 md:text-4xl md:font-extrabold'>
            <h1 className=''>Starter</h1>
            <p className='text-2xl bg-red w-16 text-center text-white font-bold md:text-3xl'>$25</p>
          </div>
          <div className='leading-10 mt-8'>
            <ul className='mt-8 list-disc ml-4 md:text-xl md:space-y-4'>
              <li>Wiper Blade Installation</li>
              <li>Check Engine Light</li>
              <li>Air Filter Replacement</li>
              <li>Starting and charging</li>
              <li>Engine Flush Service</li>
              <li>Transmission fluid service</li>
              <li>Brake Fluid Exchange</li>
              <li>Coolant Drain and Fill</li>
              <li>Headlight Restoration</li>
              <li>Small Buld Installation</li>
            </ul>
          </div>
        </div>
        <div className='lg:mx-24'>
          <div className='flex gap-10 mt-12 md:mt-20 '>
            <h1 className='text-red font-bold text-3xl md:text-4xl md:font-extrabold'>Advance</h1>
            <p className='text-2xl bg-red w-16 text-center text-white font-bold md:text-3xl'>$65</p>
          </div>
          <div className='leading-10 mt-8'>
            <ul className='list-disc ml-4 md:text-xl md:space-y-4'>
              <li>Wiper Blade Installation</li>
              <li>Check Engine Light</li>
              <li>Air Filter Replacement</li>
              <li>Starting and charging</li>
              <li>Engine Flush Service</li>
              <li>Transmission fluid service</li>
              <li>Brake Fluid Exchange</li>
              <li>Coolant Drain and Fill</li>
              <li>Headlight Restoration</li>
              <li>Small Buld Installation</li>
            </ul>
          </div>
        </div>
        <div className='md:w-full md:mt-12 lg:w-72 lg:ml-10 '>
          <div className='flex mt-6 gap-10 md:ml-60 lg:ml-0'>
            <h1 className='text-red font-bold text-3xl md:text-4xl md:font-extrabold'>Premium</h1>
            <p className='text-2xl bg-red w-16 text-center text-white font-bold md:text-3xl'>$110</p>
          </div>
          <div className='leading-10 mt-8'>
            <ul className='list-disc ml-4 md:ml-60  lg:ml-0 md:space-y-4 md:text-xl'>
              <li>Wiper Blade Installation</li>
              <li>Check Engine Light</li>
              <li>Air Filter Replacement</li>
              <li>Starting and charging</li>
              <li>Engine Flush Service</li>
              <li>Transmission fluid service</li>
              <li>Brake Fluid Exchange</li>
              <li>Coolant Drain and Fill</li>
              <li>Headlight Restoration</li>
              <li>Small Buld Installation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Package;