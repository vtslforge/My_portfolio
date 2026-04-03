'use client';
import { MdFileDownload } from 'react-icons/md';
import Image from 'next/image';
import { useState } from 'react';

const Intro = () => {
  const [buttonText, setButtonText] = useState('Resume');
  return (
    <header className="mt-9 relative w-[95vw] md:w-[75vw]">
      <div className="absolute inset-0 w-screen left-1/2 -translate-x-1/2 -z-10" />
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4 py-8 md:py-16 opacity-85 font-HeaderFont">
        <div className="flex flex-col z-10 w-full md:w-1/2">
          <h3 className="text-xl md:text-2xl font-medium tracking-wide opacity-90 mb-2">
            Hi, I&apos;m Vatsalya,
          </h3>
          <h1 className="text-6xl md:text-[5.5rem] lg:text-[6.5rem] font-bold tracking-tighter leading-[1.1]">
            Fullstack
          </h1>
          <h1 className="text-6xl md:text-[5.5rem] lg:text-[6.5rem] font-bold tracking-tighter leading-[1.1]">
            Developer
          </h1>
          <p className="text-base md:text-xl font-medium opacity-80 mt-6 max-w-md"></p>

          <div className="mt-10">
            <button
              onClick={() => setButtonText('unavailable')}
              className="flex items-center gap-2 cursor-pointer px-6 py-3 bg-[#e9f286] text-black text-sm md:text-base border border-transparent dark:shadow-[4px_4px_0px_rgba(255,255,255,0.8)] shadow-[4px_4px_0px_#ccc8c8] rounded-md font-bold dark:hover:shadow-[6px_6px_0px_rgba(255,255,255,1)] hover:shadow-[6px_6px_0px_#6e6b6b] hover:-translate-y-0.5 transition-all w-fit">
              <span>{buttonText}</span>
              <MdFileDownload />
            </button>
          </div>
        </div>
        <div className="relative flex justify-center items-center w-full md:w-1/2 pt-4 min-h-75">
          <div className="absolute w-65 h-65 md:w-105 md:h-105 border dark:border-white/30 border-gray-300 rounded-full translate-y-6 -translate-x-6 z-0" />
          <div className="absolute top-[5%] md:top-4 right-[5%] md:right-8 z-20">
            <span className="block text-2xl font-light dark:text-white/30 text-gray-300 absolute right-8 top-0">
              +
            </span>
            <span className="block text-2xl font-light dark:text-white/30 text-gray-300 absolute right-2 top-4">
              +
            </span>
            <span className="block text-2xl font-light dark:text-white/30 text-gray-300 absolute right-8 top-8">
              +
            </span>
          </div>
          <div className="absolute bottom-[2%] left-[2%] md:bottom-12 md:left-8 z-20 flex gap-2 -rotate-20">
            <div className="w-0.5 h-8 dark:bg-white/30 bg-gray-300 rounded-full rotate-35" />
            <div className="w-0.5 h-8 dark:bg-white/30 bg-gray-300 rounded-full rotate-35" />
            <div className="w-0.5 h-8 dark:bg-white/30 bg-gray-300 rounded-full rotate-35" />
            <div className="w-0.5 h-8 dark:bg-white/30 bg-gray-300 rounded-full rotate-35" />
          </div>
          <div className="w-62.5 h-62.5 md:w-95 md:h-95 rounded-full overflow-hidden relative z-10 flex items-center justify-center bg-[#111]">
            <Image
              src="/hravtr.png"
              alt="profile image"
              fill
              className="object-contain absolute"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Intro;
