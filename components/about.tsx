import React from 'react'
import Image from 'next/image'
import BG from '../assests/feature-bg.jpg'
const About = () => {
    return (
        <div>
            <div className=' w-full'>
                <h1 className='absolute mt-8 text-center w-full text-6xl font-bold text-red '>About Us</h1>
                <Image src={BG} alt="bg" />
                    <div className='w-[700px] h-[320px] bg-red opacity-70 absolute -mt-[700px] ml-[900px]'>
                        <div className='text-white mx-6 mt-8'>
                            <h3 className='text-2xl font-bold'>Why we are the best?</h3>
                            <p className='mt-4 font-bold'>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing elit,Lorem ipsum dolor sit amet.</p>
                        </div>
                        <hr className='mt-2' />
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