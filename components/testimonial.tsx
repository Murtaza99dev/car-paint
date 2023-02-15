import React from 'react'
import Image from 'next/image'

import T1 from '../assests/T1.jpg'
import T2 from '../assests/T2.jpg'
import T3 from '../assests/T3.jpg'

const Testimonial = () => {
    return (
        <div className='w-full px-4 md:px-28'>
            <div className='mt-32 text-center font-bold text-red text-4xl md:text-6xl'>

                <h1>Testimonials</h1>
            </div>
            <div className=' mt-10 w-full flex flex-col lg:grid lg:grid-cols-3 lg:gap-6'>
                <Image src={T1} alt="" className='rounded-lg lg:hidden' />
                <div className='bg-red mt-4 text-white p-2'>
                    <Image src={T1} alt="" className='rounded-lg lg:mt-4 ' />
                    <h1 className='font-bold text-xl md:text-3xl'>Sanam Doe</h1>
                    <p className=''>⭐⭐⭐⭐⭐</p>
                    <hr className='' />
                    <p className='md:text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa ipsam adipisci provident, maxime illo consequunt</p>
                </div>
                <Image src={T2} alt="" className=' mt-8 rounded-lg lg:hidden' />
                <div className='bg-red mt-4 text-white p-2'>
                    <Image src={T2} alt="" className=' mt-8 rounded-lg lg:mt-4 ' />
                    <h1 className='text-xl font-bold md:text-3xl'>William Hoy</h1>
                    <p className=''>⭐⭐⭐⭐⭐</p>
                    <hr className='' />
                    <p className='md:text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa ipsam adipisci provident, maxime illo consequunt</p>
                </div>
                <Image src={T3} alt="" className='mt-4 lg:hidden' />
                <div className='bg-red mt-4 text-white p-2'>
                    <Image src={T3} alt="" className='mt-4 ' />
                    <h1 className='text-xl font-bold md:text-3xl'>Imaan Butt</h1>
                    <p className=''>⭐⭐⭐⭐⭐</p>
                    <hr className='' />
                    <p className='md:text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa ipsam adipisci provident, maxime illo consequunt</p>                    </div>
            </div>

        </div>
    )
}

export default Testimonial