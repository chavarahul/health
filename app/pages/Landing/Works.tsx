// components/HowItWorks.tsx
'use client'
import { poppin } from '@/app/constants';
import gsap from 'gsap';
import React, { useEffect } from 'react';

const steps = [
    {
      title: 'Step 1: Register Account',
      description: 'Easily create your account to start accessing essential healthcare services tailored for patients in rural and slum areas.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      )
    },
    {
      title: 'Step 2: Provide Medical Details',
      description: 'Fill in your medical history and requirements to receive the best possible care and support from our network of healthcare professionals.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M20.354 3.646a9 9 0 11-12.728 0m12.728 0a9 9 0 01-12.728 0" />
        </svg>
      )
    },
    {
      title: 'Step 3: Access Services',
      description: 'Instantly book appointments, rent medical equipment, and get voice prompt assistance for emergency and non-emergency situations.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4a9 9 0 100 16 9 9 0 000-16zm-1 10V9h2v5h-2zm0 4v-2h2v2h-2z" />
        </svg>
      )
    }
  ];
  

const Works = () => {
    useEffect(()=>{
        const t1 = gsap.timeline();
        t1
    },[])
  return (
    <section className="py-20 mt-52 bg-white text-center" id="works">
      <div className="container mx-auto px-4">
        <span className={`${poppin.className} bg-purple-100 text-purple-600 py-1 px-3 rounded-full text-sm font-semibold`}>WORK PROCESS</span>
        <h2 className="text-4xl font-bold mt-4 mb-8">How It Works</h2>
        <div className="flex flex-col mt-20 lg:flex-row justify-center items-center lg:space-x-8 px-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center mb-8 px-4 lg:mb-0">
              <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-4 rounded-full mb-4">
                {step.icon}
              </div>
              <h3 className={`${poppin.className} text-xl font-bold mb-2`}>{step.title}</h3>
              <p className={`${poppin.className} text-gray-500`}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
