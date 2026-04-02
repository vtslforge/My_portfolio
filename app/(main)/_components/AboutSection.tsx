import React from 'react';

const AboutSection = () => {
  return (
    <main>
      <article className="flex flex-col gap-6">
        <header className="sectionHeader">ABOUT<span className='text-tech-hover-card-bg'>.</span></header>
        <div className="leading-loose w-full font-secondaryFont opacity-50 space-y-3 text-justify tracking-wide">
          <p>
            Started with curiosity. stayed because i could build. self-taught. learned by
            breaking things, rebuilding them, and chasing whatever i didn’t understand.
          </p>
          <p>
            i don’t just learn tech. i use it. if i learn something, i need to build with
            it. always excited to pick up new tools, new ideas, new ways of doing things.
            i focus on scalable systems, clean code, and structure that actually holds up.
            i care about how things are built, not just that they work. building from
            scratch and watching it come together perfectly… that’s the best part. that
            moment when everything works? yeah, that’s the reward.
          </p>
          <p>
            work well alone. i work better with people who care about what they’re
            building. constantly learning. constantly adapting. never staying the same
            version for long. final year. ready to build real systems that solve real
            problems. this isn’t a resume. it’s what i can do.
          </p>
        </div>
      </article>
    </main>
  );
};

export default AboutSection;