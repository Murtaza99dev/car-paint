import React from 'react'
import {IoLocationSharp, IoMailSharp} from 'react-icons/io5'
import {IoCallSharp} from 'react-icons/io5'
import Image from 'next/image'
import H from '../assests/helper.png'
const Contact = () => {
    return (
        <div className='w-full h-screen'>
            <div className='absolute w-full'>
                <div className='mt-0 text-center text-6xl font-bold '>
                    <h1>Contact Us</h1>
                </div>
                <div className=' flex justify-between px-72 mt-32'>
                    <div>
                        <h2 className='text-4xl text-red font-bold text-center flex'><IoLocationSharp className='w-16 h-16'/>Find Us</h2>
                    </div>
                    <div>
                        <h2 className='text-4xl text-red font-bold text-center flex'><IoCallSharp className='w-16 h-16'/>Call Us</h2>
                    </div>
                    <div>
                        <h2 className='text-4xl text-red font-bold text-center flex'><IoMailSharp className='w-16 h-16'/>Mail Us</h2>
                    </div>

                </div>
                <div className='flex gap-24'>
                    <p className='ml-[350px] -mt-[28px]'>123 Street, Newyork, 43100, United States</p>
                    <p className='ml-[100px] -mt-[28px]'>+1 1111 111</p>
                    <p className='ml-[315px] -mt-[28px]'>info@example.com</p>
                </div>
            </div>

            <div className='absolute mt-[400px] grid grid-cols-2 gap-6 w-[700px]  h-[800] ml-[800px]'>
                <input type="text" placeholder='Enter Your Name' className='w-[350px] h-12 border border-inherit border-solid shadow-xl'/>
                <input type="email" placeholder='Enter Your Name' className='w-[350px] border border-inherit border-solid shadow-xl'/>
                <input type="number" placeholder='Enter Your Name' className='h-12 col-span-2 border border-inherit border-solid shadow-lg'/>
                <textarea placeholder='type your message' className='h-24 col-span-2 border border-inherit border-solid shadow-lg'/>
                <button className='w-52 h-12 bg-gray-900 text-white text-2xl font-bold'>Send Now</button>

            </div>
            <div className=' w-full flex justify-center'>
                <Image src={H} alt="" className='w-[1000px] h-96 mt-[400px]' />
            </div>
        </div>
    )
}

export default Contact