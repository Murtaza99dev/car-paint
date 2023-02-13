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
    <div className='w-full h-screen bg-slate-100 md:h-screen'>
        <div className='w-full text-center text-red font-bold mt-24' >
            <h1 className='text-6xl'>Our Portfolio</h1>
            <p className=''>A great Work history</p>
        </div>
        <div className='flex justify-center mt-8 gap-12 '>
            <button type='submit' className='bg-red h-12 w-28 rounded-lg font-bold text-white cursor-pointer '>All</button>
            <button type='submit' className='bg-red h-12 w-28 rounded-lg font-bold text-white cursor-pointer hover:bg-white hover:text-red'>Car Paint</button>
            <button type='submit' className='bg-red h-12 w-28 rounded-lg font-bold text-white cursor-pointer hover:bg-white hover:text-red'>Car Denting</button>
            <button type='submit' className='bg-red h-12 w-28 rounded-lg font-bold text-white cursor-pointer hover:bg-white hover:text-red'>Electrician</button>
        </div>
        <div className='grid grid-cols-4 mx-24 mt-12 gap-6 md:grid-cols-4 ' >
            <Image src={G1} alt="" className='transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-1000'/>
            <Image src={G2} alt="" className='transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-1000'/>
            <Image src={G3} alt="" className='transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-1000'/>
            <Image src={G4} alt="" className='transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-1000'/>
            <Image src={G5} alt="" className='-mt-[118px] transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-1000 md:-mt-[80px]' />
            <Image src={G6} alt="" className='transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-700 md:mt-[5px]'/>
            <Image src={G7} alt="" className='-mt-[134px] transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-700 md:-mt-[90px]' />
            <Image src={G8} alt="" className='-mt-[220px] transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-700 md:-mt-[140px]'/>
            <Image src={G9} alt="" className='-mt-[53px] transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-700'/>
            <Image src={G10} alt="" className='transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-700'/>
        </div>

    </div>
  )
}

export default Portfolio