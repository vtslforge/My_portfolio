'use client';

import { IoLocationOutline } from 'react-icons/io5';
import { GoStack } from 'react-icons/go';
import { BsTwitterX } from 'react-icons/bs';
import { WordsPullUp } from '@/animation/words-pull-up';
import { TypingEffect } from '@/animation/typing-effect';
import { BlurIn } from '@/animation/Blur-in';

const Intro = () => {
  return (
    <main className="min-h-screen w-[95vw] flex flex-col justify-center items-center md:w-[75vw] relative">
      <BlurIn className=''>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://x.com/ZoltXero"
        className="flex gap-3 items-center opacity-85 font-PoppinsFont hover:opacity-100 mb-12 mt-6 border dark:border-[#1e1e1e] border-[#e4e4e4] rounded-full p-3 px-6 text-[0.95rem] md:text-[1.05rem] lg:text-[1.1rem]">
        Say hi on
        <BsTwitterX className="text-[0.95rem] md:text-[1.05rem] lg:text-[1.1rem]" />
      </a></BlurIn>
      <section className="text-center leading-none mb-30 uppercase">
        <WordsPullUp  text={`Vatsalya\nsingh`} className="text-[3.5rem] md:text-[5.75rem] lg:text-[7.75rem] 2xl:text-[10.5rem] font-PoppinsFont font-black" />
        <TypingEffect text="I design and build products that" className="text-nowrap mt-9 text-[0.8rem] md:text-[1.05rem] lg:text-[1.2rem] opacity-55 tracking-[.1rem]"/>
        
        <WordsPullUp text={`deliver  real  impact.`} className="text-nowrap text-[2.35rem] md:text-[3.4rem] lg:text-[4.2rem] font-light font-DanceFont lowercase mt-9 "/>
      </section>
      <section className="flex font-PoppinsFont text-center justify-between flex-row w-full bottom-0 pb-24 uppercase">
        <BlurIn className="flex flex-col items-center gap-1">
          <IoLocationOutline className="text-green-600 text-[1.5rem] md:text-[1.65rem] lg:text-[1.8rem]" />
          <p className="text-[0.72rem] md:text-[0.9rem] lg:text-[1rem]">
            BASED IN Bangalore
          </p>
          <p className="text-[0.72rem] md:text-[0.9rem] lg:text-[1rem] opacity-55">
            INDIA
          </p>
        </BlurIn>
        <BlurIn className="flex flex-col items-center gap-1">
          <GoStack className="text-[1.25rem] md:text-[1.4rem] lg:text-[1.5rem] text-blue-700" />
          <p className="text-[0.72rem] md:text-[0.9rem] lg:text-[1rem]">Full-Stack</p>
          <p className="text-[0.72rem] md:text-[0.9rem] lg:text-[1rem] opacity-55">
            Aspirant
          </p>
        </BlurIn>
      </section>
    </main>
  );
};

export default Intro;
