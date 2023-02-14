import React from 'react'
import Image from "next/image"
import D1 from "../assests/delivery.jpg"
const Free = () => {
    return (
        <div className='absolute h-fit  bg-red w-full mt-12'>
            <div className='bg-red absolute w-full'>

                <div className='text-white  font-bold text-center '>
                    <h1 className='text-4xl'>24/7 FREE SERVICES</h1>
                    <h1 className='text-2xl'>At Your Door Step</h1>
                    <p className='text-3xl mt-6'>We Always Help Our Clients To Travel Safe And Keep On Roads!</p>
                </div>
                <div className='flex justify-center mt-12 md:mt-4 '>
                    <button className='bg-white w-32 h-12 text-2xl font-bold text-red rounded-lg hover:border-4 hover:text-white hover:bg-red'>Book Now</button>
                </div>
                <div className='lg:w-full '>
                    <Image src={D1} alt="" className=' rounded-lg mt-12 ' />
                </div>
            </div>

        </div>
    )
}

export default Free