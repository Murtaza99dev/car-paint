import React from 'react'
import { IoLocationSharp, IoMailSharp } from 'react-icons/io5'
import { IoCallSharp } from 'react-icons/io5'
import Image from 'next/image'
import BG from "../assests/section-bg.jpg"
import H from '../assests/helper.png'
const Contact = () => {
    return (
        <div className='w-full lg:h-fit'>
            <div className=''>
                <div className='text-center font-bold text-red text-4xl mt-12 md:text-6xl'>
                    <h1>Contact Us</h1>
                </div>
                <div className='flex md:flex'>
                    <div className=' mt-8 ml-4 space-y-4 md:ml-20 md:space-y-10 '>
                        <div>
                            <IoLocationSharp className='text-red w-12 h-12' />
                        </div>
                        <div>
                            <IoCallSharp className='text-red w-12 h-12' />
                        </div>
                        <div>
                            <IoMailSharp className='text-red w-12 h-12' />
                        </div>

                    </div>
                    <div className=' mt-8 ml-2'>
                        <h2 className='text-red font-bold text-xl md:text-2xl md:font-bold'>Find Us</h2>
                        <p className='text-sm md:text-lg'>123 Street, Newyork, United States</p>
                        <h2 className='text-red font-bold text-xl mt-6 md:text-2xl md:font-bold'>Call Us</h2>
                        <p className='text-sm md:text-lg'>+1 1111 111</p>
                        <h2 className='text-red font-bold text-xl mt-3 md:text-2xl md:font-bold md:mt-8'>Mail Us</h2>
                        <p className='text-sm md:text-lg'>info@example.com</p>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <div className='text-center mt-12 md:flex md:flex-col md:w-96 md:ml-48 lg:ml-[650px] lg:space-y-4 lg:-mt-[240px]'>
                    <input type="text" placeholder='Enter Your Name' className='h-10 border-2 lg:h-12 lg:rounded-lg' />
                    <input type="email" placeholder='Enter Your Name' className='h-10 border-2 lg:h-12 lg:rounded-lg' />
                    <input type="number" placeholder='Enter Your Name' className='h-10 border-2 lg:h-12 lg:rounded-lg' />
                    <textarea placeholder='type your message' className='md:h-12 border lg:h-16' />

                </div>
                    <button className='ml-32 text-white bg-red text-xl font-bold w-32 md:ml-72 md:mt-12 lg:ml-[750px] lg:h-12 lg:w-32 lg:rounded-lg lg:mb-12'>Send Now</button>
            </div>
            <div className=' '>
                <Image src={H} alt="" className='hidden' />
            </div>
        </div>
    )
}

export default Contact