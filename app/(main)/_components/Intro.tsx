'use client';
import { IoLocationOutline } from "react-icons/io5";
import { GoStack } from "react-icons/go";
const Intro = () => {
  return (
    <main className="min-h-screen w-[95vw] flex flex-col justify-center items-center md:w-[75vw] relative">
      <a
        href="https://x.com/ZoltXero"
        className="mb-12 mt-3 border rounded-full p-3 px-6 ">
        Say hi on X
      </a>
      <section className="text-center leading-none mb-24 uppercase">
        <h1 className="lg:text-[8rem] text-[3.5rem] md:text-[6.5rem] 2xl:text-[12rem] font-PoppinsFont font-black">
          Vatsalya
        </h1>
        <h1 className="lg:text-[8rem] text-[3.5rem] md:text-[6.5rem] 2xl:text-[12rem] font-PoppinsFont font-black">
          Singh
        </h1>
        <h3 className="text-nowrap mt-9 text-[.7rem] md:text-[1.2rem]">
          I design and build products that
        </h3>
        <h2 className="text-nowrap text-[2.6rem] md:text-[4rem] font-light font-DanceFont lowercase mt-9 ">
          deliver real impact.
        </h2>
      </section>
      <section className="flex font-PoppinsFont text-center justify-between flex-row w-full absolute bottom-0 mb-20 uppercase">
        <article className="flex flex-col items-center gap-1">
          <IoLocationOutline className="text-green-600 text-2xl" />
          <p className="text-[.6rem] md:text-[1rem]">BASED IN Banglore</p>
          <p className="text-[.6rem] md:text-[1rem]">INDIA</p>
        </article>
        <article className="flex flex-col items-center gap-1">
          <GoStack className="text-xl text-blue-700" />
          <p className="text-[.6rem] md:text-[1rem]">Aspiring</p>
          <p className="text-[.6rem] md:text-[1rem]">Full Stack</p>
        </article>
      </section>
    </main>
  );
};

export default Intro;
