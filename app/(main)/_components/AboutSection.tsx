import React from 'react';

const AboutSection = () => {
  return (
    <main>
      <article className="flex flex-col gap-6">
        <header className="sectionHeader">
          ABOUT<span className="text-tech-hover-card-bg">.</span>
        </header>
        <div className="leading-loose w-full font-secondaryFont opacity-50 space-y-3 text-justify tracking-wide">
          <p>
            Started with curiosity. Stayed because I could build. Self-taught — learned by
            breaking things, rebuilding them, and chasing what I didn’t understand.
          </p>

          <p>
            I don’t just learn tech. I use it. If I learn something, I build with it.
            Focused on scalable systems, clean code, and structure that holds up.
          </p>

          <p>
            I care about how things are built, not just that they work. That moment when
            everything comes together — that’s the reward.
          </p>

          <p>
            Final year. Always learning, always adapting. Ready to build real systems that
            solve real problems.
          </p>
        </div>
      </article>
    </main>
  );
};

export default AboutSection;
