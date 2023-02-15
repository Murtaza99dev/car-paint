import React from 'react'

const Main = () => {
    return (
        <div className='md:w-full absolute lg:w-full'>
            <div className='bg-sky-300 w-[300px] h-[500px] px-4 ml-10 mt-20 rounded-lg md:mt-48 md:ml-72 md:h-[550px] md:w-[400px] lg:ml-[600px] lg:mt-32'>
                <div className='text-center absolute md:ml-6'>
                    <h1 className='font-zeyada text-2xl mt-8 md:text-4xl'>Best Car detailing service</h1>
                    <h1 className='text-red font-extrabold text-3xl md:text-2xl'>BOOK YOUR APPOINTMENT</h1>
                </div>
                <div className='absolute'>
                    <form className='flex flex-col w-[267px] gap-4 mt-44 md:w-[300px] md:gap-10 md:mt-32 md:ml-[35px]'>
                        <input className="h-10 md:h-16 rounded-md " type="text" placeholder='Enter your name*' required />
                        <input className="h-10 md:h-16 rounded-md" type="number" placeholder='Enter your mobile number' required />
                        <textarea className='h-12 md:h-20' placeholder='enter your message' />
                        <button className='bg-red text-white w-32 h-12 ml-[70px] mt-4 rounded-lg md:w-40 md:text-2xl md:font-bold hover:text-red hover:bg-white lg:mb-2 lg:mt-4' type='submit' onClick={()=>{console.log("Appointment form submitted")}}>Book Now</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Main;