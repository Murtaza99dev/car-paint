import React from 'react'
import Image from 'next/image'
import Logo from '../assests/logo.png'
import { IoCallSharp, IoCopySharp, IoLocationSharp, IoLogoFacebook, IoLogoGoogle, IoLogoTwitter, IoMailOpenSharp } from 'react-icons/io5'
import {AiFillCopyrightCircle} from "react-icons/ai"
const Footer = () => {
    return (
        <div className='w-full h-[530px] bg-gray-900 absolute'>
            <div className='ml-60 w-48 h-48 mt-16'>
                <Image src={Logo} alt="" />
                <p className='text-white w-[400px] mt-6'>Lorem ipsum dolor sit amet   corrupti explicabo possimus hic iure quod a error corporis, qui quaerat?</p>
                <div className='flex'>
                    <div className='mt-4 flex flex-col gap-4'>
                        <IoLocationSharp className='text-red w-10 h-10' />
                        <IoCallSharp className='text-red w-8 h-8' />
                        <IoMailOpenSharp className='text-red w-10 h-10' />

                    </div>
                    <div className='flex flex-col gap-4 mt-6 ml-4 font-bold '>
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
            <div className='-mt-48 ml-[700px]'>
                <h1 className='text-white font-bold text-4xl'>Useful Links</h1>
                <hr className='mr-[600px] mt-4 bg-red h-2 text-red rounded-full' />
                <div className='flex gap-20 mt-8 text-white  text-lg'>
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
            <div className='w-full'>

                <div className='flex justify-end -mt-72 text-4xl font-bold text-white mr-72'>
                    <hr className='-mr-[320px] mt-[76.5px] bg-red h-2 text-red rounded-full w-80 ' />
                    <h1>NewsLetter</h1>

                </div>
                <div className='text-xl flex justify-end'>
                    <p className='w-96 mr-24 mt-8 text-white'>Don't miss to subscribe to our new feeds, kindly fill the form below.</p>
                </div>
                <div className='flex justify-end mr-44 mt-10 h-12'>
                    <input type="email" placeholder='enter E-mail address' className='rounded-lg' />
                    <button className='bg-red text-white text-xl ml-2 w-24 rounded-lg hover:text-red hover:bg-white '>Send Us</button>
                </div>
            </div>
            <div className='bg-red w-full h-16 mt-[225px] flex'>
                <h3 className='flex text-white ml-60 mt-6 text-lg'>Carzone<AiFillCopyrightCircle/>-2023-Designed By Ghulam Murtaza</h3>
                

            </div>
        </div>
    )
}

export default Footer