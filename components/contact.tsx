import React from 'react'
import {IoLocationSharp, IoMailSharp} from 'react-icons/io5'
import {IoCallSharp} from 'react-icons/io5'
import Image from 'next/image'
import H from '../assests/helper.png'
const Contact = () => {
    return (
        <div className='lg:w-full lg:h-screen md:w-full md:bg-cover md:bg-slate-300 md:h-screen md:mt-0'>
            <div className='absolute lg:w-full'>
                <div className='lg:mt-12 text-center lg:text-6xl font-bold md:mt-24 md:text-3xl'>
                    <h1>Contact Us</h1>
                </div>
                <div className=' flex lg:justify-between lg:px-72 lg:mt-32 md:mt-12'>
                    <div>
                        <h2 className='lg:text-4xl text-red font-bold text-center flex md:text-2xl'><IoLocationSharp className='lg:w-16 lg:h-16 md:h-10 md:w-10'/>Find Us</h2>
                    </div>
                    <div>
                        <h2 className='lg:text-4xl text-red font-bold text-center flex md:text-2xl'><IoCallSharp className='lg:w-16 lg:h-16 md:h-10 md:w-10'/>Call Us</h2>
                    </div>
                    <div>
                        <h2 className='lg:text-4xl text-red font-bold text-center flex md:text-2xl'><IoMailSharp className='lg:w-16 lg:h-16 md:h-10 md:w-10'/>Mail Us</h2>
                    </div>

                </div>
                <div className='flex lg:gap-24 md:gap-12 md:text-sm  '>
                    <p className='lg:ml-[350px] lg:-mt-[28px] md:ml-[328px] md:-mt-2 md:w-48'>123 Street, Newyork, 43100, United States</p>
                    <p className='lg:ml-[210px] lg:-mt-[28px] md:ml-[30px] md:-mt-2'>+1 1111 111</p>
                    <p className='lg:ml-[320px] lg:-mt-[28px] md:ml-[155px] md:-mt-2'>info@example.com</p>
                </div>
            </div>

            <div className='absolute lg:mt-[400px] grid grid-cols-2 gap-6 lg:w-[700px]  lg:h-[800] lg:ml-[800px] md:ml-96 md:mt-[300px] md:w-[600px] md:gap-4 md:h-12'>
                <input type="text" placeholder='Enter Your Name' className='lg:w-[350px] lg:h-12 border border-inherit border-solid shadow-xl md:w-[290px]'/>
                <input type="email" placeholder='Enter Your Name' className='lg:w-[350px] border border-inherit border-solid shadow-xl md:w-[290px]'/>
                <input type="number" placeholder='Enter Your Name' className='lg:h-12 col-span-2 border border-inherit border-solid shadow-lg'/>
                <textarea placeholder='type your message' className='lg:h-24 col-span-2 border border-inherit border-solid shadow-lg md:h-12'/>
                <button className='lg:w-52 lg:h-12 bg-gray-900 text-white lg:text-2xl lg:font-bold'>Send Now</button>

            </div>
            <div className=' w-full flex justify-center md:justify-start'>
                <Image src={H} alt="" className='lg:w-[1000px] lg:h-96 lg:mt-[400px] lg:ml-[400px] md:w-[600px] md:ml-24 md:mt-48' />
            </div>
        </div>
    )
}

export default Contact