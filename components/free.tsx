import React from 'react'
import Image from "next/image"
import D1 from "../assests/delivery.jpg"
const Free = () => {
    return (
        <div className='w-full h-screen'>
            <div className='bg-red absolute h-[600px] w-full'>

                <div className='text-white mt-32 font-bold text-center'>
                    <h1 className='text-9xl'>24/7 FREE SERVICES</h1>
                    <h1 className='mt-4 text-6xl'>At Your Door Step</h1>
                    <p className='text-2xl mt-4'>We Always Help Our Clients To Travel Safe And Keep On Roads!</p>
                </div>
                <div className='flex justify-center mt-16 '>
                    <button className='bg-white w-32 h-12 text-2xl font-bold text-red rounded-lg hover:border-4 hover:text-white hover:bg-red'>Book Now</button>
                </div>
                <div className='w-full'>
                    <Image src={D1} alt="" className='w-60 h-60 -mt-48 rounded-full ml-[1300px] ' />
                </div>
            </div>

        </div>
    )
}

export default Free