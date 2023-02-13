import React from 'react'
import Image from 'next/image'
import BG from "../assests/section-bg.jpg"
import T1 from '../assests/T1.jpg'
import T2 from '../assests/T2.jpg'
import T3 from '../assests/T3.jpg'

const Testimonial = () => {
    return (
        <div className=' w-full h-screen md:w-cover md:mt-24 md:h-screen'>
            <div className='absolute text-center w-full mt-12 text-6xl text-red font-bold md:text-4xl'>

                <h1>Testimonials</h1>
                <p className='text-white text-2xl font-semibold mt-2'>People Love Us</p>
            </div>
            <div className='absolute mt-[200px] flex gap-12 justify-center w-full md:mt-40 '>
                <div className='w-72 h-[500px] bg-red opacity-80 md:h-[420px]'>
                    <Image src={T1} alt="" className='w-[250px] h-[250px] ml-[19px] mt-[18px] md:h-[180px]' />
                    <h1 className='ml-4 mt-4 text-2xl text-white font-bold'>Sanam Doe</h1>
                    <p className='ml-4 mt-[4px]'>⭐⭐⭐⭐⭐</p>
                    <hr className='mt-2 mx-8' />
                    <p className='my-4 mx-4 text-white font-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa ipsam adipisci provident, maxime illo consequunt</p>
                </div>
                <div className='w-72 h-[500px] bg-red opacity-80 md:h-[420px]'>
                    <Image src={T2} alt="" className='w-[250px] h-[250px] ml-[19px] mt-[18px] md:h-[180px]' />
                    <h1 className='ml-4 mt-4 text-2xl text-white font-bold'>William Hoy</h1>
                    <p className='ml-4 mt-[4px]'>⭐⭐⭐⭐⭐</p>
                    <hr className='mt-2 mx-8' />
                    <p className='my-4 mx-4 text-white font-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa ipsam adipisci provident, maxime illo consequunt</p>                    </div>
                <div className='w-72 h-[500px] bg-red opacity-80 md:h-[420px]'>
                    <Image src={T3} alt="" className='w-[250px] h-[250px] ml-[19px] mt-[18px] md:h-[180px]' />
                    <h1 className='ml-4 mt-4 text-2xl text-white font-bold'>Imaan Butt</h1>
                    <p className='ml-4 mt-[4px]'>⭐⭐⭐⭐⭐</p>
                    <hr className='mt-2 mx-8' />
                    <p className='my-4 mx-4 text-white font-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa ipsam adipisci provident, maxime illo consequunt</p>                    </div>
            </div>

            <Image src={BG} alt="bng" />
        </div>
    )
}

export default Testimonial