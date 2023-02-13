import React from 'react'
import Image from 'next/image'
import C1 from "../assests/c-1.jpg"
import C2 from "../assests/c-2.jpg"
import C3 from "../assests/c-3.jpg"
import C4 from "../assests/c-4.jpg"
import C5 from "../assests/c-5.jpg"
const Points = () => {
    return (
        <div>
            <div className=' bg-slate-100 h-60 bg-cover w-full flex justify-center md:bg-cover md:w-screen '>
                <div className='gap-24 w-48 py-8 flex  justify-center md:w-32 md:h-60'>
                    <Image src={C1} alt="c1" />
                    <Image src={C2} alt="c1" />
                    <Image src={C3} alt="c1" />
                    <Image src={C4} alt="c1" />
                    <Image src={C5} alt="c1" />
                </div>
            </div>

        </div>
    )
}

export default Points