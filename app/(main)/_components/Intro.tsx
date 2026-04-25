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
      {/* effect */}
      <div className="min-h-screen w-full dark:bg-[#18181b] absolute -z-20 [--gridcol:#f0f0f0] dark:[--gridcol:#202121]">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: ` linear-gradient(to right, var(--gridcol) 1px, transparent 1px), linear-gradient(to bottom, var(--gridcol) 1px, transparent 1px)`,
            backgroundSize: '20px 30px',
            WebkitMaskImage:
              'radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)',
            maskImage:
              'radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)',
          }}
        />
      </div>
      <BlurIn className="mb-12 mt-12">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://x.com/ZoltXero">
          <button className='text-[0.95rem] md:text-[1.05rem] lg:text-[1.1rem] text-white font-InterFont flex items-center justify-between gap-3 rounded-full p-2 pl-6 cursor-pointer bg-[#212121]'>
            Say hi on!
            <span className='h-full rounded-full p-3 bg-[#c76baa]'><BsTwitterX className="text-[0.95rem] md:text-[1.05rem] lg:text-[1.1rem] dark:text-black" /></span>
          </button>
        </a>
      </BlurIn>
      <section className="text-center leading-none mb-30 uppercase">
        <WordsPullUp
          text={`Vatsalya\nsingh`}
          className="text-[3.5rem] md:text-[5.75rem] lg:text-[7.75rem] 2xl:text-[10.5rem] font-PoppinsFont font-black"
        />
        <TypingEffect
          text="I design and build products that"
          className="text-nowrap mt-9 text-[0.8rem] md:text-[1.05rem] lg:text-[1.2rem] opacity-55 tracking-[.1rem]"
        />

        <WordsPullUp
          text={`deliver  real  impact.`}
          className="text-nowrap text-[2.35rem] md:text-[3.4rem] lg:text-[4.2rem] font-light font-DanceFont lowercase mt-9 "
        />
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
