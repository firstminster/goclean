import { Zap } from 'lucide-react'
import React from 'react'
import { BsLightning } from 'react-icons/bs'
import { FaTrashRestore } from 'react-icons/fa'
import { GiReceiveMoney, GiVacuumCleaner } from 'react-icons/gi'
import { GrScheduleNew } from 'react-icons/gr'
import { LuLeafyGreen } from 'react-icons/lu'
import { MdOutlineHealthAndSafety, MdOutlineSchedule, MdRestore } from 'react-icons/md'
import { PiBuildingsBold } from 'react-icons/pi'
import { TbDeviceAnalytics, TbGps, TbRestore } from 'react-icons/tb'

const Services = () => {
    return (
        <section id="service" className="mt-20 py-20 bg-[#F3F6FB]">
            <div className="container h-full w-full mx-auto flex flex-wrap items-center justify-between lg:px-0">
                <div className="my-10">
                    {/* <h4 className="font-semibold text-md ">WHAT WE DO</h4> */}
                    <h4 className="font-semibold text-md ">THE BENEFIT OF</h4>
                    <h1 className="font-medium text-6xl md:w-[500px] my-6">EverClean’s Solution</h1>
                    <p className="text-[17px] md:w-[500px]">EverClean's automated cleaning solution offers a multitude of benefits for cities, states, and their residents.</p>
                    {/* <p className="text-[17px] w-[500px]">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p> */}
                </div>

                <div className="flex flex-wrap justify-between gap-10 mt-10 w-full">
                    <div className="flex-col justify-center items-center">
                        <span className="">
                            {/* <Zap /> */}
                            <BsLightning size={40} className='text-textGreen' />
                            {/* <GrScheduleNew size={60} className='text-textGreen' /> */}
                        </span>
                        <h2 className="text-xl font-medium w-[300px] mt-5">
                            Increased Efficiency
                        </h2>
                    </div>
                    <div className="mt-5 lg:mt-0">
                        <span className="">
                            <GiReceiveMoney size={40} className='text-textGreen' />
                            {/* <TbGps size={60} className='text-textGreen' /> */}
                        </span>
                        <h2 className="text-xl font-medium w-[300px] mt-5">
                            Cost-Effectiveness
                        </h2>
                    </div>
                    <div className="">
                        <LuLeafyGreen size={40} className='text-textGreen' />
                        <h2 className="text-xl font-medium w-[300px] mt-5">
                            Environmental Sustainability
                        </h2>
                    </div>
                    <div className="">
                        <PiBuildingsBold size={40} className='text-textGreen' />
                        {/* <TbDeviceAnalytics size={60} className='text-textGreen' /> */}
                        <h2 className="text-xl font-medium mt-5">
                            Improved Aesthetic Appeal
                        </h2>
                    </div>
                    <div className="">
                        <MdOutlineHealthAndSafety size={40} className='text-textGreen' />
                        {/* <MdOutlineSchedule size={60} className='text-textGreen' /> */}
                        <h2 className="text-xl font-medium w-[300px] mt-5">
                            Enhanced Public Health and
                            Safety
                        </h2>
                    </div>
                    <div className="">
                        <GiVacuumCleaner size={40} className='text-textGreen' />
                        {/* <TbRestore size={60} className='text-textGreen' /> */}
                        <h2 className="text-xl font-medium w-[300px] mt-5">
                            Surface Restoration and Maintenance
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services