import Image from 'next/image'
import { bortekLogo, challengerLogo, marshellLogo, odraLogo, partner1, partner2, partner3, partner4 } from '../../public/assets'
import { GoDash } from 'react-icons/go'

const Partners = () => {
    return (
        <section id="partner" className="my-20 contentContainer h-full w-full mx-auto ">
            <div className="flex flex-col">
                <span className='flex items-center '>
                    {/* <GoDash size={70} /> */}
                    <hr className="text-bodyColor w-20 font-bold text-xl mx-5 " />
                    <h2 className='font-semibold text-xl lg:text-[35px] w-[400px]'>Our Partners</h2>
                </span>
                <div className="flex flex-wrap items-center justify-center lg:justify-around pt-10 gap-10 space-y-5">
                    <Image className='w-[300px] h-full' src={marshellLogo} alt='logo' width={0} height={0} />
                    <Image className='w-[300px] h-full' src={odraLogo} alt='logo' width={0} height={0} />
                    <Image className='w-[300px] h-full' src={bortekLogo} alt='logo' width={0} height={0} />
                    <Image className='w-[300px] h-full' src={challengerLogo} alt='logo' width={0} height={0} />

                </div>


            </div>
        </section>
    )
}

export default Partners

// flex-col-reverse items-center lg:flex-row lg:items-center lg:justify-center