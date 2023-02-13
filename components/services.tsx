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
        <div className='h-screen'>

            <div className=' w-full flex justify-end'>
                <Image src={Logos} alt="s" className='w-48' />
            </div>
            <div className='flex justify-center  w-full text-center'>

                <h1 className='text-5xl font-bold'>Our Services</h1>

            </div>
            <div className='flex justify-center'>
                <div className='text-center w-[400px]'>
                    <Image src={S1} alt="s1" className='ml-[160px] w-20 h-32' />
                    <h2 className='text-2xl text-red font-bold'>Oil Changes</h2>
                    <p className='w-72 ml-12 mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cupiditate consequatur nulla asperiores</p>
                </div>
                <div className='text-center w-[400px]'>
                    <Image src={S2} alt="s2" className='ml-[160px] w-20 h-32' />
                    <h2 className='text-2xl text-red font-bold'>Wash & Clean</h2>
                    <p className='w-72 ml-12 mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cupiditate consequatur nulla asperiores</p>
                </div>
                <div className='text-center w-[400px]'>
                    <Image src={S3} alt="s3" className='ml-[160px] w-20 h-32' />
                    <h2 className='text-2xl text-red font-bold'>ABS Brakes</h2>
                    <p className='w-72 ml-12 mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cupiditate consequatur nulla asperiores</p>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='text-center w-[400px]'>
                    <Image src={S4} alt="s1" className='ml-[160px] w-20 h-32' />
                    <h2 className='text-2xl text-red font-bold'>Tyres & Wheels</h2>
                    <p className='w-72 ml-12 mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cupiditate consequatur nulla asperiores</p>
                </div>
                <div className='text-center w-[400px]'>
                    <Image src={S5} alt="s2" className='ml-[160px] w-20 h-32' />
                    <h2 className='text-2xl text-red font-bold'>Transmission</h2>
                    <p className='w-72 ml-12 mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cupiditate consequatur nulla asperiores</p>
                </div>
                <div className='text-center w-[400px]'>
                    <Image src={S6} alt="s3" className='ml-[160px] w-20 h-32' />
                    <h2 className='text-2xl text-red font-bold'>Engine Tuning</h2>
                    <p className='w-72 ml-12 mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cupiditate consequatur nulla asperiores</p>
                </div>
            </div>

        </div>
    )
}

export default Services;