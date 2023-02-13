import React from 'react'
import Image from 'next/image'
import Logo from '../assests/logo.png'
import { IoCallSharp, IoCopySharp, IoLocationSharp, IoLogoFacebook, IoLogoGoogle, IoLogoTwitter, IoMailOpenSharp } from 'react-icons/io5'
import {AiFillCopyrightCircle} from "react-icons/ai"
const Footer = () => {
    return (
        <div className='w-full h-[530px] bg-gray-900 md:bg-cover absolute md:w-full md:mt-0'>
            <div className='ml-60 w-48 h-48 mt-16 md:ml-24 md:w-40'>
                <Image src={Logo} alt="" />
                <p className='text-white w-[400px] mt-6 md:text-sm'>Lorem ipsum dolor sit amet   corrupti explicabo possimus hic iure quod a error corporis, qui quaerat?</p>
                <div className='flex md:text-sm'>
                    <div className='mt-4 flex flex-col gap-4'>
                        <IoLocationSharp className='text-red w-10 h-10 md:w-8 md:h-8' />
                        <IoCallSharp className='text-red w-8 h-8 md:w-6 md:h-6' />
                        <IoMailOpenSharp className='text-red w-10 h-10 md:w-8 md:h-8' />

                    </div>
                    <div className='flex flex-col gap-4 mt-6 ml-4 font-bold md:ml-2 md:mt-4 '>
                        <p className='flex text-white w-96 mt-2 hover:text-red'>123 Street, Newyork, 43100, United State</p>
                        <p className='flex text-white w-96 mt-2 hover:text-red'>+1 1111 111</p>
                        <p className='flex text-white w-96 mt-2 hover:text-red'>CarZone@gmail.com</p>
                    </div>
                </div>
                <div className='w-[400px] mt-2' >
                    <p className='text-white text-lg'>Fri <span className='ml-72'> 24 Hours</span></p>
                    <p className='text-white text-lg mt-2'>Sun- Thu <span className='ml-[162px]'>6:00am - 12:00am</span></p>
                    <p className='text-white text-lg mt-2'>Saturday<span className='ml-[258px]'>Closed</span></p>

                </div>
                <div className='flex gap-4  mt-6'><IoLogoFacebook className='w-8 h-8 bg-red text-white rounded-lg hover:bg-white hover:text-red' /><IoLogoTwitter className='w-8 h-8 bg-red text-white rounded-lg hover:bg-white hover:text-red' /><IoLogoGoogle className='w-8 h-8 bg-red text-white rounded-lg hover:bg-white hover:text-red' /></div>

            </div>
            <div className='lg:-mt-48 lg:ml-[700px] md:ml-[550px]'>
                <h1 className='text-white lg:font-bold lg:text-4xl'>Useful Links</h1>
                <hr className='lg:mr-[600px] lg:mt-4 bg-red lg:h-[4px] text-red rounded-full md:w-52' />
                <div className='flex gap-20 lg:mt-8 text-white  lg:text-lg md:text-sm md:gap-10'>
                    <ul className='flex flex-col gap-2'>
                        <li className='hover:text-red hover:cursor-pointer'>Home</li>
                        <li className='hover:text-red hover:cursor-pointer'>Service</li>
                        <li className='hover:text-red hover:cursor-pointer'>Testimonials</li>
                        <li className='hover:text-red hover:cursor-pointer'>Blogs</li>
                        <li className='hover:text-red hover:cursor-pointer'>Contact</li>
                    </ul>
                    <ul className='flex flex-col gap-2'>
                        <li className='hover:text-red hover:cursor-pointer'>About</li>
                        <li className='hover:text-red hover:cursor-pointer'>Packages</li>
                        <li className='hover:text-red hover:cursor-pointer'>Partners</li>
                        <li className='hover:text-red hover:cursor-pointer'>Portfolio</li>
                        <li className='hover:text-red hover:cursor-pointer'>Our Services</li>
                    </ul>
                </div>
            </div>
            <div className='w-full md:w-full'>

                <div className='flex justify-end lg:-mt-72 lg:text-4xl lg:font-bold text-white lg:mr-72 md:-mt-[244px] md:mr-[200px]'>
                    <hr className='lg:-mr-[320px] lg:mt-[76.5px] bg-red h-[4px] text-red rounded-full lg:w-80' />
                    <h1 className='md:mt-5'>NewsLetter</h1>

                </div>
                <div className='lg:text-xl flex justify-end md:w-full'>
                    <p className='lg:w-96 lg:mr-24 lg:mt-8 text-white md:mr-4'>Don't miss to subscribe to our new feeds, kindly fill the form below.</p>
                </div>
                <div className='flex justify-end lg:mr-44 lg:mt-10 lg:h-12 md:mr-24'>
                    <input type="email" placeholder='enter E-mail address' className='rounded-lg' />
                    <button className='bg-red text-white lg:text-xl lg:ml-2 lg:w-24 rounded-lg hover:text-red hover:bg-white '>Send Us</button>
                </div>
            </div>
            <div className='bg-red w-full h-16 mt-[225px] flex md:w-full'>
                <h3 className='flex text-white ml-60 mt-6 text-lg md:ml-24'>Carzone<AiFillCopyrightCircle/>-2023-Designed By Ghulam Murtaza</h3>


            </div>
        </div>
    )
}

export default Footer