import React from 'react'

const Package = () => {
  return (
    <div className='w-full h-screen md:w-screen md:mt-52 '>
      <div>
        <h1 className='text-center text-6xl font-bold mt-12'>Our Packages</h1>
      </div>

      <div className='flex justify-center gap-48 mt-20'>
        <div className='flex flex-col'>
          <div className='flex gap-10'>
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