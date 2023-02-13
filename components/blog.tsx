import React from 'react'
import Image from 'next/image'
import B1 from '../assests/blog-1.jpg'
import B2 from '../assests/blog-2.jpg'
import B3 from '../assests/blog-3.jpg'
const Blog = () => {
    return (
        <div className='w-full h-screen bg-slate-200 md:bg-cover mt-96 md:w-full md:h-full md:mt-0'>
            <div className='w-full text-center py-12 text-red text-6xl font-bold'>
                <h1>Our Blog</h1>
            </div>
            <div className='flex gap-6 justify-center mt-12'>
                <div className='w-80 h-[600px] transition ease-in-out hover:translate-y-1 hover:scale-110 hover:bg-red/60 hover:text-white duration-300'>
                    <Image src={B1} alt="" className='rounded-lg'/>
                    <h1 className='text-red text-2xl font-bold mt-6 ml-2'>which oil makes our car performance better?</h1>
                    <p className='w-72 ml-2 mt-6 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea pariatur culpa ipsam quam ut minus doloribus, ipsa obcaecati, autem architecto rerum aspernatur cupiditate quo voluptatum tenetur placeat ullam, possimus distinctio!</p>
                </div>
                <div className='w-80 h-[600px] transition ease-in-out hover:translate-y-1 hover:scale-110 hover:bg-red/60 hover:text-white duration-300 '>
                    <Image src={B2} alt="" className='rounded-lg' />
                    <h1 className='text-red text-2xl font-bold mt-6 ml-2'>Fully Car Diagnosis.</h1>
                    <p className='w-72 ml-2 mt-12 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea pariatur culpa ipsam quam ut minus doloribus, ipsa obcaecati, autem architecto rerum aspernatur cupiditate quo voluptatum tenetur placeat ullam, possimus distinctio!</p>
                </div>
                <div className='w-80 h-[600px] transition ease-in-out hover:translate-y-1 hover:scale-110 hover:bg-red/60 hover:text-white duration-300'>
                    <Image src={B3} alt="" className='rounded-lg'/>
                    <h1 className='text-red text-2xl font-bold mt-6 ml-2'>Refinish your car like new.</h1>
                    <p className='w-72 ml-2 mt-12 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea pariatur culpa ipsam quam ut minus doloribus, ipsa obcaecati, autem architecto rerum aspernatur cupiditate quo voluptatum tenetur placeat ullam, possimus distinctio!</p>
                </div>


            </div>
        </div>
    )
}

export default Blog