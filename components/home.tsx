import React from 'react'
const Main = () => {
    return (
        <div className='absolute'>
            <div className='bg-sky-300 w-[300px] h-[500px] px-4 ml-10   -mt-[600px] '>
                <div className='text-center absolute'>
                    <h1 className='font-zeyada text-2xl mt-8'>Best Car detailing service</h1>
                    <h1 className='text-red font-extrabold text-3xl lg:text-2xl md:text-xl'>BOOK YOUR APPOINTMENT</h1>
                </div>
                <div className='absolute'>
                    <form className='flex flex-col w-[267px] gap-4 mt-44'>
                        <input className="h-10 " type="text" placeholder='Enter your name*' required />
                        <input className="h-10" type="number" placeholder='Enter your mobile number' required />
                        <textarea className='h-12' placeholder='enter your message' />
                        <button className='bg-red text-white w-32 h-12 ml-[70px] mt-4 rounded-lg' type='submit'>Book Now</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Main;