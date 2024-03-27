import React from 'react'
import Image from 'next/image'
import { banner1, roadSweeper } from '../../public/assets'

const Banner = () => {
    return (
        <section id='home' className='relative  '>
            <Image className='w-full h-[70vh] object-cover brightness-50' src={roadSweeper} alt='logo' width={0} height={0} />
            {/* <div className="absolute top-20 left-80 text-[#fff] w-full ">
                <h1 className="">
                    City Sweepers
                </h1>
                <h2 className="">Environmental Committment</h2>
            </div> */}
        </section>
    )
}

export default Banner