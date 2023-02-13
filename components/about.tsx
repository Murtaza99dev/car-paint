import React from 'react'
import Image from 'next/image'
import BG from '../assests/feature-bg.jpg'
const About = () => {
    return (
        <div>
            <div className=' lg:w-full md:w-full md:bg-cover md:mt-0'>
                <h1 className='absolute lg:mt-8 text-center w-full lg:text-6xl font-bold text-red '>About Us</h1>
                <Image src={BG} alt="bg" />
                    <div className='lg:w-[700px] lg:h-[320px] bg-red opacity-70 absolute lg:-mt-[700px] lg:ml-[900px] md:ml-60 md:-mt-[500px]'>
                        <div className='text-white lg:mx-6 lg:mt-8'>
                            <h3 className='text-2xl font-bold'>Why we are the best?</h3>
                            <p className='lg:mt-4 font-bold'>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing elit,Lorem ipsum dolor sit amet.</p>
                        </div>
                        <hr className='lg:mt-2' />
                        <div>
                            <ul className='grid grid-cols-2 gap-4 text-white ml-8 mt-4 list-disc font-bold'>
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