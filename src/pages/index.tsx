import Image from "next/image";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Partners from "@/components/Partners";
import Services from "@/components/Services";


export default function Home() {
  return (
    <>
      <Head>
        <title>Ever Clean</title>
        <meta name="keywords" content={'Ever Clean'} />
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className='w-full h-screen font-bodyFont bg-white text-[#000] overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60 '
      >
        <Navbar />
        <Banner />
        {/* <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between"> */}
        <div className=''>
          <About />
          <Services />
          <Partners />
          <Footer />
        </div>

        {/* </div> */}
      </main>
    </>
  );
}
