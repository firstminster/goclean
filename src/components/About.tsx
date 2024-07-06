import React from 'react'
import Image from 'next/image'
import { banner1, machine1 } from '../../public/assets'
import { GiCheckMark } from "react-icons/gi";

const About = () => {
    return (
        <section id="about" className='container h-full w-full mx-auto '  >
            <div className="my-10 flex flex-wrap items-center justify-center lg:justify-between">
                <div className="">
                    <Image className='w-auto h-full' src={machine1} alt='logo' width={0} height={0} />
                </div>

                <div className=" mt-10 lg:mt-0">
                    <h4 className="font-semibold text-md uppercase">The Need for </h4>
                    <h1 className="font-medium md:text-6xl md:w-[500px] my-6">Automated Cleaning in
                        Urban Environments</h1>
                    <p className="text-[15px] md:w-[500px]">Urbanization has brought about unprecedented
                        growth and development in cities worldwide. However, this progress has also led to a significant increase in environmental challenges, particularly
                        in terms of cleanliness.</p>
                    <ul className=' mt-5'>
                        <li className='flex items-center'><span className='text-textGreen mr-3' ><GiCheckMark /></span>Rapid Urban Growth</li>
                        <li className='flex items-center'><span className='text-textGreen mr-3' ><GiCheckMark /></span>Environmental Impact</li>
                        <li className='flex items-center'><span className='text-textGreen mr-3' ><GiCheckMark /></span>Health and Safety Concerns</li>
                        <li className='flex items-center'><span className='text-textGreen mr-3' ><GiCheckMark /></span>Changing Expectations</li>
                        <li className='flex items-center'><span className='text-textGreen mr-3' ><GiCheckMark /></span>Economic Implications</li>
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default About