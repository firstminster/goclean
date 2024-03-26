import React from 'react'
import Image from 'next/image'
import { banner1, roadSweeper } from '../../public/assets'

const Banner = () => {
    return (
        <section id='home' className='opacity-60'>
            <Image className='w-full h-[80vh] object-cover' src={roadSweeper} alt='logo' width={0} height={0} />
        </section>
    )
}

export default Banner