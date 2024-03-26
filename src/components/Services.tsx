import React from 'react'
import { FaTrashRestore } from 'react-icons/fa'
import { GrScheduleNew } from 'react-icons/gr'
import { LuLeafyGreen } from 'react-icons/lu'
import { MdOutlineSchedule, MdRestore } from 'react-icons/md'
import { TbDeviceAnalytics, TbGps, TbRestore } from 'react-icons/tb'

const Services = () => {
    return (
        <section id="service" className="mt-20 py-20 bg-[#F3F6FB]">
            <div className="container h-full w-full mx-auto flex flex-wrap items-center justify-between px-10 lg:px-0">
                <div className="my-10">
                    <h4 className="font-semibold text-md ">WHAT WE DO</h4>
                    <h1 className="font-medium text-6xl w-[500px] my-6">Full list of our services</h1>
                    <p className="text-[17px] w-[500px]">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                </div>

                <div className="flex flex-wrap justify-between gap-10 mt-10 w-full">
                    <div className="flex-col justify-center items-center">
                        <span className="">
                            <GrScheduleNew size={60} className='text-textGreen' />
                        </span>
                        <h2 className="text-2xl font-medium w-[300px] mt-5">
                            Customized Sweeping Programs
                        </h2>
                    </div>
                    <div className="mt-5 lg:mt-0">
                        <span className="">
                            <TbGps size={60} className='text-textGreen' />
                        </span>
                        <h2 className="text-2xl font-medium w-[300px] mt-5">
                            GPS Tracking and Reporting
                        </h2>
                    </div>
                    <div className="">
                        <LuLeafyGreen size={60} className='text-textGreen' />
                        <h2 className="text-2xl font-medium w-[300px] mt-5">
                            Eco-Friendly Sweeping Solutions
                        </h2>
                    </div>
                    <div className="">
                        <TbDeviceAnalytics size={60} className='text-textGreen' />
                        <h2 className="text-2xl font-medium mt-5">
                            Data Analysis and Insights
                        </h2>
                    </div>
                    <div className="">
                        <MdOutlineSchedule size={60} className='text-textGreen' />
                        <h2 className="text-2xl font-medium w-[300px] mt-5">
                            24/7 Emergency Response
                        </h2>
                    </div>
                    <div className="">
                        <TbRestore size={60} className='text-textGreen' />
                        <h2 className="text-2xl font-medium w-[300px] mt-5">
                            Surface Restoration and Maintenance
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services