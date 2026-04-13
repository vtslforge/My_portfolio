import React from 'react';

const AboutSection = () => {
  return (
    <main>
      <article className="flex flex-col items-center gap-6 md:mt-24">
        <header className="text-[2.25rem] md:text-[4.25rem] lg:text-[5.75rem] font-PoppinsFont font-black">
          QUICK<span className="text-tech-hover-card-bg font-DanceFont">glance</span>
        </header>
        <div className="md:mt-24 w-full font-secondaryFont">
          <p className="text-[1rem] md:text-[1.2rem] lg:text-[1.35rem] text-justify opacity-75">
            My journey into technology began during my early school days, when computers
            sparked a deep curiosity in me. Learned by breaking things, rebuilding them,
            and chasing what I didn’t understand, I developed a passion for creating
            meaningful solutions. If I learn something, I build with it—focusing on
            scalable systems, clean code, and thoughtful architecture. I specialize in
            Next.js, React, TypeScript, Node.js, and Tailwind CSS, with growing expertise
            in Python, AI, and Machine Learning. A final-year developer, I am always
            learning, always adapting, and driven to build real systems that solve
            real-world problems.
          </p>
        </div>
      </article>
    </main>
  );
};

export default AboutSection;
