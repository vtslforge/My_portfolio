'use client';

import Image from 'next/image';

const Intro = () => {
  return (
    <header className="mt-9">
      <div className="flex items-center justify-between">
        <div className="flex flex-col leading-tight gap-1">
          <h1 className="intro-name font-secondaryFont font-extrabold">Hi, I&apos;m</h1>
          <h1 className="intro-name font-secondaryFont font-extrabold">Vatsalya</h1>
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
      <p className="intro-subheading font-secondaryFont mt-6 w-full">
        Fullstack Developer crafting scalable, accessible, high-performance systems
      </p>
    </header>
  );
};

export default Intro;
