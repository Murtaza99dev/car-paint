import React from 'react'
import Image from 'next/image'
import BG from '../assests/feature-bg.jpg'
const About = () => {
    return (
        <div className='w-full'>
            <div className=' mt-12 '>
                <div className='w-full absolute'>
                    <h1 className='text-red text-3xl font-bold text-center mt-4'>About Us</h1>
                </div>
                <Image src={BG} alt="bg" className=' h-full' />
                <div className='bg-red absolute -mt-36 w-full'>
                    <div className='text-center text-white '>
                        <h3 className='text-white'>Why we are the best?</h3>
                        <p className=''>Lorem ipsum dolor sit amet,  consec tetur adipisicing elit,Lorem ipsum dolor sit amet.</p>
                    </div>
                    <hr className='' />
                    <div>
                        <ul className='grid grid-cols-2 gap-2 text-white ml-8 mt-4 list-disc font-bold'>
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