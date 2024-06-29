// components/FinancerHeader.tsx

import { poppin } from '@/app/constants';
import Link from 'next/link';
import React from 'react';
import Main from '@/public/Blue and Orange Minimalist Sports Tournament Logo.svg'
import Image from 'next/image';
import pulse from '@/public/pulusu.svg'
import dna from '@/public/4.svg'
import Logo from '@/public/BOOMSCHIk.svg'
const Hero = () => {
  return (
    <header className="bg-white text-black">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center px-24">
          <div className="text-2xl font-bold text-purple-600 flex-all w-[20%]">
            <Image src={Logo} alt='Image' className='w-10 h-10' />
            <span className={`bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text ${poppin.className} `}>Srusta</span>
          </div>
          <nav className="ml-52 space-x-4 border border-gray-300 p-4 rounded-[30px] w-[40rem] flex-all">
            <Link href="#" className={`text-purple-600 ${poppin.className} `}>Home</Link>
            <Link href="#" className={`hover:text-gray-600 ${poppin.className} `}>About Us</Link>
            <Link href="#" className={`hover:text-gray-600 ${poppin.className} `}>Services</Link>
            <Link href="#" className={`hover:text-gray-600 ${poppin.className} `}>Contact Us</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4 mr-20">
          <button className={`${poppin.className} bg-gradient-to-r from-purple-400 to-pink-500 text-white py-2 px-4 rounded-full text-sm`}>Emergency</button>
        </div>
      </div>
      <div className="text-center py-20">
        <h1 className={`${poppin.className} text-5xl font-bold leading-[3.3rem]`}>Connecting Patients with <br/>Essential Healthcare</h1>
        <p className={`${poppin.className} text-gray-500 mt-4`}>We provide seamless and effective healthcare solutions to underserved populations, ensuring they<br/> receive the best possible care and access to necessary medical resources.</p>

      </div>
      <div className=" h-96 w-full relative flex-center overflow-hidden  -mt-7">
            <div className="h-full  w-[40%] relative  ">
              <div className="absolute w-[130%] h-[160%] top-28  conic -left-20 rounded-[50%]"></div>
               <Image src={Main} alt='Image'  className='ml-20 z-10'/>
            </div>
            <Image src={pulse} alt='Image' className='absolute w-52 h-52 left-32 top-5'/>
            <Image src={dna} alt='Image' className='absolute w-20 h-20 right-40 top-20'/>
      </div>
    </header>
  );
};

export default Hero;
