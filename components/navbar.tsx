'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Logo from "../assests/logo.png"
import BG from "../assests/slider-1.jpg"
import { GiHamburgerMenu } from 'react-icons/gi'
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <div className=''>
            <nav className='conatiner mx-auto w-full absolute'>
                <div className='flex items-center justify-between fixed'>
                    <div className='pt-2 cursor-pointer'>
                        <Image src={Logo} alt="logo" className='w-28 ml-8 transition skew-x-12  bg-red' />
                    </div>
                    <div className='md:flex sm:space-x-8 hidden'>
                        <ul className='md:flex sm:text-base cursor-pointer  hover:text-red'>
                            <li><a>Home</a></li>
                            <li><a>Service</a></li>
                            <li><a>About</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Testimonial</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <button className='block ' onClick={handleOpen}>
                        <GiHamburgerMenu />
                    </button>
                </div>
                {open && (
                    <div>
                        <div className='bg-gray-900 opacity-90 '>
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
            <Image src={BG} alt="" className='h-screen' />
        </div>
    )
}

export default Navbar