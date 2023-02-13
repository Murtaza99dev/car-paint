import React from 'react'
import Image from "next/image"
import D1 from "../assests/delivery.jpg"
const Free = () => {
    return (
        <div className='lg:w-full h-screen md:bg-cover bg-red md:h-96 md:w-full'>
            <div className='bg-red absolute h-[600px] w-full md:max-h-96'>

                <div className='text-white lg:mt-12 font-bold text-center md:mt-10'>
                    <h1 className='lg:text-9xl md:text-5xl'>24/7 FREE SERVICES</h1>
                    <h1 className='lg:mt-4 lg:text-6xl md:text-2xl '>At Your Door Step</h1>
                    <p className='text-2xl lg:mt-4 md:mt-8'>We Always Help Our Clients To Travel Safe And Keep On Roads!</p>
                </div>
                <div className='flex justify-center mt-16 md:mt-4 '>
                    <button className='bg-white w-32 h-12 text-2xl font-bold text-red rounded-lg hover:border-4 hover:text-white hover:bg-red'>Book Now</button>
                </div>
                <div className='lg:w-full '>
                    <Image src={D1} alt="" className='lg:w-52 lg:h-52 lg:-mt-48 rounded-full lg:ml-[1300px] md:-mt-30 md:ml-[600px] md:w-32 md:h-32' />
                </div>
            </div>

        </div>
    )
}

export default Free