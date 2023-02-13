import React from 'react'
import Image from 'next/image'
import BG from "../assests/section-bg.jpg"
import T1 from '../assests/T1.jpg'
import T2 from '../assests/T2.jpg'
import T3 from '../assests/T3.jpg'

const Testimonial = () => {
    return (
        <div className=' w-full md:bg-cover md:mt-0 md:w-full md:h-screen'>
            <div className='absolute text-center w-full lg:mt-12 lg:text-6xl text-red lg:font-bold md:text-4xl md:mt-8'>

                <h1>Testimonials</h1>
            </div>
            <div className='absolute lg:mt-[200px] flex gap-12 justify-center w-full md:mt-24 md:gap-6'>
                <div className='lg:w-72  bg-red opacity-80 md:h-[490px] md:w-72'>
                    <Image src={T1} alt="" className='lg:w-[250px] lg:ml-[19px] lg:mt-[18px] md:w-[250px]' />
                    <h1 className='lg:ml-4 lg:mt-4 lg:text-2xl text-white font-bold'>Sanam Doe</h1>
                    <p className='lg:ml-4 lg:mt-[4px]'>⭐⭐⭐⭐⭐</p>
                    <hr className='lg:mt-2 lg:mx-8' />
                    <p className='lg:my-4 lg:mx-4 text-white font-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa ipsam adipisci provident, maxime illo consequunt</p>
                </div>
                <div className='w-72 h-[500px] bg-red opacity-80 md:h-[490px]'>
                    <Image src={T2} alt="" className='w-[250px] h-[250px] ml-[19px] mt-[18px] md:w-[250px]' />
                    <h1 className='ml-4 mt-4 text-2xl text-white font-bold'>William Hoy</h1>
                    <p className='ml-4 mt-[4px]'>⭐⭐⭐⭐⭐</p>
                    <hr className='mt-2 mx-8' />
                    <p className='my-4 mx-4 text-white font-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa ipsam adipisci provident, maxime illo consequunt</p>                    </div>
                <div className='w-72 h-[500px] bg-red opacity-80 md:h-[490px] md:w-72'>
                    <Image src={T3} alt="" className='w-[250px] h-[250px] ml-[19px] mt-[18px] md:w-full lg:w-[250px]' />
                    <h1 className='ml-4 mt-4 text-2xl text-white font-bold'>Imaan Butt</h1>
                    <p className='ml-4 mt-[4px]'>⭐⭐⭐⭐⭐</p>
                    <hr className='mt-2 mx-8' />
                    <p className='my-4 mx-4 text-white font-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa ipsam adipisci provident, maxime illo consequunt</p>                    </div>
            </div>

            <Image src={BG} alt="bng" className='md:h-screen'/>
        </div>
    )
}

export default Testimonial