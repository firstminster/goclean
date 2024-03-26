import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        // setShowMenu(false)
        const href = e.currentTarget.href
        const targetId = href.replace(/.*\#/, '')
        const elem = document.getElementById(targetId)
        elem?.scrollIntoView({
            behavior: 'smooth'
        })
        // Update the class name of the clicked link
        const links = document.querySelectorAll('.nav-link')
        links.forEach((link) => {
            link.classList.remove('active')
        });
        e.currentTarget.classList.add('active')
    }

    return (
        <section className='bg-[#161515] text-[#fff] py-10' >
            <div className="container h-full w-full mx-auto">

                <div className=" lg:flex justify-between py-10 space-y-10 lg:space-y-0 px-5 lg:px-0">

                    <div className="">
                        <h1 className="text-2xl lg:text-5xl font-semibold w-[500px]">
                            Expert cleaning, spotless reputation
                        </h1>
                    </div>
                    <div className="space-y-5">
                        <h3 className="text-xl font-semibold ">Address</h3>
                        <p className="text-lg w-[300px]">Germany —
                            785 15h Street, Office 478
                            Berlin, De 81566
                        </p>
                        <div className="">

                        </div>
                    </div>
                    <div className="space-y-5">
                        <h3 className="text-xl font-semibold">Say Hello</h3>
                        <p className="">info@email.com</p>
                        <p className="text-xl">+1 800 123 45 67</p>
                    </div>

                </div>

                <hr className="text-[#fff]  my-5" />

                <div className="flex flex-col items-center lg:flex-row lg:justify-between space-y-5 lg:space-y-0 ">
                    <ul className='flex lg:items-center lg:justify-center text-[13px] gap-7'>
                        <Link onClick={handleScroll} href="#about" className='flex items-center gap-1 font-medium text-[15px] text-[#fff] hover:text-textGreen cursor-pointer duration-300 nav-link ' >
                            <li >
                                About Us
                            </li>
                        </Link>
                        <Link onClick={handleScroll} href="#service" className='flex items-center gap-1 font-medium text-[15px] text-[#fff] hover:text-textGreen cursor-pointer duration-300 nav-link ' >
                            <li >
                                Services
                            </li>
                        </Link>
                        <Link onClick={handleScroll} href="#partner" className='flex items-center gap-1 font-medium text-[15px] text-[#fff] hover:text-textGreen cursor-pointer duration-300 nav-link ' >
                            <li >
                                Our partners
                            </li>
                        </Link>
                    </ul>

                    <span className="">
                        Everclean &copy; {new Date().getFullYear()}. All Rights Reserved.
                    </span>
                </div>
            </div>

        </section>
    )
}

export default Footer