"use client";

import Image from "next/image";

const Intro = () => {
  return (
    <>
      <header className="flex justify-between mt-9">
        <article className="flex flex-col items-start leading-8 gap-6 pt-9 pb-9 ">
          <h1 className="type-display font-primaryFont font-bold">HI, I&apos;M</h1>
          <h1 className="type-display font-bold font-primaryFont">VATSALYA</h1>
          <p className="type-heading-md font-secondaryFont">
            Fullstack Developer crafting scalable, accessible, high-performance
            systems
          </p>
        </article>
        <article className="border rounded-full aspect-square overflow-hidden relative ">
          <Image
            src="/hravtr.png"
            alt="profile image"
            fill
            className="object-contain"
          />
        </article>
      </header>
    </>
  );
};

export default Intro;
