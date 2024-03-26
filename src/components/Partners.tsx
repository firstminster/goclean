import Image from 'next/image'
import { partner1, partner2, partner3, partner4 } from '../../public/assets'
import { GoDash } from 'react-icons/go'

const Partners = () => {
    return (
        <section id="partner" className="my-20 container h-full w-full mx-auto">
            <div className="flex flex-col">
                <span className='flex items-center '>
                    {/* <GoDash size={70} /> */}
                    <hr className="text-bodyColor w-20 font-bold text-xl mx-5 " />
                    <h2 className='font-semibold text-xl lg:text-[35px] w-[400px]'>Our Partners</h2>
                </span>
                <div className="flex flex-wrap items-center justify-center pt-10 gap-5">
                    <Image className='lg:w-[300px] h-full' src={partner1} alt='logo' width={0} height={0} />
                    <Image className='lg:w-[300px] h-full' src={partner2} alt='logo' width={0} height={0} />
                    <Image className='lg:w-[300px] h-full' src={partner3} alt='logo' width={0} height={0} />
                    <Image className='lg:w-[300px] h-full' src={partner4} alt='logo' width={0} height={0} />
                </div>


            </div>
        </section>
    )
}

export default Partners

// flex-col-reverse items-center lg:flex-row lg:items-center lg:justify-center