import React from 'react'

const Package = () => {
  return (
    <div className='lg:w-full  bg-slate-200  md:bg-cover md:mt-0 lg:mt-0 lg:h-screen'>
      <div className=''>
        <h1 className='lg:w-full lg:text-center lg:text-6xl font-bold lg:mt-10 md:mt-0 md:text-3xl md:w-full md:text-center '>Our Packages</h1>
      </div>

      <div className='lg:flex justify-center gap-48 lg:mt-32 md:flex md:w-full md:gap-28 md:mt-12'>
        <div className='flex flex-col'>
          <div className='flex gap-10 md:gap-2'>
            <h1 className='text-red font-bold text-3xl'>Starter</h1>
            <p className='text-2xl bg-red w-16 text-center text-white font-bold'>$25</p>
          </div>
          <div className='leading-10 mt-8'>
            <ul className='list-disc '>
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
        <div>
          <div className='flex gap-10'>
            <h1 className='text-red font-bold text-3xl'>Advance</h1>
            <p className='text-2xl bg-red w-16 text-center text-white font-bold'>$65</p>
          </div>
          <div className='leading-10 mt-8'>
            <ul className='list-disc'>
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
        <div>
          <div className='flex'>
            <h1 className='text-red font-bold text-3xl'>Premium</h1>
            <p className='text-2xl bg-red w-16 text-center text-white font-bold'>$110</p>
          </div>
          <div className='leading-10 mt-8'>
            <ul className='list-disc'>
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