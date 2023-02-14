import React from 'react'

const Package = () => {
  return (
    <div className='w-full mt-44'>
      <div className='text-4xl font-bold text-center'>
        <h1 className=''>Our Packages</h1>
      </div>

      <div className='ml-4'>
        <div className=''>
          <div className='flex text-red font-bold text-3xl gap-10 mt-20'>
            <h1 className=''>Starter</h1>
            <p className='text-2xl bg-red w-16 text-center text-white font-bold '>$25</p>
          </div>
          <div className='leading-10 mt-8'>
            <ul className='mt-8 list-disc ml-4'>
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
          <div className='flex gap-10 mt-6'>
            <h1 className='text-red font-bold text-3xl'>Advance</h1>
            <p className='text-2xl bg-red w-16 text-center text-white font-bold'>$65</p>
          </div>
          <div className='leading-10 mt-8'>
            <ul className='list-disc ml-4'>
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
          <div className='flex mt-6 gap-10'>
            <h1 className='text-red font-bold text-3xl'>Premium</h1>
            <p className='text-2xl bg-red w-16 text-center text-white font-bold'>$110</p>
          </div>
          <div className='leading-10 mt-8'>
            <ul className='list-disc ml-4'>
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