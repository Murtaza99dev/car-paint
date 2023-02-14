import React from 'react'
import {IoLocationSharp, IoMailSharp} from 'react-icons/io5'
import {IoCallSharp} from 'react-icons/io5'
import Image from 'next/image'
import H from '../assests/helper.png'
const Contact = () => {
    return (
        <div className='mt-96'>
            <div className=''>
                <div className=''>
                    <h1>Contact Us</h1>
                </div>
                <div className=''>
                    <div>
                        <h2 className=''><IoLocationSharp className=''/>Find Us</h2>
                    </div>
                    <div>
                        <h2 className=''><IoCallSharp className=''/>Call Us</h2>
                    </div>
                    <div>
                        <h2 className=''><IoMailSharp className=''/>Mail Us</h2>
                    </div>

                </div>
                <div className=''>
                    <p className=''>123 Street, Newyork, 43100, United States</p>
                    <p className=''>+1 1111 111</p>
                    <p className=''>info@example.com</p>
                </div>
            </div>

            <div className=''>
                <input type="text" placeholder='Enter Your Name' className=''/>
                <input type="email" placeholder='Enter Your Name' className=''/>
                <input type="number" placeholder='Enter Your Name' className=''/>
                <textarea placeholder='type your message' className=''/>
                <button className=''>Send Now</button>

            </div>
            <div className=' '>
                <Image src={H} alt="" className='' />
            </div>
        </div>
    )
}

export default Contact