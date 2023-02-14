import React from 'react'
import Image from 'next/image'
import BG from "../assests/section-bg.jpg"
import T1 from '../assests/T1.jpg'
import T2 from '../assests/T2.jpg'
import T3 from '../assests/T3.jpg'

const Testimonial = () => {
    return (
        <div className='w-full px-4'>
            <div className='mt-32 text-center font-bold text-red text-4xl'>

                <h1>Testimonials</h1>
            </div>
            <div className=' mt-10 w-full flex flex-col '>
                    <Image src={T1} alt="" className='rounded-lg' />
                <div className='bg-red mt-4 text-white p-2'>
                    <h1 className='font-bold text-xl'>Sanam Doe</h1>
                    <p className=''>⭐⭐⭐⭐⭐</p>
                    <hr className='' />
                    <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa ipsam adipisci provident, maxime illo consequunt</p>
                </div>
                    <Image src={T2} alt="" className=' mt-8 rounded-lg' />
                <div className='bg-red mt-4 text-white p-2'>
                    <h1 className='text-xl font-bold'>William Hoy</h1>
                    <p className=''>⭐⭐⭐⭐⭐</p>
                    <hr className='' />
                    <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa ipsam adipisci provident, maxime illo consequunt</p>                    </div>
                    <Image src={T3} alt="" className='mt-4' />
                <div className='bg-red mt-4 text-white p-2'>
                    <h1 className='text-xl font-bold'>Imaan Butt</h1>
                    <p className=''>⭐⭐⭐⭐⭐</p>
                    <hr className='' />
                    <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa ipsam adipisci provident, maxime illo consequunt</p>                    </div>
            </div>

        </div>
    )
}

export default Testimonial