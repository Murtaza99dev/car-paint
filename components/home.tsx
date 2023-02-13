import React from 'react'
const Main = () => {
    return (
        <div>
            <div className='w-[400px] h-[450px] bg-sky-200 -mt-[800px] absolute ml-[1100px] rounded-md md:-mt-[520px] md:ml-[700px] md:h-[350px] md:w-[320px]'>
                <div className='text-center mt-8 md:mt-4'>
                    <h1 className='font-zeyada text-4xl font-bold md:text-3xl'>Best Car detailing service</h1>
                    <h1 className='text-red font-extrabold text-2xl md:text-xl'>BOOK YOUR APPOINTMENT</h1>
                </div>
                <div className=''>
                    <form className='flex flex-col gap-4 w-72 mt-12 mx-[55px] md:mt-4 md:ml-[15px]'>
                        <input className="h-10 rounded-md" type="text" placeholder='Enter your name*' required />
                        <input className="h-10 rounded-md" type="number" placeholder='Enter your mobile number' required />
                        <textarea className='rounded-md h-24 md:h-12' placeholder='enter your message' />
                        <button className='rounded-md bg-red text-white font-semibold w-28 h-12 text-xl md:h-10 md:w-24 md:text-sm' type='submit'>Book Now</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Main;