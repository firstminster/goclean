import React from 'react'
import Image from 'next/image'
import { banner1, machine1 } from '../../public/assets'
import { GiCheckMark } from "react-icons/gi";

const About = () => {
    return (
        <section id="about" className='container h-full w-full mx-auto'  >
            <div className=" flex flex-wrap items-center justify-center lg:justify-between">
                <div className="">
                    <Image className='w-[600px] h-full' src={machine1} alt='logo' width={0} height={0} />
                </div>

                <div className="mt-10 lg:mt-0">
                    <h4 className="font-semibold text-md ">PERFECT CLEANING</h4>
                    <h1 className="font-medium text-6xl w-[500px] my-6"> We provide the best cleaning </h1>
                    <p className="text-[17px] w-[500px]">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                    <ul className='mt-5'>
                        <li className='flex items-center'><span className='text-textGreen mr-3' ><GiCheckMark /></span> Adipiscing voluptas sit amet</li>
                        <li className='flex items-center'><span className='text-textGreen mr-3' ><GiCheckMark /></span> Lorem ipsum dolor</li>
                        <li className='flex items-center'><span className='text-textGreen mr-3' ><GiCheckMark /></span> Dicta sunt explicabo lorem ipsum</li>
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default About