'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Logo from "../assests/logo.png"
import BG from "../assests/slider-1.jpg"
import { GiHamburgerMenu } from 'react-icons/gi'
import Main from "./home"
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <div className='w-full md:w-full lg:w-full'>
            <nav className='conatiner mx-auto w-full md:full absolute md:mt-12 lg:w-full'>
                    <Main />
                <div className='flex items-center bg-gray-900 opacity-95 justify-between w-full fixed md:h-20'>
                    <div className='pt-2 cursor-pointer bg-red lg:h-40 lg:w-60 lg:ml-32 transition -skew-x-12'>
                        <Image src={Logo} alt="logo" className='w-28 ml-8 md:w-48 md:h-32 lg:w-48 lg:-ml-0 ' />
                    </div>
                    <div className='md:flex sm:space-x-8 hidden md:text-white '>
                        <ul className='md:flex sm:text-base cursor-pointer md:space-x-4 md:text-xl md:font-bold md:mr-2 lg:text-2xl '>
                            <li className='hover:text-red'><a>Home</a></li>
                            <li className='hover:text-red'><a>Service</a></li>
                            <li className='hover:text-red'><a>About</a></li>
                            <li className='hover:text-red'><a>Testimonial</a></li>
                            <li className='hover:text-red'><a>Contact</a></li>
                        </ul>
                    </div>
                    <button className='block text-white md:hidden ' onClick={handleOpen}>
                        <GiHamburgerMenu />
                    </button>
                </div>
                {open && (
                    <div className=''>
                        <div className='bg-gray-900 opacity-90 mt-[41.5px]'>
                            <ul className='md:flex sm:text-base cursor-pointer space-y-4'>
                                <li className='text-white hover:text-red text-xl ml-4'><a>Home</a></li>
                                <li className='text-white hover:text-red text-xl ml-4'><a>Service</a></li>
                                <li className='text-white hover:text-red text-xl ml-4'><a>About</a></li>
                                <li className='text-white hover:text-red text-xl ml-4'><a>Blog</a></li>
                                <li className='text-white hover:text-red text-xl ml-4'><a>Book Now</a></li>
                                <li className='text-white hover:text-red text-xl ml-4'><a>Testimonial</a></li>
                                <li className='text-white hover:text-red text-xl ml-4'><a>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                )}
            </nav>
            <Image src={BG} alt="" className='h-screen lg:w-full' />
        </div>
    )
}

export default Navbar