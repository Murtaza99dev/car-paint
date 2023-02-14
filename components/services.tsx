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
        <div className='w-full'>
            <div className='w-full'>
                <Image src={Logos} alt="s" className='w-24 ' />
            </div>

            <div className='w-full'>
                <h1 className='text-center text-4xl font-bold'>Our Services</h1>
            </div>
            <div className='w-full flex flex-col'>
                <div className='text-center w-full '>
                    <Image src={S1} alt="s1" className='ml-[130px] w-32'/>
                    <h2 className='text-red text-3xl font-bold'>Oil Changes</h2>
                    <p className='mt-4 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cupiditate consequatur nulla asperiores</p>
                </div>
                <div className='text-center'>
                    <Image src={S2} alt="s2" className='ml-[130px] w-32' />
                    <h2 className='text-red text-3xl font-bold'>Wash & Clean</h2>
                    <p className='mt-4 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cupiditate consequatur nulla asperiores</p>
                </div>
                <div className='text-center'>
                    <Image src={S3} alt="s3" className='ml-[130px] w-32' />
                    <h2 className='text-red text-3xl font-bold'>ABS Brakes</h2>
                    <p className='mt-4 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cupiditate consequatur nulla asperiores</p>
                </div>
            </div>
            <div className='w-full flex flex-col'>
                <div className='text-center'>
                    <Image src={S4} alt="s1" className='ml-[130px] w-32' />
                    <h2 className='text-red text-3xl font-bold'>Tyres & Wheels</h2>
                    <p className='mt-4 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cupiditate consequatur nulla asperiores</p>
                </div>
                <div className='text-center'>
                    <Image src={S5} alt="s2" className='ml-[130px] w-32' />
                    <h2 className='text-red text-3xl font-bold'>Transmission</h2>
                    <p className='mt-4 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cupiditate consequatur nulla asperiores</p>
                </div>
                <div className='text-center'>
                    <Image src={S6} alt="s3" className='ml-[130px] w-32' />
                    <h2 className='text-red text-3xl font-bold'>Engine Tuning</h2>
                    <p className='mt-4 text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, velit natus! Beatae ab, om</p>
                </div>
            </div>

        </div>
    )
}

export default Services;