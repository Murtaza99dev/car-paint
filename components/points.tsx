import React from 'react'
import Image from 'next/image'
import C1 from "../assests/c-1.jpg"
import C2 from "../assests/c-2.jpg"
import C3 from "../assests/c-3.jpg"
import C4 from "../assests/c-4.jpg"
import C5 from "../assests/c-5.jpg"
const Points = () => {
    return (
        <div className='w-full  h-48'>
            <div className='w-full lg:flex '>
                <div className='w-full grid grid-cols-2 lg:flex lg:w-48 lg:ml-80 grayscale bg-none'>

                    <Image src={C1} alt="c1" />
                    <Image src={C2} alt="c1" />
                    <Image src={C3} alt="c1" />
                    <Image src={C4} alt="c1" />
                    <Image src={C5} alt="c1" />
                    <Image src={C5} alt="c1" className='lg:hidden'/>
                </div>
            </div>

        </div>
    )
}

export default Points