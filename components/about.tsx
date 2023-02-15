import React from 'react'
import Image from 'next/image'
import BG from '../assests/feature-bg.jpg'
const About = () => {
    return (
        <div className='w-full'>
            <div className=' mt-12 '>
                <div className='w-full '>
                    <h1 className='text-red text-3xl font-bold text-center mt-4 md:text-6xl lg:text-7xl '>About Us</h1>
                </div>
                <Image src={BG} alt="bg" className=' h-full' />
                <div className='bg-red opacity-70 absolute -mt-36 w-full md:-mt-80 md:w-[600px] md:mx-28 md:rounded-md lg:-mt-[500px] lg:ml-72 lg:w-[800px]'>
                    <div className='text-center text-white '>
                        <h3 className='text-white md:text-2xl md:font-bold md:text-left md:ml-4 md:mt-4'>Why we are the best?</h3>
                        <p className='md:text-xl md:text-left md:ml-4'>Lorem ipsum dolor sit amet,  consec tetur adipisicing elit,Lorem ipsum dolor sit amet.</p>
                    </div>
                    <hr className='md:mt-4' />
                    <div>
                        <ul className='grid grid-cols-2 gap-2 text-white ml-8 mt-4 list-disc font-bold md:text-xl md:mb-4'>
                            <li>Wiper Blade Installation</li>
                            <li>Check engine light</li>
                            <li>Air filter Replacement</li>
                            <li>Highly intence paint</li>
                            <li>Finish like original</li>
                            <li>Modify as you wish</li>
                            <li>Customer Satisfaction</li>
                            <li>Starting and charging</li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default About