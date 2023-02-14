import React from 'react'
import Image from 'next/image'
import G1 from '../assests/gallery-small-1.jpg'
import G2 from '../assests/gallery-small-2.jpg'
import G3 from '../assests/gallery-small-3.jpg'
import G4 from '../assests/gallery-small-4.jpg'
import G5 from '../assests/gallery-small-5.jpg'
import G6 from '../assests/gallery-small-6.jpg'
import G7 from '../assests/gallery-small-7.jpg'
import G8 from '../assests/gallery-small-8.jpg'
import G9 from '../assests/gallery-small-9.jpg'
import G10 from '../assests/gallery-small-10.jpg'

const Portfolio = () => {
  return (
    <div className='w-full bg-slate-100 md:w-full md:h-full md:mt-0'>
        <div className='w-full text-center font-bold mt-24' >
            <h1 className='text-4xl'>Our Portfolio</h1>
            <p className=''>A great Work history</p>
        </div>
        <div className='flex justify-center mt-8 gap-4 mx-4 '>
            <button type='submit' className='bg-red h-12 w-20 rounded-lg font-bold text-white cursor-pointer '>All</button>
            <button type='submit' className='bg-red h-12 w-[90px] rounded-lg font-bold text-white cursor-pointer hover:bg-white hover:text-red'>Car Paint</button>
            <button type='submit' className='bg-red h-12 w-28 rounded-lg font-bold text-white cursor-pointer hover:bg-white hover:text-red'>Car Denting</button>
            <button type='submit' className='bg-red h-12 w-28 rounded-lg font-bold text-white cursor-pointer hover:bg-white hover:text-red'>Electrician</button>
        </div>
        <div className='grid grid-cols-1 mt-10 mx-4 gap-3'>
            <Image src={G1} alt="" className='transition ease-in-out delay-500 hover:translate-y-1 hover:scale-110 duration-1000'/>
            <Image src={G2} alt="" className='transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-1000'/>
            <Image src={G3} alt="" className='transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-1000'/>
            <Image src={G4} alt="" className='transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-1000'/>
            <Image src={G5} alt="" className='transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-1000 ' />
            <Image src={G6} alt="" className='transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-700 '/>
            <Image src={G7} alt="" className=' transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-700 md:-mt-[90px]' />
            <Image src={G8} alt="" className=' transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-700 md:-mt-[140px]'/>
        </div>

    </div>
  )
}

export default Portfolio