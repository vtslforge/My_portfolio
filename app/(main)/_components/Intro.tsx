'use client';

import { IoLocationOutline } from 'react-icons/io5';
import { GoStack } from 'react-icons/go';
import { BsTwitterX } from "react-icons/bs";
const Intro = () => {
  return (
    <main className="min-h-screen w-[95vw] flex flex-col justify-center items-center md:w-[75vw] relative">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://x.com/ZoltXero"
        className="flex gap-3 items-center opacity-85 font-PoppinsFont hover:opacity-100 mb-12 mt-6 border dark:border-[#1e1e1e] border-[#e4e4e4] rounded-full p-3 px-6 text-[0.95rem] md:text-[1.05rem] lg:text-[1.1rem]">
        Say hi on <BsTwitterX className="text-[0.95rem] md:text-[1.05rem] lg:text-[1.1rem]" />
      </a>
      <section className="text-center leading-none mb-30 uppercase">
        <h1 className="text-[3.5rem] md:text-[5.75rem] lg:text-[7.75rem] 2xl:text-[10.5rem] font-PoppinsFont font-black">
          Vatsalya
        </h1>
        <h1 className="text-[3.5rem] md:text-[5.75rem] lg:text-[7.75rem] 2xl:text-[10.5rem] font-PoppinsFont font-black">
          Singh
        </h1>
        <h3 className="text-nowrap mt-9 text-[0.8rem] md:text-[1.05rem] lg:text-[1.2rem] opacity-55 tracking-[.1rem]">
          I design and build products that
        </h3>
        <h2 className="text-nowrap text-[2.35rem] md:text-[3.4rem] lg:text-[4.2rem] font-light font-DanceFont lowercase mt-9 ">
          deliver real impact.
        </h2>
      </section>
      <section className="flex font-PoppinsFont text-center justify-between flex-row w-full bottom-0 pb-24 uppercase">
        <article className="flex flex-col items-center gap-1">
          <IoLocationOutline className="text-green-600 text-[1.5rem] md:text-[1.65rem] lg:text-[1.8rem]" />
          <p className="text-[0.72rem] md:text-[0.9rem] lg:text-[1rem]">BASED IN Bangalore</p>
          <p className="text-[0.72rem] md:text-[0.9rem] lg:text-[1rem] opacity-55">INDIA</p>
        </article>
        <article className="flex flex-col items-center gap-1">
          <GoStack className="text-[1.25rem] md:text-[1.4rem] lg:text-[1.5rem] text-blue-700" />
          <p className="text-[0.72rem] md:text-[0.9rem] lg:text-[1rem]">Full-Stack</p>
          <p className="text-[0.72rem] md:text-[0.9rem] lg:text-[1rem] opacity-55">Aspirant</p>
        </article>
      </section>
    </main>
  );
};

export default Intro;
