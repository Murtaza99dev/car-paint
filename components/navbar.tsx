import React from 'react'
import Image from 'next/image'
import Logo from "../assests/logo.png"
import BG from "../assests/slider-1.jpg"
const Navbar = () => {
    return (
        <div className='w-full '>
            <div className='w-full'>
                <nav className='bg-black  flex absolute lg:w-full mt-12 opacity-90 lg:h-20 md:h-16 md:mt-8 md:bg-cover md:w-full'>
                    <div className='bg-red lg:ml-48 absolute -mt-12 w-[200px] h-[180px] md:w-[120px] md:h-[180px]'>
                        <Image src={Logo} alt="logo" className='mt-12' />
                    </div>
                    <div className='w-full'>
                        <ul className='text-white flex justify-end mt-6 mr-12 md:mr-2 lg:text-xl font-bold md:text-sm'>
                            <li className='justify-between mr-8 text-red'><a href="home">Home</a></li>
                            <li className='justify-between mr-8 hover:text-red'><a href="About">About</a></li>
                            <li className='justify-between mr-8 hover:text-red'><a href="Services">Services</a></li>
                            <li className='justify-between mr-8 hover:text-red'><a href="">Testimonials</a></li>
                            <li className='justify-between mr-8 border-none bg-red lg:w-28 lg:h-8 text-center rounded-sm md:h-6 md:hover:text-red md:hover:bg-white '><a href="">Book Now</a></li>
                            <li className='justify-between mr-8 hover:text-red'><a href="">Become Member</a></li>
                            <li className='justify-between mr-8 hover:text-red'><a href="">Contact Us</a></li>
                        </ul>
                    </div>
                </nav>
                <Image src={BG} alt="BG-image" className='md:w-full' />
            </div>
        </div>
    )
}

export default Navbar