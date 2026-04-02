'use client';

import Image from 'next/image';

const Intro = () => {
  return (
    <header className="mt-9 relative">
      <div className="absolute inset-0 w-screen left-1/2 -translate-x-1/2 -z-10" />

      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1 font-HeaderFont">
          <h1 className="text-2xl md:text-6xl opacity-85">Hi, This is</h1>
          <h1 className="text-4xl md:text-7xl font-bold opacity-85 flex">Vatsalya<p className='text-tech-hover-card-bg'>.</p></h1>
        </div>

        <div className="border rounded-full h-28 w-28 lg:h-40 lg:w-40 flex items-center justify-center overflow-hidden relative">
          <Image
            src="/hravtr.png"
            alt="profile image"
            fill
            className="object-contain absolute"
          />
        </div>
      </div>

      <p className="intro-subheading font-HeaderFont mt-6 w-full opacity-85 text-lg md:text-2xl">
        Fullstack Developer crafting scalable, accessible, high-performance systems
      </p>
    </header>
  );
};

export default Intro;
