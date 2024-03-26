import Link from 'next/link'
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { MdOutlineClose } from 'react-icons/md'
import { motion } from 'framer-motion'

const Navbar = () => {
    const ref = useRef<string | any | null>('')
    const [showMenu, setShowMenu] = useState(false)


    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault()
        setShowMenu(false)
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


    function handleClick(e: any) {
        if (e.target) {
            // do something with myRef.current
            setShowMenu(false)
        }
    }

    return (
        <div className='w-full h-20 lg:h-[12vh] sticky top-0 z-50 bg-[#fff] px-4'>
            <div className="container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
                <Link href="#home" onClick={handleScroll}>

                    <div >
                        {/* <Image className='w-14' src={''} alt='logo' /> */}
                        <h1 className="text-textGreen font-semibold text-4xl">Everclean</h1>
                    </div>
                </Link>
                <div className='hidden lg:inline-flex items-center gap-7' >
                    <ul className='flex text-[13px] gap-7'>
                        {/* <Link onClick={handleScroll} href="#home" className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link ' >
                            <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1 }} >Home</motion.li>
                        </Link> */}
                        <Link onClick={handleScroll} href="#about" className='flex items-center gap-1 font-medium text-lg text-[#000] hover:text-textGreen cursor-pointer duration-300 nav-link ' >
                            <li >
                                About Us
                            </li>
                        </Link>
                        <Link onClick={handleScroll} href="#service" className='flex items-center gap-1 font-medium text-lg text-[#000] hover:text-textGreen cursor-pointer duration-300 nav-link ' >
                            <li >
                                Services
                            </li>
                        </Link>
                        <Link onClick={handleScroll} href="#partner" className='flex items-center gap-1 font-medium text-lg text-[#000] hover:text-textGreen cursor-pointer duration-300 nav-link ' >
                            <li >
                                Our partners
                            </li>
                        </Link>

                    </ul>
                </div>
                {/* Small Icon section */}
                <div onClick={() => setShowMenu(true)} className="w-6 h-5 flex flex-col justify-between items-center lg:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group">
                    <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
                    <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300'></span>
                    <span className='w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>
                </div>
                {
                    showMenu && <div ref={() => ref.current} onClick={handleClick} className="absolute lg:hidden top-0 right-0 w-full h-screen bg-[#000000] bg-opacity-50 flex flex-col items-end ">
                        <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.1 }} className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#fff] flex flex-col items-center px-4 py-10 relative">
                            <MdOutlineClose onClick={() => setShowMenu(false)} className='tex-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4' />
                            <div className="flex flex-col items-center gap-7">
                                <ul className='flex flex-col items-center text-xl gap-7 '>
                                    <Link onClick={handleScroll} href="#about" className='flex items-center gap-1 font-medium text-bodyColor hover:text-textGreen cursor-pointer duration-300 nav-link ' >
                                        <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.1 }}>
                                            About Us
                                        </motion.li>
                                    </Link>
                                    <Link onClick={handleScroll} href="#service" className='flex items-center gap-1 font-medium text-bodyColor hover:text-textGreen cursor-pointer duration-300 nav-link ' >
                                        <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.2 }}>
                                            Services
                                        </motion.li>
                                    </Link>
                                    <Link onClick={handleScroll} href="#partner" className='flex items-center gap-1 font-medium text-bodyColor hover:text-textGreen cursor-pointer duration-300 nav-link ' >
                                        <motion.li initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.1, delay: 0.3 }}>
                                            Our Partners
                                        </motion.li>
                                    </Link>
                                </ul>

                            </div>
                        </motion.div>
                    </div>


                }
            </div>
        </div>
    )
}

export default Navbar