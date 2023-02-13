import React from 'react'
import Image from 'next/image'
import S1 from '../assests/service-1.png'
import S2 from '../assests/service-2.png'
import S3 from '../assests/service-3.png'
import S4 from '../assests/service-4.png'
import S5 from '../assests/service-5.png'
import S6 from '../assests/service-6.png'
import Logos from '../assests/quality.png'

const Services = () => {
    return (
        <div className=' md:bg-cover md:bg-slate-100  md:w-full'>

            <div className=' w-full flex justify-end'>
                <Image src={Logos} alt="s" className='w-48' />
            </div>
            <div className='flex justify-center  w-full text-center'>

                <h1 className='text-5xl font-bold md:-mt-24'>Our Services</h1>

            </div>
            <div className='flex justify-center md:-mt-10 md:w-full lg:w-full '>
                <div className='text-center w-[400px] md:w-[300px] lg:w-full'>
                    <Image src={S1} alt="s1" className='ml-[160px] w-20 h-32 md:ml-[130px]'/>
                    <h2 className='text-2xl text-red font-bold md:ml-[40px] lg:-ml-80'>Oil Changes</h2>
                    <p className='w-72 ml-12 mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cupiditate consequatur nulla asperiores</p>
                </div>
                <div className='text-center w-[400px] md:w-[300px]'>
                    <Image src={S2} alt="s2" className='ml-[160px] w-20 h-32 md:ml-[150px]' />
                    <h2 className='text-2xl text-red font-bold md:ml-20'>Wash & Clean</h2>
                    <p className='w-72 ml-12 mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cupiditate consequatur nulla asperiores</p>
                </div>
                <div className='text-center w-[400px] md:w-[300px]'>
                    <Image src={S3} alt="s3" className='ml-[160px] w-20 h-32 md:ml-[130px]' />
                    <h2 className='text-2xl text-red font-bold'>ABS Brakes</h2>
                    <p className='w-72 ml-12 mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cupiditate consequatur nulla asperiores</p>
                </div>
            </div>
            <div className='flex justify-center md:-mt-4 md:w-full'>
                <div className='text-center w-[400px] md:w-full'>
                    <Image src={S4} alt="s1" className='ml-[160px] w-20 h-32' />
                    <h2 className='text-2xl text-red font-bold'>Tyres & Wheels</h2>
                    <p className='w-72 ml-12 mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cupiditate consequatur nulla asperiores</p>
                </div>
                <div className='text-center w-[400px] md:w-full'>
                    <Image src={S5} alt="s2" className='ml-[160px] w-20 h-32' />
                    <h2 className='text-2xl text-red font-bold'>Transmission</h2>
                    <p className='w-72 ml-12 mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cupiditate consequatur nulla asperiores</p>
                </div>
                <div className='text-center w-[200px] md:w-full'>
                    <Image src={S6} alt="s3" className='ml-[160px] w-20 h-32' />
                    <h2 className='text-2xl text-red font-bold'>Engine Tuning</h2>
                    <p className='w-72 ml-12 mt-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, velit natus! Beatae ab, om</p>
                </div>
            </div>

        </div>
    )
}

export default Services;