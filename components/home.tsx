import React from 'react'
const Main = () => {
    return (
        <div className='md:bg-cover'>
            <div className='lg:w-[400px] lg:h-[450px] bg-sky-200 lg:-mt-[800px] absolute lg:ml-[1100px] rounded-md md:-mt-[370px] md:ml-[300px] md:h-[350px] md:w-[320px]'>
                <div className='text-center lg:mt-8 md:mt-4'>
                    <h1 className='font-zeyada lg:text-4xl font-bold md:text-3xl'>Best Car detailing service</h1>
                    <h1 className='text-red font-extrabold lg:text-2xl md:text-xl'>BOOK YOUR APPOINTMENT</h1>
                </div>
                <div className=''>
                    <form className='flex flex-col gap-4 lg:w-72 lg:mt-12 lg:mx-[55px] md:mt-4 md:ml-[15px]'>
                        <input className="lg:h-10 rounded-md" type="text" placeholder='Enter your name*' required />
                        <input className="lg:h-10 rounded-md" type="number" placeholder='Enter your mobile number' required />
                        <textarea className='rounded-md h-24 md:h-12' placeholder='enter your message' />
                        <button className='rounded-md bg-red text-white lg:font-semibold lg:w-28 lg:h-12 lg:text-xl md:h-10 md:w-24 md:text-sm' type='submit'>Book Now</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Main;