import React from 'react'
import Image from 'next/image'
import Logo from "../assests/logo.png"
import BG from "../assests/slider-1.jpg"
const Navbar = () => {
    return (
        <div>
            <div>
                <nav className='bg-black flex absolute w-full mt-12 opacity-90 h-20'>
                    <div className='bg-red ml-48 absolute -mt-12 w-[200px] h-[180px]'>
                        <Image src={Logo} alt="logo" className='mt-12' />
                    </div>
                    <div className='w-full'>
                        <ul className='text-white flex justify-end mt-6 mr-12 text-xl font-bold'>
                            <li className='justify-between mr-8 text-red'><a href="home">Home</a></li>
                            <li className='justify-between mr-8 hover:text-red'><a href="About">About</a></li>
                            <li className='justify-between mr-8 hover:text-red'><a href="Services">Services</a></li>
                            <li className='justify-between mr-8 hover:text-red'><a href="">Testimonials</a></li>
                            <li className='justify-between mr-8 border-none bg-red w-28 text-center rounded-sm '><a href="">Book Now</a></li>
                            <li className='justify-between mr-8 hover:text-red'><a href="">Become Member</a></li>
                            <li className='justify-between mr-8 hover:text-red'><a href="">Contact Us</a></li>
                        </ul>
                    </div>
                </nav>
                <Image src={BG} alt="BG-image" />
            </div>
        </div>
    )
}

export default Navbar