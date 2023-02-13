import React from 'react'
import Image from "next/image"
import D1 from "../assests/delivery.jpg"
const Free = () => {
    return (
        <div className='w-full h-screen md:w-screen md:max-h-80 '>
            <div className='bg-red absolute h-[600px] w-full md:max-h-96'>

                <div className='text-white mt-32 font-bold text-center md:mt-24'>
                    <h1 className='text-9xl md:text-7xl'>24/7 FREE SERVICES</h1>
                    <h1 className='mt-4 text-6xl'>At Your Door Step</h1>
                    <p className='text-2xl mt-4'>We Always Help Our Clients To Travel Safe And Keep On Roads!</p>
                </div>
                <div className='flex justify-center mt-16 md:mt-4 '>
                    <button className='bg-white w-32 h-12 text-2xl font-bold text-red rounded-lg hover:border-4 hover:text-white hover:bg-red'>Book Now</button>
                </div>
                <div className='w-full '>
                    <Image src={D1} alt="" className='w-60 h-60 -mt-48 rounded-full ml-[1300px] md:-mt-30 md:ml-[1000px] md:w-48 md:h-48' />
                </div>
            </div>

        </div>
    )
}

export default Free