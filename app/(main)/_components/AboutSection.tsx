import React from 'react';

const AboutSection = () => {
  return (
    <main>
      <article className="flex flex-col items-center gap-6">
        <header className="lg:text-[6rem] text-[2rem] md:text-[6.5rem] font-PoppinsFont font-black">
           QUICK<span className="text-tech-hover-card-bg font-DanceFont">glance</span>
       
        </header>
        <div className=" w-full font-secondaryFont opacity-50">
          <p className=' text-[1rem] md:text-[1.5rem] lg:-text-[2rem] text-justify'>
            Self-taught — learned by breaking things, rebuilding them, and chasing what I
            didn’t understand. If I learn something, I build with it. Focused on scalable
            systems, clean code, and structure that lasts. I care about how things are
            built, not just that they work. Final year. Always learning. Always adapting.
            Ready to build real systems that solve real problems.
          </p>
        </div>
      </article>
    </main>
  );
};

export default AboutSection;
